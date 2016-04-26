import vs from 'virtual-scroll';


// const section = document.querySelector('#about-me-intro-text');
// const smooth = new Smooth({
//   native: false,
//   section: section,
//   ease: 0.1
// });
//
// smooth.init();
// smooth.on();
// console.log(smooth);
(function(){
  'use strict';
  var minTimeout = 400;
  var maxTimeout = 2200;
  var domLoaded = false;
  var stillNeedToLoad = false;
  var fontLoaded = false;

  setTimeout(function(){
    var htmlClass = [].slice.call(document.documentElement.classList);
    if ( htmlClass.indexOf("wf-active") !== -1 ) {
      fontLoaded = true;
    }
    if ( domLoaded && fontLoaded ) {
      controller.loadHome();
      return false;
    }
    stillNeedToLoad = true;
  }, minTimeout);

  setTimeout(function(){
    if (stillNeedToLoad) {
      controller.loadHome();
    }
  }, maxTimeout);

  window.addEventListener("DOMContentLoaded", function(event) {

    domLoaded = true;

    if ( stillNeedToLoad ) {
      stillNeedToLoad = false;
      controller.loadHome();
    }

  });

  window.handleOrientation = function(e){
    setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
    }, 0);
  };

  window.addEventListener("load", handleOrientation, false);

  window.addEventListener("deviceorientation", handleOrientation, true);

})();

