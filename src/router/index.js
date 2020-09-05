import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("views/home/Home");
const Search = () => import("views/search/Search");
const Order = () => import("views/order/Order");
const Profile = () => import("views/profile/Profile");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/order",
    name: "Order",
    component: Order
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes
});

export default router;
