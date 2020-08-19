// router
import Vue from 'vue'
import Router from 'vue-router'

// views
//import Home from './views/Home.vue'
//import About from './views/About.vue'
import Tunes from './views/Tunes.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Tunes
		} /*,
		{
			path: '/tunes',
			component: Tunes
		},
		{
			path: '/about',
			component: About
		}*/
	]
})
