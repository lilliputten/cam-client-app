/** @module config
 *  @description App config
 *  @since 2020.10.21, 01:44
 *  @changed 2020.10.21, 03:26
 */
/* eslint-disable global-require */

const config = {
  build: require('./build'),
  css: require('./css'),
  // app: require('./app'),
  // constants: require('./constants'),
  // limits: require('./limits'),
  // userAgent: require('./userAgent'),
  // core: require('./core'),
  // components: require('./components'),
  // ui: require('./ui'),
};

/* // Export to global scope // Is it necessary?
 * if (typeof window === 'object') { // Use webpack's `global`?
 *   window.config = config
 * }
 */

module.exports = config;

// module.exports = config;
// module.exports.site = site;
// module.exports.css = css;
