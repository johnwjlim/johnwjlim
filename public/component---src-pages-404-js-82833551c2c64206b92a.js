(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(143);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},135:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(134),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(137),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var s=n(28);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},137:function(e,t,n){var a;e.exports=(a=n(140))&&a.default||a},138:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),c=n(135),l=(n(145),n(136)),u=l.a.h3.withConfig({displayName:"header__Title",componentId:"sc-31ozxh-0"})(["margin:auto 0;line-height:1.7;"]),d=l.a.div.withConfig({displayName:"header__Fixed",componentId:"sc-31ozxh-1"})(["position:fixed;top:0;left:0;width:100%;z-index:1;background-color:white;"]),s=l.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-2"})(["display:flex;justify-content:space-between;margin:0 auto;max-width:1080px;padding:1.2rem 1.0875rem;"]),m=l.a.div.withConfig({displayName:"header__Nav",componentId:"sc-31ozxh-3"})(["display:flex;padding-top:0.32em;"]),p=Object(l.a)(c.Link).withConfig({displayName:"header__StyledLink",componentId:"sc-31ozxh-4"})(["color:#484848;text-decoration:none;"]),h=l.a.p.withConfig({displayName:"header__Subtitle",componentId:"sc-31ozxh-5"})(['font-family:"Proxima Nova Light";color:#484848;margin:0 0.8rem;']),f=function(e){function t(){return e.call(this)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{}},o.a.createElement(d,null,o.a.createElement(s,null,o.a.createElement(u,null,o.a.createElement(p,{to:"/"},this.props.siteTitle)),o.a.createElement(m,null,o.a.createElement(p,{to:"/"},o.a.createElement(h,null,"About")),o.a.createElement(p,{to:"/"},o.a.createElement(h,null,"Resume"))))))},t}(o.a.Component);t.a=f},139:function(e){e.exports={data:{site:{siteMetadata:{title:"John Lim"}}}}},140:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(47),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){"use strict";var a=n(139),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(144),u=n.n(l),d=n(135),s=n(138),m=n(6),p=n.n(m),h=n(136),f=h.a.div.withConfig({displayName:"footer__Container",componentId:"z4ytn7-0"})(["margin:2em auto;padding:1.29rem;max-width:1080px;border-top:solid 1px #dddddd;"]),g=h.a.p.withConfig({displayName:"footer__Text",componentId:"z4ytn7-1"})(['font-family:"Proxima Nova Light";color:#767676;font-size:18px;@media (max-width:768px){font-size:16px;}']),y=(h.a.a.withConfig({displayName:"footer__A",componentId:"z4ytn7-2"})([""]),function(e){function t(){return e.call(this)||this}return p()(t,e),t.prototype.render=function(){return i.a.createElement(f,null,i.a.createElement(g,null,"Hacked together with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank"},"GatsbyJS")," in a bunch of coffee houses around Seattle."))},t}(i.a.Component)),w=(n(141),n(142),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"John has a website! Nobody thought this day would come!!!"},{name:"keywords",content:"John, Lim, UX, PM, Product, Design, Engineer, User, Experience, Informatics"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(x,{siteTitle:"John Lim",_$p_:{zIndex:2}}),i.a.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.5rem",paddingTop:0}},t),i.a.createElement(y,null))},data:a})});w.propTypes={children:c.a.node.isRequired};t.a=w;var x=Object(h.a)(s.a)`${e=>e._$p_}`}}]);
//# sourceMappingURL=component---src-pages-404-js-82833551c2c64206b92a.js.map