(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(143),o=n(150);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(142),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(144),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var s=n(33);n.d(t,"parsePath",function(){return s.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"John Lim"}}}}},147:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(49),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){"use strict";var a=n(146),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(151),l=n.n(u),d=n(143),s=n(7),m=n.n(s),p=n(145),h=p.a.h3.withConfig({displayName:"header__Title",componentId:"sc-31ozxh-0"})(["margin:0;"]),f=p.a.div.withConfig({displayName:"header__Container",componentId:"sc-31ozxh-1"})(["display:flex;justify-content:space-between;margin:0 auto;max-width:1080px;padding:1.45rem 1.0875rem;"]),g=p.a.div.withConfig({displayName:"header__Nav",componentId:"sc-31ozxh-2"})(["display:flex;padding-top:0.33em;"]),y=Object(p.a)(d.Link).withConfig({displayName:"header__StyledLink",componentId:"sc-31ozxh-3"})(["color:#484848;text-decoration:none;"]),E=p.a.h4.withConfig({displayName:"header__Subtitle",componentId:"sc-31ozxh-4"})(['font-family:"Avenir Next Light";color:#484848;margin:0 0.8rem;font-size:16px;']),w=function(e){function t(){return e.call(this)||this}return m()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{marginTop:"0.5em",marginBottom:"0.6rem"}},i.a.createElement(f,null,i.a.createElement(h,null,i.a.createElement(y,{to:"/"},this.props.siteTitle)),i.a.createElement(g,null,i.a.createElement(y,{to:"/"},i.a.createElement(E,null,"About")),i.a.createElement(y,{to:"/"},i.a.createElement(E,null,"Resume")))))},t}(i.a.Component),v=(n(148),n(149),function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"John has a website! I never thought this day would come!!!"},{name:"keywords",content:"John, Lim, UX, PM, Product, Design, Engineer, User, Experience, Informatics"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(w,{siteTitle:"John Lim"}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1080,padding:"0px 1.0875rem 1.5rem",paddingTop:0}},t))},data:a})});v.propTypes={children:c.a.node.isRequired};t.a=v}}]);
//# sourceMappingURL=component---src-pages-page-2-js-2a705d472a3217083309.js.map