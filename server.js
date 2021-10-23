
const admin = require("firebase-admin");
const functions = require("firebase-functions");
const next = require("next");
const config = require("./next.config");

admin.initializeApp();

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
  // the absolute directory from the package.json file that initialises this module
  // IE: the absolute path from the root of the Cloud Function
  conf: config,
});
const handle = app.getRequestHandler();

const server = functions.https.onRequest((request, response) => {
  // log the page.js file or resource being requested
  console.log("File: " + request.originalUrl);
  return app.prepare().then((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    if (pathname === '/sw.js' || /^\/(workbox|worker|fallback)-\w+\.js$/.test(pathname)) {
      const filePath = join(__dirname, 'nextjs', pathname)
      app.serveStatic(req, res, filePath)
    } else {
      handle(request, response)
    }
  });
});

exports.nextjs = { server };