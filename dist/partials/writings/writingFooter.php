

              </div>

            </div>
            <div class="screen-center <?php if(!$notOpen) echo 'open-pane'; ?>" id="left-screen-pane">


              <div class="overflower">
                <h1 class="h2 in-overflower">
                  Writings
                </h1>

              </div>

              <div class="split-writings" id="writings-list">
                <div class="writing-left">
                  <span class="label">WORDS</span>
                  <?php include('../partials/writingShortList.html'); ?>
                </div>
                <div class="writing-right">
                  <span class="label">PARAGRAPHS</span>
                  <?php include('../partials/writingLongList.html'); ?>

                </div>

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
