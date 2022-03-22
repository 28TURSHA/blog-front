import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://backend-blogs1.herokuapp.com/blogs';
class BlogService{
  async create(blog) {
    return axios
      .post(API_URL, {
        title: blog.title,
        description: blog.description,
        date: blog.date,
        content: blog.content,
        img: blog.img,
      },
      { headers: authHeader() })
  }
  delete(blog) {
      return axios
        .delete(API_URL + blog, { headers: authHeader() })
  }
  update(blog) {
    return axios
      .patch(API_URL + blog._id,{
        title: blog.title,
        description: blog.description,
        date: blog.date,
        content: blog.content,
        img: blog.img,
      }, 
        { headers: authHeader() })
}
};

export default new BlogService();