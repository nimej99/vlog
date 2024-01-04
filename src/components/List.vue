<template>
  <div v-for="(data, index) in blog" :key="index">
    <!-- <router-link :to='"/detail/" + blog[index].number'
    > -->
      <h5 @click='$router.push(`/detail/${index}`)'>{{ blog[index].title }}</h5>
    <!-- </router-link> -->
      <p>{{ blog[index].date }}</p>
  </div>
  
</template>

<script>
export default {
  name: "listCard",
  components: {
    
  },
  props: {
    blog: Array,
  },
  methods:{
    
  }
};
</script>

<style>
</style>