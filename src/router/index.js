import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import CategoryList from "../views/CategoryList.vue"
import PaymentOptions from "../views/PaymentOptions.vue"
import OurContacts from "../views/OurContacts.vue"
import CategoryPanel from "../views/CategoryPanel"


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoryList,
  },
  {
    path: "/category/:category",
    name: "category",
    component: CategoryPanel,
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentOptions,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: OurContacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
