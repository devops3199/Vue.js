<template>
	<header>
		<nav>
			<template v-if="isUserLogin">
				<span>{{ getUsername }}</span>
				<a href="javascript:;" @click="logout">로그아웃</a>
			</template>
			<template v-else>
				<router-link to="/login">로그인</router-link>
				<router-link to="/signup">회원가입</router-link>
			</template>
		</nav>
	</header>
</template>

<script>
export default {
	computed: {
		getUsername() {
			return this.$store.state.username;
		},
		isUserLogin() {
			return this.$store.getters.isLogin;
		},
	},
	methods: {
		logout() {
			localStorage.clear();
			this.$store.commit('clearUsername');
			this.$router.push('/login');
		},
	},
};
</script>

<style scoped>
nav {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

a {
	padding: 8px;
	text-decoration: none;
	color: white;
	background-color: cadetblue;
	margin: 0 4px;
}
</style>
