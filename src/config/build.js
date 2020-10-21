/** @module config.build
 *  @since 2020.10.21, 01:44
 *  @changed 2020.10.21, 03:26
 */

// const DEBUG = process.env.DEBUG

const isDevServer = typeof module === 'object' && !!(module.hot && !!module.hot.active); // From `config.build.isDevServer`
const isTesting = (typeof jest === 'object');
const DEBUG = isTesting ? 'test' : isDevServer;

module.exports = { // Common-used build variables...

  isDevServer,
  isTesting,
  DEBUG,

  // THEME: process.env.THEME,
  // buildTag: process.env.buildTag,
  // version: process.env.version,

};
