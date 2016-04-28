import vs from 'virtual-scroll';

var controller;

(function(){
  'use strict';
  var minTimeout = 200;
  var maxTimeout = 1700;
  var domLoaded = false;
  var stillNeedToLoad = false;
  var fontLoaded = false;

  // Try to load page as quickly as possible if fonts/content loaded
  setTimeout(function() {

    var htmlClass = [].slice.call(document.documentElement.classList);
    if ( htmlClass.indexOf('wf-active') !== -1 ) {
      fontLoaded = true;
    }
    if ( domLoaded && fontLoaded ) {
      controller.loadHome();
      return false;
    }
    stillNeedToLoad = true;
  }, minTimeout);

  // If unable to load above, loadHome() regardless after maxTimeout is reached
  setTimeout(function(){
    if (stillNeedToLoad) {
      controller.loadHome();
    }
  }, maxTimeout);

  window.addEventListener('DOMContentLoaded', function() {

    domLoaded = true;

    if ( stillNeedToLoad ) {
      stillNeedToLoad = false;
      controller.loadHome();
    }

  });

  var handleOrientation = function(){
    setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
    }, 0);
  };

  window.handleOrientation = handleOrientation;

  window.addEventListener('load', handleOrientation, false);

  window.addEventListener('deviceorientation', handleOrientation, true);

})();

