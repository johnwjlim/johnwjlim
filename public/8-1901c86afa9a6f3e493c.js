(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(t,e,s){"use strict";var i=s(35);e.__esModule=!0,e.default=void 0;var n,r=i(s(7)),a=i(s(48)),o=i(s(153)),u=i(s(154)),l=i(s(0)),c=i(s(4)),d=function(t){var e=(0,u.default)({},t);return e.resolutions&&(e.fixed=e.resolutions,delete e.resolutions),e.sizes&&(e.fluid=e.sizes,delete e.sizes),e},p={},f=function(t){var e=d(t),s=e.fluid?e.fluid.src:e.fixed.src;return!!p[s]||(p[s]=!0,!1)},h=[];var y=function(t,e){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(t){t.forEach(function(t){h.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(n.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),n).observe(t),h.push([t,e])},g=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',s=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.srcSetWebp?"<source type='image/webp' srcSet=\""+t.srcSetWebp+'" '+s+"/>":"",n=t.srcSet?'<source srcSet="'+t.srcSet+'" '+s+"/>":"",r=t.title?'title="'+t.title+'" ':"",a=t.alt?'alt="'+t.alt+'" ':'alt="" ',o=t.width?'width="'+t.width+'" ':"",u=t.height?'height="'+t.height+'" ':"",l=t.opacity?t.opacity:"1";return"<picture>"+i+n+"<img "+o+u+e+a+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=l.default.forwardRef(function(t,e){var s=t.style,i=t.onLoad,n=t.onError,r=(0,o.default)(t,["style","onLoad","onError"]);return l.default.createElement("img",(0,u.default)({},r,{onLoad:i,onError:n,ref:e,style:(0,u.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(t){function e(e){var s;s=t.call(this,e)||this;var i=!0,n=!0,r=!1,o=e.fadeIn,u=f(e);!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!1,r=!0),"undefined"==typeof window&&(i=!1,n=!1),e.critical&&(i=!0,n=!1,r=!1);var c=!(s.props.critical&&!s.props.fadeIn);return s.state={isVisible:i,imgLoaded:n,IOSupported:r,fadeIn:o,hasNoScript:c,seenBefore:u},s.imageRef=l.default.createRef(),s.handleImageLoaded=s.handleImageLoaded.bind((0,a.default)((0,a.default)(s))),s.handleRef=s.handleRef.bind((0,a.default)((0,a.default)(s))),s}(0,r.default)(e,t);var s=e.prototype;return s.componentDidMount=function(){if(this.props.critical){var t=this.imageRef.current;t&&t.complete&&this.handleImageLoaded()}},s.handleRef=function(t){var e=this;this.state.IOSupported&&t&&y(t,function(){e.setState({isVisible:!0})})},s.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},s.render=function(){var t=d(this.props),e=t.title,s=t.alt,i=t.className,n=t.style,r=void 0===n?{}:n,a=t.imgStyle,o=void 0===a?{}:a,c=t.placeholderStyle,p=void 0===c?{}:c,f=t.fluid,h=t.fixed,y=t.backgroundColor,b=t.Tag,v="boolean"==typeof y?"lightgray":y,k=(0,u.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,p),S=(0,u.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o);if(f){var w=f;return l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,u.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(w.srcSet)},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&l.default.createElement(m,{alt:this.state.isVisible?"":s,title:e,src:w.base64,style:k}),w.tracedSVG&&l.default.createElement(m,{alt:this.state.isVisible?"":s,title:e,src:w.tracedSVG,style:k}),v&&l.default.createElement(b,{title:e,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement("picture",null,w.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:w.srcSetWebp,sizes:w.sizes}),l.default.createElement("source",{srcSet:w.srcSet,sizes:w.sizes}),l.default.createElement(m,{alt:s,title:e,src:w.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,u.default)({alt:s,title:e},w))}}))}if(h){var C=h,E=(0,u.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},r);return"inherit"===r.display&&delete E.display,l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:E,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},C.base64&&l.default.createElement(m,{alt:this.state.isVisible?"":s,title:e,src:C.base64,style:k}),C.tracedSVG&&l.default.createElement(m,{alt:this.state.isVisible?"":s,title:e,src:C.tracedSVG,style:k}),v&&l.default.createElement(b,{title:e,style:{backgroundColor:v,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),this.state.isVisible&&l.default.createElement("picture",null,C.srcSetWebp&&l.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),l.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),l.default.createElement(m,{alt:s,title:e,width:C.width,height:C.height,src:C.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,u.default)({alt:s,title:e,width:C.width,height:C.height},C))}}))}return null},e}(l.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:k,fixed:v,fluid:k,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var S=b;e.default=S},173:function(t,e,s){var i;i=function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,s),n.loaded=!0,n.exports}return s.m=t,s.c=e,s.p="",s(0)}([function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}}();var n=s(1),r=s(3),a=function(){function t(e,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n.initializer.load(this,s,e),this.begin()}return i(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),n=1;!0!==this.pause.status?this.timeout=setTimeout(function(){e=r.htmlParser.typeHtmlChars(t,e,s);var i=0,a=t.substr(e);if("^"===a.charAt(0)&&/^\^\d+/.test(a)){var o=1;o+=(a=/\d+/.exec(a)[0]).length,i=parseInt(a),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+o),s.toggleBlinking(!0)}if("`"===a.charAt(0)){for(;"`"!==t.substr(e+n).charAt(0)&&!(e+ ++n>t.length););var u=t.substring(0,e),l=t.substring(u.length+1,e+n),c=t.substring(e+n+1);t=u+l+c,n--}s.timeout=setTimeout(function(){s.toggleBlinking(!1),e===t.length?s.doneTyping(t,e):s.keepTyping(t,e,n),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))},i)},i):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=s;var i=t.substr(0,e);this.replaceText(i),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){s.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=r.htmlParser.backSpaceHtmlChars(t,e,s);var i=t.substr(0,e);if(s.replaceText(i),s.smartBackspace){var n=s.strings[s.arrayPos+1];n&&i===n.substr(0,e)?s.stopNum=e:s.stopNum=0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))},i)}else this.setPauseStatus(t,e,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=a,t.exports=e.default},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},n=function(){function t(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}}();var r,a=s(2),o=(r=a)&&r.__esModule?r:{default:r},u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"load",value:function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=i({},o.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var n=Array.prototype.slice.apply(t.stringsElement.children),r=n.length;if(r)for(var a=0;a<r;a+=1){var u=n[a];t.strings.push(u.innerHTML.trim())}}for(var a in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[a]=a;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var e=document.createElement("style");e.type="text/css",e.setAttribute("data-typed-js-css",!0);var s="";t.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==e.length&&(e.innerHTML=s,document.body.appendChild(e))}}}]),t}();e.default=u;var l=new u;e.initializer=l},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}};e.default=s,t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}}();var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return s(t,[{key:"typeHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var i=t.substr(e).charAt(0);if("<"===i||"&"===i){var n="";for(n="<"===i?">":";";t.substr(e+1).charAt(0)!==n&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,s){if("html"!==s.contentType)return e;var i=t.substr(e).charAt(0);if(">"===i||";"===i){var n="";for(n=">"===i?"<":"&";t.substr(e-1).charAt(0)!==n&&!(--e<0););e--}return e}}]),t}();e.default=i;var n=new i;e.htmlParser=n}])},t.exports=i()}}]);
//# sourceMappingURL=8-1901c86afa9a6f3e493c.js.map