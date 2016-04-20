
(function(){
  'use strict';
  var minTimeout = 900;
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
    this.app = document.getElementById("app");
    this.scrollSettings = {
      slide : 1,
      timeout: null,
    };
    this.working = false;

    this.slide = function(e) {

      if ( this.working ) {
        return false;
      }
      this.working = true;

      var _deltaY = e.deltaY;
      var _screenOn;
      var _keyFrom = this.screenKeys[this.scrollSettings.slide];
      var _keyTo;

      if ( _deltaY >= 1  ) {
        // increase screen
        _screenOn = this.scrollSettings.slide + 1;
        _screenOn = ( _screenOn === this.screenKeys.length  ) ? 1 : _screenOn; // fix later remove static num
      } else if ( _deltaY < 1 ) {
        // decrease screen
        _screenOn = this.scrollSettings.slide - 1;
        _screenOn = ( _screenOn === 0 ) ? this.screenKeys.length - 1 : _screenOn; // fix later remove static num
      }

      _keyTo = this.screenKeys[_screenOn];

      // this.scrollSettings.slide = _screenOn;

      this.toggle(_keyFrom, _keyTo);

    };

    document.body.addEventListener("wheel", this.slide.bind(this));

    this.screens = {
      loading : document.querySelector(".loader"),
      home : document.querySelector(".screen--home"),
      ottoform: document.querySelector(".screen--ottoform"),
      frnkrok: document.querySelector(".screen--frnkrok"),
      jlv3: document.querySelector(".screen--jlv3"),
    };

    this.screenKeys = Object.keys( this.screens );

    this.backgrounds = {
      ottoform: document.querySelector(".video-ottoform"),
      jlv3: document.querySelector(".video-jlv3"),
      frnkrok: document.querySelector(".video-frnkrok"),
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
      }, 1300);

    };

    this.loadHome = function() {
      this.screens.loading.classList.add("out");
      this.screens.home.classList.add("active");
    };

  }

  return new Screen();

})();
