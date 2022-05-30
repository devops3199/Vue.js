<template>
	<div class="container">
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
* {
	margin: 0;
}

body {
	font-family: 'Ubuntu', sans-serif;
	background-color: aquamarine;
}

.container {
	width: 450px;
	margin: 0 auto;
	background-color: white;
}
</style>
