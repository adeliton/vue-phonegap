# Vue Phonegap/Cordova

## Note
If you want to use VueJS as SPA, use another repository. There are many in GitHub... or you can adapt this one. Feel free to use as you want.

## Description
This is a phonegap/cordova application that uses laravel-mix to build a standalone app.js to use VueJS, components and native mobile functions.

## How to use

### 1. Install phonegap and cordova

	$ npm install -g cordova
	$ npm install -g phonegap

### 2. Install node dependencies

	$ cd vue-phonegap
	$ npm install

### 3. Webpack your application

 	$ npm run dev

#### 3.1 (Optional) You can watch all changes in directory running

	$ npm run watch

### 4. Serve your application

	$ phonegap serve

### 5. Install Phonegap Developer App in your phone to test your application

## Instructions

- Every vue component must be in ./components folder.
- Don't change anything in ./www/js/app.js. Every change in ./app.js will be packed to ./www/js/app.js by laravel-mix.
- Feel free to use native functions in any Vue stage, since Vue is initialized only after deviceready.
