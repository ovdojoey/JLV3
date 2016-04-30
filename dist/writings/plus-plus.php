<?php include_once("../partials/writings/writingHeader.php"); ?><h1>++ or +1</h1><time>April 30, 2016</time><p>I&#39;ll admit. This concept is probably
such a simple idea that I shouldn&#39;t even be writing about it.  But,
 I&#39;ve fallen trap to this misconception many times &mdash; alas here I am
typing.</p>
<p>So heres the problem...</p>
<p>Say you have <code>y</code> which is the year, and you want to know what year next year is.</p>
<p>One may think to be terse and write:</p>
<pre><code>var newYear = y++;
</code></pre><p>Or perhaps only I am silly enough to write such things.  Either way, you can probably
spot the problem.</p>
<p>Both <code>newYear</code> and <code>y</code> are equal to <code>y + 1</code>.</p>
<p>That makes for tricky use of <code>y</code> later on.</p>
<?php include_once("../partials/writings/writingFooter.php"); ?>