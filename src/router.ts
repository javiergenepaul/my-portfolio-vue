import { createWebHistory, createRouter } from "vue-router";
import * as View from "./views";
import { PATH } from "./config";

const routes = [
  {
    path: PATH.HOME.path,
    name: PATH.HOME.name,
    component: View.HomeView,
    redirect: PATH.ABOUT.path,
    children: [
      {
        path: PATH.ABOUT.path,
        name: PATH.ABOUT.name,
        component: View.AboutSection,
      },
      {
        path: PATH.CONTACT.path,
        name: PATH.CONTACT.name,
        component: View.ContactSection,
      },
      {
        path: PATH.PROJECT.path,
        name: PATH.PROJECT.name,
        component: View.ProjectSection,
      },
      {
        path: PATH.SKILLS.path,
        name: PATH.SKILLS.name,
        component: View.SkillsSection,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: View.NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
