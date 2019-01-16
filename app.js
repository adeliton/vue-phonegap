window.Vue = require('vue');

Vue.component('example', require('./components/Example.vue'));

document.addEventListener('deviceready', function() {
	const app = new Vue({
	    el: '#app'
	});	
});
