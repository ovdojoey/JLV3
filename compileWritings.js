var DoLoop = require('doloop');
var marked = require('marked');
var fm = require('front-matter');
var fs = require('fs');

var lastFilename;
var nextFilename;
var shortList = '';
var longList = '';
var loop = 0;
DoLoop()
.cd('writings/')
.readEncoding('utf8')
.loop( function( filename, data ) {

  var _nextLoopIdx = loop + 1;
  var _prevLoopIdx = loop - 1;
  _prevLoopIdx = (_prevLoopIdx < 0) ? 0 : _prevLoopIdx;


  // var _nextFile = this.allFiles[_nextLoopIdx];
  // if ( nextFile ) {
  //
  //
  //
  // }



  var content = fm(data);
  content.body = marked(content.body);
  var type = content.attributes.type;
  var url = content.attributes.url;
  var date = content.attributes.date;
  var name = content.attributes.name;
  var bodyContent = '<?php include_once("../partials/writings/writingHeader.php"); ?><h1>' + name + '</h1><time>' + date + '</time>' + content.body + '<?php include_once("../partials/writings/writingFooter.php"); ?>';

  if ( type === 'short' ) {
    shortList += '<li class="project-grid-li"><a href="/writings/' + url + '">' + name + '</a></li>';
  }
  else if ( type === 'long' ) {
    longList += '<li class="project-grid-li"><a href="/writings/' + url + '">' + name + '</a></li>';
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
