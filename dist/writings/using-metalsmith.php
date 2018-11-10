<?php $title="Using Metalsmith"; include_once("../partials/writings/writingHeader.php"); ?><h1>Using Metalsmith</h1><time>January 30, 2016</time><p><strong>UPDATE</strong> I still enjoy Metalsmith.  But, as of right now it&#39;s not part of my build.
I was able to get the same functionality using my own <a href="https://github.com/ovdojoey/doloop" target="_blank">doloop npm module</a>.</p>
<p class="home-tagline">
  Building this website was my first time using Metalsmith, and I must say... I really like it!
  I think there are a few things that I need to improve in my flow
  (like the file watchers -- currently I have to stop Node and restart to rebuild when a collection template or post changes; all other file changes are watched and rebuilt properly).
</p>
<p class="home-tagline">
  There has been a few headaches though, namely Metalsmith Collections and working with the underlying data that gets created.  But, for the most part it&#39;s been a fun and smooth web building experience and it&#39;s helped me get better at tooling and project workflow.
  My existing workflow was a simple gulpfile, and while this is similar, I believe Metalsmith is much more versatile and useful.
</p>
<p class="home-tagline">
  I especially love the fact that I can add a simple HTML file that is tagged as a blog post or portfolio post, and the site rebuilds and takes care of itself to link assets together.
</p>
<p class="home-tagline">
  I hope to be making another blog post about using Metalsmith with more in-depth techincal discussions.  Stay tuned.
</p>
<footer><strong>Tagged under:</strong> javascript, metalsmith</footer><?php include_once("../partials/writings/writingFooter.php"); ?>