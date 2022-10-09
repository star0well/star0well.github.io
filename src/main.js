import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/index.css";
import registerAntdv from "@/global/index";
import {menuMapToRoutes} from "@/utils/map-menu";
const app = createApp(App);
registerAntdv(app);
const routes = menuMapToRoutes();
routes.forEach((route) => {
  router.addRoute("main", route);
});
app.use(store).use(router).mount("#app");
