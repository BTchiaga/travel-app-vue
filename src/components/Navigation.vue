<template>
  <nav id="nav">
    <p class="logo">Basic Travelling app</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.id"
        class="links"
      >
        <router-link
          :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
          >{{ destination.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import store from "@/store.js";

export default {
  name: "TheNavigation",
  data() {
    return {
      destinationId: this.$route.params.id,
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>
#nav {
  display: flex;
  justify-content: center;
}
nav a.navigation-active-class {
  color: #d855d8;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
