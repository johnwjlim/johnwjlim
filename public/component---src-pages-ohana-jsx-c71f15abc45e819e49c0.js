(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return _});var n=a(6),i=a.n(n),o=a(0),l=a.n(o),r=a(187),s=a.n(r),d=a(179),c=a(186),u=d.a.div.withConfig({displayName:"ohana__Container",componentId:"sc-1l64mqd-0"})(["margin-top:5em"]),h=d.a.div.withConfig({displayName:"ohana__ImageWrapper",componentId:"sc-1l64mqd-1"})(["margin-bottom:2.5rem;"]),m=d.a.div.withConfig({displayName:"ohana__Content",componentId:"sc-1l64mqd-2"})(["max-width:750px;margin:0 auto;"]),p=d.a.h2.withConfig({displayName:"ohana__Tagline",componentId:"sc-1l64mqd-3"})(["font-family:Tiempos,serif;font-weight:400;letter-spacing:-1.5px;font-size:40px;color:#484848;line-height:1.3;margin-top:3.5rem;@media (max-width:768px){font-size:36px;}@media (max-width:425px){font-size:28px;}"]),f=d.a.p.withConfig({displayName:"ohana__Timeline",componentId:"sc-1l64mqd-4"})(["font-style:italic;line-height:1.5;color:#767676;margin-bottom:0;@media (max-width:425px){font-size:18px;}"]),g=d.a.div.withConfig({displayName:"ohana__Detail",componentId:"sc-1l64mqd-5"})(["margin-top:2em;margin-bottom:2em;"]),y=d.a.div.withConfig({displayName:"ohana__Dash",componentId:"sc-1l64mqd-6"})(["margin-top:2em;width:60px;border-bottom:solid 3px #484848;"]),w=d.a.div.withConfig({displayName:"ohana__Section",componentId:"sc-1l64mqd-7"})(["margin:2rem 0;max-width:40rem;"]),b=d.a.h3.withConfig({displayName:"ohana__Heading",componentId:"sc-1l64mqd-8"})(["font-family:neue-haas-unica,sans-serif;font-weight:500;font-size:18px;margin-bottom:2rem;"]),E=d.a.ul.withConfig({displayName:"ohana__List",componentId:"sc-1l64mqd-9"})(["margin-bottom:0;"]),v=d.a.li.withConfig({displayName:"ohana__ListItem",componentId:"sc-1l64mqd-10"})(["margin:0.8em 0;"]),x=d.a.div.withConfig({displayName:"ohana__Wrapper",componentId:"sc-1l64mqd-11"})(["margin:3em 0;"]),I=d.a.p.withConfig({displayName:"ohana__Oblique",componentId:"sc-1l64mqd-12"})(["font-style:italic;color:#767676;"]),k=d.a.h4.withConfig({displayName:"ohana__Opener",componentId:"sc-1l64mqd-13"})(["font-family:neue-haas-unica;font-size:21px;font-weight:400;line-height:1.5em;letter-spacing:-0.5px;"]),S=function(e){function t(){return e.call(this)||this}return i()(t,e),t.prototype.render=function(){return l.a.createElement(c.a,null,l.a.createElement(u,null,l.a.createElement(h,null,l.a.createElement(s.a,{style:{maxHeight:"500px",minHeight:"350px"},fluid:this.props.data.echohero.childImageSharp.fluid})),l.a.createElement(m,null,l.a.createElement(p,null,"How do you reimagine household chore management for the 21st century?"),l.a.createElement(g,null,l.a.createElement(f,null,"Project Title: Ohana"),l.a.createElement(f,null,"Timeline: Spring 2018")),l.a.createElement(w,null,l.a.createElement(I,null,"This was a group project done in the context of a class led by Microsoft Senior Researcher, Andrew Begel. The following is a write-up based on both our collective experiences and my personal opinions."),l.a.createElement(I,null,"Our course site can be found ",l.a.createElement("a",{href:"http://andrewbegel.com/info461/",target:"_blank"},"here"),". ",l.a.createElement("br",null)," Check out our GitHub repository ",l.a.createElement("a",{href:"https://github.com/INFO461-Team-Go/ohana",target:"_blank"},"here"),".")),l.a.createElement(y,null),l.a.createElement(w,null,l.a.createElement(k,null,"Leaving the comfortable and tidy homes of your parents and moving into a house or apartment with others can be a stressful and disorganized ordeal. Splitting up responsibilities among your housemates oftentimes leads to conflict and overall awkwardness. Chores around the house can go unfinished, which leads to dirty and unhealthy living environments."),l.a.createElement("p",null,"The problem that my team chose to address was the lack of a modern means of responsibility sharing that is convenient and reliable. We felt that current whiteboard chore sheets depend too much on manual re-drawing while verbal organization is inherently unorganized.")),l.a.createElement(w,null,l.a.createElement(b,null,"Stakeholders"),l.a.createElement("p",null,"Our first step towards finding a solution to the problem outlined above was identifying the primary stakeholders for our application. After brainstorming with the team, we identified two stakeholders, young adults and early tech adopters. Our reasoning is that young adults are the most likely to have roommates. This includes college students and recent grads.")),l.a.createElement(w,null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Primary Stakeholders"),l.a.createElement("th",null,"Needs/Expectations")),l.a.createElement("tr",null,l.a.createElement("td",null,"Young Adults"),l.a.createElement("td",null,l.a.createElement(E,null,l.a.createElement(v,null,"A way to ensure their house/apartment stays clean"),l.a.createElement(v,null,"Needs a easy and convenient way to gather information due to limited time")))),l.a.createElement("tr",null,l.a.createElement("td",null,"Early Tech Adopters"),l.a.createElement("td",null,l.a.createElement(E,null,l.a.createElement(v,null,"A way to integrate the latest gadget into their everyday lives")))))),l.a.createElement(w,null,l.a.createElement(b,null,"Proposed Solution"),l.a.createElement("p",null,"We intended to create an Alexa skill that would enable roommates and housemates to efficiently manage their household responsibilities. The primary means of adjusting settings for the skill was through a web app which we developed in conjunction with the skill. Our users will initially use a web application to add users and chores."),l.a.createElement("p",null,"We want to present the skill as a convenience over traditional ways of managing chores. We want our users to figure out their chores without pulling out a device or going to a computer. Because of Alexa’s omnipresence (in the room, a few feet away from them), users are able to figure out their chores seamlessly."),l.a.createElement("p",null,"We recognized early on that it would likely be challenging for users to setup and input chores soley through voice interaction. Therefor, we decided to create a seperate web app that would declare and assign users and chores for the Alexa skill through a broswer-based interface.")),l.a.createElement(w,null,l.a.createElement(b,null,"Implementation"),l.a.createElement("p",null,"The implementation aspect of this project was a challenge for all of us, as none of us had any experience working with Amazon Alexa or the Amazon ecosystem for that matter."),l.a.createElement("p",null,"I was primarily responsible for the implementation of the web-app as well as setting up the Firebase Database, which would also then serve as the main conduit between the web-app and Alexa skill."))),l.a.createElement(x,null,l.a.createElement(s.a,{fluid:this.props.data.screen1.childImageSharp.fluid,style:{maxWidth:"1000px",maxHeight:"600px",margin:"0.5em auto"}}),l.a.createElement(s.a,{fluid:this.props.data.screen2.childImageSharp.fluid,style:{maxWidth:"1000px",maxHeight:"600px",margin:"0.5em auto"}})),l.a.createElement(m,null,l.a.createElement(w,null,l.a.createElement("p",null,"The biggest obstacle that we faced was getting the Alexa skill to work as none of us had any experience working with Amazon Lambda or even Node.js for that matter. We struggled with callback hell due to our lack of experience working with asynchronous javascript."),l.a.createElement("p",null,"As I had some experience working with Firebase Cloud Functions, I was able to contribute towards the debug process by identifying async issues as well as suggesting workarounds for them."),l.a.createElement("p",null,"I eventually spent much of the latter part of the project working on bug triage as I realised that I was fairly adept at finding hacks and workarounds for problems that we were facing."),l.a.createElement("p",null)),l.a.createElement(w,null,l.a.createElement(b,null,"Voice-based Interactions"),l.a.createElement("p",null,"Desinging a voice-based UI for our Alexa skill was an interesting challenge to say the least. None of us any experience with a voice-based home assistant, let alone designed for one."),l.a.createElement("p",null,"We had an initial sort-of user flow for our Alexa skill, which was almost immediately tossed as we quickly ran into limitations on what we could get Alexa to do. We were forced to limit ourselves to basic primitive utterances and responses."),l.a.createElement("p",null,"Another challenge that we encountered was one that was inherent to almost any voice-based UI; there were literally a hundred and one ways a user could potentially approach something as simple as asking Alexa what chore our user has to perform. We tried to mitigate this by sending out a survey to our entire class in an attempt to compile as many sample utterances as possible"),l.a.createElement("p",null,"The following table provides a snapshot of the possible commands and utterances that our Alexa skill could handle.")),l.a.createElement(w,null,l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"To find out what is assigned to user"),l.a.createElement("th",null,"To mark task as complete")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(E,null,l.a.createElement(v,null,"Alexa, ask Ohana what am I supposed to do"),l.a.createElement(v,null,"Alexa, ask Ohana what I have to do"),l.a.createElement(v,null,"Alexa, ask Ohana to tell me what I have to do"),l.a.createElement(v,null,"Alexa, ask Ohana am I supposed to do anything"),l.a.createElement(v,null,"Alexa, ask Ohana do I have to do anything"))),l.a.createElement("td",null,l.a.createElement(E,null,l.a.createElement(v,null,"Alexa, tell Ohana I finished my task"),l.a.createElement(v,null,"Alexa, ask Ohana to mark my task as done"),l.a.createElement(v,null,"Alexa, tell Ohana I am done with my task"),l.a.createElement(v,null,"Alexa, tell Ohana to mark my task as done"),l.a.createElement(v,null,"Alexa, tell Ohana I am done with my chore")))))),l.a.createElement(w,null,l.a.createElement(b,null,"Reflection"),l.a.createElement("p",null,"The fact that we got the thing to work at all was a pleasant surprise to all of us as a group, and was a testemant to our persistence in the fact of seemingly insurmountable challenges. There were occasions where even our TA was stumped by the bugs that we were facing. The next to useless documentation provided by Amazon didn't help matters as well."),l.a.createElement("p",null,"Looking back at the code base, I'll be the first to admit that my coding could probably have been a lot more refined. A fair amount of what I wrote involved hacky workarounds to an immediate problem that we were facing rather than finessed solutions due to the time constraints that we were dealing with. While we did not run into any problems because of it, I can see how it could eventually become technical debt in the future."),l.a.createElement("p",null,"The value of persistence was probably my biggest takeaway from this project; I personally didn't think we'd be able to pull this off. I was pretty much learning on the fly for the entirety of the project, with every error that I ran into essentially being another learning opportunity. I got fairly comfortable with breaking things, for it was sometimes the only way generate enough movement to isolate the source of a bug. I feel that I can safely say that I learnt more about React and Javascript in this project than in any other class that I have taken thus far. ")))))},t}(l.a.Component);t.default=S;var _="2456385330"},178:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return h}),a.d(t,"StaticQuery",function(){return m});var n=a(0),i=a.n(n),o=a(4),l=a.n(o),r=a(177),s=a.n(r);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return r.withPrefix}),a.d(t,"navigate",function(){return r.navigate}),a.d(t,"push",function(){return r.push}),a.d(t,"replace",function(){return r.replace}),a.d(t,"navigateTo",function(){return r.navigateTo});var d=a(180),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var h=i.a.createContext({}),m=function(e){return i.a.createElement(h.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},180:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},181:function(e){e.exports={data:{site:{siteMetadata:{title:"John Lim"}}}}},182:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),i=a.n(n),o=a(4),l=a.n(o),r=a(52),s=a(2),d=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},183:function(e,t,a){e.exports=a.p+"static/resume-ea958ffc3ad8db0af2cc6253f5c358a2.pdf"},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){"use strict";var n=a(181),i=a(0),o=a.n(i),l=a(4),r=a.n(l),s=a(188),d=a.n(s),c=a(178),u=a(6),h=a.n(u),m=(a(189),a(183),a(179)),p=m.a.h3.withConfig({displayName:"header__Title",componentId:"sc-31ozxh-0"})(["margin:auto 0;line-height:1.7;font-weight:500;"]),f=m.a.div.withConfig({displayName:"header__Fixed",componentId:"sc-31ozxh-1"})(["position:fixed;top:0;left:0;width:100%;z-index:1;background-color:white;"]),g=m.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["display:flex;justify-content:space-between;margin:0 auto;max-width:1200px;padding:1.2rem 1.0875rem;"]),y=m.a.div.withConfig({displayName:"header__Nav",componentId:"sc-31ozxh-3"})(["display:flex;padding-top:0.32em;"]),w=Object(m.a)(c.Link).withConfig({displayName:"header__StyledLink",componentId:"sc-31ozxh-4"})(["color:#484848;text-decoration:none;"]),b=m.a.p.withConfig({displayName:"header__Subtitle",componentId:"sc-31ozxh-5"})(['font-family:"Proxima Nova Light";color:#484848;margin:0 0.8rem;font-size:18px;']),E=function(e){function t(){return e.call(this)||this}return h()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{}},o.a.createElement(f,null,o.a.createElement(g,null,o.a.createElement(p,null,o.a.createElement(w,{to:"/"},this.props.siteTitle)),o.a.createElement(y,null,o.a.createElement(w,{to:"/about"},o.a.createElement(b,null,"About")),o.a.createElement("a",{href:"https://drive.google.com/file/d/1Ibt0CKeFX_oAH8hd85Pm5COmKF7WbiNT/view?usp=sharing",target:"_blank",style:{color:"#484848",textDecoration:"none"}},o.a.createElement(b,null,"Resume"))))))},t}(o.a.Component),v=m.a.div.withConfig({displayName:"footer__Container",componentId:"z4ytn7-0"})(["margin:2em auto;padding:1.29rem;max-width:1200px;border-top:solid 1px #dddddd;"]),x=m.a.p.withConfig({displayName:"footer__Text",componentId:"z4ytn7-1"})(['font-family:"Proxima Nova Light";color:#767676;font-size:18px;@media (max-width:768px){font-size:16px;}']),I=(m.a.a.withConfig({displayName:"footer__A",componentId:"z4ytn7-2"})([""]),function(e){function t(){return e.call(this)||this}return h()(t,e),t.prototype.render=function(){return o.a.createElement(v,null,o.a.createElement(x,null,"Built with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank"},"GatsbyJS")," in a bunch of coffee houses around Seattle. Pardon the dust, it's very much a work in progress."))},t}(o.a.Component)),k=(a(184),a(185),function(e){var t=e.children;return o.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"John has a website! Nobody thought this day would come!!!"},{name:"keywords",content:"John, Lim, UX, PM, Product, Design, Engineer, User, Experience, Informatics"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(S,{siteTitle:"John Lim",_$p_:{zIndex:2}}),o.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.5rem",paddingTop:0}},t),o.a.createElement(I,null))},data:n})});k.propTypes={children:r.a.node.isRequired};t.a=k;var S=Object(m.a)(E)`${e=>e._$p_}`},187:function(e,t,a){"use strict";var n=a(7);t.__esModule=!0,t.default=void 0;var i,o=n(a(6)),l=n(a(51)),r=n(a(190)),s=n(a(191)),d=n(a(0)),c=n(a(4)),u=function(e){var t=(0,s.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},h={},m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!h[a]||(h[a]=!0,!1)},p=[];var f=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",o=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+r+s+t+l+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,i=e.onError,o=(0,r.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,s.default)({},o,{onLoad:n,onError:i,ref:t,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var w=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!0,o=!1,r=t.fadeIn,s=m(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!1,o=!0),"undefined"==typeof window&&(n=!1,i=!1),t.critical&&(n=!0,i=!1,o=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:i,IOSupported:o,fadeIn:r,hasNoScript:c,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)((0,l.default)(a))),a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&f(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,o=void 0===i?{}:i,l=e.imgStyle,r=void 0===l?{}:l,c=e.placeholderStyle,h=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,f=e.fixed,w=e.backgroundColor,b=e.Tag,E="boolean"==typeof w?"lightgray":w,v=(0,s.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},r,h),x=(0,s.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},r),I={title:t,alt:this.state.isVisible?"":a,style:v,className:m};if(p){var k=p;return d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&d.default.createElement(y,(0,s.default)({src:k.base64},I)),k.tracedSVG&&d.default.createElement(y,(0,s.default)({src:k.tracedSVG},I)),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(y,{alt:a,title:t,src:k.src,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:a,title:t},k))}}))}if(f){var S=f,_=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},o);return"inherit"===o.display&&delete _.display,d.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&d.default.createElement(y,(0,s.default)({src:S.base64},I)),S.tracedSVG&&d.default.createElement(y,(0,s.default)({src:S.tracedSVG},I)),E&&d.default.createElement(b,{title:t,style:{backgroundColor:E,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&d.default.createElement("picture",null,S.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),d.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),d.default.createElement(y,{alt:a,title:t,width:S.width,height:S.height,src:S.src,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:a,title:t,width:S.width,height:S.height},S))}}))}return null},t}(d.default.Component);w.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});w.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var v=w;t.default=v}}]);
//# sourceMappingURL=component---src-pages-ohana-jsx-c71f15abc45e819e49c0.js.map