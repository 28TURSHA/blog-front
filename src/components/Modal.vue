<template>
  <div class="bruh" @click.self="toggleModal">
      <div class="card">
        <Form @submit="createBlog" :validation-schema="schema">
          <div class="form-group">
            <label for="name" style="padding-top:13px">Name</label>
            <Field name="name" type="text" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="title" class="error-feedback" />
          </div>
         
          <div class="form-group">
            <label for="description" style="padding-top:13px">Description</label>
            <Field name="description" type="text" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="description" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="content" style="padding-top:13px">Content</label>
            <Field name="content" type="text" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="description" class="error-feedback" />
          </div>
          <div class="form-group">
            <label for="img" style="padding-top:13px">Image</label>
            <Field name="img" type="text" class="form-content" />
            <div class="form-border"></div>
            <ErrorMessage name="img" class="error-feedback" />
          </div>
         
          <div class="form-group">
            <button id="submit-btn" class="btn btn-primary btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm" ></span>
              <span>Add Blog</span>
            </button>
          </div>
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
     components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
          name: yup.string().required("Name is required!"),
          description: yup.string().required("Description is required!"),
          content: yup.string().required("Content is required!"),
          image: yup.string().required("Image is required!"),
          
        });
        return {
          loading: false,
          message: "",
          schema,
          showModal: false
        };
    },
    methods: {
        toggleModal(){
            this.$emit('clicked')
        },
        createBlog(blog){
            this.loading = true;
            this.$store.dispatch("blog/create", blog).then(
              () => {
                location.reload();
              },
              (error) => {
                this.loading = false;
                this.message =
                  (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                  error.message ||
                  error.toString();
              }
            );

        }
    },
}
</script>

<style>
    .bruh {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;

    }

    .form-content {
        width: 100%;
    }

    .bruh .card {
        height: fit-content;
        padding: 2rem;
        margin: 0 auto;
    }
</style>