import CreateBlogService from "../services/createBlog.services";
const initialState = createBlog
  ? {blog}
  : {blog: null};
export const createBlog = {
  namespaced: true,
  state: initialState,
  actions: {
    add({ commit }, blog) {
      return CreateBlogService.add(blog).then(
        (product) => {
          commit("AddBlog",blog);
          return Promise.resolve(blog);
        },
        (error) => {
          commit("NotAdded");
          return Promise.reject(error);
        }
      );
    },
    delete({ commit }, blog) {
        return CreateBlogService.delete(blog).then(
          (blog) => {
            commit("AddBlog", blog);
            return Promise.resolve(blog);
          },
          (error) => {
            commit("NotAdded");
            return Promise.reject(error);
          }
        );
      },
      deleteOne({ commit }, blog) {
        return CreateBlogService.deleteOne(blog).then(
          (blog) => {
            commit("AddBlog", blog);
            return Promise.resolve(blog);
          },
          (error) => {
            commit("NotAdded");
            return Promise.reject(error);
          }
        );
      },
      update({ commit }, blog) {
        return CreateBlogService.update(blog).then(
          (blog) => {
            commit("AddBlog",blog);
            return Promise.resolve(blog);
          },
          (error) => {
            commit("NotAdded");
            return Promise.reject(error);
          }
        );
      },
  },
  mutations: {
    AddBlog(state, blog) {
      state.blog = blog; //if we get a blog
    },
    NotAdded(state) {
      state.blog = null; // if we dont get a blog
    },
  }, 
}