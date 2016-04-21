
(function(){
  'use strict';
  var minTimeout = 400;
  var domLoaded = false;
  var stillNeedToLoad = false;

  setTimeout(function(){
    if ( domLoaded ) {
      controller.loadHome();
      return false;
    }
    stillNeedToLoad = true;
  }, minTimeout);

  document.addEventListener("DOMContentLoaded", function(event) {

    domLoaded = true;

    if ( stillNeedToLoad ) {
      controller.loadHome();
    }
  });
})();

window.controller = (function(){

  'use strict';

  function Screen() {


    this.slideNumberEle = document.getElementById("slide-number");
    this.slideNumberTotalEle = document.getElementById("slide-number-total");
    this.app = document.getElementById("app");
    this.scrollSettings = {
      slide : 1,
      timeout: null,
      videoTimeout: null,
      pos: null,
    };
    this.working = false;

    this.touchEvent = function(e){
      // touch event
      if (e.type === 'touchstart') {
        this.scrollSettings.pos = e.touches[0].clientY;
      }

      if ( e.type === 'touchmove' && this.scrollSettings.pos ) {
        var _scrollDelta = ( this.scrollSettings.pos - e.touches[0].clientY ) * 2;
        if ( _scrollDelta > 10 ) {
          this.slide({}, { distance: 0.55, direction: -1 });
        } else if ( _scrollDelta < -10 ) {
          this.slide({}, { distance: 0.55, direction: 1 });
        }
        this.scrollSettings.pos = null;
        e.preventDefault();
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


      /** Helper function to return wheel scroll distance
      * See: http://phrogz.net/js/wheeldelta.html
      *
      * @return integer - normalizzed distance of scroll
      */
      var returnWheelDistance = function(evt){
        if (!evt) evt = event;
        var w=evt.wheelDelta, d=evt.detail;
        if (d){
          if (w) return w/d/40*d>0?1:-1; // Opera
          else return -d/3;              // Firefox;         TODO: do not /3 for OS X
        } else return w/120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
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


      if ( _distance < 0.5 && _distance > -0.5 ) {
        this.working = true;
        var that = this;
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


    this.screens = {
      loading : document.querySelector(".loader"),
      home : document.querySelector(".screen--home"),
      ottoform: document.querySelector(".screen--ottoform"),
      frnkrok: document.querySelector(".screen--frnkrok"),
      jlv3: document.querySelector(".screen--jlv3"),
      juiced: document.querySelector(".screen--juiced"),
    };

    this.screenKeys = Object.keys( this.screens );

    this.backgrounds = {
      home: document.querySelector(".video-home"),
      ottoform: document.querySelector(".video-ottoform"),
      frnkrok: document.querySelector(".video-frnkrok"),
      jlv3: document.querySelector(".video-jlv3"),
      juiced: document.querySelector(".video-juiced"),
    };

    this.toggle = function(from, to) {

      this.screens.home.classList.remove("active");
      this.screens[from].classList.add("slide-out");
      this.screens[from].classList.remove("slide-in");
      this.screens[from].classList.remove("fade-out");
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

    /**
    * Fires the home loader to load the first screen. Also fires the wheel
    * listener to listen for scroll events.
    */
    this.loadHome = function() {
      this.screens.loading.classList.add("out");
      this.screens.home.classList.add("active");
      this.slideNumberTotalEle.innerText = this.screenKeys.length - 1;
      document.body.addEventListener("wheel", this.slide.bind(this));
      document.body.addEventListener("touchstart", this.touchEvent.bind(this));
      document.body.addEventListener("touchmove", this.touchEvent.bind(this));
    };

  }

  return new Screen();

})();
