const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')


module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  distDir: "nextjs",
  optimizeFonts: true,
  sassOptions: {
    outputStyle: "compressed",
    includePaths: [path.join(__dirname, 'styles')],
  },
})