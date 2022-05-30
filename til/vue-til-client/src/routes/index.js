import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			// NOTE: Code Splitting
			component: () => import('@/views/LoginView.vue'),
		},
		{
			path: '/signup',
			// NOTE: Code Splitting
			component: () => import('@/views/SignupView.vue'),
		},
		{
			path: '/main',
			// NOTE: Code Splitting
			component: () => import('@/views/MainView.vue'),
		},
		{
			path: '*',
			// NOTE: Code Splitting
			component: () => import('@/views/NotFoundView.vue'),
		},
	],
});
