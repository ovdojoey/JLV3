<?php $title="Prefix vs Postfix"; include_once("../partials/writings/writingHeader.php"); ?><h1>Prefix vs Postfix</h1><time>May 2, 2016</time><p>So, I&#39;ve run into a small flub disgused as learning experience.
I was writing up a short post about using
<a href="/writings/plus-plus.php">the increment operator</a>
and I learned something new.</p>
<p>The increment and decrement operators in JS (and many other langauges) have two styles of
functioning, either as <code>postfix</code> or <code>prefix</code>.</p>
<p>If you are like me, you are probably most familar with the postfix style, or
writing your increment as <code>i++</code>.  It&#39;s likely you are
not using the value returned from this function, rather it&#39;s probably in a loop.</p>
<p>But, for giggles, lets say you need to know right away what <code>i++</code> is.</p>
<pre><code>var <span class="hljs-built_in">i</span> = <span class="hljs-number">0</span>; console.<span class="hljs-built_in">log</span>(<span class="hljs-built_in">i</span>++);
</code></pre><p>So, what gets logged? You may think 1, but due to the way postfix works,
you&#39;ll actually see <code>0</code>.</p>
<p>The function returns <code>i</code> before the increment takes place.
That means if you write  <code>var plus = i++</code> and expect to have <code>plus</code> equal <code>i + 1</code> you&#39;ll be in
for a whirl.  Thus, prefix and postfix operators come in to play.</p>
<h2 id="prefix">Prefix</h2>
<p><code>++i</code> returns the incremented value right away.  This allows you to reference
the incremented value before using <code>i</code> later on in the script, like so:</p>
<pre><code>var i = <span class="hljs-number">2016</span>;
var newYear = ++i;
console.<span class="hljs-built_in">log</span>('Next <span class="hljs-built_in">year</span> <span class="hljs-keyword">is</span> ' + newYear + '. The <span class="hljs-built_in">year</span> <span class="hljs-keyword">after</span> <span class="hljs-keyword">is</span> ' + ++i);
</code></pre><h2 id="postfix">Postfix</h2>
<p>Unlike prefix, the variable value is returned before the operation takes place.</p>
<footer><strong>Tagged under:</strong> javascript, php, increment operator</footer><?php include_once("../partials/writings/writingFooter.php"); ?>