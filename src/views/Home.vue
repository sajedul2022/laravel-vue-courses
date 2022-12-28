<template>
  <div class="flex flex-wrap mx-4 mt-6">
    <div v-for="user in users" class="w-1/3 px-4">
      <div class="p-4 border border-gray-400">
        <h2>User ID: {{ user.id }}</h2>
        <h2>Work Title: {{ user.title }}</h2>
        <h2>Completed Staus: {{ user.completed }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },

  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => (this.users = json));
  },
};
</script>
