(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{131:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(135),o=n(139);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(134),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(137),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(28);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},137:function(e,t,n){var a;e.exports=(a=n(141))&&a.default||a},138:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(135),u=(n(145),n(136)),l=u.a.h3.withConfig({displayName:"header__Title",componentId:"sc-31ozxh-0"})(["margin:auto 0;line-height:1.7;"]),d=u.a.div.withConfig({displayName:"header__Fixed",componentId:"sc-31ozxh-1"})(["position:fixed;top:0;left:0;width:100%;z-index:1;background-color:white;"]),s=u.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["display:flex;justify-content:space-between;margin:0 auto;max-width:1080px;padding:1.2rem 1.0875rem;"]),m=u.a.div.withConfig({displayName:"header__Nav",componentId:"sc-31ozxh-3"})(["display:flex;padding-top:0.32em;"]),p=Object(u.a)(c.Link).withConfig({displayName:"header__StyledLink",componentId:"sc-31ozxh-4"})(["color:#484848;text-decoration:none;"]),h=u.a.p.withConfig({displayName:"header__Subtitle",componentId:"sc-31ozxh-5"})(['font-family:"Proxima Nova Light";color:#484848;margin:0 0.8rem;']),f=function(e){function t(){return e.call(this)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{}},o.a.createElement(d,null,o.a.createElement(s,null,o.a.createElement(l,null,o.a.createElement(p,{to:"/"},this.props.siteTitle)),o.a.createElement(m,null,o.a.createElement(p,{to:"/"},o.a.createElement(h,null,"About")),o.a.createElement(p,{to:"/"},o.a.createElement(h,null,"Resume"))))))},t}(o.a.Component);t.a=f},139:function(e,t,n){"use strict";var a=n(140),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(144),l=n.n(u),d=n(135),s=n(138),m=(n(142),n(143),n(136)),p=function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"John has a website! I never thought this day would come!!!"},{name:"keywords",content:"John, Lim, UX, PM, Product, Design, Engineer, User, Experience, Informatics"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(h,{siteTitle:"John Lim",_$p_:{zIndex:2}}),i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.5rem",paddingTop:0}},t))},data:a})};p.propTypes={children:c.a.node.isRequired},t.a=p;var h=Object(m.a)(s.a)`${e=>e._$p_}`},140:function(e){e.exports={data:{site:{siteMetadata:{title:"John Lim"}}}}},141:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(47),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},142:function(e,t,n){},143:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-page-2-js-f594c731be63db83d378.js.map