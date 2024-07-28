import { createWebHistory, createRouter } from "vue-router";
import { AboutSection, ContactSection, NotFound } from "./views";
import HomeView from "./views/HomeView.vue";
import { PATH } from "./config";

const routes = [
  {
    path: PATH.HOME.path,
    name: PATH.HOME.name,
    component: HomeView,
    children: [
      { path: PATH.ABOUT.path, name: PATH.ABOUT.name, component: AboutSection },
      {
        path: PATH.CONTACT.path,
        name: PATH.CONTACT.name,
        component: ContactSection,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
