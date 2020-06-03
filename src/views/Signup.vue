<template>
    <div id = "signup">
        <div id = "signup-box">
          <div id = "signup-top">
            <div id = "top-left"><span>New Customer</span></div>
            <router-link to = "login">
            <div id = "top-right"><span>Returning Customer</span></div>
            </router-link>
          </div>
          <div id = "signup-bottom">
            <form>
              <div class = "form-title">First Name</div>
              <input class = "s-login" type = "text" placeholder = "Thao">
              <div class = "form-title">Last Name</div>
              <input class = "s-login" type = "text" placeholder = "Nguyen">
              <div class = "form-title">Email</div>
              <input class = "s-login" type = "email" placeholder = "hello@gmail.com">
              <div class = "form-title">Password</div>
              <input class = "s-login" type = "text" placeholder = "Enter password">
            </form>
            <router-link to = "/order-continue">
              <div id = "submit">Create Account</div>
            </router-link>
          </div>

        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Signup'
}
</script>

<style lang="scss">
.form-title {
  text-align: left;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9rem;
  margin-bottom: 10px;
}
#signup {
  padding-top: 90px;
  padding-bottom: 30px;
  min-height: calc(100vh - 60px);
  background: #f6f6f7;
  display: block;
  
}
#signup-box {
  background: white;
  width: 500px;
  box-shadow: 0 0 20px rgba(0,0,0,0.01);
  padding-bottom: 40px;
  margin: 0 auto;
}
#signup-top {
  border-bottom: 1px solid #dbdbdb;
  display: block;
  overflow: hidden;
}
#top-left, #top-right {
  height: 60px;
  display: flex;
  width: 50%;
  float: left;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  font-size: 0.85rem;
  span {
    position: relative;
    top: 3px;
  }
}
#top-left {
  border-bottom: 4px solid #D70F64;
}
#top-right {
  opacity: 0.6;
}
#top-right:hover {
  cursor: pointer;
  opacity: 1;
}
#signup-bottom {
  display: block;
  overflow: hidden;
  margin-top: 30px;
}
.s-login {
  width: calc(80% - 30px);
  margin-left: 10%;
  margin-right: 10%;
  height: 50px;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
  padding: 0 15px;
  margin-bottom: 25px;
  font-family: Helvetica, sans-serif;
  font-size: 0.85rem;
}
#submit {
  background: #D70F64;
  color: white;
  height: 50px;
  line-height: 50px;
  border-radius: 3px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.85rem;
}
#submit:hover {
  cursor: pointer;
  background: #C50F5C;
}

@media only screen and (max-width: 600px) {
  #signup {
    padding-top: 75px;
    padding-bottom: 15px;
    min-height: calc(100vh - 90px);
  }
  #signup-box {
    width: calc(100% - 30px);
  }
  #top-left, #top-right {
    font-size: 0.75rem;
  }
  .form-title {
    font-size: 0.8rem;
    width: calc(100% - 40px);
  }
  .s-login {
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 70px);
  }
  #submit {
    width: calc(100% - 40px);
    font-size: 0.8rem;
  }
}

</style>