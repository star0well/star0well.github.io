import {createRouter, createWebHashHistory} from "vue-router";
import main from "@/views/main/main.vue";
import {firstRoute} from "@/utils/map-menu";

const routes = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: main
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to) => {
  if (to.path !== "/login") {
    if (to.path === "/main") {
      return firstRoute?.path;
    }
  }
});
export default router;
