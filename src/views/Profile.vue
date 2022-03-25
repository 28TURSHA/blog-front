<template>
  <div class="container">
    <h3>
      This is the profile of :
    </h3>
      <p><strong>Name:</strong>{{ currentUser.username }}</p>
    <p> <strong>Email:</strong> {{ currentUser.email }}</p>
  </div>
  <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" class="edit-btn">Edit Profile </button>
  <button data-bs-toggle="modal" data-bs-target="#deleteModal" class="edit-btn">Delete Profile</button>

  <!-- Modal: Edit profile -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="currentUser">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="edit" id="exampleModalLabel" style="color: #b18044">Edit your Profile</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="updatedUser.name"/>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Email:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="updatedUser.email"/>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">CLOSE </button>
          <button type="button" class="btn" @click.prevent="updateUser()">SAVE </button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="this.currentUser">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel" style="color: #b18044"> Delete your profile?</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Are you sure you want to delete you profile?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-bs-dismiss="modal">CLOSE</button>
          <button type="button" class="btn" @click.prevent="deleteUser()">YES</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
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
      updatedUser: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
    async updateUser() {
      try {
        fetch(`${url}`, {
          method: "PATCH",
          body: JSON.stringify({
            email: this.updatedUser.email,
            name: this.updatedUser.name,
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
            alert("Your profile has been updated!");
            this.$store.dispatch("auth/logout");
            this.$router.push("/Login");
          });
      } catch (err) {
        console.error(err);
      }
    },
    async deleteUser() {
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
.container {
  padding-top: 50px;
}
h5{
  color:#98FB98 #39a06c
}
.edit-btn {
  background: white;
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #98FB98;
  cursor: pointer;
  color: #98FB98;
  font-family: "Roboto", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
.edit-btn:hover {
  box-shadow: 0px 1px 18px #39a06c;
}
</style>
