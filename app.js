window.Vue = require('vue');
window.axios = require("axios");

Vue.component('example', require('./assets/components/Example.vue'));

document.addEventListener('deviceready', function() {
	const app = new Vue({
	    el: '#app'
	});
});
