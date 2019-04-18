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
				title: '五维乐园'
			}
		},
		{
			path: '/criterion',
			component: resolve => require(['@/components/page/Criterion'], resolve),
			meta: {
				title: '五维标准课'
			}
		},
		{
			path: '/raiders',
			component: resolve => require(['@/components/page/Raiders'], resolve),
			meta: {
				title: '乐园攻略'
			}
		},
		{
			path: '/paradise/:typ',
			component: resolve => require(['@/components/page/Paradise'], resolve),
			meta: {
				title: '五维乐园'
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
