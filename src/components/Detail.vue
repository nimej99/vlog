<template>
  <div>
    <h4>상세 페이지</h4>
      <p>{{ blog[$route.params.id].content }}</p>
    <span>{{ blog[$route.params.id].date }}</span>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "detailView",
  components: {},
  props: {
    blog:Array,
  },
};
</script>

<style>
</style>