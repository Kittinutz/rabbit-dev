const path = require('path')

module.exports = {
  distDir: "nextjs",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}