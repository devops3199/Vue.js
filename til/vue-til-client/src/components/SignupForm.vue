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
		<div>
			<label for="nickname">nickname: </label>
			<input id="nickname" type="text" v-model="nickname" />
		</div>
		<button type="submit">회원가입</button>
		<p>{{ message }}</p>
	</form>
</template>

<script>
import { signUp } from '@/api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
			message: '',
		};
	},
	methods: {
		async submitForm() {
			const { data } = await signUp({
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			});
			this.message = `${data.username}님이 가입되었습니다.`;
			this.initForm();
		},
		initForm() {
			(this.username = ''), (this.password = ''), (this.nickname = '');
		},
	},
};
</script>

<style></style>
