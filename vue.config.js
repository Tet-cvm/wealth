const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
module.exports = {
  configureWebpack: {
    // plugins: [
    //   new PrerenderSPAPlugin({
    //     // Required - The path to the webpack-outputted app to prerender.
    //     staticDir: path.join(__dirname, 'dist'),
    //     // Required - Routes to render.
    //     routes: [ '/', '/account', '/garden', '/mitax', '/steamer', '/about' ],
    //   })
    // ]
  }
}