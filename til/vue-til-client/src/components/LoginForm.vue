<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">id: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">pw: </label>
			<input id="password" type="password" v-model="password" />
		</div>
		<button :disabled="!isUsernameValid || !password" type="submit">
			로그인
		</button>
		<p>{{ message }}</p>
	</form>
</template>

<script>
import { login } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
			message: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const { data } = await login({
					username: this.username,
					password: this.password,
				});
				this.message = `${data.user.username}님 환영합니다.`;
			} catch (error) {
				this.message = error.response.data;
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.username = '';
			this.password = '';
		},
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
};
</script>

<style></style>
