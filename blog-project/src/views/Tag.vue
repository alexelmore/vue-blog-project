<template>
	<div class="tag">
		<div v-if="error">{{ error }}</div>
		<div v-if="posts.length"><PostList :posts="filteredPosts" /></div>
		<div v-else><Spinner /></div>
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
		// Init route from useRoute
		const route = useRoute();
		// Init current tag
		const currentTag = route.params.tag;
		// Pull out post,error and load from getPosts composables
		const { posts, error, load } = getPosts();
		// call the load function to get the posts
		load();
		// Use a computed property that filters returns only the posts that have the current tag in them
		const filteredPosts = computed(() => {
			return posts.value.filter((post) => post.tags.includes(currentTag));
		});
		return { error, posts, filteredPosts };
	},
};
</script>

<style></style>
