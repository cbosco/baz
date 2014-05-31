// use 'official' NPM angular, uses mocked DOM
var angular = require('angular');

// TODO: replace 'angular-mock' with an official NPM client.
// Until then, mock the DOM manually and use the one supplied by Bower
var jsdom = require("jsdom").jsdom;
var window = jsdom().parentWindow;
window.angular = angular;
window.jasmine = jasmine;
window.beforeEach = beforeEach;
window.afterEach = afterEach;
global.window = window;
require('../bower_components/angular-mocks/angular-mocks');
// end TODO

global.angular = angular;
