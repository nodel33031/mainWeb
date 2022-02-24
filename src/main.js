import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "bootstrap-icons/font/bootstrap-icons.css";
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css

createApp(App)
    .use(vue3videoPlay)
    .use(router)
    .mount("#app");
