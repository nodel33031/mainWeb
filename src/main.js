import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "bootstrap-icons/font/bootstrap-icons.css";
import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

createApp(App)
    .use(vue3videoPlay)
    .use(router)
    .component('Loading',Loading)
    .mount("#app");
