const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
 chainWebpack: config => {
   config.plugin('html').tap(args => {
     args[0].filename = process.env.WEBPACK_DEV_SERVER ? 'index.html' : 'i.html';
     return args
   })
 },
 configureWebpack: {
   plugins: [
     new PrerenderSPAPlugin({
       indexPath: path.resolve('dist/i.html'),
       staticDir: path.resolve('dist'),
       routes: [ '/', '/creations', '/code', '/design', '/contact'],
     }),
   ]
 }
};