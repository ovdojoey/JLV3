<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Joey Lea | Web Developer &amp; Full-stack Engineer</title>
  <link rel="stylesheet" href="/css/jlv3.css" media="screen" charset="utf-8">
  <script src="https://use.typekit.net/ryf7prd.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>
</head>
<body>

  <header class="header">
    <div class="menu">
      <span class="logo--l">MENU</span>
      <span class="logo--menu">
        <span class="logo--menu-bars"></span>
      </span>
    </div>
    <div class="social">
      <a href="github" class="icon">
        <span class="brandico-github"></span>
      </a>
      <a href="github" class="icon">
        <span class="brandico-linkedin"></span>
      </a>
      <a href="github" class="icon">
        <span class="brandico-twitter-bird"></span>
      </a>
    </div>
  </header>

  <div class="screens">
     <div  class="screen screen--home">
      <div class="screen--video video-clouds">
        <video autoplay loop class="fillWidth">
            <source src="/video/Up.mp4" type="video/mp4"  />
            <source src="/video/Up.webm" type="video/webm" />
        </video>
      </div>
      <div class="screen--video video-under">
        <video autoplay loop class="fillWidth">
            <source src="/video/Under.mp4" type="video/mp4"  />
            <source src="/video/Under.webm" type="video/webm" />
        </video>
      </div>
      <div class="screen--container">
        <div class="screen--left">
          <div class="screen-center">
            <div class="overflower">
              <h1 class="h1 in-overflower">
                <small>I'm</small> Joey Lea
              </h1>
            </div>
            <div class="overflower">
              <a class="label after-line in-overflower" href="/about/">ABOUT ME</a>
            </div>
            <p class="intro-desc">
              I am a full-stack web designer and software engineer.
              I take projects from inception through completion.
            </p>

            <div class="screen--right-hidden">
              <a class="label after-line" href="/posts/">RECENT WRITINGS</a>
            </div>
          </div>
        </div>

        <div class="screen--right">
          <div class="screen-center">
            <div class="overflower">
              <span class="label in-overflower">RECENT WRITINGS</span>
            </div>
            <ul class="writings-list">
              <li class="writing-list-li">
                <div class="overflower t-2x">
                  <a href="#" class="in-overflower">Starting a project prototype</a>
                </div>
              </li>
              <li class="writing-list-li">
                <div class="overflower t-3x">
                  <a href="#" class="in-overflower">To use flexbox... or not</a>
                </div>
              </li>
              <li class="writing-list-li ">
                <div class="overflower t-4x">
                  <a href="#" class="in-overflower">Building a web app</a>
                </div>
              </li>
            </ul>
            <div class="overflower">
              <span class="label in-overflower">RECENT PROJECTS</span>
            </div>
            <ul class="project-grid">
              <li class="project-grid-li">
                <div class="overflower t-2x">
                  <a href="#" class="in-overflower" onclick="controller.toggle('home', 'ottoform');">
                    <span class="title">OTTOFORM</span>
                    <span class="description">Setup contact forms in seconds</span>
                  </a>
                </div>
              </li>
              <li class="project-grid-li">
                <div class="overflower t-3x">
                  <a href="#" class="in-overflower">
                    <span class="title">FRNKROK</span>
                    <span class="description">A local DJ's website</span>
                  </a>
                </div>
              </li>
              <li class="project-grid-li">
                <div class="overflower t-4x">
                  <a href="#" class="in-overflower">
                    <span class="title">JLV2</span>
                    <span class="description">A new year, a new website</span>
                  </a>
                </div>
              </li>
              <li class="project-grid-li">
                <div class="overflower t-5x">
                  <a href="#" class="in-overflower">
                    <span class="title">JUICED</span>
                    <span class="description">A flexbox based CSS Framework</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>

    <div class="screen screen--ottoform fade-out">
      <div class="screen--video video-ottoform">

      </div>
      <div class="screen--container">
        <div class="screen--left align-right  screen-collapse">
          <div class="screen-center">
            <h1 class="h1">
              Ottoform
            </h1>
            <span class="label after-line">PROJECT BRIEF</span>

            <p class="intro-desc">
              The easiest form you will ever create.
            </p>

          </div>
        </div>

        <div class="screen--right">
          <div class="screen-center">
            <span class="label">START DATE</span>
            <div class="answer">April, 2016</div>
            <span class="label">STATUS</span>
            <div class="answer">In Public Beta &amp; Early Development</div>
            <span class="label">TECH USED</span>
            <div class="answer">Lumen Framework, HTML, Sass, PHP, JavaScript</div>
            <span class="label">WEBSITE</span>
            <div class="answer"><a href="https://ottoform.com" target="_blank">https://ottoform.com</a></div>
          </div>

        </div>

      </div>
    </div>
  </div>
  <script>
    var controller = (function(){

      'use strict';

      function Screen() {

        this.screens = {
          home : document.querySelector(".screen--home"),
          ottoform: document.querySelector(".screen--ottoform")
        };

        this.toggle = function(from, to) {
          this.screens[from].classList.add("slide-out");
          this.screens[from].classList.remove("slide-in");
          this.screens[to].classList.add("slide-in");
          this.screens[to].classList.remove("slide-out");
        };

      }

      return new Screen();

    })();


  </script>
</body>
</html>
