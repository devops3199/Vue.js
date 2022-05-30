<template>
	<div class="signup-container">
		<SignupForm></SignupForm>
	</div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';

export default {
	components: {
		SignupForm,
	},
};
</script>

<style scoped>
.signup-container {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
