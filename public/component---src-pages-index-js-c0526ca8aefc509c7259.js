(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{206:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(208),o=a(207),s=a(98),l=a(214),c=a(236),d=a(213),u=a.n(d),f=function(){var e=c.data;return i.a.createElement(u.a,{fluid:e.placeholderImage.childImageSharp.fluid})},p=a(211),m=a(221),g=a(222);a.d(t,"default",function(){return b});var h=o.a.div.withConfig({displayName:"pages__Wrapper",componentId:"sc-6kvjaa-0"})(["display:flex;justify-content:space-between;"]),y=o.a.div.withConfig({displayName:"pages__Body",componentId:"sc-6kvjaa-1"})(["max-width:1440px;"]);function b(){var e=Object(s.c)(function(e){return e.menuState});return i.a.createElement(l.a,null,i.a.createElement(p.a,{title:"John Lim"}),i.a.createElement(m.a,null),e?i.a.createElement(g.a,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null,i.a.createElement(y,null,i.a.createElement("h1",null,"Hi people"),i.a.createElement("p",null,"Welcome to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(f,null)))),i.a.createElement(r.a,{to:"/nimbus/"},"Go to page 2 or page page or whatever")))}},208:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(73),o=a.n(r);a.d(t,"a",function(){return o.a});a(209),a(10).default.enqueue,i.a.createContext({})},209:function(e,t,a){var n;e.exports=(n=a(215))&&n.default||n},210:function(e){e.exports={data:{site:{siteMetadata:{title:"Make It Better"}}}}},211:function(e,t,a){"use strict";var n=a(212),i=a(0),r=a.n(i),o=a(217),s=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,l=n.data.site,c=t||l.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Make It Better",description:"John's new portfolio is really a work in progress.",author:"@johnwjlim"}}}}},213:function(e,t,a){"use strict";a(21),a(22),a(13),a(101),a(144),a(219);var n=a(18);t.__esModule=!0,t.default=void 0;var i,r=n(a(78)),o=n(a(79)),s=n(a(145)),l=n(a(146)),c=n(a(0)),d=n(a(15)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),m=function(e){var t=u(e),a=f(t);return p[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,y=h&&window.IntersectionObserver,b=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:r}),c.default.createElement("source",{media:i,srcSet:a,sizes:r}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:n})})}function S(e){return e.map(function(e){var t=e.src,a=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:n})})}function x(e,t){var a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)}).join("")+"<img "+c+o+s+a+n+t+r+i+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,i=e.spreadProps,r=c.default.createElement(O,(0,l.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,n(a),r):r},O=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:i},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});O.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&y&&!t.critical&&!a.seenBefore;var n=t.critical||"eager"==t.loading||h&&(g||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,E=e.itemProp,x=e.loading,I=e.draggable,z=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:z?1:0,transition:N?"opacity "+y+"ms":"none"},s),A="boolean"==typeof h?"lightgray":h,T={transitionDelay:y+"ms"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},N&&T,s,f),_={title:t,alt:this.state.isVisible?"":a,style:j,className:p};if(m){var k=m,V=k[0];return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),A&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:A,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&T)}),V.base64&&c.default.createElement(L,{src:V.base64,spreadProps:_,imageVariants:k,generateSources:S}),V.tracedSVG&&c.default.createElement(L,{src:V.tracedSVG,spreadProps:_,imageVariants:k,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(k),c.default.createElement(O,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:x},V,{imageVariants:k}))}}))}if(g){var M=g,W=M[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},r);return"inherit"===r.display&&delete q.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},A&&c.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:A,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},N&&T)}),W.base64&&c.default.createElement(L,{src:W.base64,spreadProps:_,imageVariants:M,generateSources:S}),W.tracedSVG&&c.default.createElement(L,{src:W.tracedSVG,spreadProps:_,imageVariants:M,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(M),c.default.createElement(O,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:x,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,l.default)({alt:a,title:t,loading:x},W,{imageVariants:M}))}}))}return null},t}(c.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});z.propTypes={resolutions:N,sizes:R,fixed:d.default.oneOfType([N,d.default.arrayOf(N)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var A=z;t.default=A},214:function(e,t,a){"use strict";var n=a(210),i=a(0),r=a.n(i),o=a(207),s=a(15),l=function(e){e.siteTitle;return r.a.createElement(r.a.Fragment,null)};l.propTypes={siteTitle:a.n(s).a.string},l.defaultProps={siteTitle:""};a(216),o.a.div.withConfig({displayName:"layout__Container",componentId:"ii2kc2-0"})(["margin:0 auto;max-width:1600;"]),t.a=function(e){var t=e.children;n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1600,padding:"0px 2.5rem 1.45rem"}},r.a.createElement("main",null,t)))}},215:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),i=a.n(n),r=a(102);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},219:function(e,t,a){"use strict";a(220)("fixed",function(e){return function(){return e(this,"tt","","")}})},220:function(e,t,a){var n=a(1),i=a(9),r=a(41),o=/"/g,s=function(e,t,a,n){var i=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},221:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(0),i=a.n(n),r=a(207),o=a(208),s=a(98),l=r.a.div.withConfig({displayName:"header__Container",componentId:"sc-16x3y5x-0"})(["padding:1.5rem 0;display:flex;justify-content:space-between;"]),c=r.a.div.withConfig({displayName:"header__Wrapper",componentId:"sc-16x3y5x-1"})(["display:flex;"]),d=r.a.h2.withConfig({displayName:"header__Title",componentId:"sc-16x3y5x-2"})(["margin:0;letter-spacing:-0.3px;font-weight:700;color:#111111;font-size:1.4rem;@media (max-width:425px){font-size:1.25rem}"]),u=Object(r.a)(d).withConfig({displayName:"header__SecondaryTitle",componentId:"sc-16x3y5x-3"})(["color:#c5c5c5;font-weight:800;letter-spacing:-0.5px;"]),f=r.a.p.withConfig({displayName:"header__Subtitle",componentId:"sc-16x3y5x-4"})(["font-weight:300;font-size:1.2rem;margin:0;margin-left:1.5rem;padding-left:1.5rem;text-align:bottom;border-left:1px solid #767676;color:#333333;@media (max-width:425px){margin-left:0.9rem;padding-left:0.9rem;font-size:1rem;}"]),p=Object(r.a)(o.a).withConfig({displayName:"header__StyledLink",componentId:"sc-16x3y5x-5"})(["text-decoration:none;"]),m=r.a.a.withConfig({displayName:"header__Menu",componentId:"sc-16x3y5x-6"})(["display:none;margin:0;letter-spacing:-0.3px;font-weight:400;color:#111111;font-size:1.2rem;line-height:1.5;cursor:pointer;@media (max-width:425px){font-size:1rem;}@media (max-width:768px){display:block;}"]);function g(e){var t=Object(n.useState)(!1),a=t[0],r=t[1],o=Object(s.c)(function(e){return e.menuState}),g=Object(s.b)();return Object(n.useEffect)(function(){g({type:"CLOSE"})},[]),i.a.createElement(l,null,i.a.createElement(c,null,i.a.createElement(p,{to:"/",onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)}},a?i.a.createElement(u,null,"Make It Better."):i.a.createElement(d,null,"John Lim")),e.pageTitle?i.a.createElement(i.a.Fragment,null,i.a.createElement(f,null,e.pageTitle)):i.a.createElement(i.a.Fragment,null)),i.a.createElement(m,{onClick:function(){g(o?{type:"CLOSE"}:{type:"OPEN"})}},"Menu"))}},222:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(0),i=a.n(n),r=a(208),o=a(207),s=a(98),l=o.a.nav.withConfig({displayName:"mobile-nav__Container",componentId:"sc-1cxiyc9-0"})([""]),c=o.a.ul.withConfig({displayName:"mobile-nav__List",componentId:"sc-1cxiyc9-1"})(["list-style:none;margin-bottom:3.5rem;text-align:center;"]),d=o.a.li.withConfig({displayName:"mobile-nav__ListItem",componentId:"sc-1cxiyc9-2"})([""]),u=Object(o.a)(r.a).withConfig({displayName:"mobile-nav__StyledLink",componentId:"sc-1cxiyc9-3"})(["text-decoration:none;font-size:1.1rem;line-height:1.7;:hover{text-decoration:underline;}"]),f=o.a.a.withConfig({displayName:"mobile-nav__StyledText",componentId:"sc-1cxiyc9-4"})(["line-height:1.7;color:#111111;margin:0;font-weight:500;font-size:1.1rem;:hover{text-decoration:underline;cursor:pointer;}"]),p=Object(o.a)(f).withConfig({displayName:"mobile-nav__GreyText",componentId:"sc-1cxiyc9-5"})(["color:#767676;font-weight:400;"]);o.a.p.withConfig({displayName:"mobile-nav__DetailText",componentId:"sc-1cxiyc9-6"})(["color:#767676;margin-bottom:3.5rem;line-height:1.5;@media (max-width:768px){display:none}"]);function m(e){var t=Object(n.useState)(e.components),a=t[0],r=(t[1],Object(s.b)());function o(t){e.onChange(t),r({type:"CLOSE"})}return i.a.createElement(l,null,i.a.createElement(c,null,i.a.createElement(d,null,i.a.createElement(u,{onClick:function(){return r({type:"CLOSE"})},to:"/"},"Home")),i.a.createElement(d,null,i.a.createElement(u,{onClick:function(){return r({type:"CLOSE"})},to:"/"},"About")),i.a.createElement(d,null,i.a.createElement(u,{onClick:function(){return r({type:"CLOSE"})},to:"/"},"Resume"))),i.a.createElement(c,null,function(){if(a)return a.map(function(t,n){return n===e.active?i.a.createElement(d,{key:n,onClick:function(){return o(n)}},i.a.createElement(f,null,a[n])):i.a.createElement(d,{key:n,onClick:function(){return o(n)}},i.a.createElement(p,{style:{margin:"0",lineHeight:"1.7"}},a[n]))})}()))}},236:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-c0526ca8aefc509c7259.js.map