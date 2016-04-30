<?php
$title = 'Joey Lea - Writings';
include('../partials/base/header.php');
?>
  <div class="loader">
    <div class="loader--circle-container">
      <span class="loader--circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 109.33" id="j-load-icon"><defs><style>.a{font-size:150px;fill:transparent;stroke:#50aad0;stroke-miterlimit:10;font-family:Cochin;font-style:italic;}</style></defs><title>letter-j</title><text class="a" transform="translate(5.33 103.33)">J</text></svg>
      </span>
    </div>
  </div>
  <div class="app" id="app" data-scroll="smooth">
    <header class="header">
      <div class="menu" id="jl-menu">

        <a class="exit-btn" onclick="controller.toggleMenu();" title="Exit">
          <div class="x-45"><span class="x"></span></div>
          <div class="x-135"><span class="x-2"></span></div>
        </a>

        <a class="menu-btn" onclick="controller.toggleMenu();" title="Menu">
          <span class="logo--menu-text">MENU</span>
          <span class="logo--menu">
            <span class="logo--menu-bars"></span>
          </span>
        </a>

      </div>
      <div class="social">
        <a href="https://github.com/ovdojoey" target="_blank" class="icon">
          <img src="/img/github-icon.svg" alt="Github">
        </a>
        <a href="https://twitter.com/ovdojoey" target="_blank" class="icon">
          <img src="/img/twitter-icon.svg" alt="Github">
        </a>
      </div>
    </header>
    <footer class="footer">
      <div class="aside hide">
        <span class="aside--number" id="slide-number">1</span>
        <span class="aside--slash">/</span>
        <span class="aside--number number-two" id="slide-number-total">3</span>
      </div>

      <div class="copyright">
        Copyright Joey Lea.
      </div>

    </footer>

    <div class="screen-bgs">
      <div class="screen--video video-about-me" data-screen="home" data-enable="true" role="presentation">
      </div>
    </div>
    <div class="screens">
       <div  class="screen screen--writings" id="screen-home" data-screen="home">
        <div class="screen--container" style="height: auto; position:absolute;" id="scroll-section-background">



        </div>
        <div class="screen--container" style="height: auto; position:absolute;" id="scroll-section">
          <div class="screen--left">
            <div class="writings-panel" data-activate="<?php if(!$notOpen) echo 'true'; ?>" id="writings-container">
              <div class="exit" onclick="controller.closeReader()">
                &times;
              </div>
              <div id="writing-block">
