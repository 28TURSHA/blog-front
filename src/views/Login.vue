<template>
  <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>LOGIN</h2>
        <div class="underline-title"></div>
      </div>
    
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="email" style="padding-top:13px">Email</label>
          <Field name="email" type="text" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password" style="padding-top:13px">Password</label>
          <Field name="password" type="password" class="form-content" />
          <div class="form-border"></div>
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <button id="submit-btn" class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <router-link :to="{ path: '/signup' }" id="signup">Don't have account yet?</router-link>
        <!-- <a :to="{ name: 'SignUp' }" id="signup">Don't have account yet?</a> -->
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
 
</template>
<script>

import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
   
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/Profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/Profile");
        },
        (error) => {
          this.loading = false;
          this.message = alert('user logged in')
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
body {
  background: #98FB98;
  height: 1000vh;
}
label {
  font-family: "Roboto", sans-serif;
  font-size: 11pt;
}
#card {
  background: #fbfbfb;
 
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
  height: fit-content;
  margin: 6rem auto 8.1rem auto;
  width: 330px;
  padding: 2rem;
}
#card-content {
  padding: 12px 44px;
}
#card-title {
  font-family: "Roboto", sans-serif;
  letter-spacing: 4px;
  padding-bottom: 23px;
  padding-top: 13px;
  text-align: center;
}

#submit-btn {
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
#submit-btn:hover {
  box-shadow: 0px 1px 18px #39a06c;
}
.form {
  align-items: left;
  display: flex;
  flex-direction: column;
}
.form-border {
  background: #98FB98;
  height: 1px;
  width: 100%;
}
.form-content {
  background: #fbfbfb;
  border: none;
  outline: none;
  padding-top: 14px;
}
.underline-title {
  background: #39a06c;
  height: 4px;
  margin: -1.1rem auto 0 auto;
  width: 90px;
}
</style>