controller = (function(){

  'use strict';

  function Screen() {

    this.slideNumberEle = document.getElementById('slide-number');
    this.slideNumberTotalEle = document.getElementById('slide-number-total');
    this.allScreens = [].slice.call(document.querySelectorAll('.screen'));
    this.app = document.getElementById('app');
    this.scrollType = this.app.getAttribute('data-scroll') || 'screens';
    this.scrollSettings = {
      slide : 1,
      timeout: null,
      videoTimeout: null,
      pos: null,
      distance: 0,
      timeEase: 0,
      scrollers: [],
      rafStarted: false
    };
    this.rAFStart = null;
    this.working = false;
    this.resizingScreenTimeout = null;
    this.vScroll = null;
    this.screens = {
      loading : document.querySelector('.loader')
    };
    this.backgrounds = {
      home: document.querySelector('.video-home'),
      ottoform: document.querySelector('.video-ottoform'),
      frnkrok: document.querySelector('.video-frnkrok'),
      jlv3: document.querySelector('.video-jlv3'),
      juiced: document.querySelector('.video-juiced')
    };
    this.menu = document.querySelector('.screen--menu');
    this.menuContainer = document.getElementById('jl-menu');
    this.menuOpen = false;


    /**
    * Binds each screen loaded from this.allScreens to the screens object
    * for later use
    *
    * @param slide - Object - the dom slide object
    */
    this.bindScreens = function(slide){
      var key = slide.getAttribute('data-screen');
      if ( key ) {
        this.screens[key] = slide;
      }
    };

    // runs bindScreens();
    this.allScreens.forEach(this.bindScreens.bind(this));

    // Helper function grab the keys of this.screens
    this.screenKeys = Object.keys( this.screens );




    /** Touch Event Listener Function
    *
    * Acts as a helper to reach the slide function upon a touch event from  a
    * touch device.
    *
    * @param e - Event - the touch event
    */
    this.slideTouchEvent = function(e){
      // touch event
      if (e.type === 'touchstart') {
        this.scrollSettings.pos = e.touches[0].clientY;
      }

      if ( e.type === 'touchmove' && this.scrollSettings.pos ) {
        e.preventDefault();
        var _scrollDelta = ( this.scrollSettings.pos - e.touches[0].clientY ) * 2;
        if ( _scrollDelta > 10 ) {
          this.slide({}, { distance: 0.55, direction: -1 });
        } else if ( _scrollDelta < -10 ) {
          this.slide({}, { distance: 0.55, direction: 1 });
        }
        this.scrollSettings.pos = null;
      }
    };


    /** Helper function to return wheel scroll distance
    * See: http://phrogz.net/js/wheeldelta.html
    *
    * @return integer - normalizzed distance of scroll
    */
    this.wheelDistance = function(evt) {
      if (!evt) evt = event;
      var w=evt.wheelDelta, d=evt.detail;
      if (d){
        if (w) return w/d/40*d>0?1:-1; // Opera
        else return -d/3;              // Firefox;         TODO: do not /3 for OS X
      } else if (w) return w/120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
      else {
        return -evt.deltaY/15;
      }
    };

    /**
    * Slide Event.  Fired on wheel event change
    *
    * @param e - event - the wheel event that fired
    * @param touchDelta - event - a touch event
    */
    this.slide = function(e, touchDelta) {

      if ( this.working ) {
        return false;
      }

      /** Helper function to return wheel direction
      * See: http://phrogz.net/js/wheeldelta.html
      *
      * @return integer - direction of scroll down = -1, up = 1
      */
      var returnWheelDirection = function(evt) {
        return (evt.detail<0) ? 1 : (evt.wheelDelta>0) ? 1 : -1;
      };

      var that = this;
      var returnWheelDistance = function(evt){
        return that.wheelDistance(evt);
      };

      var _direction;
      var _distance;

      if ( touchDelta ) {
        _direction = touchDelta.direction;
        _distance = touchDelta.distance;
      } else {
        _direction = returnWheelDirection(e);
        _distance = returnWheelDistance(e);
      }

      if ( _distance <= 0.25 && _distance >= -0.25 ) {
        this.working = true;
        setTimeout(function(){
          that.working = false;
        }, 250);
        return false;
      } else {
        this.working = true;
      }

      var _screenOn;
      var _keyFrom = this.screenKeys[this.scrollSettings.slide];
      var _keyTo;

      if ( _direction === -1 ) {
        // increase screen
        _screenOn = this.scrollSettings.slide + 1;
        _screenOn = ( _screenOn === this.screenKeys.length  ) ? 1 : _screenOn; // fix later remove static num
      } else if ( _direction === 1 ) {
        // decrease screen
        _screenOn = this.scrollSettings.slide - 1;
        _screenOn = ( _screenOn <= 0 ) ? this.screenKeys.length - 1 : _screenOn; // fix later remove static num
      }

      _keyTo = this.screenKeys[_screenOn];
      this.toggle(_keyFrom, _keyTo);

    };



    this.toggle = function(from, to) {

      if ( this.menuOpen === true ) {
        this.working = false;
        return false;
      }

      window.handleOrientation();

      this.screens.home.classList.remove('active');

      this.screens[from].classList.remove('slide-in');
      this.screens[from].classList.remove('fade-out');
      this.screens[from].classList.add('slide-out');

      this.screens[to].classList.add('slide-in');
      this.screens[to].classList.remove('slide-out');

      // remove slide out from all
      var _slideCount = 0;
      for(var screen in this.screens) {
        if (screen === to) {
          this.slideNumberEle.innerHTML = '<span class=\'number\'>' + _slideCount + '</span>';
          this.scrollSettings.slide = _slideCount;
        }
        if (screen !== from) {
          this.screens[screen].classList.remove('slide-out');
        }
        _slideCount++;
      }

      if ( this.backgrounds[from] ) {
        this.backgrounds[from].setAttribute('data-enable', 'false');
      }

      if ( this.backgrounds[to] ) {
        this.backgrounds[to].setAttribute('data-enable', 'true');
      }

      var that = this;
      this.scrollSettings.timeout = setTimeout(function(){
        that.working = false;
      }, 1350);

    };



    this.openMenu = function() {

      this.menu.classList.remove('fade-out-slow');

      for(var screen in this.screens) {
        this.screens[screen].classList.add('fade-out-slow');
      }

      this.menu.classList.add('fade-in');
      this.menuOpen = true;
      this.menuContainer.classList.add('activate');

    };

    this.closeMenu = function() {

      this.menu.classList.remove('fade-in');

      for(var screen in this.screens) {
        this.screens[screen].classList.remove('fade-out-slow');
      }

      this.menu.classList.remove('fade-in');
      this.menu.classList.add('fade-out-slow');
      this.menuOpen = false;
      this.menuContainer.classList.remove('activate');


    };

    this.toggleMenu = function() {
      if ( this.menuOpen ) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    };


    this.resize = function() {
      clearTimeout(this.resizingScreenTimeout);
      var that = this;
      this.resizingScreenTimeout = setTimeout(function(){
        that.virtualScroll(true);
      }, 100);
    };

    var currentY = 0, ease = 0.1;
    var currentYBG = 0, easeBG = 0.0725;
    var targetY = 0;

    this.virtualScroll = function(destroy) {

      if ( destroy ) {
        targetY = currentY;
        this.vScroll.off();
      }

      this.vScroll = new vs({firefoxMultiplier: 25});
      var section = document.getElementById('scroll-section');
      var sectionBG = document.getElementById('scroll-section-background');
      var sectionHeight = section.getBoundingClientRect().height;

      var actPoints = [];
      var actPointEles = [].slice.call(document.querySelectorAll('[data-actpoint]'));
      for(var x = 0; x < actPointEles.length; x++ ) {
        let _actPoint = actPointEles[x];
        let _actPointAction = _actPoint.getAttribute('data-actpoint') || null;
        if ( _actPointAction ){
          var action = JSON.parse(_actPointAction);
          var _offset = _actPoint.offsetTop - window.innerHeight;
          if ( action ) {
            var actionKey = Object.keys(action);
            let ele = document.querySelector(action[actionKey[0]]);
            if ( ele ) {
              actPoints.push({ point : _offset, class : actionKey[0], element : ele });
            }
          }
        }
      }

      this.vScroll.on(function(e) {
        targetY += e.deltaY;
        targetY = Math.max( (sectionHeight - window.innerHeight) * -1, targetY);
        targetY = Math.min(0, targetY);
      });


      var run = function() {

        requestAnimationFrame(run);

        currentY += Math.round( (targetY - currentY) * ease, 2);
        currentYBG += Math.round( (targetY - currentYBG) * easeBG, 2);

        for (let x = 0; x < actPoints.length; x++ ) {

          let ap = actPoints[x];
          let point = ap.point * -1;
          let classAdd = ap.class;
          let ele = ap.element;

          if ( currentY < point ) {
            ele.classList.add(classAdd);
          } else {
            ele.classList.remove(classAdd);
          }
        }

        var t = 'translateY(' + currentY + 'px)';
        var s = section.style;
        s['transform'] = t;
        s['webkitTransform'] = t;
        s['mozTransform'] = t;
        s['msTransform'] = t;

        var tB = 'translateY(' + currentYBG + 'px)';
        var sB = sectionBG.style;
        sB['transform'] = tB;
        sB['webkitTransform'] = tB;
        sB['mozTransform'] = tB;
        sB['msTransform'] = tB;


      };

      run();

    };

    /**
    * Fired from controller.loadHome() outside of this scope.
    * Loads the home loader to load the first screen. Also fires the wheel
    * listener to listen for scroll events.
    */
    this.loadHome = function() {

      this.screens.loading.classList.add('out');
      this.screens.home.classList.add('active');
      this.slideNumberTotalEle.innerText = this.screenKeys.length - 1;

      if ( this.scrollType === 'screens' ) {

        document.body.addEventListener('wheel', this.slide.bind(this));
        document.body.addEventListener('touchstart', this.slideTouchEvent.bind(this));
        document.body.addEventListener('touchmove', this.slideTouchEvent.bind(this));

      }

      if ( this.scrollType === 'smooth' ) {

        document.addEventListener('touchmove', function(e) {
          e.preventDefault();
        });

        // window.addEventListener('resize', this.resize.bind(this));

        this.virtualScroll();

      }


    };

    this.clearLetterTimeout = null;
    this.removeLettersState = [];
    this.instantRemoveState = [];
    this.clearLetterAnswers = function(instantRemove) {

      var removeSet;

      if ( instantRemove ) {
        removeSet = instantRemove;
      } else {
        removeSet = this.removeLettersState;
        this.instantRemoveState = [];
        this.removeLettersState = [];
      }

      removeSet.forEach(function(e) {
        e.classList.remove('active');
        e.style.left = e.getAttribute('data-left');

      });



    };

    this.revealLetterAnswers = function(ele){

      clearTimeout(this.clearLetterTimeout);

      this.instantRemoveState = this.removeLettersState;
      if ( this.instantRemoveState.length > 0 ) {
        this.clearLetterAnswers(this.instantRemoveState);
      }

      var answer = ele.getAttribute('data-answer');
      var answers = answer.split(',');

      for ( var x = 0; x < answers.length; x++ ) {
        var _activateE = document.querySelector('.' + answers[x]);
        _activateE.setAttribute('data-left', _activateE.style.left);
        var _size = Math.min((window.innerWidth / 18), 55);
        var _left = (x * _size) + 'px';
        _activateE.classList.add('active');
        _activateE.style.left = _left;
        this.removeLettersState.push(_activateE);

      }

      this.instantRemoveState = [];
      this.clearLetterTimeout = setTimeout(this.clearLetterAnswers.bind(this), 4400);

    };

  }

  return new Screen();

})();

window.controller = controller;
