import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/views/Template.vue'
import Login from '@/views/Login.vue'
import Produtos from '@/views/Produtos.vue'

Vue.use(Router)

export default new Router({
	mode: 'hash',
	routes: [
		// { path: '*', component: NotFound },
		{ path: '/', component: Template, redirect: '/login', 
		  children: [
				{
					path: 'login',component: Login
				},
				{
					path: 'produtos',component: Produtos
				},
		]
      }
	]
})
