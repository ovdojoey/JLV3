!function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return i(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var i,o=t("virtual-scroll"),s=r(o);!function(){var t=50,e=2200,n=!1,r=!1,o=!1;setTimeout(function(){var t=[].slice.call(document.documentElement.classList);return-1!==t.indexOf("wf-active")&&(o=!0),n&&o?(i.loadHome(),!1):void(r=!0)},t),setTimeout(function(){r&&i.loadHome()},e),window.addEventListener("DOMContentLoaded",function(){n=!0,r&&(r=!1,i.loadHome())}),window.handleOrientation=function(){setTimeout(function(){window.scrollTo(0,1)},0)},window.addEventListener("load",handleOrientation,!1),window.addEventListener("deviceorientation",handleOrientation,!0)}(),i=function(){function t(){this.slideNumberEle=document.getElementById("slide-number"),this.slideNumberTotalEle=document.getElementById("slide-number-total"),this.allScreens=[].slice.call(document.querySelectorAll(".screen")),this.app=document.getElementById("app"),this.scrollType=this.app.getAttribute("data-scroll")||"screens",this.scrollSettings={slide:1,timeout:null,videoTimeout:null,pos:null,distance:0,timeEase:0,scrollers:[],rafStarted:!1},this.rAFStart=null,this.working=!1,this.resizingScreenTimeout=null,this.vScroll=null,this.screens={loading:document.querySelector(".loader")},this.bindScreens=function(t){var e=t.getAttribute("data-screen");e&&(this.screens[e]=t)},this.allScreens.forEach(this.bindScreens.bind(this)),this.menu=document.querySelector(".screen--menu"),this.menuContainer=document.getElementById("jl-menu"),this.menuOpen=!1,this.screenKeys=Object.keys(this.screens),this.backgrounds={home:document.querySelector(".video-home"),ottoform:document.querySelector(".video-ottoform"),frnkrok:document.querySelector(".video-frnkrok"),jlv3:document.querySelector(".video-jlv3"),juiced:document.querySelector(".video-juiced")},this.slideTouchEvent=function(t){if("touchstart"===t.type&&(this.scrollSettings.pos=t.touches[0].clientY),"touchmove"===t.type&&this.scrollSettings.pos){t.preventDefault();var e=2*(this.scrollSettings.pos-t.touches[0].clientY);e>10?this.slide({},{distance:.55,direction:-1}):-10>e&&this.slide({},{distance:.55,direction:1}),this.scrollSettings.pos=null}},this.wheelDistance=function(t){t||(t=event);var e=t.wheelDelta,n=t.detail;return n?e?e/n/40*n>0?1:-1:-n/3:e?e/120:-t.deltaY/15},this.slide=function(t,e){if(this.working)return!1;var n,r,i=function(t){return t.detail<0?1:t.wheelDelta>0?1:-1},o=this,s=function(t){return o.wheelDistance(t)};if(e?(n=e.direction,r=e.distance):(n=i(t),r=s(t)),.25>=r&&r>=-.25)return this.working=!0,setTimeout(function(){o.working=!1},250),!1;this.working=!0;var a,u,h=this.screenKeys[this.scrollSettings.slide];-1===n?(a=this.scrollSettings.slide+1,a=a===this.screenKeys.length?1:a):1===n&&(a=this.scrollSettings.slide-1,a=0>=a?this.screenKeys.length-1:a),u=this.screenKeys[a],this.toggle(h,u)},this.toggle=function(t,e){if(this.menuOpen===!0)return this.working=!1,!1;window.handleOrientation(),this.screens.home.classList.remove("active"),this.screens[t].classList.remove("slide-in"),this.screens[t].classList.remove("fade-out"),this.screens[t].classList.add("slide-out"),this.screens[e].classList.add("slide-in"),this.screens[e].classList.remove("slide-out");var n=0;for(var r in this.screens)r===e&&(this.slideNumberEle.innerHTML='<span class="number">'+n+"</span>",this.scrollSettings.slide=n),r!==t&&this.screens[r].classList.remove("slide-out"),n++;this.backgrounds[t]&&this.backgrounds[t].setAttribute("data-enable","false"),this.backgrounds[e]&&this.backgrounds[e].setAttribute("data-enable","true");var i=this;this.scrollSettings.timeout=setTimeout(function(){i.working=!1},1500)},this.scroll=function(t){var e=this.wheelDistance(t),n=this.scrollSettings.distance+e;this.scrollSettings.distance=Math.min(0,n),this.scrollSettings.timeEase=performance.now()+400,this.scrollSettings.rafStarted||window.requestAnimationFrame(this.rAF.bind(this))},this.easeInOutQuad=function(t,e,n,r,i){return void 0===i&&(i=1.70158),n*(t/=r)*t+e},this.rAF=function(t){this.scrollSettings.rafStarted=!0,this.rAFStart||(this.rAFStart=t);var e=(t-this.rAFStart,this.scrollSettings.distance),n=this.scrollSettings.timeEase,r=this.easeInOutQuad,i=45;this.scrollSettings.scrollers.forEach(function(o){var s=parseInt(o.getAttribute("data-scrolled"))||0,a=(parseInt(o.getAttribute("data-ss"))||1)*i,u=e*a,h=Math.round(r(t,s,u-s,n));h=Math.max(u,h);var l=h+"px";o.style.webkitTransform="translateY("+l+") translateZ(0)",o.style.MozTransform="translateY("+l+") translateZ(0)",o.style.msTransform="translateY("+l+") translateZ(0)",o.style.OTransform="translateY("+l+") translateZ(0)",o.style.transform="translateY("+l+") translateZ(0)",o.setAttribute("data-scrolled",u)}),window.requestAnimationFrame(this.rAF.bind(this))},this.openMenu=function(){this.menu.classList.remove("fade-out-slow");for(var t in this.screens)this.screens[t].classList.add("fade-out-slow");this.menu.classList.add("fade-in"),this.menuOpen=!0,this.menuContainer.classList.add("activate")},this.closeMenu=function(){this.menu.classList.remove("fade-in");for(var t in this.screens)this.screens[t].classList.remove("fade-out-slow");this.menu.classList.remove("fade-in"),this.menu.classList.add("fade-out-slow"),this.menuOpen=!1,this.menuContainer.classList.remove("activate")},this.toggleMenu=function(){this.menuOpen?this.closeMenu():this.openMenu()},this.addSmoothScrollers=function(){var t=[].slice.call(document.querySelectorAll(".scroller")),e=this;t.forEach(function(t){e.scrollSettings.scrollers.push(t)})},this.resize=function(){clearTimeout(this.resizingScreenTimeout);var t=this;this.resizingScreenTimeout=setTimeout(function(){t.virtualScroll(!0)},100)};var t=0,e=.1,n=0,r=.0725,i=0;this.virtualScroll=function(o){o&&(i=t,this.vScroll.off()),this.vScroll=new s["default"]({firefoxMultiplier:25});for(var a=document.getElementById("scroll-section"),u=(document.getElementById("scroll-section-background"),a.getBoundingClientRect().height),h=[],l=[].slice.call(document.querySelectorAll("[data-actpoint]")),c=0;c<l.length;c++){var f=l[c],d=f.getAttribute("data-actpoint")||null;if(d){var p=JSON.parse(d),g=f.offsetTop-window.innerHeight;if(p){var y=Object.keys(p),v=document.querySelector(p[y[0]]);v&&h.push({point:g,"class":y[0],element:v})}}}this.vScroll.on(function(t){i+=t.deltaY,i=Math.max(-1*(u-window.innerHeight),i),i=Math.min(0,i)});var m=function w(){requestAnimationFrame(w),t+=Math.round((i-t)*e,2),n+=Math.round((i-n)*r,2);for(var o=0;o<h.length;o++){var s=h[o],u=-1*s.point,l=s["class"],c=s.element;u>t?c.classList.add(l):c.classList.remove(l)}var f="translateY("+t+"px)",d=a.style;d.transform=f,d.webkitTransform=f,d.mozTransform=f,d.msTransform=f};m()},this.loadHome=function(){this.screens.loading.classList.add("out"),this.screens.home.classList.add("active"),this.slideNumberTotalEle.innerText=this.screenKeys.length-1,"screens"===this.scrollType&&(document.body.addEventListener("wheel",this.slide.bind(this)),document.body.addEventListener("touchstart",this.slideTouchEvent.bind(this)),document.body.addEventListener("touchmove",this.slideTouchEvent.bind(this))),"smooth"===this.scrollType&&(document.addEventListener("touchmove",function(t){t.preventDefault()}),this.virtualScroll())},this.clearLetterTimeout=null,this.removeLettersState=[],this.instantRemoveState=[],this.clearLetterAnswers=function(t){var e;t?e=t:(e=this.removeLettersState,this.instantRemoveState=[],this.removeLettersState=[]),e.forEach(function(t){t.classList.remove("active"),t.style.left=0})},this.revealLetterAnswers=function(t){clearTimeout(this.clearLetterTimeout),this.instantRemoveState=this.removeLettersState,this.instantRemoveState.length>0&&this.clearLetterAnswers(this.instantRemoveState);for(var e=t.getAttribute("data-answer"),n=e.split(","),r=0;r<n.length;r++){var i=document.querySelector("."+n[r]),o=Math.min(window.innerWidth/18,55),s=r*o+"px";i.classList.add("active"),i.style.left=s,this.removeLettersState.push(i)}this.instantRemoveState=[],this.clearLetterTimeout=setTimeout(this.clearLetterAnswers.bind(this),4400)}}return new t}(),window.controller=i},{"virtual-scroll":12}],2:[function(t,e,n){"use strict";function r(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=0,n=t.length;n>e;++e)u[e]=t[e],h[t.charCodeAt(e)]=e;h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63}function i(t){var e,n,r,i,o,s,a=t.length;if(a%4>0)throw new Error("Invalid string. Length must be a multiple of 4");o="="===t[a-2]?2:"="===t[a-1]?1:0,s=new l(3*a/4-o),r=o>0?a-4:a;var u=0;for(e=0,n=0;r>e;e+=4,n+=3)i=h[t.charCodeAt(e)]<<18|h[t.charCodeAt(e+1)]<<12|h[t.charCodeAt(e+2)]<<6|h[t.charCodeAt(e+3)],s[u++]=i>>16&255,s[u++]=i>>8&255,s[u++]=255&i;return 2===o?(i=h[t.charCodeAt(e)]<<2|h[t.charCodeAt(e+1)]>>4,s[u++]=255&i):1===o&&(i=h[t.charCodeAt(e)]<<10|h[t.charCodeAt(e+1)]<<4|h[t.charCodeAt(e+2)]>>2,s[u++]=i>>8&255,s[u++]=255&i),s}function o(t){return u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}function s(t,e,n){for(var r,i=[],s=e;n>s;s+=3)r=(t[s]<<16)+(t[s+1]<<8)+t[s+2],i.push(o(r));return i.join("")}function a(t){for(var e,n=t.length,r=n%3,i="",o=[],a=16383,h=0,l=n-r;l>h;h+=a)o.push(s(t,h,h+a>l?l:h+a));return 1===r?(e=t[n-1],i+=u[e>>2],i+=u[e<<4&63],i+="=="):2===r&&(e=(t[n-2]<<8)+t[n-1],i+=u[e>>10],i+=u[e>>4&63],i+=u[e<<2&63],i+="="),o.push(i),o.join("")}n.toByteArray=i,n.fromByteArray=a;var u=[],h=[],l="undefined"!=typeof Uint8Array?Uint8Array:Array;r()},{}],3:[function(t,e,n){"use strict";function r(t,e){return function(){return t.apply(e,arguments)}}var i=Object.prototype.toString,o=Object.prototype.hasOwnProperty;e.exports=function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var n in t)o.call(t,n)&&"function"==typeof t[n]&&"[object Function]"==i.call(t[n])&&e.push(n);for(var s=0;s<e.length;s++){var a=e[s];t[a]=r(t[a],t)}}},{}],4:[function(t,e,n){(function(e){"use strict";function r(){try{var t=new Uint8Array(1);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(e){return!1}}function i(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(i()<e)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=s.prototype):(null===t&&(t=new s(e)),t.length=e),t}function s(t,e,n){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return l(this,t)}return a(this,t,e,n)}function a(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?d(t,e,n,r):"string"==typeof e?c(t,e,n):p(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number')}function h(t,e,n,r){return u(e),0>=e?o(t,e):void 0!==n?"string"==typeof r?o(t,e).fill(n,r):o(t,e).fill(n):o(t,e)}function l(t,e){if(u(e),t=o(t,0>e?0:0|g(e)),!s.TYPED_ARRAY_SUPPORT)for(var n=0;e>n;n++)t[n]=0;return t}function c(t,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!s.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|v(e,n);return t=o(t,r),t.write(e,n),t}function f(t,e){var n=0|g(e.length);t=o(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function d(t,e,n,r){if(e.byteLength,0>n||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),s.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=s.prototype):t=f(t,e),t}function p(t,e){if(s.isBuffer(e)){var n=0|g(e.length);return t=o(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||J(e.length)?o(t,0):f(t,e);if("Buffer"===e.type&&V(e.data))return f(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),s.alloc(+t)}function v(t,e){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"binary":case"raw":case"raws":return n;case"utf8":case"utf-8":case void 0:return W(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return H(t).length;default:if(r)return W(t).length;e=(""+e).toLowerCase(),r=!0}}function m(t,e,n){var r=!1;if((void 0===e||0>e)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),0>=n)return"";if(n>>>=0,e>>>=0,e>=n)return"";for(t||(t="utf8");;)switch(t){case"hex":return B(this,e,n);case"utf8":case"utf-8":return M(this,e,n);case"ascii":return D(this,e,n);case"binary":return Y(this,e,n);case"base64":return L(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function w(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function b(t,e,n,r){function i(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}var o=1,s=t.length,a=e.length;if(void 0!==r&&(r=String(r).toLowerCase(),"ucs2"===r||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,s/=2,a/=2,n/=2}for(var u=-1,h=0;s>n+h;h++)if(i(t,n+h)===i(e,-1===u?0:h-u)){if(-1===u&&(u=h),h-u+1===a)return(n+u)*o}else-1!==u&&(h-=h-u),u=-1;return-1}function E(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=e.length;if(o%2!==0)throw new Error("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;r>s;s++){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function _(t,e,n,r){return Z(W(e,t.length-n),t,n,r)}function S(t,e,n,r){return Z(K(e),t,n,r)}function T(t,e,n,r){return S(t,e,n,r)}function A(t,e,n,r){return Z(H(e),t,n,r)}function R(t,e,n,r){return Z(z(e,t.length-n),t,n,r)}function L(t,e,n){return 0===e&&n===t.length?G.fromByteArray(t):G.fromByteArray(t.slice(e,n))}function M(t,e,n){n=Math.min(t.length,n);for(var r=[],i=e;n>i;){var o=t[i],s=null,a=o>239?4:o>223?3:o>191?2:1;if(n>=i+a){var u,h,l,c;switch(a){case 1:128>o&&(s=o);break;case 2:u=t[i+1],128===(192&u)&&(c=(31&o)<<6|63&u,c>127&&(s=c));break;case 3:u=t[i+1],h=t[i+2],128===(192&u)&&128===(192&h)&&(c=(15&o)<<12|(63&u)<<6|63&h,c>2047&&(55296>c||c>57343)&&(s=c));break;case 4:u=t[i+1],h=t[i+2],l=t[i+3],128===(192&u)&&128===(192&h)&&128===(192&l)&&(c=(15&o)<<18|(63&u)<<12|(63&h)<<6|63&l,c>65535&&1114112>c&&(s=c))}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=a}return P(r)}function P(t){var e=t.length;if($>=e)return String.fromCharCode.apply(String,t);for(var n="",r=0;e>r;)n+=String.fromCharCode.apply(String,t.slice(r,r+=$));return n}function D(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)r+=String.fromCharCode(127&t[i]);return r}function Y(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)r+=String.fromCharCode(t[i]);return r}function B(t,e,n){var r=t.length;(!e||0>e)&&(e=0),(!n||0>n||n>r)&&(n=r);for(var i="",o=e;n>o;o++)i+=q(t[o]);return i}function O(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function x(t,e,n){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,n,r,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||o>e)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function I(t,e,n,r){0>e&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);o>i;i++)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function k(t,e,n,r){0>e&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);o>i;i++)t[n+i]=e>>>8*(r?i:3-i)&255}function C(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(0>n)throw new RangeError("Index out of range")}function j(t,e,n,r,i){return i||C(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),Q.write(t,e,n,r,23,4),n+4}function F(t,e,n,r,i){return i||C(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),Q.write(t,e,n,r,52,8),n+8}function N(t){if(t=X(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function X(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function q(t){return 16>t?"0"+t.toString(16):t.toString(16)}function W(t,e){e=e||1/0;for(var n,r=t.length,i=null,o=[],s=0;r>s;s++){if(n=t.charCodeAt(s),n>55295&&57344>n){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(56320>n){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,128>n){if((e-=1)<0)break;o.push(n)}else if(2048>n){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(65536>n){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(1114112>n))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function K(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}function z(t,e){for(var n,r,i,o=[],s=0;s<t.length&&!((e-=2)<0);s++)n=t.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}function H(t){return G.toByteArray(N(t))}function Z(t,e,n,r){for(var i=0;r>i&&!(i+n>=e.length||i>=t.length);i++)e[i+n]=t[i];return i}function J(t){return t!==t}var G=t("base64-js"),Q=t("ieee754"),V=t("isarray");n.Buffer=s,n.SlowBuffer=y,n.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:r(),n.kMaxLength=i(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,e,n){return a(null,t,e,n)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,e,n){return h(null,t,e,n)},s.allocUnsafe=function(t){return l(null,t)},s.allocUnsafeSlow=function(t){return l(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,e){if(!s.isBuffer(t)||!s.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);o>i;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return r>n?-1:n>r?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,e){if(!V(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;n++)e+=t[n].length;var r=s.allocUnsafe(e),i=0;for(n=0;n<t.length;n++){var o=t[n];if(!s.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(r,i),i+=o.length}return r},s.byteLength=v,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;t>e;e+=2)w(this,e,e+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;t>e;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?M(this,0,t):m.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:0===s.compare(this,t)},s.prototype.inspect=function(){var t="",e=n.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,e,n,r,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),0>e||n>t.length||0>r||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0;for(var o=i-r,a=n-e,u=Math.min(o,a),h=this.slice(r,i),l=t.slice(e,n),c=0;u>c;++c)if(h[c]!==l[c]){o=h[c],a=l[c];break}return a>o?-1:o>a?1:0},s.prototype.indexOf=function(t,e,n){if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:-2147483648>e&&(e=-2147483648),e>>=0,0===this.length)return-1;if(e>=this.length)return-1;if(0>e&&(e=Math.max(this.length+e,0)),"string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:b(this,t,e,n);if("number"==typeof t)return s.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,t,e):b(this,[t],e,n);throw new TypeError("val must be string, number or Buffer")},s.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},s.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e=0|e,isFinite(n)?(n=0|n,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(0>n||0>e)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return E(this,t,e,n);case"utf8":case"utf-8":return _(this,t,e,n);case"ascii":return S(this,t,e,n);case"binary":return T(this,t,e,n);case"base64":return A(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;s.prototype.slice=function(t,e){var n=this.length;t=~~t,e=void 0===e?n:~~e,0>t?(t+=n,0>t&&(t=0)):t>n&&(t=n),0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),t>e&&(e=t);var r;if(s.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=s.prototype;else{var i=e-t;r=new s(i,void 0);for(var o=0;i>o;o++)r[o]=this[o+t]}return r},s.prototype.readUIntLE=function(t,e,n){t=0|t,e=0|e,n||x(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return r},s.prototype.readUIntBE=function(t,e,n){t=0|t,e=0|e,n||x(t,e,this.length);for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i;return r},s.prototype.readUInt8=function(t,e){return e||x(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,e){return e||x(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,e){return e||x(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,e){return e||x(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,e){return e||x(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,e,n){t=0|t,e=0|e,n||x(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},s.prototype.readIntBE=function(t,e,n){t=0|t,e=0|e,n||x(t,e,this.length);for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},s.prototype.readInt8=function(t,e){return e||x(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,e){e||x(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt16BE=function(t,e){e||x(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},s.prototype.readInt32LE=function(t,e){return e||x(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,e){return e||x(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,e){return e||x(t,4,this.length),Q.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,e){return e||x(t,4,this.length),Q.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,e){return e||x(t,8,this.length),Q.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,e){return e||x(t,8,this.length),Q.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e=0|e,n=0|n,!r){var i=Math.pow(2,8*n)-1;U(this,t,e,n,i,0)}var o=1,s=0;for(this[e]=255&t;++s<n&&(o*=256);)this[e+s]=t/o&255;return e+n},s.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e=0|e,n=0|n,!r){var i=Math.pow(2,8*n)-1;U(this,t,e,n,i,0)}var o=n-1,s=1;for(this[e+o]=255&t;--o>=0&&(s*=256);)this[e+o]=t/s&255;return e+n},s.prototype.writeUInt8=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},s.prototype.writeUInt16LE=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):I(this,t,e,!0),e+2},s.prototype.writeUInt16BE=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):I(this,t,e,!1),e+2},s.prototype.writeUInt32LE=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):k(this,t,e,!0),e+4},s.prototype.writeUInt32BE=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):k(this,t,e,!1),e+4},s.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e=0|e,!r){var i=Math.pow(2,8*n-1);U(this,t,e,n,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<n&&(s*=256);)0>t&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},s.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e=0|e,!r){var i=Math.pow(2,8*n-1);U(this,t,e,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)0>t&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},s.prototype.writeInt8=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),0>t&&(t=255+t+1),this[e]=255&t,e+1},s.prototype.writeInt16LE=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):I(this,t,e,!0),e+2},s.prototype.writeInt16BE=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):I(this,t,e,!1),e+2},s.prototype.writeInt32LE=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):k(this,t,e,!0),e+4},s.prototype.writeInt32BE=function(t,e,n){return t=+t,e=0|e,n||U(this,t,e,4,2147483647,-2147483648),0>t&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):k(this,t,e,!1),e+4},s.prototype.writeFloatLE=function(t,e,n){return j(this,t,e,!0,n)},s.prototype.writeFloatBE=function(t,e,n){return j(this,t,e,!1,n)},s.prototype.writeDoubleLE=function(t,e,n){return F(this,t,e,!0,n)},s.prototype.writeDoubleBE=function(t,e,n){return F(this,t,e,!1,n)},s.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&n>r&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(0>e)throw new RangeError("targetStart out of bounds");if(0>n||n>=this.length)throw new RangeError("sourceStart out of bounds");if(0>r)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i,o=r-n;if(this===t&&e>n&&r>e)for(i=o-1;i>=0;i--)t[i+e]=this[i+n];else if(1e3>o||!s.TYPED_ARRAY_SUPPORT)for(i=0;o>i;i++)t[i+e]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},s.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0);256>i&&(t=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t=255&t);if(0>e||this.length<e||this.length<n)throw new RangeError("Out of range index");if(e>=n)return this;e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0);var o;if("number"==typeof t)for(o=e;n>o;o++)this[o]=t;else{var a=s.isBuffer(t)?t:W(new s(t,r).toString()),u=a.length;for(o=0;n-e>o;o++)this[o+e]=a[o%u]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":2,ieee754:8,isarray:5}],5:[function(t,e,n){var r={}.toString;e.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},{}],6:[function(t,e,n){(function(t){var n=function(){"use strict";function e(n,r,i,o){function a(n,i){if(null===n)return null;if(0==i)return n;var u,f;if("object"!=typeof n)return n;if(e.__isArray(n))u=[];else if(e.__isRegExp(n))u=new RegExp(n.source,s(n)),n.lastIndex&&(u.lastIndex=n.lastIndex);else if(e.__isDate(n))u=new Date(n.getTime());else{if(c&&t.isBuffer(n))return u=new t(n.length),n.copy(u),u;"undefined"==typeof o?(f=Object.getPrototypeOf(n),u=Object.create(f)):(u=Object.create(o),f=o)}if(r){var d=h.indexOf(n);if(-1!=d)return l[d];h.push(n),l.push(u)}for(var p in n){var g;f&&(g=Object.getOwnPropertyDescriptor(f,p)),g&&null==g.set||(u[p]=a(n[p],i-1))}return u}var u;"object"==typeof r&&(i=r.depth,o=r.prototype,u=r.filter,r=r.circular);var h=[],l=[],c="undefined"!=typeof t;return"undefined"==typeof r&&(r=!0),"undefined"==typeof i&&(i=1/0),a(n,i)}function n(t){return Object.prototype.toString.call(t)}function r(t){return"object"==typeof t&&"[object Date]"===n(t)}function i(t){return"object"==typeof t&&"[object Array]"===n(t)}function o(t){return"object"==typeof t&&"[object RegExp]"===n(t)}function s(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return e.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},e.__objToStr=n,e.__isDate=r,e.__isArray=i,e.__isRegExp=o,e.__getRegExpFlags=s,e}();"object"==typeof e&&e.exports&&(e.exports=n)}).call(this,t("buffer").Buffer)},{buffer:4}],7:[function(t,e,n){var r=t("clone");e.exports=function(t,e){return t=t||{},Object.keys(e).forEach(function(n){"undefined"==typeof t[n]&&(t[n]=r(e[n]))}),t}},{clone:6}],8:[function(t,e,n){n.read=function(t,e,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,h=u>>1,l=-7,c=n?i-1:0,f=n?-1:1,d=t[e+c];for(c+=f,o=d&(1<<-l)-1,d>>=-l,l+=a;l>0;o=256*o+t[e+c],c+=f,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+t[e+c],c+=f,l-=8);if(0===o)o=1-h;else{if(o===u)return s?NaN:(d?-1:1)*(1/0);s+=Math.pow(2,r),o-=h}return(d?-1:1)*s*Math.pow(2,o-r)},n.write=function(t,e,n,r,i,o){var s,a,u,h=8*o-i-1,l=(1<<h)-1,c=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,g=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,
u*=2),e+=s+c>=1?f/u:f*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=l?(a=0,s=l):s+c>=1?(a=(e*u-1)*Math.pow(2,i),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[n+d]=255&a,d+=p,a/=256,i-=8);for(s=s<<i|a,h+=i;h>0;t[n+d]=255&s,d+=p,s/=256,h-=8);t[n+d-p]|=128*g}},{}],9:[function(t,e,n){(function(){var t;t="undefined"!=typeof n&&null!==n?n:this,t.Lethargy=function(){function t(t,e,n,r){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=n?1+Math.abs(n):1.1,this.delay=null!=r?r:150,this.lastUpDeltas=function(){var t,e,n;for(n=[],t=1,e=2*this.stability;e>=1?e>=t:t>=e;e>=1?t++:t--)n.push(null);return n}.call(this),this.lastDownDeltas=function(){var t,e,n;for(n=[],t=1,e=2*this.stability;e>=1?e>=t:t>=e;e>=1?t++:t--)n.push(null);return n}.call(this),this.deltasTimestamp=function(){var t,e,n;for(n=[],t=1,e=2*this.stability;e>=1?e>=t:t>=e;e>=1?t++:t--)n.push(null);return n}.call(this)}return t.prototype.check=function(t){var e;return t=t.originalEvent||t,null!=t.wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,n,r,i,o,s,a;return e=-1===t?this.lastDownDeltas:this.lastUpDeltas,null===e[0]?t:this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1]?!1:(r=e.slice(0,this.stability),n=e.slice(this.stability,2*this.stability),a=r.reduce(function(t,e){return t+e}),o=n.reduce(function(t,e){return t+e}),s=a/r.length,i=o/n.length,Math.abs(s)<Math.abs(i*this.tolerance)&&this.sensitivity<Math.abs(i)?t:!1)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(this)},{}],10:[function(t,e,n){function r(){}r.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){i.off(t,r),e.apply(n,arguments)}var i=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,i=n.length;for(r;i>r;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],i=[];if(r&&e)for(var o=0,s=r.length;s>o;o++)r[o].fn!==e&&r[o].fn._!==e&&i.push(r[o]);return i.length?n[t]=i:delete n[t],this}},e.exports=r},{}],11:[function(t,e,n){"use strict";e.exports=function(t){return JSON.parse(JSON.stringify(t))}},{}],12:[function(t,e,n){"use strict";function r(t){u(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.options=i(t||{},{mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1}),this.options.limitInertia&&(this._lethargy=new s),this._emitter=new o,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null}var i=t("defaults"),o=t("tiny-emitter"),s=t("lethargy").Lethargy,a=t("./support"),u=(t("./clone"),t("bindall-standalone")),h="virtualscroll";e.exports=r;var l={LEFT:37,UP:38,RIGHT:39,DOWN:40};r.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(h,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},r.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||this._lethargy.check(t)!==!1){var n=this._event;n.deltaX=t.wheelDeltaX||-1*t.deltaX,n.deltaY=t.wheelDeltaY||-1*t.deltaY,a.isFirefox&&1==t.deltaMode&&(n.deltaX*=e.firefoxMultiplier,n.deltaY*=e.firefoxMultiplier),n.deltaX*=e.mouseMultiplier,n.deltaY*=e.mouseMultiplier,this._notify(t)}},r.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||this._lethargy.check(t)!==!1){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},r.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},r.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var n=this._event,r=t.targetTouches?t.targetTouches[0]:t;n.deltaX=(r.pageX-this.touchStartX)*e.touchMultiplier,n.deltaY=(r.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=r.pageX,this.touchStartY=r.pageY,this._notify(t)},r.prototype._onKeyDown=function(t){var e=this._event;switch(e.deltaX=e.deltaY=0,t.keyCode){case l.LEFT:case l.UP:e.deltaY=this.options.keyStep;break;case l.RIGHT:case l.DOWN:e.deltaY=-this.options.keyStep;break;default:return}this._notify(t)},r.prototype._bind=function(){a.hasWheelEvent&&document.addEventListener("wheel",this._onWheel),a.hasMouseWheelEvent&&document.addEventListener("mousewheel",this._onMouseWheel),a.hasTouch&&(document.addEventListener("touchstart",this._onTouchStart),document.addEventListener("touchmove",this._onTouchMove)),a.hasPointer&&a.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",document.addEventListener("MSPointerDown",this._onTouchStart,!0),document.addEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&document.addEventListener("keydown",this._onKeyDown)},r.prototype._unbind=function(){a.hasWheelEvent&&document.removeEventListener("wheel",this._onWheel),a.hasMouseWheelEvent&&document.removeEventListener("mousewheel",this._onMouseWheel),a.hasTouch&&(document.removeEventListener("touchstart",this._onTouchStart),document.removeEventListener("touchmove",this._onTouchMove)),a.hasPointer&&a.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,document.removeEventListener("MSPointerDown",this._onTouchStart,!0),document.removeEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&document.removeEventListener("keydown",this._onKeyDown)},r.prototype.on=function(t,e){this._emitter.on(h,t,e);var n=this._emitter.e;n&&n[h]&&1===n[h].length&&this._bind()},r.prototype.off=function(t,e){this._emitter.off(h,t,e);var n=this._emitter.e;(!n[h]||n[h].length<=0)&&this._unbind()},r.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},r.prototype.destroy=function(){this._emitter.off(),this._unbind()}},{"./clone":11,"./support":13,"bindall-standalone":3,defaults:7,lethargy:9,"tiny-emitter":10}],13:[function(t,e,n){"use strict";e.exports=function(){return{hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}}()},{}]},{},[1]);
//# sourceMappingURL=jl.js.map
