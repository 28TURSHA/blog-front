<template>
  <section class="contact" id="contact">
        <div class="container">
            <div class="heading text-center">
                <h2>Contact
                    <span> Us </span></h2>
                <p>If you have any inquiries please fill in the neccessary information and one of our members will contact you back.
                    <br>Or if you have any comments or recommendations we'll appreciate hearing from you!</p>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="title">
                        <h3>Contact details</h3>
                        <p>For more information please feel free to contact us </p>
                    </div>
                    <div class="content">
                        <!-- Info-1 -->
                        <div class="info">
                            <i class="fas fa-mobile-alt"></i>
                            <h4 class="d-inline-block">PHONE :
                                <br>
                                <span>+27 67 668 5517, +27 78 903 1259</span></h4>
                        </div>
                        <!-- Info-2 -->
                        <div class="info">
                            <i class="far fa-envelope"></i>
                            <h4 class="d-inline-block">EMAIL :
                                <br>
                                <span>turshaarendse@gmail.com</span></h4>
                        </div>
                        <!-- Info-3 -->
                        <div class="info">
                            <i class="fas fa-map-marker-alt"></i>
                            <h4 class="d-inline-block">ADDRESS :<br>
                                <span>Unit 802 Touchstone House, 7-11 Bree Street ,Cape Town</span></h4>
                        </div>
                    </div>
                </div>

                <div class="col-md-7">

                    <form>
                        <div class="row">
                            <div class="col-sm-12">
                                <input type="text" class="form-control" placeholder="Name" v-model="name">
                            </div>
                            <div class="col-sm-12">
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                            </div>
                            
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment" placeholder="Message" v-model="message"></textarea>
                        </div>
                        <button class="btn btn-block" type="submit">Send Now!</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.email, this.name, this.message);
      fetch("http://localhost:5080/contact", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          name: this.name,
          message: this.message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => alert(json.msg))
        .catch((e) => alert(e.msg));
    },
  },
};
</script>
<style scoped>
.contact {
    padding: 130px 0;
}

.contact .heading h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 0;
    padding: 0;

}

.contact .heading h2 span {
    color: #39a06c;
}

.contact .heading p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    color: white;
    margin: 20px 0 60px;
    padding: 0;
}

.contact .form-control {
    padding: 25px;
    font-size: 13px;
    margin-bottom: 10px;
    background: #f9f9f9;
    border: 0;
    border-radius: 10px;
}


.contact button.btn {
  background: white;
  border: none;
  border-radius: 21px;
  box-shadow: 0px 1px 8px #98FB98;
  cursor: pointer;
  color: #39a06c;
  font-family: "Roboto", sans-serif;
  height: 42.3px;
  margin: 0 auto;
  margin-top: 50px;
  transition: 0.25s;
  width: 153px;
}
.contact button.btn:hover {
  box-shadow: 0px 1px 18px #39a06c;
}

.contact .title h3 {
    font-size: 18px;
    font-weight: 600;
}

.contact .title p {
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    line-height: 1.6;
    margin: 0 0 40px;
}

.contact .content .info {
    margin-top: 30px;
}
.contact .content .info i {
    font-size: 30px;
    padding: 0;
    margin: 0;
    color: #39a06c;
    margin-right: 20px;
    text-align: center;
    width: 20px;
}
.contact .content .info h4 {
    font-size: 13px;
    line-height: 1.4;
}

.contact .content .info h4 span {
    font-size: 13px;
    font-weight: 300;
    color: #fff;
}
</style>