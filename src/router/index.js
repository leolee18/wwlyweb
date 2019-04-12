import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


export default new Router({
  routes: [
    {
		path: '/',
		name: 'index',
		component: resolve => require(['@/components/Index'], resolve),
		meta: {
			title: '首页'
		}
    },
	{
		path: '/author',
		component: resolve => require(['@/components/Author'], resolve),
		meta: {
			title: '授权中……'
		}
	},
	{
		path: '*',
		component: resolve => require(['@/components/page/NotFount'], resolve),
		meta: {
			title: '错误界面'
		}
	}
  ]
})
