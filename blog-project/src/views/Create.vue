<template>
  <div class="create">
    <form @submit.prevent="handleSubmit">
      <label>Title: </label>
      <input required type="text" v-model="title" />
      <label>Content: </label><textarea required v-model="body"></textarea>
      <label>Tags (click enter to add a tag)</label>
      <input required v-model="tag" @keydown.enter.prevent="handleKeyDown" />
      <button>Add Post</button>
      <div v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Create",
  setup() {
    const title = ref("");
    const body = ref("");
    const tags = ref([]);
    const tag = ref("");

    const handleKeyDown = () => {
      if (tag.value !== "" && !tags.value.includes(tag.value)) {
        tags.value.push(tag.value.replace(/\s/, ""));
      }
      tag.value = "";
    };

    const handleSubmit = () => {
      console.log(title.value, body.value, tags.value);
    };
    return {
      body,
      title,
      tags,
      tag,
      handleKeyDown,
      handleSubmit,
    };
  },
};
</script>

<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid rgb(116, 114, 114);
}
textarea {
  height: 160px;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
}
label::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1.5deg);
}
button {
  display: block;
  margin-top: 30px;
  background: #ff8800;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 18px;
}
button:hover {
  cursor: pointer;
  opacity: 0.5;
}
.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
