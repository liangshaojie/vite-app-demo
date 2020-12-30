import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// 环境变量
console.log(import.meta.env.VITE_TOKEN);

createApp(App).mount("#app");
