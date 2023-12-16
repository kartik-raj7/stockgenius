import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../../pages/landingpage")),
    exact: true,
  },
  {
    path: "/login",
    component: lazy(() => import("../../pages/loginpage")),
    exact: true,
  },
  {
    path: "/create-profile",
    component: lazy(() => import("../../pages/userprofile")),
    exact: true,
  },
  {
    path: "/stock-profile",
    component: lazy(() => import("../../pages/stockprofilepage")),
    exact: true,
  },
  {
    path: "/add-portfolio",
    component: lazy(() => import("../../pages/addportfolio")),
    exact: true,
  },
  {
    path: "/ideas",
    component: lazy(() => import("../../pages/ideas")),
    exact: true,
  },
  {
    path: "/myportfolio",
    component: lazy(() => import("../../pages/homepage")),
    exact: true,
  },
];

export default routes;
