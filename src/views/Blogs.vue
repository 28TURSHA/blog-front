<template>
  <div class="about">
    <h1>BLOGS</h1>
    <div class="underline-title"></div>
  </div>

  <div class="blogs">
    <div class="card" v-for="blog in blogs" :key="blog.id">
      <img :src="blog.image" class="card-img-top" />
      <div class="card-body">
        <h3 class="card-title">{{ blog.name }}</h3>
        <h5 class="card-description">{{ blog.description }}</h5>
        <p class="card-content">{{ blog.content }}</p>
      </div>
      <div class="d-flex justify-content-end card-footer">
        <button type="button" class="btn w-20" id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Edit</button>
        <button type="button" class="btn w-20" id="delete" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
      </div>
    </div>
  </div>
  
<!--Modal: Edit information on blog -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" style="color: #39a06c"> Edit your Profile</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" v-if="currentUser" ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Name:*</label>
              <input type="text" class="form-control" id="recipient-name" v-model="updatedBlog.name"/>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label" >Description:*</label
>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="updatedBlog.description"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Content:*</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="updatedBlog.content"
              />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Image:*</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="updatedBlog.image"
              />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">
            CLOSE
          </button>
          <button type="button" class="btn" @click.prevent="updateBlog()">
            SAVE
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--Modal: Delete blog post -->
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" style="color: #b18044">
            Delete your profile?
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete you account?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">
            CLOSE
          </button>
          <button type="button" class="btn">YES</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const url = "https://backend-blogs1.herokuapp.com/blogs";
import axios from "axios";

export default {
  name: "Blogs",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/Login");
    }
  },
  data() {
    return {
      blogs: [],
      updatedBlog: {
        name: "",
        description: "",
        image: "",
        content: "",
      },
    };
  },
  mounted() {
    fetch("https://backend-blogs1.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => (this.blogs = data))
      .catch((err) => console.log(err.message));
    // UserService.getPublicContent().then(
    //   (response) => {
    //     this.content = response.data;
    //   },
    //   (error) => {
    //     this.content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //   }
    // );
  },
  methods: {
    async updateBlog() {
      try {
        fetch(`${url}`, {
          method: "PATCH",
          body: JSON.stringify({
            name: this.updatedBlog.name,
            description: this.updatedBlog.description,
            content: this.updatedBlog.content,
            image: this.updatedBlog.image,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user")).accessToken
            }`,
          },
        })
          .then((res) => res.json())
          .then(() => {
            alert("Your blog has been updated!");
            this.$store.dispatch("auth/logout");
            this.$router.push("/Login");
          });
      } catch (err) {
        console.error(err);
      }
    },
    async deleteBlog() {
      const headers = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      };
      const new_url = `${url}`;
      try {
        await axios.delete(new_url, headers, this.currentUser).then(() => {
          alert("Profile has been deleted successfully");
          this.$store.dispatch("auth/logout");
          this.$router.push("/Login");
        });
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.link {
  color: #98FB98;
}
h1 {
  padding-top: 30px;
}
.about {
  padding-top: 40px;
  padding-bottom: 30px;
}
.underline-title {
  background: #39a06c;
  height: 3px;
  margin: -1.1rem auto 0 auto;
  width: 118px;
}
.paragraph {
  padding-left: 50px;
}
.picture {
  width: 400px;
}
.btn {
  background: white;
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px#98FB98;
  cursor: pointer;
  color: #98FB98;
  font-family: "Roboto", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
  gap: 20px;
}
.btn:hover {
  box-shadow: 0px 1px 18px #39a06c;
}
.card-img-top {
  object-fit: cover;
  width: 200px;
  height: 200px;
  align-items: center;
}

.blogs {
  display: row;
  justify-content: center;
  gap: 100px;
}
p{
  color: black;
}
h3,h5{
  color:black;
}
</style>
