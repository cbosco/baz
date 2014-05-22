var mergeTrees = require('broccoli-merge-trees');
var findBowerTrees = require('broccoli-bower');

var publicFiles = 'public';
var appJs = 'app';
var appCss = 'styles';

module.exports = mergeTrees([appJs, appCss, publicFiles].concat(findBowerTrees()));
