import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/views/Template.vue'
import Login from '@/features/Autenticacao/index.vue'
import Dashboard from '@/views/Dashboard.vue'
import Produtos from '@/views/Produtos.vue'
import store from '@/store'

Vue.use(Router)

 const router = new Router({
	mode: 'history',
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

router.beforeEach((to, from, next) => {
	if(to.meta.auth){
		if(store.state.token){
			next()
		}
		else{
			next('login')
		}
	}
	else{
		next()
	}
	
})
export default router

Vue.router = router
