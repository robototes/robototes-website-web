# robototes-website-web

[![Build Status](https://semaphoreci.com/api/v1/robototes/robototes-website-web/branches/master/shields_badge.svg)](https://semaphoreci.com/robototes/robototes-website-web)
[![David](https://img.shields.io/david/robototes/robototes-website-web.svg)](https://david-dm.org/robototes/robototes-website-web#info=dependencies)
[![Codecov branch](https://img.shields.io/codecov/c/github/robototes/robototes-website-web/master.svg)](https://codecov.io/gh/robototes/robototes-website-web/branches/master)
[![codebeat badge](https://codebeat.co/badges/7c12c784-1a30-4914-b0d3-cc5470655b9a)](https://codebeat.co/projects/github-com-robototes-robototes-website-web-master)
[![Greenkeeper badge](https://img.shields.io/badge/greenkeeper-enabled-brightgreen.svg)](https://greenkeeper.io/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GO ROBOTOTES!](https://img.shields.io/badge/GO-ROBOTOTES!-brightred.svg)](https://www.robototes.com)

### About

This repository is a Docker microservice that contains the public pages of the
[Robototes' Website](https://www.robototes.com). This includes parts of the website such as the homepage, the
about page, and the contact us page.

For common documentation regarding the requirements, upkeep, and testing of our microservices, please see our
[global documentation](https://github.com/robototes/robototes-website/blob/master/DOCS.md). Sections
regarding microservice-specific configuration, features, and differences in commands can be found below.

### <a id="configuration">Configuring the server</a>

The following environment variables can be set, the server will not start without the ones marked *required*:

* `IP` (*required, default `0.0.0.0`*) The IP to run the server on
* `PORT` (*required, default `3000`*) The port to listen for requests on
* `DOMAIN` (*required*) The second-level domain that the server resides on
* `G_TRACKING_ID` (*required*) The Google analyics tracking ID to report to
* `DEBUG` (*optional*) see [Debug mode](#debugmode)
* `DATABASE_HOST` (*required*) The IP address that the MongoDB server is listening on
* `DATABASE_PORT` (*required*) The port that the MongoDB server is listening on

### Report URI

This site has been configured to use report-uri.com to track CSP and Expect-CT violations, and the violations
can be viewed by logging in at report-uri.com. The report URI can be modified to report to a different location
by changing the values in `middleware.js`.

### <a id="debugmode">Debug mode</a>

Refer to our [common documentation](https://github.com/robototes/robototes-website/blob/master/DOCS.md)
for an overview of debug mode. In this microservice, debug mode changes the following:

* Sets `/robots.txt` to the debug version set in the `seo.js` config
* Disables page caching
* Enables extra information on error pages
* Enables Pug debug mode
* Enables the Google Analytics debug mode

The recommended debug filter for this project is `robototes-website-web:*,http`.

### Maintainers

[@dannytech](https://github.com/dannytech) and
[@TAKBS2412](https://github.com/TAKBS2412)

### Contributing/Vulnerability disclosure

See our common [CONTRIBUTING.md](https://github.com/robototes/robototes-website/blob/master/CONTRIBUTING.md)

### [License](https://github.com/robototes/robototes-website/blob/master/LICENSE.md)
