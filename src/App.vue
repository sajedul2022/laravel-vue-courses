<template>
  <div class="container mx-auto">
    <!-- <h1 class="font-bold text-red-500">{{ msg }}</h1>
    <button class="btn-primary text-red h-14 w-32" >Change </button> -->

    <!-- routes -->
    <p >
      <router-link to="/">Home</router-link>
      <span> <router-link to="/about">About</router-link> </span>
    </p>
    

    <router-view></router-view>
    <br/>
    <br/>
    <br/>
    
    <div class="p-4 mb-4 shadow border border-gray-200">
      <h1>Courses List</h1>
      <table
        class="border-collapse border-spacing-2 border border-slate-400 border-separate"
      >
        <thead class="">
          <tr>
            <th class="border border-slate-300 p-2">ID</th>
            <th class="border border-slate-300 p-2">Course Name</th>
            <th class="border border-slate-300 p-2">Course Details</th>
            <th class="border border-slate-300 p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses">
            <td class="border border-slate-300 p-2">{{ course.id }}</td>
            <td class="border border-slate-300 p-2">{{ course.name }}</td>
            <td class="border border-slate-300 p-2">{{ course.details }}</td>
            <td class="border border-slate-300 p-2">{{ course.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Welcome TO VUE Project",
      courses: [
        {
          id: 1,
          name: "Vue",
          details: "vue.js is single page Application.lorem ipsum",
          price: 500,
        },
        {
          id: 2,
          name: "Laravel",
          details: "Laravel.js is single page Application.lorem ipsum",
          price: 100,
        },
        {
          id: 3,
          name: "PHP",
          details: "PHP.net is single page Application.lorem ipsum",
          price: 500,
        },
      ],
    };
  },

  mounted() {
    this.replaceData();
  },

  methods: {
    replaceData() {
      this.msg = "VUE Project Foreach Loop using v-for, {{}} ";
    },
  },
};
</script>
