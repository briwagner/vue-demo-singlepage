# Vue Single-page App

This is a skeleton for a basic Vue single-page app with SASS and Webpack integration. Using webpack, the app is compiled into a single file that contains all the required files. The filename is set in the webpack.config.js. Default value is `out-bundle.js`

To include inside a web page, two things are needed:
* script tag to load the bundle mentioned above
* div tag with the ID of the root tag, as defined in app.js. Default value is `#vue-app`

The index.html page here is an example of how to include those elements. This html page is NOT included in the compiled file. It can be used for development and testing.

## Installation

`npm install`

Webpack CLI is required to compile the app.

## Components

### Data

A Vue app can natively manage data or state. One way is to set these variables in the `data()` function.

As this application can be pre-compiled and included inside another web page, we need to pass data into the app. We can do this be declaring Javascript variables in a script tag *before* the app script tag. The `data()` function is then used to map the application property to the Javascript object found in the document.

[Vue documentation](https://vuejs.org/v2/guide/instance.html#Data-and-Methods)

### Buttons

The sample app includes buttons to show how interactivity can work in Vue.

[Vue documentation](https://vuejs.org/v2/guide/events.html)

### HTTP requests

This package includes the `axios` package that can be used for making HTTP requests. By default, it is not active in the `app.js` file to avoid compilation error messages. But it can be un-commented and used to fetch or send data.

### App methods

The `methods` property can contain functions that run inside the application. These can be used to make HTTP requests, modify or set data inside the application.

### Vue Patterns

In some cases, Vue supports different syntax for the same purpose. For example `@click=""` is the same as `v-on:click=""`. The v- prefix helps to identify things specific to Vue.

Iterating over elements is common, using the `v-for` syntax. The buttons in this app are one example.

Variables can be used in different ways:
* to appear printed on the page
* to use as conditions
* or to modify properties of an HTML element.

To use in a template, the value can be printed by using curly braces {{variableName}}. To modify the property of an HTML element, it's often necessary to use the `v-bind=""` syntax.

## Webpack Compilation

The current version of Webpack version (>4) requires the Webpack CLI to bundle the app. Install the CLI:

`npm install --save-dev webpack-cli`

CLI usage:

From the project root, run the terminal command:

`npx webpack`

[CLI documentation](https://webpack.js.org/api/cli/)

## Development and Testing

A web server is required to display the app in the browser for any local environment. Any server should suffice; no custom configuration is used here as this is a single-page app with no page routing.

Tools:

PHP: If php is installed, a local file server can be run (specify any valid port):

`php -S localhost:8080`

NPM utility: [http-server](https://www.npmjs.com/package/http-server)