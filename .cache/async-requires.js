// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-jsx": () => import("/Users/wenjunlim/Git/johnwjlim/src/templates/post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---cache-dev-404-page-js": () => import("/Users/wenjunlim/Git/johnwjlim/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/wenjunlim/Git/johnwjlim/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/wenjunlim/Git/johnwjlim/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-nimbus-jsx": () => import("/Users/wenjunlim/Git/johnwjlim/src/pages/nimbus.jsx" /* webpackChunkName: "component---src-pages-nimbus-jsx" */),
  "component---src-pages-page-2-js": () => import("/Users/wenjunlim/Git/johnwjlim/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import("/Users/wenjunlim/Git/johnwjlim/.cache/data.json")

