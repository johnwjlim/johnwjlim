const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/404.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/about.jsx"))),
  "component---src-pages-g-challenge-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/g-challenge.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/index.js"))),
  "component---src-pages-movley-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/movley.jsx"))),
  "component---src-pages-nimbus-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/nimbus.jsx"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/page-2.js"))),
  "component---src-pages-pear-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/pear.jsx"))),
  "component---src-pages-pool-2-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/pool-2.jsx"))),
  "component---src-pages-pool-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/pool.jsx"))),
  "component---src-pages-resume-jsx": hot(preferDefault(require("/Users/wjlim/code/johnwjlim/src/pages/resume.jsx")))
}

