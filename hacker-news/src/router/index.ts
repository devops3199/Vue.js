import Vue from "vue";
import VueRouter from "vue-router";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import createListView from "../views/CreateListView";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/ask",
      component: createListView("AskView"),
    },
    {
      path: "/news",
      component: createListView("NewsView"),
    },
    {
      path: "/jobs",
      component: createListView("JobsView"),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item",
      component: ItemView,
    },
  ],
});
