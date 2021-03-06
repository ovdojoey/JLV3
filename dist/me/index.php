<?php
$title = 'Joey Lea - Me';
include('../partials/base/header.php'); ?>
  <div class="loader">
    <div class="loader--circle-container">
      <span class="loader--circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 109.33" id="j-load-icon"><defs><style>.a{font-size:150px;fill:transparent;stroke:#50aad0;stroke-miterlimit:10;font-family:Cochin;font-style:italic;}</style></defs><title>letter-j</title><text class="a" transform="translate(5.33 103.33)">J</text></svg>
      </span>
    </div>
  </div>
  <div class="app" id="app" data-scroll="smooth">
    <header class="header dark">
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
    </div>
    <div class="screens">
       <div  class="screen screen--about-me" id="screen-home" data-screen="home">
        <div class="screen--container" style="height: auto; position:absolute;" id="scroll-section-background">

          <div class="screen--left">
            <div class="screen-center">

              <!-- <div class="white-back"></div> -->
              <span class="clip-text h1">29</span>
              <div class="label before-line clip-label">years on earth</div>


            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">
              <span class="clip-text h1" style="letter-spacing: -20px">NFLX</span>
              <div class="label before-line clip-label">currently working @ Netflix</div>

            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">
              <span class="clip-text h1">BAY</span>
              <div class="label before-line clip-label">tech is my neighbor</div>
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

                Hi!  I'm Joey.  I enjoy technology, music, the company of friends, and early mornings with coffee and code.
              </p>



              <span class="label">OLD WEBSITE VERSIONS</span>
              <ul class="no-list">
                <li>
                  <a href="http://old.joeylea.com" target="_blank">v1</a>
                </li>
                <li>
                  <a href="http://v2.joeylea.com" target="_blank">v2</a>
                </li>
                <li>
                  <a href="https://v3.joeylea.com" target="_blank">v3</a>
                </li>
              </ul>



            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">

              <div class="overflower">
                <h1 class="h2 in-overflower color-white">
                  the coder
                </h1>
              </div>
              <p class="intro-desc color-white">
                I design and develop websites and apps.
                I work on both front-end web design and
                back-end object-oriented application development.
              </p>
              <span class="label">LINKS</span>
              <ul class="no-list">
                <li>
                  <a href="https://github.com/ovdojoey">github</a>
                </li>
                <li>
                  <a href="https://codepen.io/ovdojoey/" target="_blank">Codepen</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/joeylea" target="_blank">LinkedIn</a>
                </li>
              </ul>



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
                My early life revolved around baseball, music and computers.

                I worked for AT&amp;T in my senior year of high school
                and throughout college building websites as a hobby on the side.
                In 2011, I graduated from UCF with a degree in Legal Studies.
              </p>
              <p class="intro-desc">
                I somehow landed a coding job out of college and haven't looked back since! I've worked
                for Amazon and I'm currently at Netflix. My passion outside of work is making music (check it in the link below!). Oh &mdash;
                I have a dog named Cooper, he's very awesome.

              </p>
              <span class="label">LINKS</span>
              <ul class="no-list">
                <li>
                  <a href="https://instagram.com/ovdojoey" target="_blank">Instagram</a>
                </li>
                <li>
                  <a href="mailto:ovdojoey@gmail.com.com?Subject=Hi">Say Hi</a>
                </li>
                <li>
                  <a href="https://soundcloud.com/joey-lea/">My Music</a>
                </li>
              </ul>

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
                <span class="letr l-n-0">N</span>
                <span class="letr l-y">Y</span>
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
                <span class="letr l-i-2">I</span>
                <span class="letr l-m">M</span>
                <span class="letr l-e-4">E</span>
                <span class="letr l-a-3">A</span>
                <span class="letr l-g">G</span>
                <span class="letr l-u">U</span>
                <span class="letr l-n-2">N</span>
                <span class="letr l-h-2">H</span>
                <span class="letr l-s-4">S</span>
                <span class="letr l-i">I</span>
                <span class="letr l-c-2">C</span>
                <span class="letr l-t-4">T</span>
                <span class="letr l-o-3">O</span>
                <span class="letr l-e-4">E</span>
              </div>
              <div class="question-letters">
                <span class="h1" data-answer="l-j,l-o,l-e,l-y,l-l,l-e-4,l-a-3" onclick="controller.revealLetterAnswers(this)">Name</span>
                <span class="h1" data-answer="l-t,l-w,l-e,l-n-0,l-t-2,l-y,l-n,l-i-2,l-n-2,l-e-4" onclick="controller.revealLetterAnswers(this)">Age</span>
                <span class="h1" data-answer="l-s,l-t,l-e,l-a,l-k,l-am,l-p-3,l-o-2,l-t-3,l-a-2,l-t-4,l-o-3" onclick="controller.revealLetterAnswers(this)">Food</span>
                <span class="h1" data-answer="l-j,l-s,l-do,l-p-2,l-h,l-p-3,l-do-2,l-s-2,l-a-2,l-s-3,l-s-4" onclick="controller.revealLetterAnswers(this)">Languages</span>
                <span class="h1" data-answer="l-a-0,l-t-2,l-o-2,l-m" onclick="controller.revealLetterAnswers(this)">Editor</span>
                <span class="h1" data-answer="l-m-0,l-u,l-s-4,l-i,l-c-2" onclick="controller.revealLetterAnswers(this)">Hobby</span>
                <span class="h1" data-answer="l-a-0,l-p,l-p-2,l-l,l-e-4" onclick="controller.revealLetterAnswers(this)">PC/MAC</span>
                <!-- <span class="label answer">HTML, Sass, CSS <br>JavaScript, PHP, SQL</span> -->
              </div>

            </div>
          </div>

        </div>
      </div>




      <?php include('../partials/base/menu.php'); ?>


    </div>
  </div>
  <script src="/js/jl.js"></script>
</body>
</html>
