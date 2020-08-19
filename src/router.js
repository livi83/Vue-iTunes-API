import Vue from 'vue'
import Router from 'vue-router'

import Tunes from './views/Tunes.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Tunes
		}
	]
})
