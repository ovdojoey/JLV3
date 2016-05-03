<?php $title="++ or +1"; include_once("../partials/writings/writingHeader.php"); ?><h1>++ or +1</h1><time>April 30, 2016</time><p>I&#39;ll admit. This concept is probably
such a simple one that I shouldn&#39;t even be writing about it.  But,
 I&#39;ve fallen trap to this misconception many times &mdash; alas here I am
typing.</p>
<p>So heres the problem...</p>
<p>Say you have <code>y</code> which is the year, and you want to know what year next year is.</p>
<p>One may think to be terse and write:</p>
<pre><code><span class="hljs-keyword">var</span> newYear = ++y;
</code></pre><p>Note: you may be tempted to use y++. But, y++ won&#39;t work here. Why you ask?
Because of <a href="/writings/prefix-vs-postfix.php">Prefix vs Postfix</a>.</p>
<p>Perhaps only I am silly enough to write such things.  Either way, you can probably
spot the problem.</p>
<p>Both <code>newYear</code> and <code>y</code> are equal to <code>y + 1</code>.</p>
<p>That makes for tricky use of <code>y</code> later on.</p>
<?php include_once("../partials/writings/writingFooter.php"); ?>