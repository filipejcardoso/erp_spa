// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Materialize from 'materialize-css'
import 'materialize-css/dist/css/materialize.css'

import Vue from 'vue'
import App from './App'
import router from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'

import Navbar from './components/Navbar.vue'

Vue.use(Materialize)
Vue.use(VueAxios, axios);

Vue.component('navbar',Navbar);

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.API_URL


const app = new Vue({
	store,
	el: '#app',
	template: '<app></app>',
	components: { App },
	router
})