import HomeView from "../views/HomeView.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/details/:id",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "details" */ "../views/DestinationDetails.vue"
      ),
  },
];

const router = new Router({
  linkExactActiveClass: "navigation-active-class",
  mode: "history",
  routes,
});

export default router;
