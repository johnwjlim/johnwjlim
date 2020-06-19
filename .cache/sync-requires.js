const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/404.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/about.jsx"))),
  "component---src-pages-g-challenge-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/g-challenge.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/index.js"))),
  "component---src-pages-nimbus-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/nimbus.jsx"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/page-2.js"))),
  "component---src-pages-pool-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/pool.jsx"))),
  "component---src-pages-resume-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/resume.jsx")))
}

