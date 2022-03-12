import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let res = await projectFirestore.collection('posts').doc(id).get();
      if (res.exists) {
        post.value = { ...res.data(), id: res.id };
      } else {
        throw new Error("The post with that ID does not exist");
      }

    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
export default getPost;
