module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["EB Garamond:300,400,500,600,700","Inter:100,200,300,400,500,600,650,700,800"]},"display":"swap"},
    },{
      plugin: require('../node_modules/gatsby-plugin-scroll-reveal/gatsby-browser.js'),
      options: {"plugins":[],"threshold":0.1,"once":true,"disable":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-smoothscroll/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
