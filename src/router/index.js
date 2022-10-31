import HomeView from "../views/HomeView.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: true,
  },

  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "details" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
          ),
      },
    ],
  },
];

const router = new Router({
  linkExactActiveClass: "navigation-active-class",
  mode: "history",
  routes,
});

export default router;
