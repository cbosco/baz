var mergeTrees = require('broccoli-merge-trees');
var findBowerTrees = require('broccoli-bower');
var env = require('broccoli-env').getEnv();
var uglifyJavaScript = require('broccoli-uglify-js');
var browserify = require('broccoli-browserify');
var compileSass = require('broccoli-sass');

var appJs = 'app';
var appCss = 'styles';
var publicFiles = 'public';

if (env === 'production') {
  appJs = uglifyJavaScript(appJs, {
    // mangle: false,
    // compress: false
  });
}

var appJsAndBowerDependencies = mergeTrees([appJs].concat(findBowerTrees()), { overwrite: true });

appJsAndBowerDependencies = browserify(appJsAndBowerDependencies, {
    //Array of files to be used as entry points
    entries: [
        'angular', // NPM package
        './angular-route',
        './app.js'
    ],
    outputFile: '/assets/app.js'
});

// a bit of a hardcode/hack but we want to use foundation SCSS files directly
// and broccoli-bower does not find these files
appCss = mergeTrees([appCss].concat(['bower_components/foundation/scss']), {overwrite: true});
appCss = compileSass([appCss], 'app.scss', 'assets/app.css');

module.exports = mergeTrees([appJsAndBowerDependencies, appCss, publicFiles]);