window.controller = (function(){

  'use strict';

  function Screen() {

    this.slideNumberEle = document.getElementById("slide-number");
    this.slideNumberTotalEle = document.getElementById("slide-number-total");
    this.allScreens = [].slice.call(document.querySelectorAll(".screen"));

    this.app = document.getElementById("app");
    this.scrollType = this.app.getAttribute("data-scroll") || "screens";
    this.scrollSettings = {
      slide : 1,
      timeout: null,
      videoTimeout: null,
      pos: null,
      distance: 0,
      timeEase: 0,
      scrollers: [],
      rafStarted: false,
    };
    this.rAFStart = null;
    this.working = false;
    this.screens = {
      loading : document.querySelector(".loader"),
      // home : document.querySelector(".screen--home"),
      // ottoform: document.querySelector(".screen--ottoform"),
      // frnkrok: document.querySelector(".screen--frnkrok"),
      // jlv3: document.querySelector(".screen--jlv3"),
      // juiced: document.querySelector(".screen--juiced"),

    };

    this.bindScreens = function(slide){
      var key = slide.getAttribute("data-screen");
      if ( key ) {
        this.screens[key] = slide;
      }
    };

    this.allScreens.forEach(this.bindScreens.bind(this));


    this.menu = document.querySelector(".screen--menu");
    this.menuContainer = document.getElementById("jl-menu");
    this.menuOpen = false;

    this.screenKeys = Object.keys( this.screens );

    this.backgrounds = {
      home: document.querySelector(".video-home"),
      ottoform: document.querySelector(".video-ottoform"),
      frnkrok: document.querySelector(".video-frnkrok"),
      jlv3: document.querySelector(".video-jlv3"),
      juiced: document.querySelector(".video-juiced"),
    };

    /* Touch event function */
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

      // var _deltaY = e.deltaY;
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

      this.screens.home.classList.remove("active");

      this.screens[from].classList.remove("slide-in");
      this.screens[from].classList.remove("fade-out");
      this.screens[from].classList.add("slide-out");

      this.screens[to].classList.add("slide-in");
      this.screens[to].classList.remove("slide-out");

      // remove slide out from all
      var _slideCount = 0;
      for(var screen in this.screens) {
        if (screen === to) {
          this.slideNumberEle.innerHTML = '<span class="number">' + _slideCount + '</span>';
          this.scrollSettings.slide = _slideCount;
        }
        if (screen !== from) {
          this.screens[screen].classList.remove("slide-out");
        }
        _slideCount++;
      }

      if ( this.backgrounds[from] ) {
        this.backgrounds[from].setAttribute("data-enable", "false");
      }

      if ( this.backgrounds[to] ) {
        this.backgrounds[to].setAttribute("data-enable", "true");
      }

      var that = this;
      this.scrollSettings.timeout = setTimeout(function(){
        that.working = false;
      }, 1500);

    };


    this.scroll  = function(e) {

      var scrollDistance = this.wheelDistance(e);
      var _distance = this.scrollSettings.distance + scrollDistance;
      this.scrollSettings.distance = Math.min(0,_distance);
      this.scrollSettings.timeEase = performance.now() + 400;

      if ( !this.scrollSettings.rafStarted ) {
        window.requestAnimationFrame(this.rAF.bind(this));
      }

    };

    this.easeInOutQuad = function (t, b, c, d, s) {
        if (s === undefined) s = 1.70158;
        return c*(t/=d)*t + b;
    };

    this.rAF = function(timestamp) {

      this.scrollSettings.rafStarted = true;

      if (!this.rAFStart) this.rAFStart = timestamp;
      var progress = timestamp - this.rAFStart;
      var _distance = this.scrollSettings.distance;
      var _timeTo = this.scrollSettings.timeEase;
      var easeOutQuad = this.easeInOutQuad;
      var speedFactor = 45;

      this.scrollSettings.scrollers.forEach(function(s) {



        var currentPoint = parseInt(s.getAttribute("data-scrolled")) || 0;
        var speed = (parseInt(s.getAttribute("data-ss")) || 1) * speedFactor;
        var destinationPoint = ( _distance ) * speed;
        var ease = Math.round(easeOutQuad(timestamp, currentPoint, (destinationPoint - currentPoint), _timeTo));
        ease = Math.max(destinationPoint,ease);
        // console.log(currentPoint, destinationPoint, ease);
        // magicPoint += ease;
        // magicPoint = ( magicPoint < 0 ) ? magicPoint : 0;
        // ease = ( ease < 0 ) ? ease : 0;

        var up = ease  + 'px';
        s.style.webkitTransform = 'translateY('+up+') translateZ(0)';
        s.style.MozTransform = 'translateY('+up+') translateZ(0)';
        s.style.msTransform = 'translateY('+up+') translateZ(0)';
        s.style.OTransform = 'translateY('+up+') translateZ(0)';
        s.style.transform = 'translateY('+up+') translateZ(0)';
        s.setAttribute("data-scrolled", destinationPoint);

      });

      // recall rAF
      window.requestAnimationFrame(this.rAF.bind(this));
    };



    this.openMenu = function() {

      this.menu.classList.remove("fade-out-slow");

      for(var screen in this.screens) {
        this.screens[screen].classList.add("fade-out-slow");
      }

      this.menu.classList.add("fade-in");
      this.menuOpen = true;
      this.menuContainer.classList.add("activate");

    };

    this.closeMenu = function() {

      this.menu.classList.remove("fade-in");

      for(var screen in this.screens) {
        this.screens[screen].classList.remove("fade-out-slow");
      }

      this.menu.classList.remove("fade-in");
      this.menu.classList.add("fade-out-slow");
      this.menuOpen = false;
      this.menuContainer.classList.remove("activate");


    };

    this.toggleMenu = function() {
      if ( this.menuOpen ) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    };

    this.addSmoothScrollers = function() {
      var smooths = [].slice.call(document.querySelectorAll(".scroller"));
      var that = this;
      smooths.forEach(function(s) {
        that.scrollSettings.scrollers.push(s);
      });
    };



    /**
    * Fired from controller.loadHome() outside of this scope.
    * Loads the home loader to load the first screen. Also fires the wheel
    * listener to listen for scroll events.
    */
    this.loadHome = function() {

      this.screens.loading.classList.add("out");
      this.screens.home.classList.add("active");
      this.slideNumberTotalEle.innerText = this.screenKeys.length - 1;

      if ( this.scrollType === "screens" ) {

        document.body.addEventListener("wheel", this.slide.bind(this));
        document.body.addEventListener("touchstart", this.slideTouchEvent.bind(this));
        document.body.addEventListener("touchmove", this.slideTouchEvent.bind(this));

      }

      if ( this.scrollType === "smooth" ) {
        // this.addSmoothScrollers();
        // document.body.addEventListener("wheel", this.scroll.bind(this));

        document.addEventListener('touchmove', function(e) {
            e.preventDefault();
        });

        var VirtualScroll = new vs();
        var targetY = 0;
        var section = document.getElementById("about-me-scroll");
        var sectionHeight = section.getBoundingClientRect().height;

        VirtualScroll.on(function(e) {
            targetY += e.deltaY;
            targetY = Math.max( (sectionHeight - window.innerHeight) * -1, targetY);
            targetY = Math.min(0, targetY);
        });

        var currentY = 0, ease = 0.11;
        var run = function() {
            requestAnimationFrame(run);
            currentY += Math.round((targetY - currentY) * ease,2);
            var t = 'translateY(' + currentY + 'px) translateZ(0)';
            var s = section.style;
            s["transform"] = t;
            s["webkitTransform"] = t;
            s["mozTransform"] = t;
            s["msTransform"] = t;
        };

        run();

      }


    };

  }

  return new Screen();

})();
