# Vue Phonegap/Cordova

## Note
This is not a ready to use VueJS as SPA, but you can adapt this one. Feel free to use as you want.

## Description
This is a phonegap/cordova application that uses laravel-mix to build a standalone app.js/app.css to use VueJS, components, native mobile functions and bootstrap.

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
- Don't change anything in ./www/js/app.js and ./www/css/app.css. Every change in ./app.js and ./assets/sass/app.css will be packed to ./www/ folder by laravel-mix.
- Feel free to use native functions in any Vue stage, since Vue is initialized only after deviceready.

## Changelog

### v. 0.0.1
- First release.

### v. 0.0.2
- Added assets folder.
- Added support to bootstrap.

### v. 0.0.3
- Updated bootstrap to v4.
- Added support to axios.
