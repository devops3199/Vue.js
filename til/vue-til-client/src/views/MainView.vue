<template>
	<main class="main-container">
		<ul>
			<li v-for="postItem in postItems" :key="postItem._id">
				<div>
					<h1>{{ postItem.title }}</h1>
				</div>
				<div>
					<span>{{ postItem.contents }}</span>
				</div>
			</li>
		</ul>
	</main>
</template>

<script>
import { fetchPosts } from '@/api/index';

export default {
	data() {
		return {
			postItems: [],
		};
	},
	methods: {
		async fetchData() {
			const { data } = await fetchPosts();
			this.postItems = data.posts;
		},
	},
	created() {
		this.fetchData();
	},
};
</script>

<style scoped>
.main-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

ul {
	margin: 0;
	padding: 0;
}

li {
	list-style: none;
	width: 100%;
	border: 1px solid tomato;
	padding: 8px;
}
</style>
