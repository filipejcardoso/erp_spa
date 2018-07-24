import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/views/Template.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Produtos from '@/views/Produtos.vue'

Vue.use(Router)

 const router = new Router({
	mode: 'hash',
	routes: [
		// { path: '*', component: NotFound },
		{ path: '/login', component: Login, meta: {auth: false} },
		{ path: '/', component: Template, redirect: '/dashboard', 
		  children: [
				{
					path: 'dashboard',component: Dashboard, meta: {auth: true}
				},
				{
					path: 'produtos',component: Produtos, meta: {auth: true}
				},
			]
      }
	]
})
export default router
Vue.router = router
