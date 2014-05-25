#baz

## Goal:

[broccoli](https://github.com/broccolijs/broccoli) + [angular](https://angularjs.org/) + [zurb foundation](http://foundation.zurb.com/) sample application

However, this will be built tediously from a much simpler broccoli example in order to illustrate how it works.

In theory, you can rebase the history and delete features you don't need.

## Sample Angular project structure

    ├── Brocfile.js
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
