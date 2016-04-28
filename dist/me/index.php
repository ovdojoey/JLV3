<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Joey Lea – About Me</title>
  <link rel="stylesheet" href="/css/jlv3.css" media="screen" charset="utf-8">
  <script src="https://use.typekit.net/ryf7prd.js"></script>
  <script>try{Typekit.load({ async: true });}catch(e){}</script>
</head>
<body>
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
          <span class="brandico-github"></span>
        </a>
        <a href="https://www.linkedin.com/in/joeylea" target="_blank" class="icon">
          <span class="brandico-linkedin"></span>
        </a>
        <a href="https://twitter.com/ovdojoey" target="_blank" class="icon">
          <span class="brandico-twitter-bird"></span>
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
      <div class="screen--video video-code" data-screen="code" data-enable="false" role="presentation">
      </div>
      <div class="screen--video video-person" data-screen="code" data-enable="false" role="presentation">
      </div>
      <!-- <div class="screen--video video-ottoform" role="presentation">
      </div>
      <div class="screen--video video-frnkrok" role="presentation">
        <video autoplay muted loop class="fullscreen">
            <source src="/video/frnkrok-hq.mp4" type="video/mp4"  />
        </video>
      </div>
      <div class="screen--video video-jlv3" role="presentation"></div>
      <div class="screen--video video-juiced" role="presentation"></div> -->
    </div>
    <div class="screens">
       <div  class="screen screen--about-me" id="screen-home" data-screen="home">
        <div class="screen--container" style="height: auto; position:absolute;" id="scroll-section-background">

          <div class="screen--left">
            <div class="screen-center">

              <!-- <div class="white-back"></div> -->
              <span class="clip-text h1">27</span>
              <div class="label before-line clip-label">years on earth</div>


            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">
              <span class="clip-text h1">30</span>
              <div class="label before-line clip-label">projects completed</div>

            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">
              <span class="clip-text h1">FL</span>
              <div class="label before-line clip-label">the mouse is my neighbor</div>
              <!-- <div class="label before-line clip-label"></div> -->


            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">
              <span class="clip-text h1">?</span>

            </div>
          </div>

        </div>
        <div class="screen--container" style="height: auto; position:absolute;" id="scroll-section">
          <div class="screen--left">
            <div class="screen-center">


              <div class="overflower">
                <h1 class="h2 in-overflower">
                  Joey Lea
                </h1>

              </div>

              <p class="intro-desc">

                Hi!  I'm Joey.  I enjoy technology, food, the company of friends, and early mornings with coffee and code.
              </p>



              <span class="label">LINKS &amp; OLD WEBSITE VERSIONS</span>
              <ul class="no-list">
                <li>
                  <a href="/resume">résumé</a>
                </li>
                <li>
                  <a href="mailto:joey@w3by.com" target="_blank">joey@w3by.com</a>
                </li>
                <li>
                  <a href="http://old.joeylea.com" target="_blank">v1</a>
                </li>
                <li>
                  <a href="http://v2.joeylea.com" target="_blank">v2</a>
                </li>
                <li>
                  <a href="http://v3.joeylea.com" target="_blank">v3</a>
                </li>
              </ul>



            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">

              <div class="overflower" data-actpoint='{ "fadeIn" : ".video-code" }' >
                <h1 class="h2 in-overflower color-white">
                  the coder
                </h1>
              </div>
              <p class="intro-desc color-white" data-actpoint='{ "fadeOut" : ".video-about-me" }'>
                I design and develop websites and apps.
                I am meticulous with my craft and enjoy perfecting the tiny details.
                I work on both front-end web design and
                back-end object-oriented application development.
              </p>

            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center" data-actpoint='{ "fadeOut" : ".video-code" }'>

              <div class="overflower" data-actpoint='{ "fadeIn" : ".video-person" }' >
                <h1 class="h2 in-overflower">
                  the person
                </h1>
              </div>
              <p class="intro-desc">
                My early life revolved around baseball and computers.

                I worked for AT&amp;T wireless in my senior year of high school
                and throughout college.
                In 2011, I graduated from UCF with a degree in Legal Studies.
              </p>
              <p class="intro-desc">
                I (somehow) landed a coding job out of college and haven't
                looked back since! Oh &mdash;
                I have a dog named Duke, he's pretty awesome.

              </p>

            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center" >
              <div class="h2 header-letters">
                <span class="letr l-a-0">A</span>
                <span class="letr l-m-0">M</span>
                <span class="letr l-p">P</span>
                <span class="letr l-j">J</span>
                <span class="letr l-s">S</span>
                <span class="letr l-do">.</span>
                <span class="letr l-o">O</span>
                <span class="letr l-t">T</span>
                <span class="letr l-c">C</span>
                <span class="letr l-p-2">P</span>
                <span class="letr l-w">W</span>
                <span class="letr l-h">H</span>
                <span class="letr l-e">E</span>
                <span class="letr l-v">V</span>
                <span class="letr l-e-2">E</span>
                <span class="letr l-a">A</span>
                <span class="letr l-n">N</span>
                <span class="letr l-t-2">T</span>
                <span class="letr l-k">K</span>
                <span class="letr l-am">&amp;</span>
                <span class="letr l-p-3">P</span>
                <span class="letr l-y">Y</span>
                <span class="letr l-d">D</span>
                <span class="letr l-o-2">O</span>
                <span class="letr l-t-3">T</span>
                <span class="letr l-do-2">.</span>
                <span class="letr l-s-2">S</span>
                <span class="letr l-a-2">A</span>
                <span class="letr l-q">Q</span>
                <span class="letr l-e-3">E</span>
                <span class="letr l-s-3">S</span>
                <span class="letr l-l">L</span>
                <span class="letr l-v-2">V</span>
                <span class="letr l-m">M</span>
                <span class="letr l-e-4">E</span>
                <span class="letr l-a-3">A</span>
                <span class="letr l-u">U</span>
                <span class="letr l-n-2">N</span>
                <span class="letr l-s-4">S</span>
                <span class="letr l-i">I</span>
                <span class="letr l-c-2">C</span>
                <span class="letr l-t-4">T</span>
                <span class="letr l-o-3">O</span>
              </div>
              <div class="question-letters">
                <span class="h1" data-answer="l-j,l-o,l-e,l-y,l-l,l-e-4,l-a-3" onclick="controller.revealLetterAnswers(this)">Name</span>
                <span class="h1" data-answer="l-t,l-w,l-e,l-n,l-t-2,l-y,l-do-2,l-s-2,l-e-3,l-v-2,l-e-4,l-n-2" onclick="controller.revealLetterAnswers(this)">Age</span>
                <span class="h1" data-answer="l-s,l-t,l-e,l-a,l-k,l-am,l-p-3,l-o-2,l-t-3,l-a-2,l-t-4,l-o-3" onclick="controller.revealLetterAnswers(this)">Food</span>
                <span class="h1" data-answer="l-j,l-s,l-do,l-p-2,l-h,l-p-3,l-do-2,l-s-2,l-a-2,l-s-3,l-s-4" onclick="controller.revealLetterAnswers(this)">Languages</span>
                <span class="h1" data-answer="l-a-0,l-t-2,l-o-2,l-m" onclick="controller.revealLetterAnswers(this)">IDE</span>
                <span class="h1" data-answer="l-m-0,l-u,l-s-4,l-i,l-c-2" onclick="controller.revealLetterAnswers(this)">Hobby</span>
                <span class="h1" data-answer="l-a-0,l-p,l-p-2,l-l,l-e-4" onclick="controller.revealLetterAnswers(this)">PC/MAC</span>
                <!-- <span class="label answer">HTML, Sass, CSS <br>JavaScript, PHP, SQL</span> -->
              </div>

            </div>
          </div>

        </div>
      </div>



      <div class="screen screen--menu fade-out" id="screen-menu">
        <div class="screen--container">
          <div class="screen--left screen-collapse">
            <div class="screen-center">
              <nav>

                <a href="/" data-count="1">
                  <div class="overflower t-8x">
                    <span class="h1 menu--item in-overflower">Home</span>
                  </div>
                  <span class="menu--desc">What I've been up to recently</span>
                </a>
                <div class="animation-pictures-block home-animation-block"></div>

                <a href="/portfolio/" data-count="2">
                  <div class="overflower t-9x">
                    <span class="h1 menu--item in-overflower">Portfolio</span>
                  </div>
                  <span class="menu--desc">A sampling of my work</span>

                </a>
                <div class="animation-pictures-block portfolio-animation-block"></div>

                <a href="/writings/"  data-count="3">
                  <div class="overflower t-10x">
                    <span class="h1 menu--item in-overflower">Writings</span>
                  </div>
                  <span class="menu--desc">Words about code and other randomness</span>
                </a>
                <div class="animation-pictures-block writings-animation-block"></div>

                <a href="/me/"  data-count="4">
                  <div class="overflower t-11x">
                    <span class="h1 menu--item in-overflower">Me</span>
                  </div>
                  <span class="menu--desc">The man behind the code</span>

                </a>
              </nav>

            </div>
          </div>
          <div class="screen--right">
            <div class="screen--bottom">

              <div class="overflower t-12x">
                <div class="in-overflower">
                  <span class="label before-line">EMAIL ME</span>
                  <div class="answer"><a href="mailto:joey@w3by.com">joey@w3by.com</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
  <script src="/js/jl.js"></script>
</body>
</html>
