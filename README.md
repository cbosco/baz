#baz

## Goal:

[broccoli](https://github.com/broccolijs/broccoli) + [browserify](http://browserify.org/) + [angular](https://angularjs.org/) + [zurb foundation](http://foundation.zurb.com/) sample application

However, this will be built tediously from a much simpler broccoli example in order to illustrate how it works.

In theory, you can rebase the history and delete features you don't need.

## Sample Angular project structure

    ├── Brocfile.js
    ├── LICENSE
    ├── README.md
    ├── app
    │   ├── app.js
    │   ├── controllers
    │   │   ├── my-ctrl-1.js
    │   │   └── my-ctrl-2.js
    │   ├── directives.js
    │   ├── filters.js
    │   └── services.js
    ├── bower.json
    ├── package.json
    ├── public
    │   ├── index.html
    │   └── partials
    │       ├── partial1.html
    │       └── partial2.html
    ├── spec
    │   ├── filters_spec.js
    │   ├── services_spec.js
    │   └── spec_helper.js
    └── styles
        └── app.scss

## Installation

	npm install -g broccoli-cli
	npm install

## Run (development)

	broccoli serve
	
## Make production distribution

Set `BROCCOLI_ENV` appropriately:

	export BROCCOLI_ENV=production

Then, to build your project into the public directory, type:

	broccoli build public

## Run tests

	npm test

Note that the tests run without a browser in node using the [angular npm package](https://www.npmjs.org/package/angular) so it will be important to keep this version in sync with the bower packages.

## TODO

* Source maps
* test hook for the watcher
