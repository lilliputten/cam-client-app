/** @module config.css
 *  @since 2020.10.21, 03:25
 *  @changed 2020.10.21, 03:26
 */

// NOTE: See themes configuration in webpack (THEME parameter: using `--env.THEME` or `webpack.env.js` key)
var theme = {}; // require(process.env.THEME_FILE);
var themeName = 'default'; // process.env.theme;

var defaultFontSize = theme.defaultFontSize || 20;

var formItemSize = 48;

var defaultTransitonTime = 250;
var defaultAnimateTimeout = 0; // 250;

var css = Object.assign({}, theme, {

  // Build props:

  isDemo: process.env.isDemo,
  isDevMode: process.env.isDev,

  // Theme...

  theme: themeName,

  // Icons

  defaultIconSize: 18,
  largeIconSize: 24,
  iconSpritePrefix: 'sprite',

  defaultButtonStyle: 'default',
  activeButtonStyle: 'defaultDark',

  errorIcon: 'alert',
  infoIcon: 'light-bulb',
  queryIcon: 'help-alt',
  successIcon: 'check',
  warnIcon: 'bolt',

  // Colors...

  testColor: '#f00', // DEBUG

  // Colors for dialogs styles
  confirmColor: theme.confirmColor || theme.primaryColor,
  errorColor: theme.errorColor || '#c33',
  infoColor: theme.infoColor || '#9bd',
  queryColor: theme.infoColor || '#9bd',
  successColor: theme.successColor || '#ac9',
  warnColor: theme.warnColor || '#f96',

  // textColor,
  defaultTextColor: theme.textColor,

  // primaryColor,
  // primaryLightColor,
  // primaryDarkColor,
  // primaryContrastColor,

  // secondaryColor,
  // secondaryLightColor,
  // secondaryDarkColor,
  // secondaryContrastColor,

  neutralColor: '#bbb',
  neutralDarkColor: '#999',
  neutralSuperDarkColor: '#777',
  neutralLightColor: '#ddd',
  neutralSuperLightColor: '#eee',

  bodyBgColor: theme.bodyBgColor || '#000',
  bodyTextColor: theme.bodyTextColor || '#999',
  layoutBgColor: theme.layoutBgColor || '#f0f0f0',
  layoutLightBgColor: theme.layoutLightBgColor || '#f7f7f7',

  layoutBorderColor: theme.layoutBorderColor || '#ccc',

  // // See XD prototypes...
  // primarySuperLightColor: '#e0ebf3',
  // primaryBrightColor: '#bce0fd',

  // Fonts...

  defaultFont: theme.defaultFont || 'sans-serif',
  // defaultFont: theme.defaultFont || 'Helvetica, Arial, sans-serif',
  // defaultFont: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  // defaultFont: 'sans-serif',

  defaultFontSize: defaultFontSize,
  fontSize: defaultFontSize,
  fontSizeM: defaultFontSize,
  fontSizeSm: defaultFontSize - 2,
  fontSizeXs: defaultFontSize - 4,
  fontSizeLg: defaultFontSize + 2,
  fontSizeXl: defaultFontSize + 4,
  fontSizeXxl: defaultFontSize + 8,
  titleFontSize: defaultFontSize + 8,
  defaultLineHeight: 1.6,
  // defaultFontWeight: 400,
  defaultFontWeight: 'normal',
  // defaultFontWeight: 500,
  // defaultBemFontSize: defaultFontSize,

  // Breakpoints (from bootstrap)
  breakpoint_xs: 0,
  breakpoint_sm_pre: 575.98,
  breakpoint_sm: 576,
  breakpoint_md_pre: 767.98,
  breakpoint_md: 768,
  breakpoint_lg_pre: 991.98,
  breakpoint_lg: 992,
  breakpoint_xl_pre: 1199.98,
  breakpoint_xl: 1200,

  // Timeouts & delays...

  transitionTime: defaultTransitonTime, // ms

  animateTimeout: defaultAnimateTimeout, // ms
  modalAnimateTimeout: defaultAnimateTimeout, // 350, // ms

  // Forms...

  formItemSize: formItemSize,
  formItemHeight: formItemSize,
  formLabelPadding: theme.formLabelPadding || 300,
  formLabelCollapse: theme.formLabelCollapse || 600,

  // MainPage

  mainPageElemsRadius: 5,
  mainPageElemsSpacing: 10,

  mainPageTitleHeight: 50,

  // Loader:Progress

  progressTimerDelay: 1000, // JS timer delay for progressbar updaing
  progressUpdateDelay: 300, // CSS animation time; for HP devices must be less or equal than JS delay due to animation performance issues
  progressbarBorder: 5,
  progressbarHeight: 10,
  progressbarBgColor: '#222',
  progressbarColor: theme.primaryColor,

  // Paddings & spacings...

  itemPadding: 5,
  innerPadding: 10,
  containerPadding: 15,
  blockPadding: 20,

  // OpParams

  // BasicPage occupies full screen height
  fullScreenBasicPage: true,

  // Scrolls

  scrollSize: 10,

});

module.exports = css;
