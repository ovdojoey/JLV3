var DoLoop = require('doloop');
var marked = require('marked');
var fm = require('front-matter');
var fs = require('fs');

marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

var lastFilename;
var nextFilename;
var shortList = '';
var longList = '';
var loop = 0;
DoLoop()
.cd('writings/')
.readEncoding('utf8')
.sortBy('asc')
.loop( function( filename, data ) {

  var _nextLoopIdx = loop + 1;
  var _prevLoopIdx = loop - 1;
  _prevLoopIdx = (_prevLoopIdx < 0) ? 0 : _prevLoopIdx;

  var content = fm(data);
  var words = content.body;
  var wordsCount = words.split(' ').length;
  content.body = marked(content.body);
  var type = content.attributes.type;
  var url = content.attributes.url;
  var date = content.attributes.date;
  var name = content.attributes.name;
  /*
  <div class="overflower t-5x">
    <a href="#" class="in-overflower" onclick="controller.toggle('home', 'ottoform');">
      <span class="title">OTTOFORM</span>
      <span class="description">Setup contact forms in seconds</span>
    </a>
  </div>*/

  var liHeader = '<li class="project-grid-li"><div class="overflower t-'+ loop +'x"><a class="in-overflower" href="/writings/' + url + '"><span class="title">';
  var liFooter = '</span><span class="description">' + wordsCount + ' words. <strong>Under</strong>: ' + content.attributes.tags  + '</span></a></div></li>';

  var bodyContent = '<?php $title="' + name.replace('"','&quot;') + '"; include_once("../partials/writings/writingHeader.php"); ?><h1>' + name + '</h1><time>' + date + '</time>' + content.body + '<?php include_once("../partials/writings/writingFooter.php"); ?>';

  if ( type === 'short' ) {
    shortList += liHeader + name + liFooter;
  }
  else if ( type === 'long' ) {
    longList += liHeader + name + liFooter;
  }

  fs.writeFile('dist/writings/' + url, bodyContent, function (err) {
    if (err) return console.log(err);
  });

  lastFilename = filename;

  loop++;
})
.build(function(){

  if ( shortList )
    shortList = '<ul class="project-grid">' + shortList + '</ul>';

  if ( longList )
    longList = '<ul class="project-grid">' + longList + '</ul>';

  fs.writeFile('dist/partials/writingShortList.html', shortList, function (err) {
    if (err) return console.log(err);
  });
  fs.writeFile('dist/partials/writingLongList.html', longList, function (err) {
    if (err) return console.log(err);
  });

});
