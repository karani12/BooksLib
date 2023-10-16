import "./bootstrap";

import { createApp } from "vue";
import { router } from "./router/index";
import { createPinia } from "pinia";
const pinia = createPinia();

import App from "./app.vue";

createApp(App).use(router).use(pinia).mount("#app");
