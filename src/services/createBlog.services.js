import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://pos-fullstack-backend.herokuapp.com/cart/';
class CreateBlogService{
  getCreateBlog() {
    return axios
      .get(API_URL, { headers: authHeader() })
  }
  async add(blog) {
    return axios
      .post(API_URL + blog._id,{
        qty: parseInt(blog.qty)
      },
      { headers: authHeader() })
  }
  delete() {
      return axios
        .delete(API_URL, { headers: authHeader() })
  }
  deleteOne(blog) {
    return axios
      .patch(API_URL + blog,{}, { headers: authHeader() })
  }
  update(blog) {
    return axios
      .put(API_URL + blog._id,{
        qty: parseInt(blog.qty)
      }, 
        { headers: authHeader() })
}
};

export default new CreateBlogService();