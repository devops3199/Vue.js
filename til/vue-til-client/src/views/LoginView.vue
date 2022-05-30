<template>
	<div class="login-container">
		<LoginForm></LoginForm>
	</div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
	components: {
		LoginForm,
	},
};
</script>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
