import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ScrollAnimation from "@/directives/scrollanimation.js";

const app = createApp(App);

app.directive("scrollanimation", ScrollAnimation);

app.use(store);
app.use(router);

app.mount("#app");
