<template>
<h2>create a blog now!</h2>
 <!-- Button trigger modal -->
  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#addBlogModal">Create a Blog</button>

  <!-- Modal -->
  <div class="modal fade" id="addBlogModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create a Blog</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="addTitle" class="form-label">Title</label>
            <input class="form-control" type="text" name="addTitle" id="addTitle"/>
          </div>
         
          <div class="mb-3">
            <label for="addPrice" class="form-label">Price</label>
            <input class="form-control" type="text" name="addPrice" id="addPrice"/>
          </div>
          <div class="mb-3">
            <label for="addImg" class="form-label">Image URL</label>
            <input class="form-control" type="text" name="addImg" id="addImg" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="createBlog()">Create Blog </button>
        </div>
      </div>
    </div>
  </div>
  </template>
  <style scoped>
  h2{
      padding-top: 20px;
  }
  </style>