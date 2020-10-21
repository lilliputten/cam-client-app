/** @module config-overrides
 *  @since 2020.10.18, 21:16
 *  @changed 2020.10.18, 21:16
 */

/* eslint-env es6, node, commonjs */

// const rewireTypescript = require('react-app-rewire-typescript');
// const rewirePostcss = require('react-app-rewire-postcss');

const path = require('path');

const { // see https://github.com/arackaf/customize-cra/blob/master/api.md
  override,
  adjustStyleLoaders,
  addPostcssPlugins,
  // addBabelPlugins,
  // addBabelPlugin,
  // addExternalBabelPlugins,
  // addExternalBabelPlugin,
  // addDecoratorsLegacy,
  // fixBabelImports,
} = require('customize-cra');

const srcRoot = process.cwd();
const prjRoot = srcRoot.replace(/\\/g, '/');
const configCss = require('./src/config/css');
const postcssPlugins = [
    require('postcss-flexbugs-fixes'),
    require('postcss-import'),
    require('postcss-mixins')({
      mixinsDir: path.join(prjRoot, 'src', 'blocks', '!mixins'),
    }), // https://github.com/postcss/postcss-mixins
    require('postcss-random'), // https://www.npmjs.com/package/postcss-random
    require('postcss-each'),
    require('postcss-for'),
    require('postcss-define-function'), // https://github.com/titancat/postcss-define-function
    require('postcss-advanced-variables')({ // https://github.com/jonathantneal/postcss-advanced-variables
      // unresolved: 'warn', // 'ignore',
      variables: configCss,
    }),
    require('postcss-simple-vars'), // https://github.com/postcss/postcss-simple-vars
    require('postcss-conditionals'), // Already used (scss?)
    require('postcss-color-function'), // https://github.com/postcss/postcss-color-function
    require('postcss-calc')(),
    require('postcss-nested-ancestors'), // https://github.com/toomuchdesign/postcss-nested-ancestors
    require('postcss-nested'), // https://github.com/postcss/postcss-nested
    // require('rebem-css'),
    require('postcss-url')({ url: 'rebase' }),
    // require('autoprefixer')(),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    }),
    require('postcss-reporter')(),
    require('postcss-normalize')(),
  ];

/* // Old overriding method -- with `react-app-rewire-*`
 * module.exports = (config[> , env <]) => {
 *   // config = rewireTypescript(config, env);
 *   config = rewirePostcss(config, {
 *     parser: require('postcss-scss'),
 *     plugins: () => postcssPlugins,
 *   });
 *   return config;
 * };
 */

// terser: drop_debugger: false

module.exports = override( // see https://github.com/arackaf/customize-cra/blob/master/api.md
  addPostcssPlugins(postcssPlugins),
  adjustStyleLoaders(({ use: [ , css, postcss, resolve /* , processor */ ] }) => {
    css.options.sourceMap = true;
    postcss.options.sourceMap = true;
    if (resolve) {
      resolve.options.sourceMap = true;
    }
    postcss.options.parser = require('postcss-scss');
  }),
  /* // NOTE: Absolute imports applyes by `tsconfig.json` directive `baseDir`, not `babel-plugin-module-resolver`
   * // [Absolute imports with Create React App](https://medium.com/hackernoon/absolute-imports-with-create-react-app-4c6cfb66c35d)
   * addExternalBabelPlugin([
   *   require.resolve('babel-plugin-module-resolver'),
   *   {
   *     root: [ './src' ],
   *     alias: {
   *       config: [ './src/config' ],
   *     },
   *   },
   * ]),
   */
  /* addExternalBabelPlugin([ // NOTE: Not working! TODO, R&D!
   *   'babel-plugin-directory-resolver',
   *   {
   *     extensions: [ '.js', '.ts', '.tsx' ],
   *     moduleFileExtensions: [ '.js', '.ts', '.tsx' ],
   *   },
   * ]),
   */
);
