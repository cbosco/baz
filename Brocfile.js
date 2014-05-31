var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var findBowerTrees = require('broccoli-bower');
var env = require('broccoli-env').getEnv();
var uglifyJavaScript = require('broccoli-uglify-js');
var compileES6 = require('broccoli-es6-concatenator');
var compileSass = require('broccoli-sass');

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
        'angular.js',
        'angular-route.js'
    ],
    wrapInEval: false,
    outputFile: '/assets/app.js'
});

// a bit of a hardcode/hack but we want to use foundation SCSS files directly
// and broccoli-bower does not find these files
appCss = mergeTrees([appCss].concat(['bower_components/foundation/scss']), {overwrite: true});
appCss = compileSass([appCss], 'app.scss', 'assets/app.css');

module.exports = mergeTrees([appJsAndBowerDependencies, appCss, publicFiles]);
