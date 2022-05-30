<template>
	<div>
		<AppHeader></AppHeader>
		<router-view></router-view>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader,
	},
};
</script>

<style>
body {
	font-family: 'Ubuntu', sans-serif;
}
</style>
