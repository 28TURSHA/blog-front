import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import About from "../views/About.vue";
import SignUp from "../views/SignUp.vue";
import CreateBlog from "../views/CreateBlog";
import Profile from "../views/Profile.vue";
import Blogs from "../views/Blogs.vue";
import Contact from "../views/Contact.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },

  {
    path: "/Blogs",
    name: "Blogs",
    component: Blogs,
  },
  {
    path: "/CreateBlog",
    name: "CreateBlog",
    component: CreateBlog,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
