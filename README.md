# vue-starter-kit

> A full-featured [PWA](https://developers.google.com/web/progressive-web-apps/) template with webpack, hot-reload, lint-on-save, unit testing, css extraction & extra plugins.

## Plugins

- [PWA Splash Screen](https://developers.google.com/web/updates/2015/10/splashscreen)
- [Bootstrap-Vue](https://bootstrap-vue.js.org/)
- [Vue-Moment](https://github.com/brockpetrie/vue-moment)
- [Multi Language Vue-Lang](https://github.com/kvdmolen/vue-lang)
- [Google Tag Manager](https://github.com/mib200/vue-gtm)


## Documentation

- This template builds on top of the main webpack template, so please refer to the [webpack template docs](http://vuejs-templates.github.io/webpack).

- Check out the [official Vue.js guide](http://vuejs.org/guide/) for general information about Vue that is not specific to this template.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ or [yarn](https://yarnpkg.com) for a more efficient dependency tree.**

```bash
$ npm install -g vue-cli
$ vue init serhankilicarslan/vue-starter-kit my-project
$ cd my-project
$ npm install
$ npm run dev
```

This will scaffold the project using the `master` branch. If you wish to use the latest version of the PWA template, do the following instead:

``` bash
$ vue init serhankilicarslan/vue-starter-kit#development my-project
```

:warning: **The `development` branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

## What's not Included

* You should configure your web server to add HTTP headers to prevent caching of critical service worker files.
If you don't do this, [browsers might cache the content for up to 24 hours](https://stackoverflow.com/questions/38843970/service-worker-javascript-update-frequency-every-24-hours/38854905#38854905).
In addition, you should add HTTP headers to prevent the contents of the static folder to be cached unintentionally long.

See ["Configuring your Web server to prevent caching"](docs/prevent_caching.md) in the docs for more information.

## What's Included

* Service Worker precaching of application shell + static assets (prod)
* Script (async chunk) preloading using `<link rel="preload">`
* Web Application Manifest + favicons
* Mobile-friendly meta-viewport
* Lighthouse score of 90+/100

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.
  - Generates a Service Worker for offline caching your static assets using [sw-precache-webpack-plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin)

- `npm run unit`: Unit tests run in PhantomJS with [Karma](http://karma-runner.github.io/0.13/index.html) + [Mocha](http://mochajs.org/) + [karma-webpack](https://github.com/webpack/karma-webpack).
  - Supports ES2015+ in test files.
  - Supports all webpack loaders.
  - Easy mock injection.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own vue-starter-kit, and use it with `vue-cli`:

```bash
vue init username/repo my-project
```
