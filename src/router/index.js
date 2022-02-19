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
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
