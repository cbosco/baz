var mergeTrees = require('broccoli-merge-trees');
var findBowerTrees = require('broccoli-bower');
var env = require('broccoli-env').getEnv();
var uglifyJavaScript = require('broccoli-uglify-js');

var publicFiles = 'public';
var appJs = 'app';
var appCss = 'styles';

if (env === 'production') {
  appJs = uglifyJavaScript(appJs, {
    // mangle: false,
    // compress: false
  });
}

module.exports = mergeTrees([appJs, appCss, publicFiles].concat(findBowerTrees()));
