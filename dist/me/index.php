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
              <span class="clip-text h1">27</span>
            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">
              <span class="clip-text h1">40</span>
            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">
              <span class="clip-text h1">27</span>

            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">
              <span class="clip-text h1">27</span>

            </div>
          </div>

        </div>
        <div class="screen--container" style="height: auto; position:absolute;" id="scroll-section">
          <div class="screen--left">
            <div class="screen-center">


              <div class="overflower">
                <h1 class="h2 in-overflower">
                  The man behind the code
                </h1>
              </div>

            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center">

              <div class="overflower" data-actpoint='{ "fadeIn" : ".video-code" }' >
                <h1 class="h2 in-overflower">
                  the coder
                </h1>
              </div>
              <p class="intro-desc" data-actpoint='{ "fadeOut" : ".video-about-me" }'>
                I help people create exceptional websites.
                I prefer to design with code, not Photoshop.  I am meticulous and enjoy the tiny details.
                I am highly skilled in both front-end web design and
                back-end software development.
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
                I graduated from UCF.
                I have lived in Orlando, Florida my whole life.
                I have a dog named Duke who is pretty awesome.
              </p>

            </div>
          </div>

          <div class="screen--left">
            <div class="screen-center" >
              <div class="overflower">
                <h1 class="h2 in-overflower">
                  shorts
                </h1>
              </div>
              <span class="h1">Name</span>
              <span class="label answer">Joey</span>
              <span class="h1">Age</span>
              <span class="label answer">26</span>
              <span class="h1">Projects</span>
              <span class="label answer">30+</span>
              <span class="h1">Languages</span>
              <span class="label answer">HTML, Sass, CSS <br>JavaScript, PHP, SQL</span>


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
