import path from "path";

export const BASE_URL_PREFIX: string = "/";

export const PATH = {
  HOME: {
    name: "Home",
    path: BASE_URL_PREFIX,
  },
  ABOUT: {
    name: "About",
    path: `${BASE_URL_PREFIX}about`,
  },
  PROJECT: {
    name: "Project",
    path: `${BASE_URL_PREFIX}project`
  },
  SKILLS: {
    name: "Skills",
    path: `${BASE_URL_PREFIX}skills`
  },
  NOT_FOUND: {
    name: "Page Not Found",
    path: `${BASE_URL_PREFIX}not-found`,
  },
  CONTACT: {
    name: "Contact",
    path: `${BASE_URL_PREFIX}contact`,
  },
};
