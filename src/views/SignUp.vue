<template>
  <div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>SIGN UP</h2>
        <div class="underline-title"></div>
      </div>

      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful">
          <div class="form-group">
            <label for="username" style="padding-top: 13px">Username</label>
            <Field name="username" type="text" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="username" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="email" style="padding-top: 13px">Email</label>
            <Field name="email" type="email" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="email" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="telephone" style="padding-top: 13px"
              >Phone Number</label
            >
            <Field name="telephone" type="telephone" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="telephone" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="password" style="padding-top: 13px">Password</label>
            <Field name="password" type="password" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <div class="form-group">
            <button id="submit-btn" class="btn btn-primary btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              Sign Up
            </button>
            <router-link :to="{ name: 'Login' }" id="login">Have an account?</router-link>
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
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(40, "Must be maximum 40 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      telephone: yup
        .string()
        .required("Telephone is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/Login");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
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
/* body {
  background: -webkit-linear-gradient(bottom, #2dbd6e, #a6f77b);
  background-repeat: no-repeat;
} */
label {
  font-family: "Roboto", sans-serif;
  font-size: 11pt;
}

#forgot-pass {
  color: #98FB98;
  font-family: "Roboto", sans-serif;
  font-size: 10pt;
  margin-top: 3px;
  text-align: right;
}
#card {
  background: #fbfbfb;
  border-radius: 8px;
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65);
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
#signup {
  color: #98FB98;
  font-family: "Roboto", sans-serif;
  font-size: 10pt;
  margin-top: 16px;
  text-align: center;
}
#submit-btn {
  background: #98FB98;
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #98FB98;
  cursor: pointer;
  color: white;
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
  background: #98FB98;
  height: 3px;
  margin: -1.1rem auto 0 auto;
  width: 89px;
}
</style>
