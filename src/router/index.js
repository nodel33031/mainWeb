import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/videoHeader",
    name: "videoheader",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/videoHeader.vue"),
  },
  {
    path: "/videoMain",
    name: "videoMain",
    // alias:"/",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/videoMain.vue"),
    children: [
      {
        path: "videolist_handout",
        name: "videolist_handout",
        // alias:"/videoMain",
        components: {
          videolist_handout: () =>
            import("../components/videolist_handout.vue"),
        },
      },
      {
        path: "videolist_garbage",
        name: "videolist_garbage",
        components: {
          videolist_garbage: () =>
            import("../components/videolist_garbage.vue"),
        },
      },
    ],
  },
  {
    path: "/videoResource",
    name: "videoResource",
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/videoResource.vue"),
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/Login.vue"),
  },
  {
    path: "/qrcodeAdditModal",
    name: "qrcodeAdditModal",
    component: () => import("../components/qrcodeAdditModal.vue"),
  },
  {
    path: "/qrcodeFooter",
    name: "qrcodeFooter",
    component: () => import("../components/qrcodeFooter.vue"),
  },
  {
    path: "/qrcodeHeader",
    name: "qrcodeHeader",
    component: () => import("../components/qrcodeHeader.vue"),
  },

  {
    path: "/qrcodeMain",
    name: "qrcodeMain",
    
    component: () => import("../components/qrcodeMain.vue"),
  },
  {
    path: "/qrcodeMain2",
    name: "qrcodeMain2",
    component: () => import("../components/qrcodeMain2.vue"),
  },
  {
    path: "/qrcodeMain3",
    name: "qrcodeMain3",
    component: () => import("../components/qrcodeMain3.vue"),
  },
  {
    path: "/qrcodeSearchmodal",
    name: "qrcodeSearchmodal",
    component: () => import("../components/qrcodeSearchmodal.vue"),
  },
  {
    path: "/videoPlayer",
    name: "videoPlayer",
    component: () =>
      import("../components/videoPlayer.vue"),
  },
  {
    path: "/videoMemberplace",
    name: "videoMemberplace",
    alias: '/',
    component: () => 
      import("../components/videoMemberplace.vue"),
    children: [
      {
        path: "videoOrganization",
        name: "videoOrganization",
        alias: '/',
        components: {
          videoOrganization: () =>
            import("../components/videoOrganization.vue"),
        },
      },
      {
        path: "videoEditinfo",
        name: "videoEditinfo",
        alias: '/',
        components: {
          videoEditinfo: () =>
            import("../components/videoEditinfo.vue"),
        },
      },
      {
        path: "videoChangepassword",
        name: "videoChangepassword",
        alias: '/',
        components: {
          videoChangepassword: () =>
            import("../components/videoChangepassword.vue"),
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
