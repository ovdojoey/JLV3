<?php $title="Building a Mobile App"; include_once("../partials/writings/writingHeader.php"); ?><h1>Building a Mobile App</h1><time>January 30, 2014</time><p class="home-tagline"><span class="tk-futura-pt">Editorial Note: this is an older blog post written back in 2014.</span></p>

<p class="home-tagline" style="text-align: left;">Build a mobile app? &nbsp;Pssh… easy!&nbsp;I mean how hard could it be? I’m a <em><strong>web</strong><b>master&nbsp;</b></em>after all, and&nbsp;they don’t call us&nbsp;masters&nbsp;for nothing. &nbsp;“<em>I</em><i>t will be a slam-dunk,”</i>&nbsp;I told myself.</p>
<p class="home-tagline">After some&nbsp;much needed&nbsp;convincing that coding the mobile app&nbsp;was in fact <em>doable</em>, I dove head-first into the unknown and started my journey of building an app using Javascript, CSS and HTML.</p>
<p class="home-tagline">So, where does the&nbsp;journey begin? &nbsp;For some, they may find themselves&nbsp;Googling&nbsp;fancy words they&nbsp;think they&nbsp;need to know, like&nbsp;<em>Swift, Xcode, iOS SDK, Objective-C and so on. &nbsp;</em>For me, all of that fancy stuff can take a seat in the back. &nbsp;I want to get started as quickly and&nbsp;easily as&nbsp;possible.&nbsp;&nbsp;After I can tackle <em>easy</em>,&nbsp;maybe then I can&nbsp;move on to <em>fancy.&nbsp;</em></p>
<blockquote style="font-size: 16px;"><p class="home-tagline"><i>So, no&nbsp;Google? &nbsp;Yes Google! A</i>lways use Google even when starting. I just want you to feel excited and comfortable about getting started… not overwhelmed, so start with&nbsp;the basics. &nbsp;With that said, I must confess that&nbsp;<i>I am a Google freak</i>. &nbsp;Google is far and away the best resource a programmer has. &nbsp;Hell, it is the best resource a human has. This brings me to&nbsp;<em>my first tip:</em> <b>Google often.</b>&nbsp;Before a problem presents you with a headache,<em> Google it.</em> &nbsp;Getting a strange error? <em>&nbsp;Google it.</em> &nbsp;Got something funky going on&nbsp;<em>down there?</em> <em>Goog</em>… err or maybe a doc is better for that one.</p></blockquote>
<p class="home-tagline">Okay, back to it!</p>
<h2>Where to&nbsp;start?</h2>
<p class="home-tagline">The starting point for me was to make a list of the&nbsp;skills I already had and a list of the&nbsp;skills I would&nbsp;need to learn. Writing things down&nbsp;always helps me remember and organize things, so t<em>ip number&nbsp;two is:<strong>&nbsp;write it down.</strong>&nbsp;</em>Stay organized and make lists.&nbsp;Plus, if you still use pen and paper you can&nbsp;give your keyboard a little break. &nbsp;But don’t worry, you’ll have plenty of things&nbsp;to type out later.</p>
<div class="home-tagline">
    <h3><strong>What I already had:</strong></h3>
  <ul>
  <li>HTML5 experience –<em>&nbsp;Advanced Skill Level</em>
  <ul>
  <li><span style="color: #808080;"><em>&nbsp;</em>I consider myself a champ at HTML5 and enjoy&nbsp;making really awesome websites that shimmer and sparkle. &nbsp;Skill level – <em>nearing</em> e<em>xpert.</em></span></li>
  </ul>
  </li>
  <li>CSS3 &nbsp;experience – &nbsp;<em>Advanced Skill&nbsp;Level</em>
  <ul>
  <li><span style="color: #808080;">SASS&nbsp;is my CSS extension&nbsp;of choice and I have been&nbsp;loading up my&nbsp;sites&nbsp;with&nbsp;animations, and transitions as of late. &nbsp;Skill level –&nbsp;<em>advanced.</em></span></li>
  </ul>
  </li>
  <li>JavaScript experience – <em>Beginner Skill Level</em>
  <ul>
  <li><span style="color: #808080;">I’d like to claim I was more skilled, but my&nbsp;overuse of jQuery&nbsp;made me a bit lazy when it came&nbsp;to coding pure&nbsp;JavaScript. Skill level –&nbsp;<em>beginner</em>.</span></li>
  </ul>
  </li>
  <li>Command-line / Terminal experience –&nbsp;<em>Beginner Skill Level</em>
  <ul>
  <li><span style="color: #808080;">Nearly all of my projects involve some command-line work. Knowing&nbsp;your way around command-line is very beneficial for developers. There are tons of great command-line tools that speed up and improve your workflow. &nbsp;Don’t open&nbsp;VIM though… that’ll be a nightmare. Skill level –&nbsp;<em>beginner.</em></span></li>
  </ul>
  </li>
  </ul>
  <h3><strong>What I needed:</strong></h3>
  <blockquote><p class="home-tagline">How are we&nbsp;suppose to know what skills we&nbsp;need before we know where to start? Google, of course. &nbsp;After searching, your list is likely to look similar to&nbsp;mine.</p></blockquote>
  <ul>
  <li>An idea.
  <ul>
  <li><span style="color: #808080;">This isn’t a skill, but it is important to have. &nbsp;However, I wouldn’t put too&nbsp;much weight on&nbsp;it’s importance. &nbsp;Have you seen flappy birds? &nbsp;The idea certainly is not as fascinating (or addicting) as the end result.&nbsp;</span></li>
  </ul>
  </li>
  <li>Knowledge of programming language(s).
  <ul>
  <li><span style="color: #808080;">While you can get by with some minimal&nbsp;HTML/CSS knowledge, if you also know a server side language, like PHP or ASP, you&nbsp;can&nbsp;drastically improve your app’s functionality. If you do not know any&nbsp;languages, all hope is not lost as there are tools to design apps without knowing a drop of code.&nbsp;</span></li>
  </ul>
  </li>
  <li>iOS Developer Account
  <ul>
  <li><span style="color: #808080;">Apple requires&nbsp;you to purchase a developer license in order to get access to their developer portal. &nbsp;The developer portal lets you provision testing devices and certificates. &nbsp;This step isn’t required if you plan on creating an Android only app.</span></li>
  </ul>
  </li>
  <li>Cordova / PhoneGap
  <ul>
  <li><span style="color: #808080;">This is a required component for&nbsp;our project.&nbsp;Cordova, aka PhoneGap, is useful&nbsp;for&nbsp;developers who wish to write native mobile apps using&nbsp;HTML5, CSS and JavaScript. I’ll cover more on this a bit later.</span></li>
  </ul>
  </li>
  <li>Other stuff I haven’t figured out yet
  <ul>
  <li><span style="color: #808080;">Hey, I’m just getting started too! &nbsp;It wouldn’t be fair of me to claim a completed list, when I may want to add some things later on. &nbsp;For now this list is still in development, much like my app.&nbsp;</span></li>
  </ul>
  </li>
  </ul>
