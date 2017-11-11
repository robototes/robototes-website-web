const path = require('path')

const nconf = require('nconf')

module.exports = {
  helmet: {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [ "'self'" ],
        scriptSrc: [
          '\'self\'',
          `cdn.${nconf.get('DOMAIN')}`,
          'cdnjs.cloudflare.com',
          'ajax.cloudflare.com',
          'www.google-analytics.com',
          'analytics.google.com',
          'www.google.com',
          "'unsafe-eval'",
          "'unsafe-inline'"
        ],
        styleSrc: [
          '\'self\'',
          `cdn.${nconf.get('DOMAIN')}`,
          'cdnjs.cloudflare.com',
          'fonts.googleapis.com',
          "'unsafe-inline'"
        ],
        fontSrc: [
          '\'self\'',
          `cdn.${nconf.get('DOMAIN')}`,
          'cdnjs.cloudflare.com',
          'fonts.gstatic.com'
        ],
        imgSrc: [
          '\'self\'',
          'data:',
          `cdn.${nconf.get('DOMAIN')}`,
          'www.google-analytics.com',
          'stats.g.doubleclick.net',
          'cdnjs.cloudflare.com',
          'ssl.gstatic.com'
        ],
        childSrc: [
          'docs.google.com',
          'calendar.google.com'
        ],
        sandbox: [ 'allow-forms', 'allow-scripts', 'allow-same-origin', 'allow-popups' ],
        objectSrc: [ "'none'" ],
        reportUri: `https://report.${nconf.get('DOMAIN')}/r/c/csp/enforce`
      }
    },
    frameguard: { action: 'deny' },
    expectCt: {
      enforce: true,
      maxAge: 60 * 60 * 24 * 90,
      reportUri: `https://report.${nconf.get('DOMAIN')}/r/c/ct/enforce`
    },
    referrerPolicy: { policy: 'no-referrer-when-downgrade' }
  },
  cors: { origin: [ `cdn.${nconf.get('DOMAIN')}` ] },
  cacheControl: {
    noCache: nconf.get('DEBUG') != null,
    maxAge: 2678400
  },
  favicon: path.resolve(__dirname, '..', 'views', 'cdn', 'media', 'robotote.ico')
}
