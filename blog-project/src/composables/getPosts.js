import { ref } from "vue";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const post = await fetch(`http://localhost:3000/posts`);
      if (post.status === 200 && post.ok) {
        const json = await post.json();
        const data = await json;
        posts.value = data;
      } else {
        throw new Error("Unable to fetch the data");
      }
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, load };
};

export default getPosts;
