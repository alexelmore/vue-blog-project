import { ref } from "vue";
const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const url = "http://localhost:3000/posts/" + id;
      const request = await fetch(url);
      if (request.status === 200 && request.ok) {
        const response = await request.json();
        const data = await response;
        post.value = data;
      } else {
        throw new Error("Unable to fetch the data");
      }
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
export default getPost;
