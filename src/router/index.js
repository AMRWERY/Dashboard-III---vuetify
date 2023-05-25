// Composables
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../pages/Dashboard.vue"),
  },
  {
    path: "/mail",
    name: "Mail",
    component: () => import("../components/Mail.vue"),
  },
  {
    path: "/directory",
    name: "Directory",
    component: () => import("../components/Directory.vue"),
  },
  {
    path: "/charts",
    name: "Charts",
    component: () => import("../components/Charts.vue"),
  },
  {
    path: "/footer",
    name: "Footer",
    component: () => import("../components/Footer.vue"),
  },
  {
    path: "/card-header",
    name: "CardHeader",
    component: () => import("../components/CardHeader.vue"),
  },
  {
    path: "/cards",
    name: "Cards",
    component: () => import("../components/Cards.vue"),
  },
  {
    path: "/tables",
    name: "Tables",
    component: () => import("../components/tables/Tables.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../components/checkout/Checkout.vue"),
  },
  {
    path: "/product-catalogues",
    name: "ProductCatalogues",
    component: () => import("../components/ProductCatalogues.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/pages/Login.vue"),
  },
  {
    path: "/lock-screen",
    name: "LockScreen",
    component: () => import("../components/pages/LockScreen.vue"),
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: () => import("../components/pages/Pricing.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../components/maps/Map.vue"),
  },
  {
    path: "/map-marker",
    name: "MapMarker",
    component: () => import("../components/maps/MapMarker.vue"),
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: () => import("../components/profile/UserProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
