
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
    };
    this.working = false;

    /**
    * Slide Event.  Fired on wheel event change
    *
    * @param e - event - the wheel event that fired
    */
    this.slide = function(e) {

      if ( this.working ) {
        return false;
      }

      this.working = true;

      /** Helper function to return wheel direction
      *
      * @return integer - direction of scroll down = -1, up = 1
      */
      function returnDirection(evt) {
         return (evt.detail<0) ? 1 : (evt.wheelDelta>0) ? 1 : -1;
      }


      // var _deltaY = e.deltaY;
      var _screenOn;
      var _keyFrom = this.screenKeys[this.scrollSettings.slide];
      var _keyTo;

      var _direction = returnDirection(e);

      if ( _direction === -1 ) {
        // increase screen
        _screenOn = this.scrollSettings.slide + 1;
        _screenOn = ( _screenOn === this.screenKeys.length  ) ? 1 : _screenOn; // fix later remove static num
      } else if ( _direction === 1 ) {
        // decrease screen
        _screenOn = this.scrollSettings.slide - 1;
        _screenOn = ( _screenOn === 0 ) ? this.screenKeys.length - 1 : _screenOn; // fix later remove static num
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
    };

  }

  return new Screen();

})();
