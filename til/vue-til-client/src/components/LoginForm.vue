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
	</form>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				this.$store.dispatch('LOGIN', {
					username: this.username,
					password: this.password,
				});
				this.$router.push('/main');
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
