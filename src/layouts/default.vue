<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Default",
  computed: {
    headerTitle() {
      const routeName = this.$route.name;
      return routeName;
    },
  },
};
</script>

<style scoped>
.header {
  width: 100vw;
  height: 50px;
  background-color: aqua;
  line-height: 50px;
  padding: 0 10px;
}
</style>
