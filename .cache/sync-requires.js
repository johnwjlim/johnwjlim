// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-post-jsx": preferDefault(require("/Users/wenjunlim/Git/johnwjlim/src/templates/post.jsx")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/wenjunlim/Git/johnwjlim/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/wenjunlim/Git/johnwjlim/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/wenjunlim/Git/johnwjlim/src/pages/index.js")),
  "component---src-pages-nimbus-jsx": preferDefault(require("/Users/wenjunlim/Git/johnwjlim/src/pages/nimbus.jsx")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/wenjunlim/Git/johnwjlim/src/pages/page-2.js"))
}

