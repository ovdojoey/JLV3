
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

    this.screens = {
      loading : document.querySelector(".loader"),
      home : document.querySelector(".screen--home"),
      ottoform: document.querySelector(".screen--ottoform"),
      frnkrok: document.querySelector(".screen--frnkrok"),
      jlv3: document.querySelector(".screen--jlv3"),

    };

    this.backgrounds = {
      ottoform: document.querySelector(".video-ottoform"),
      jlv3: document.querySelector(".video-jlv3"),
      frnkrok: document.querySelector(".video-frnkrok"),
    };

    this.toggle = function(from, to) {




      this.screens[from].classList.add("slide-out");
      this.screens[from].classList.remove("slide-in");
      this.screens[from].classList.remove("fade-out");
      this.screens[to].classList.add("slide-in");
      this.screens[to].classList.remove("slide-out");

      // remove slide out from all
      for(var screen in this.screens) {
        if (screen !== from) {
          this.screens[screen].classList.remove("slide-out");

        }
      }

      if ( this.backgrounds[from] ) {
        this.backgrounds[from].setAttribute("data-enable", "false");
      }
      if ( this.backgrounds[to] ) {
        this.backgrounds[to].setAttribute("data-enable", "true");
      }
    };

    this.loadHome = function() {
      this.screens.loading.classList.add("out");
      this.screens.home.classList.add("active");
    };

  }

  return new Screen();

})();
