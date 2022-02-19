import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Header",
    name: "header",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Header.vue"),
  },
  {
    path: "/Main",
    name: "Main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Main.vue"),
    children: [
      {        
        path: "list_handout",
        components: {
          list_handout: () => import("../components/list_handout.vue"),
        },
      },
      {
        path: "list_garbage",
        components: {
          list_garbage: () => import("../components/list_garbage.vue"),
        },
      },

    ],
  },
  {
    path: "/viewboard",
    name: "viewboard",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/viewboard.vue"),
  },
  {
    path: "/",
    name: "Login",
    // component:Login,
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login.vue"),
  },
  {
    path:"/qrcodeAdditModal",
    name:"qrcodeAdditModal",
    component:()=>
      import("../components/qrcodeAdditModal.vue"),
  },
  {
    path:"/qrcodeFooter",
    name:"qrcodeFooter",
    component:()=>
      import("../components/qrcodeFooter.vue"),
  },
  {
    path:"/qrcodeHeader",
    name:"qrcodeHeader",
    component:()=>
      import("../components/qrcodeHeader.vue"),
  },
  {
    path:"/qrcodeHome",
    name:"qrcodeHome",
    component:()=>
      import("../components/qrcodeHome.vue"),
  },
  {
    path:"/qrcodeMain",
    name:"qrcodeMain",
    component:()=>
      import("../components/qrcodeMain.vue"),
  },
  {
    path:"/qrcodeMain2",
    name:"qrcodeMain2",
    component:()=>
      import("../components/qrcodeMain2.vue"),
  },
  {
    path:"/qrcodeMain3",
    name:"qrcodeMain3",
    component:()=>
      import("../components/qrcodeMain3.vue"),
  },
  {
    path:"/qrcodeSearchmodal",
    name:"qrcodeSearchmodal",
    component:()=>
      import("../components/qrcodeSearchmodal.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
