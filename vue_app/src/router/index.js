import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home")
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login")
    },
    {
      name: "grids",
      path: "/grids",
      component: () => import("@/views/Grid")
    },
    {
      name: "forms",
      path: "/forms",
      component: () => import("@/views/Form")
    }
  ]
});
