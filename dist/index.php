<?php
$title = 'Joey Lea - Web Developer &amp; Front-end Engineer';
include('partials/base/header.php'); ?>
  <div class="loader">
    <div class="loader--circle-container">
      <span class="loader--circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 109.33" id="j-load-icon"><defs><style>.a{font-size:150px;fill:transparent;stroke:#50aad0;stroke-miterlimit:10;font-family:Cochin;font-style:italic;}</style></defs><title>letter-j</title><text class="a" transform="translate(5.33 103.33)">J</text></svg>
      </span>
    </div>
  </div>
  <div class="app" id="app" data-scroll="screens">
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
      <div class="aside">
        <span class="aside--number" id="slide-number">1</span>
        <span class="aside--slash">/</span>
        <span class="aside--number number-two" id="slide-number-total">10</span>
      </div>

      <div class="copyright">
        Copyright Joey Lea.
      </div>

    </footer>

    <div class="screen-bgs">
      <div class="screen--video video-home" data-background-screen="home" data-enable="true" role="presentation">
      </div>
      <div class="screen--video video-ottoform" data-background-screen="ottoform" role="presentation">
      </div>
      <div class="screen--video video-frnkrok" data-background-screen="frnkrok" role="presentation">
        <video autoplay muted loop class="fullscreen">
            <source src="/video/frnkrok-hq.mp4" type="video/mp4"  />
        </video>
      </div>
      <div class="screen--video video-jlv3"  data-background-screen="jlv3" role="presentation"></div>
      <div class="screen--video video-juiced" data-background-screen="juiced" role="presentation"></div>
    </div>
    <div class="screens">
       <div  class="screen screen--home" id="screen-home" data-screen="home">
        <div class="screen--container">
          <div class="screen--left">
            <div class="screen-center">
              <div class="overflower">
                <h1 class="h1 in-overflower">
                  <small>I'm</small> Joey Lea
                </h1>
              </div>
              <div class="overflower">
                <span class="label after-line in-overflower">SHORT</span> &nbsp;
                <a class="label in-overflower" href="/me/">MORE</a>
              </div>
              <p class="intro-desc">
                I am a full-stack web designer and software engineer.
                I take projects from inception through completion.
              </p>
              <div class="overflower t-2x">
                <span class="label in-overflower">SCROLL TO SEE WHAT I'VE BEEN UP TO <img class="icon icon-scroll" src="/img/scroll.svg" alt="Scroll"></span>
              </div>
              <!-- <div class="screen--right-hidden">
                <a class="label after-line" href="/posts/">RECENT WRITINGS</a>
              </div> -->
            </div>
          </div>

          <div class="screen--right">
            <div class="screen-center">
              <!-- <div class="overflower">
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
              </ul> -->
              <div class="overflower t-4x">
                <span class="label in-overflower">RECENT PROJECTS</span>
              </div>
              <ul class="project-grid">
                <li class="project-grid-li">
                  <div class="overflower t-5x">
                    <a href="#" class="in-overflower" onclick="controller.toggle('home', 'ottoform');">
                      <span class="title">OTTOFORM</span>
                      <span class="description">Setup contact forms in seconds</span>
                    </a>
                  </div>
                </li>
                <li class="project-grid-li">
                  <div class="overflower t-6x">
                    <a href="#" class="in-overflower" onclick="controller.toggle('home', 'frnkrok');">
                      <span class="title">FRNKROK</span>
                      <span class="description">A local DJ's website</span>
                    </a>
                  </div>
                </li>
                <li class="project-grid-li">
                  <div class="overflower t-7x">
                    <a href="#" class="in-overflower" onclick="controller.toggle('home', 'jlv3');">
                      <span class="title">V3</span>
                      <span class="description">A new year, a new website</span>
                    </a>
                  </div>
                </li>
                <li class="project-grid-li">
                  <div class="overflower t-8x">
                    <a href="#" class="in-overflower" onclick="controller.toggle('home', 'juiced');">
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


      <div class="screen screen--frnkrok fade-out" id="screen-frnkrok" data-screen="frnkrok">

        <div class="screen--container">
          <div class="screen--left screen-collapse">
            <div class="screen-center">

              <span class="label absolute"><a href="#" onclick="controller.toggle('frnkrok', 'home');">&larr;</a> CLIENT PROJECT | <a href="/portfolio/">VIEW ALL <img src="/img/grid_icon.svg" class="icon" alt="Portfolio" /></a></span>
              <div class="overflower">
                <h1 class="h1 in-overflower">
                  Frnkrok
                </h1>
              </div>
              <div class="overflower t-2x">
                <span class="label after-line in-overflower">PROJECT BRIEF</span> &nbsp;
                <a class="label in-overflower" href="https://frnkrok.com" target="_blank">VISIT</a>

              </div>
              <p class="intro-desc">
                A punchy DJ website to kickstart 2016.
              </p>

            </div>
          </div>

          <div class="screen--right">
            <div class="screen-center">
              <div class="overflower">
                <div class="in-overflower">
                  <span class="label">START DATE</span>
                  <div class="answer">December, 2015</div>
                </div>
              </div>
              <div class="overflower t-2x">
                <div class="in-overflower">
                  <span class="label">LAUNCH DATE</span>
                  <div class="answer">March, 2016</div>
                </div>
              </div>
              <div class="overflower t-3x">
                <div class="in-overflower">
                  <span class="label">STATUS</span>
                  <div class="answer">Live</div>
                </div>
              </div>
              <div class="overflower t-4x">
                <div class="in-overflower">
                  <span class="label">TECH USED</span>
                  <div class="answer">HTML, Sass, PHP, JS</div>
                </div>
              </div>
              <div class="overflower t-5x">
                <div class="in-overflower">
                  <span class="label">WEBSITE</span>
                  <div class="answer"><a href="https://frnkrok.com" target="_blank">https://frnkrok.com</a></div>
                </div>
              </div>


            </div>
          </div>

        </div>
      </div>

      <div class="screen screen--ottoform fade-out" id="screen-ottoform" data-screen="ottoform">

        <div class="screen--container">
          <div class="screen--left screen-collapse">
            <div class="screen-center">

              <span class="label absolute"><a href="#" onclick="controller.toggle('ottoform', 'home');">&larr;</a> PERSONAL PROJECT | <a href="/portfolio/">VIEW ALL <img src="/img/grid_icon.svg" class="icon" alt="Portfolio" /></a></span>
              <div class="overflower">
                <h1 class="h1 in-overflower">
                  Ottoform
                </h1>
              </div>
              <div class="overflower t-2x">
                <span class="label after-line in-overflower">PROJECT BRIEF</span> &nbsp;
                <a class="label in-overflower" href="https://ottoform.com" target="_blank">VISIT</a>

              </div>
              <p class="intro-desc">
                The easiest form you will ever create.
              </p>

            </div>
          </div>

          <div class="screen--right">
            <div class="screen-center">
              <div class="overflower">
                <div class="in-overflower">
                  <span class="label">START DATE</span>
                  <div class="answer">April, 2016</div>
                </div>
              </div>
              <div class="overflower t-2x">
                <div class="in-overflower">
                  <span class="label">STATUS</span>
                  <div class="answer">Beta &amp; Early Dev</div>
                </div>
              </div>
              <div class="overflower t-3x">
                <div class="in-overflower">
                  <span class="label">TECH USED</span>
                  <div class="answer">Lumen, HTML, Sass, PHP, JS</div>
                </div>
              </div>
              <div class="overflower t-4x">
                <div class="in-overflower">
                  <span class="label">WEBSITE</span>
                  <div class="answer"><a href="https://ottoform.com" target="_blank">https://ottoform.com</a></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="screen screen--jlv3 fade-out" id="screen-jlv3" data-screen="jlv3">
        <div class="screen--container">
          <div class="screen--left screen-collapse">
            <div class="screen-center">

              <span class="label absolute"><a href="#" onclick="controller.toggle('jlv3', 'home');">&larr;</a> PERSONAL PROJECT | <a href="/portfolio/">VIEW ALL <img src="/img/grid_icon.svg" class="icon" alt="Portfolio" /></a></span>
              <div class="overflower">
                <h1 class="h1 in-overflower">
                  V3
                </h1>
              </div>
              <div class="overflower t-2x">
                <span class="label after-line in-overflower">PROJECT BRIEF</span> &nbsp;
                <a class="label in-overflower" href="https://v3.joeylea.com" target="_blank">VISIT</a>
              </div>
              <p class="intro-desc">
                Unlock achievements and meet FØRM on my mid-2016 website.
              </p>
            </div>
          </div>
          <div class="screen--right">
            <div class="screen-center">
              <div class="overflower">
                <div class="in-overflower">
                  <span class="label">START DATE</span>
                  <div class="answer">February, 2016</div>
                </div>
              </div>
              <div class="overflower t-2x">
                <div class="in-overflower">
                  <span class="label">LAUNCH DATE</span>
                  <div class="answer">February, 2016</div>
                </div>
              </div>
              <div class="overflower t-3x">
                <div class="in-overflower">
                  <span class="label">STATUS</span>
                  <div class="answer">Retired</div>
                </div>
              </div>
              <div class="overflower t-4x">
                <div class="in-overflower">
                  <span class="label">TECH USED</span>
                  <div class="answer">HTML, Sass, PHP, JS</div>
                </div>
              </div>
              <div class="overflower t-5x">
                <div class="in-overflower">
                  <span class="label">WEBSITE</span>
                  <div class="answer"><a href="https://v3.joeylea.com" target="_blank">https://joeylea.com</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="screen screen--juiced fade-out" id="screen-juiced"  data-screen="juiced">
        <div class="screen--container">
          <div class="screen--left screen-collapse">
            <div class="screen-center">

              <span class="label absolute"><a href="#" onclick="controller.toggle('juiced', 'home');">&larr;</a> OPEN SOURCE | <a href="/portfolio/">VIEW ALL <img src="/img/grid_icon.svg" class="icon" alt="Portfolio" /></a></span>
              <div class="overflower">
                <h1 class="h1 in-overflower">
                  Juiced
                </h1>
              </div>
              <div class="overflower t-2x">
                <span class="label after-line in-overflower">PROJECT BRIEF</span> &nbsp;
                <a class="label in-overflower" href="http://juicedcss.com" target="_blank">VISIT</a>

              </div>
              <p class="intro-desc">
                A flexbox based CSS-framework for prototyping layouts using Flexbox.
              </p>
            </div>
          </div>
          <div class="screen--right">
            <div class="screen-center">
              <div class="overflower">
                <div class="in-overflower">
                  <span class="label">START DATE</span>
                  <div class="answer">August, 2015</div>
                </div>
              </div>
              <div class="overflower t-2x">
                <div class="in-overflower">
                  <span class="label">LAUNCH DATE</span>
                  <div class="answer">August, 2015</div>
                </div>
              </div>
              <div class="overflower t-3x">
                <div class="in-overflower">
                  <span class="label">STATUS</span>
                  <div class="answer">Inactive</div>
                </div>
              </div>
              <div class="overflower t-4x">
                <div class="in-overflower">
                  <span class="label">TECH USED</span>
                  <div class="answer">HTML, Sass, CSS</div>
                </div>
              </div>
              <div class="overflower t-5x">
                <div class="in-overflower">
                  <span class="label">WEBSITE</span>
                  <div class="answer"><a href="http://juicedcss.com" target="_blank">http://juicedcss.com</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="screen screen--slides-menu fade-out" id="screen-slide-menu">
        <div class="screen--container">
          <div class="screen--left">
            <div class="screen-center">
              <nav>
                <a class="diamond-screen">
                  Home
                </a>
                <a class="diamond-screen">
                  Ottoform
                </a>
                <a class="diamond-screen">
                  Frnkrok
                </a>
                <a class="diamond-screen">
                  V3
                </a>
                <a class="diamond-screen">
                  Juiced
                </a>
              </nav>
            </div>
          </div>

        </div>
      </div>


      <?php include('partials/base/menu.php'); ?>


    </div>
  </div>
  <script src="/js/jl.js"></script>
</body>
</html>
