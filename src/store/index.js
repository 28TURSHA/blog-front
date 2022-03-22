import { createStore } from "vuex";
import { auth } from "../store/auth.module";
import { blog } from "./blogs.module"
import { createBlog } from "./createBlog.module"
const store = createStore({
  modules: {
    auth,
    blog,
    createBlog
  },
});
export default store;