</div>
<h2>Lets start coding!</h2>
<p class="home-tagline">My first thought was to jump right into coding. &nbsp;Bang out the index HTML page and add a whole bunch of CSS to get things moving and shaking.&nbsp;&nbsp;I mean,&nbsp;that’s how you’d make a game right? &nbsp;It was painfully incorrect. &nbsp;This ultimately led me back to&nbsp;<em>tip number one: Google.&nbsp;</em></p>
<blockquote><p class="home-tagline">How to create a 2D JavaScript game</p></blockquote>
<p class="home-tagline">Proper SEO brought&nbsp;me to an article by IBM titled,&nbsp;<em>Build a simple 2D physics engine for JavaScript games</em>.&nbsp;There wasn’t much&nbsp;useful JavaScript code in&nbsp;the article, but the concepts explained&nbsp;were helpful in&nbsp;understanding&nbsp;what goes into a&nbsp;JavaScript based game. &nbsp;You can find the&nbsp;article here:</p>
<p class="home-tagline"><a href="http://www.ibm.com/developerworks/library/wa-build2dphysicsengine/">http://www.ibm.com/developerworks/library/wa-build2dphysicsengine/</a></p>
<p class="home-tagline">&nbsp;</p>
<p class="home-tagline">The next article&nbsp;I stumbled upon was written by Matt Hackett of Lost Decade Games. It was an&nbsp;online tutorial that walks you through the&nbsp;basics of creating a simple JavaScript game. I didn’t read much of the tutorial (sorry Matt) only because I jumped straight to <em>View</em> <em>Source</em>&nbsp;right away. But they were über kind to create the sample code, thanks guys!&nbsp; This code eventually became the starting point for my own JavaScript physics engine.</p>
<p class="home-tagline"><a href="http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/">http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/</a></p>
<h3>I got codez…..</h3>
<p class="home-tagline">After getting a&nbsp;code base I started working on my own additions. &nbsp;First off, I didn’t want their silly monsters or background (sorry Matt). &nbsp;I took out all their graphics and replaced some assets with my own. &nbsp;This process wasn’t to painful and resulted in few errors. &nbsp;Oh! – The cool thing about JavaScript games is that you can test them (mostly) right from your file browser. &nbsp;Just open the index file and <b><i>bam</i></b><i></i> you should be able to play the game. <em>&nbsp;Actual testing should be done using Cordova and emulation&nbsp;</em>but more on that later.</p>
<h3>Cordova build</h3>
<p class="home-tagline"><i>In 2011, Adobe Inc. bought PhoneGap, a popular software that used web technologies to build native apps. After the purchase they gave the codebase&nbsp;to the Apache Foundation where it was to&nbsp;remain free and open source.&nbsp;Currently, Cordova and PhoneGap are identical pieces of software.</i></p>
<p class="home-tagline">At this point, Cordova was tested&nbsp;and&nbsp;working on my machine.&nbsp;The Cordova docs are very straight forward and they go over&nbsp;the installation process thoroughly. &nbsp;I only had a few hiccups during setup, mainly when I added the Android platform. Actually, installing the emulators wasn’t fun either. &nbsp;Finally I was able to run <em>cordova build</em> and&nbsp;open&nbsp;the project in Xcode.</p>
<h2>Success?????</h2>
<p class="home-tagline">Well no, not really… &nbsp;BUT! I have something moving; things are happening; this is the beginnings of a game, albeit a glitchy one.</p>
<p class="home-tagline">Check out the project and grab all my source code at:</p>
<p class="home-tagline"><a href="http://www.envisionary.co/projects/power-jumper/" target="_blank">http://www.envisionary.co/projects/power-jumper/</a></p>
<p class="home-tagline" style="padding-left: 30px;"><strong>Controls</strong>:&nbsp;<em>tap </em>to move side to side &nbsp;– and – &nbsp;<em>tap and hold</em> to launch upwards</p>
<p class="home-tagline" style="padding-left: 30px;">The <strong>blue blocks are good</strong> for your ship, but stay away from all the other blocks – they do damage and slow you down.</p>
<p class="home-tagline">Keep in mind I am still toying with this code and by no means is it finished (or any good). &nbsp;I would love to make everything run a bit smoother and start adding sound effects and levels.</p>
<p class="home-tagline">Stay tuned for more.</p>
<?php include_once("../partials/writings/writingFooter.php"); ?>