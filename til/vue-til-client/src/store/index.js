import Vue from 'vue';
import Vuex from 'vuex';
import { login } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: localStorage.getItem('username') || '',
	},
	getters: {
		isLogin(state) {
			return !!state.username;
		},
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		clearUsername(state) {
			state.username = '';
		},
	},
	actions: {
		async LOGIN({ commit }, user) {
			const { data } = await login(user);
			commit('setUsername', data.user.username);
			localStorage.setItem('token', data.token);
			localStorage.setItem('username', data.user.username);
			return data;
		},
	},
});
