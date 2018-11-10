<?php $title="How I Built This Website"; include_once("../partials/writings/writingHeader.php"); ?><h1>How I Built This Website</h1><time>May 1, 2016</time><p>This is one of the cooler websites I&#39;ve worked on.  It has a bit of PHP, and a
lot of JavaScript, HTML and Sass.</p>
<p>First, the best place to figure out how it works is to take a look at the source
code over at <a href="https://github.com/ovdojoey/JLV3">https://github.com/ovdojoey/JLV3</a>.  It&#39;s actually my fourth
official version, but what can you do.</p>
<p>Below, I will cover some of the features that this site has, many of which may be invisible
to the end user.  One of the most debated is scrolljacking.</p>
<h2 id="scrolljacking">Scrolljacking</h2>
<p>When you jack someone&#39;s scroll, people get mad.  And rightfully so. Messing with
the scroll is typically a UX no-no.  But, I decided that it would add to my website
mainly because there is no ability to scroll on this website. Everything you see
on the homepage is contained in the viewport.  Thus, the user cannot actually
scroll at all.  So I&#39;d really consider the technique to be scroll supplementing.
On the other pages scrolling is done using a technique called Virtual Scroll by
Bartek Drozdz.</p>
<h2 id="html5-history">HTML5 History</h2>
<p>Using <code>pushState</code> and <code>replaceState</code> can allow you to modify the URL&#39;s and the
browser history, edging you closer to a web application rather than a set of pages.
I decided to make use of HTML5 History API&#39;s because I
wanted to be able to load content without causing page reloads, and to have full
control over the user experience when they are jumping from article to article.</p>
<h2 id="ecmascript-2015">ECMAScript 2015</h2>
<p>I love some of the new features of ES6 and had to take advantage of them in this
project. To use ES6, I simply added Babel to my gulp tooling setup.</p>
<p>More to come.  If you have any questions, feel free to reach out and ask me!</p>
<footer><strong>Tagged under:</strong> launch, html5, javascript, css</footer><?php include_once("../partials/writings/writingFooter.php"); ?>