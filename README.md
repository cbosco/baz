#baz

## Goal:

[broccoli](https://github.com/broccolijs/broccoli) + [angular](https://angularjs.org/) + [zurb foundation](http://foundation.zurb.com/) sample application

However, this will be built tediously from a much simpler broccoli example in order to illustrate how it works.

In theory, you can rebase the history and delete features you don't need.


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
