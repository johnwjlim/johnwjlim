(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"postQuery",function(){return d});var i=a(7),n=a.n(i),r=a(0),s=a.n(r),o=(a(152),a(145),a(150)),l=function(e){function t(){return e.call(this)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.contentfulPost;return s.a.createElement(o.a,null,s.a.createElement("h1",null,e.title),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.childMarkdownRemark.html}}))},t}(s.a.Component);t.default=l;var d="386992208"},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return h});var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(142),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(144),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),h=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},144:function(e,t,a){var i;e.exports=(i=a(147))&&i.default||i},146:function(e){e.exports={data:{site:{siteMetadata:{title:"John Lim"}}}}},147:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(49),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){"use strict";var i=a(146),n=a(0),r=a.n(n),s=a(4),o=a.n(s),l=a(151),d=a.n(l),c=a(143),u=a(7),f=a.n(u),h=a(145),p=h.a.h3.withConfig({displayName:"header__Title",componentId:"sc-31ozxh-0"})(["margin:0;"]),m=h.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-1"})(["display:flex;justify-content:space-between;margin:0 auto;max-width:1080px;padding:1.45rem 1.0875rem;"]),g=h.a.div.withConfig({displayName:"header__Nav",componentId:"sc-31ozxh-2"})(["display:flex;margin-top:0.35rem;"]),y=Object(h.a)(c.Link).withConfig({displayName:"header__StyledLink",componentId:"sc-31ozxh-3"})(["color:#484848;text-decoration:none;"]),b=h.a.h5.withConfig({displayName:"header__Subtitle",componentId:"sc-31ozxh-4"})(['font-family:"Avenir Next Light";color:#484848;margin:0 1rem;']),v=function(e){function t(){return e.call(this)||this}return f()(t,e),t.prototype.render=function(){return r.a.createElement("div",{style:{marginTop:"0.6rem",marginBottom:"1.5rem"}},r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(y,{to:"/"},this.props.siteTitle)),r.a.createElement(g,null,r.a.createElement(y,{to:"/"},r.a.createElement(b,null,"About")),r.a.createElement(y,{to:"/"},r.a.createElement(b,null,"Resume")))))},t}(r.a.Component),w=(a(148),a(149),function(e){var t=e.children;return r.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"John has a website! I never thought this day would come!!!"},{name:"keywords",content:"John, Lim, UX, PM, Product, Design, Engineer, User, Experience, Informatics"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(v,{siteTitle:"John Lim"}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:1080,padding:"0px 1.0875rem 1.5rem",paddingTop:0}},t))},data:i})});w.propTypes={children:o.a.node.isRequired};t.a=w},152:function(e,t,a){"use strict";var i=a(35);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),s=i(a(48)),o=i(a(153)),l=i(a(154)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},h=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!f[a]||(f[a]=!0,!1)},p=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+n+"<img "+o+l+t+s+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,n=e.onError,r=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},r,{onLoad:i,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!0,r=!1,o=t.fadeIn,l=h(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!1,r=!0),"undefined"==typeof window&&(i=!1,n=!1),t.critical&&(i=!0,n=!1,r=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:n,IOSupported:r,fadeIn:o,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,h=e.fluid,p=e.fixed,m=e.backgroundColor,b=e.Tag,v="boolean"==typeof m?"lightgray":m,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o);if(h){var S=h;return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(S.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/S.aspectRatio+"%"}}),S.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:S.base64,style:w}),S.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:S.tracedSVG,style:w}),v&&d.default.createElement(b,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(y,{alt:a,title:t,src:S.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},S))}}))}if(p){var L=p,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},r);return"inherit"===r.display&&delete I.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:L.base64,style:w}),L.tracedSVG&&d.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:L.tracedSVG,style:w}),v&&d.default.createElement(b,{title:t,style:{backgroundColor:v,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&d.default.createElement("picture",null,L.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),d.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),d.default.createElement(y,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var E=b;t.default=E}}]);
//# sourceMappingURL=component---src-templates-post-jsx-c2ff34c0042d7093d362.js.map