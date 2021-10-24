const path = require('path');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');


module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    dest: 'public',
    sw: 'service-worker.js',
    runtimeCaching,
  },
  distDir: 'nextjs',
  optimizeFonts: true,
  sassOptions: {
    outputStyle: 'compressed',
    includePaths: [path.join(__dirname, 'styles')],
  },
});