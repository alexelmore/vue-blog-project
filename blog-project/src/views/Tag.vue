<template>
	<div class="tag">
		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length"><PostList :posts="filteredPosts" /></div>
		<div v-if="!error && posts.length <= 0"><Spinner /></div>
	</div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

export default {
	name: "Tag",
	components: {
		Spinner,
		PostList,
	},
	setup() {
		// Pull out post,error and load from getPosts composables
		const { posts, error, load } = getPosts();

		// call the load function to get the posts
		load();

		// Init route from useRoute
		const route = useRoute();

		// Use a computed property that filters returns only the posts that have the current tag in them
		const filteredPosts = computed(() => {
			return posts.value.filter((post) => post.tags.includes(route.params.tag));
		});
		return { error, posts, filteredPosts };
	},
};
</script>

<style>
.tag {
	max-width: 1200px;
	margin: 0 auto;
	padding: 10px;
}
</style>
