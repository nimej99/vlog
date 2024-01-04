<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to='/' class="navbar-brand" href="#">Vlog</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                to="/"
                class="nav-link active"
                aria-current="page"
                href="#"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/list"
                class="nav-link active"
                aria-current="page"
                href="#"
                >List</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="container mt-4">
      <router-view class='view main'  :blog="blog"> </router-view>
      <router-view class='view comment' name='comment'></router-view>
    </section>
  </div>
</template>

<script>
import blog from "./assets/data/blog";

export default {
  name: "App",
  components: {
    // List,
  },
  data() {
    return {
      blog,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h5 {
  padding-bottom: 12px;
}
</style>
