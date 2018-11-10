<?php
$title = 'Joey Lea - Portfolio';
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
      <div class="screen--video video-portfolio" data-screen="home" data-enable="true" role="presentation">
      </div>
    </div>
    <div class="screens">
       <div  class="screen screen--portfolio" id="screen-home" data-screen="home">
        <div class="screen--container" style="height: auto; position:absolute;" id="scroll-section-background">

        </div>
        <div class="screen--container" style="height: auto; position:absolute;" id="scroll-section">
          <div class="screen--full">
            <div class="screen-center">
              <ul class="port-items">

                <li class="port--item" data-color-back="blue">
                  <a href="https://ottoform.joeylea.com/" target="_blank">
                    <span class="number">1</span>
                    <span class="label">SAAS PROJECT</span>
                    <div class="title">Ottoform</div>
                    <div class="img-container">
                      <img src="/img/walrus_port.jpg" title="Ottoform" alt="Ottoform">
                    </div>
                  </a>
                </li>

                <li class="port--item" data-color-back="purple">
                  <a href="https://frnkrok.com/" target="_blank">
                    <span class="number">2</span>
                    <span class="label">CLIENT PROJECT</span>
                    <div class="title">Frnkrok</div>
                    <div class="img-container">
                      <img src="/img/frnkrok_crowd_sq_sm.png" title="Frnkrok" alt="Frnkrok">
                    </div>
                  </a>
                </li>


                <li class="port--item" data-color-back="red">
                  <a href="http://juicedcss.com/" target="_blank">
                    <span class="number">3</span>
                    <span class="label">OPEN SOURCE</span>
                    <div class="title">Juiced</div>
                    <div class="img-container">
                      <img src="/img/juiced_port.jpg" title="Juiced" alt="Juiced">
                    </div>
                  </a>
                </li>

                <li class="port--item" data-color-back="gray">
                  <a href="https://v3.joeylea.com" target="_blank">
                    <span class="number">4</span>
                    <span class="label">PERSONAL PROJECT</span>
                    <div class="title">V3</div>
                    <div class="img-container">
                      <img src="/img/leaves_port.jpg" title="V3" alt="V3">
                    </div>
                  </a>
                </li>

                <li class="port--item" data-color-back="darkblue">
                  <a href="http://compasslawfirm.com"  target="_blank">
                    <span class="number">5</span>
                    <span class="label">CLIENT PROJECT</span>
                    <div class="title">Compass Law</div>
                    <div class="img-container">
                      <img src="/img/orlando_clear_sky_port.jpg" title="Compass Law" alt="Compass Law">
                    </div>
                  </a>
                </li>

                <li class="port--item" data-color-back="white">
                  <a href="https://promoonly.uk" target="_blank">
                    <span class="number">6</span>
                    <span class="label">COMPANY PROJECT</span>
                    <div class="title">PO UK</div>
                    <div class="img-container no-bg">
                      <img src="/img/UKMascotBulldog.png" title="UK Mascot" alt="Promo Only UK">
                    </div>
                  </a>
                </li>

                <li class="port--item" data-color-back="yellow">
                  <a href="http://gowelli.com/" target="_blank">
                    <span class="number">7</span>
                    <span class="label">PERSONAL PROJECT</span>
                    <div class="title">Welli</div>
                    <div class="img-container">
                      <img src="/img/welli.jpg" title="Welli" alt="Welli">
                    </div>
                  </a>
                </li>

                <li class="port--item" data-color-back="red">
                  <a href="http://bowenbankruptcylaw.com" target="_blank">
                    <span class="number">8</span>
                    <span class="label">CLIENT PROJECT</span>
                    <div class="title">Bowen Law</div>
                    <div class="img-container">
                      <img src="/img/trees_port.jpg" title="Anne-Marie Bowen" alt="Bowen Law">
                    </div>
                  </a>
                </li>

                <li class="port--item" data-color-back="darkpurple">
                  <a href="https://promoonly.com" target="_blank">
                    <span class="number">9</span>
                    <span class="label">COMPANY PROJECT</span>
                    <div class="title">Promo Only</div>
                    <div class="img-container">
                      <img src="/img/dj_outside.jpg" title="Promo Only Website" alt="Promo Only">
                    </div>
                  </a>
                </li>

              </ul>
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
