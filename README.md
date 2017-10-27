# robototes-website-web

[![Build Status](https://semaphoreci.com/api/v1/robototes/robototes-website-web/branches/master/shields_badge.svg)](https://semaphoreci.com/robototes/robototes-website-web)
[![David](https://img.shields.io/david/robototes/robototes-website-web.svg)](https://david-dm.org/robototes/robototes-website-web#info=dependencies)
[![Codecov branch](https://img.shields.io/codecov/c/github/robototes/robototes-website-web/master.svg)](https://codecov.io/gh/robototes/robototes-website-web/branches/master)
[![codebeat badge](https://codebeat.co/badges/7c12c784-1a30-4914-b0d3-cc5470655b9a)](https://codebeat.co/projects/github-com-robototes-robototes-website-web-master)
[![Greenkeeper badge](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg)](https://greenkeeper.io/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GO ROBOTOTES!](https://img.shields.io/badge/GO-ROBOTOTES!-brightred.svg)](https://www.robototes.com)

### Software requirements

* `node.js` version 8 or greater is recommended
* `yarn` version 1.2.1 or greater is recommended

### <a id="configuration">Configuring the server</a>

The following environment variables can be set, the server will not start without the ones marked *required*:

* `IP` (*required, default `0.0.0.0`*) The IP to run the server on
* `PORT` (*required, default `3000`*) The port to listen for requests on
* `DOMAIN` (*required*) The second-level domain that the server resides on
* `G_TRACKING_ID` (*required*) The Google analyics tracking ID to report to
* `HPKP_HASHES` (*required*) see [HPKP Hashes](#hpkphashes)
* `DEBUG` (*optional*) see [Debug mode](#debugmode)
* `DATABASE_HOST` (*required*) The IP address that the MongoDB server is listening on
* `DATABASE_PORT` (*required*) The port that the MongoDB server is listening on

##### <a id="hpkphashes">HPKP Hashes</a>

HPKP, or HTTPS Public Key Pinning, is a whitelist for the certificates, intermediary CAs, and CAs
so that our cert cannot be replaced by another others. The following is the recommended set to
include:

* `lCppFqbkrlJ3EcVFAkeip0+44VaoJUymbnOaEUk7tEU=` (AddTrust External CA Root)
* `58qRu/uxh4gFezqAcERupSkRYBlBAvfcw7mEjGPLnNU=` (Comodo ECC CA)
* `grX4Ta9HpZx6tSHkmCrvpApTQGo67CYDnvprLg5yRME=` (Comodo RSA CA)
* `klO23nT2ehFDXCfx3eHTDRESMz3asj1muO+4aIdjiuY=` (Comodo RSA Domain Validation Secure Server CA)
* `x9SZw6TwIqfmvrLZ/kz1o0Ossjmn728BnBKpUFqGNVM=` (Comodo ECC Domain Validation Secure Server CA)
* `tey1EE7fk3hATntrqvJd0pRDLpjqawZ7YSlOiA/staQ=` (sni32250.cloudflaressl.com, for robototes.com)

### <a id="testing">Testing</a>

We use [ava](https://www.npmjs.com/package/ava) and [supertest](https://www.npmjs.com/package/supertest)
to test the server, including our routing and middleware. When writing new tests, make sure to follow
the documentation of the libraries mentioned above. The tests can be found in the `code/tests` folder,
and can be run using the following:

```shell
yarn test
```

This will run the tests and create code coverage files using [nyc](https://www.npmjs.com/package/nyc)
that can be submitted from a CI test to
[Codecov](https://codecov.io/gh/robototes/robototes-website-web/branches/master) using the Codecov CLI.

We use [Semaphore CI](https://semaphoreci.com/robototes/robototes-website-web) as our CI/CD service. Once
tested, our code is deployed automatically to a staging site, and can be manually deployed to our
production server.

### <a id="debugmode">Debug mode</a>

If the `DEBUG` environment variable is set, debug mode will be activated. This changes the following:

* Sets `/robots.txt` to the debug version set in the `seo.js` config
* Disables page caching
* Enables extra information on error pages
* Enables Pug debug mode
* Enables the Google Analytics debug mode

The `DEBUG` environment variable is shared with the [debug](https://www.npmjs.com/package/debug)
module for logging. The recommended filter value is `robototes-website-web:*,http`, which will
show setup information, and log HTTP requests. These are enabled by default when the server is
run in development mode using the following command:

```shell
yarn dev
```

### Running in production

To run the server in production, make sure [debug mode](#debugmode) is disabled and the
[configuration variables](#configuration) are set correctly. Test the server, then run it using
the following command:

```shell
yarn start
```

### Maintainers

[@dannytech](https://github.com/dannytech) and
[@TAKBS2412](https://github.com/TAKBS2412)

### Contributing

While we do accept and encourage contributions, this site is designed and built
exclusively for The Robototes. As such, most content comes from within the
organization and code is written by a subteam. If you find any bugs, please feel
free to open an issue or write a pull request.

##### Vulnerability disclosure

If you find a vulnerability in our site, please,
[report it](mailto:webmaster@robototes.com). We won't sue or anything as long as
you don't exploit any bugs and you disclose responsibly (give us time to respond
and fix it before you tell the world). If you would like to test our security,
please contact us at [webmaster@robototes.com](mailto:webmaster@robototes.com)
and we can work something out

### License

Copyright &copy; 2017 Sammamish Robotics <robototes2412@gmail.com>, All rights reserved.

Any copying and/or distributing and/or use in commercial or non-commercial environments
via any medium of this project without the express permission of Robotics Leadership is strictly prohibited.
