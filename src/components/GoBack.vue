<template>
  <span class="go-back">
    <v-btn @click="goBack">go back </v-btn>
  </span>
</template>
<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
v-btn {
  border: 0;
}
</style>
