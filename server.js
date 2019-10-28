const express = require('express');
const next = require('next');
var compression = require('compression');
const cacheableResponse = require('cacheable-response')
const LRUCache = require('lru-cache');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = 3000;


// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100 * 1024 * 1024, /* cache size will be 100 MB using `return n.length` as length() function */
  length: function (n, key) {
      return n.length
  },
  maxAge: 1000 * 60 * 60 * 24 * 30
});


app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());

    server.get(
      /^\/_next\/static\/(images|fonts)\//,
      (_, res, nextHandler) => {
        res.setHeader(
          "Cache-Control",
          "public, max-age=31536000, immutable",
        );
        nextHandler();
      },
    );

    server.get('/service-worker.js', function(req, res) {
      const filePath = join(__dirname, 'dist', pathname);
      app.serveStatic(req, res, filePath);
    });

    server.get('/blog', (req, res) => {
      const actualPage = '/blog';
      const queryParams = { apiRoute: 'blog' };
      // app.render(req, res, actualPage, queryParams);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/blog/page/:pageno', (req, res) => {
      const actualPage = '/blog';
      const queryParams = { pageno: req.params.pageno, apiRoute: 'blog' };
      // app.render(req, res, actualPage, queryParams);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = { slug: req.params.slug, apiRoute: 'post' };
      // app.render(req, res, actualPage, queryParams);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/page/:slug', (req, res) => {
      const actualPage = '/post';
      const queryParams = { slug: req.params.slug, apiRoute: 'page' };
      // app.render(req, res, actualPage, queryParams);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/category/:slug', (req, res) => {
      const actualPage = '/category';
      const queryParams = { slug: req.params.slug };
      // app.render(req, res, actualPage, queryParams);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('/_preview/:id/:rev/:type/:status/:wpnonce', (req, res) => {
      const actualPage = '/preview';
      const { id, rev, type, status, wpnonce } = req.params;
      const queryParams = { id, rev, type, status, wpnonce };
      // app.render(req, res, actualPage, queryParams);
      renderAndCache(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });





  /*
 * NB: make sure to modify this to take into account anything that should trigger
 * an immediate page change (e.g a locale stored in req.session)
 */
function getCacheKey(req) {
  return `${req.path}`
}

async function renderAndCache(req, res, actualPage, queryParams) {
  const key = getCacheKey(req);

  if (ssrCache.has(key)) {
      res.setHeader('x-cache', 'HIT');
      res.send(ssrCache.get(key));
      return
  }

  try {
      const html = await app.renderToHTML(req, res, actualPage, queryParams);

      if (res.statusCode !== 200) {
          res.send(html);
          return
      }
      ssrCache.set(key, html);
      res.setHeader('x-cache', 'MISS');
      res.send(html)
  } catch (err) {
      app.renderError(err, req, res, req.path, req.query)
  }
}