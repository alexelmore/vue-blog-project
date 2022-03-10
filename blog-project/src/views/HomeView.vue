<template>
  <div class="home">
    <h1>Home</h1>

    <h2>Ninja One</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>

    <h2>Ninja Two</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>
    <p>Ninjas combined age is {{ combinedAge }}</p>
    <input type="text" v-model="search" />
    <p>search Term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      <p>{{ name }}</p>
    </div>
    <button @click="stopWatching">Stop watching</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed, watch, watchEffect } from "vue";
export default {
  name: "HomeView",
  setup() {
    // Refs inside the composition API's setup method
    const ninjaOne = ref({ name: "Mario", age: 30 });
    const ninjaTwo = ref({ name: "Luigi", age: 35 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.value.age = 45;
    };

    const search = ref("");

    // Computed property inside the composition API's setup method
    const combinedAge = computed(() => {
      return ninjaOne.value.age + ninjaTwo.value.age;
    });

    const names = ref(["Mario", "Luigi", "Peach", "Toad", "Bowser", "Koopa"]);

    // Watch hook inside the composition API's setup method
    const stopWatch = watch(search, () => {
      console.log("somebodys watching you!");
    });

    // WatchEffect hook inside the composition API's setup method
    const stopeWatchEffect = watchEffect(() => {
      console.log("watch effect function ran");
    });

    // Another Computed property inside the composition API's setup method
    const matchingNames = computed(() => {
      return names.value.filter((name) =>
        name.toLowerCase().includes(search.value.toLowerCase())
      );
    });

    // Function that stops watchers
    const stopWatching = () => {
      stopWatch();
      stopeWatchEffect();
    };
    return {
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      combinedAge,
      names,
      search,
      matchingNames,
      stopWatching,
    };
  },
};
</script>
