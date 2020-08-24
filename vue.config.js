const path = require('path')
const seoConfig = require('./config.json')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
  publicPath: '/',
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/account', '/garden', '/mitax', '/steamer', '/about' ],
        postProcessHtml: (context) => {
          const inform = {
            '/': seoConfig['home'],
            '/account': seoConfig['account'],
            '/garden': seoConfig['garden'],
            '/mitax': seoConfig['mitax'],
            '/steamer': seoConfig['steamer'],
            '/about': seoConfig['about'],
            '/error': seoConfig['error'],
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<meta name="author" content="`+ inform[context.route].author +`" /><meta name="keywords" content="` + inform[context.route].keywords + `" /><meta name="description" content="` + inform[context.route].description + `" /><title>` + inform[context.route].title + `</title>`
          )
        }
      })
    ]
  },
  chainWebpack: config => {
    config.module
    .rule('images')
    .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 244 }))
  }
}