var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var findBowerTrees = require('broccoli-bower');
var env = require('broccoli-env').getEnv();
var uglifyJavaScript = require('broccoli-uglify-js');
var compileES6 = require('broccoli-es6-concatenator');

var appJs = 'app';
var appCss = 'styles';
var publicFiles = 'public';

// 1. creates app namespace
// 2. makes sure bower deps. are not at same level
//    when concat with app JS
appJs = pickFiles(appJs, {
      srcDir: '/',
      destDir: 'app'
});

if (env === 'production') {
  appJs = uglifyJavaScript(appJs, {
    // mangle: false,
    // compress: false
  });
}

var appJsAndBowerDependencies = mergeTrees([appJs].concat(findBowerTrees()), { overwrite: true });

// relative to app, bower directories
appJsAndBowerDependencies = compileES6(appJsAndBowerDependencies, {
    loaderFile: 'loader.js',
    inputFiles: [
        'app/**/*.js'
    ],
    legacyFilesToAppend: [
        'jquery.js'
    ],
    wrapInEval: false,
    outputFile: '/assets/app.js'
});

module.exports = mergeTrees([appJsAndBowerDependencies, appCss, publicFiles]);
