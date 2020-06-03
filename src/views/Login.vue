<template>
    <div id = "login">
        <div id = "login-box">
          <div id = "login-top">
            <router-link to = "/register">
            <div id = "top-left1"><span>New Customer</span></div>
            </router-link>
            <div id = "top-right1"><span>Returning Customer</span></div>
          </div>
          <div id = "login-bottom">
            <form>
              <div class = "form-title">Email</div>
  
              <input class = "s-login" type = "email" placeholder = "hello@gmail.com">
              <div class = "form-title">Password</div>
              <input class = "s-login" type = "text" placeholder = "Enter password">
            </form>
            <router-link to = "/order-continue">
              <div id = "submit">Create Account</div>
            </router-link>
            <div id = "forget-pw">Forget password</div>
          </div>

        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss">
#login {
  padding-top: 90px;
  padding-bottom: 30px;
  min-height: calc(100vh - 120px);
  background: #f6f6f7;
  display: block;
  
}
#login-box {
  background: white;
  width: 500px;
  box-shadow: 0 0 20px rgba(0,0,0,0.01);
  padding-bottom: 40px;
  margin: 0 auto;
}
#login-top {
  border-bottom: 1px solid #dbdbdb;
  display: block;
  overflow: hidden;
}
#top-left1, #top-right1 {
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
#top-right1 {
  border-bottom: 4px solid #D70F64;
}
#top-left1 {
  opacity: 0.6;
}
#top-left1:hover {
  cursor: pointer;
  opacity: 1;
}
#login-bottom {
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
.form-title {
  text-align: left;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9rem;
  margin-bottom: 10px;
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
#forget-pw {
  text-align: center;
  font-size: 0.85rem;
  margin-top: 20px;
  color: #D70f64;
}
#forget-pw:hover {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  #login {
    padding-top: 75px;
    padding-bottom: 15px;
    min-height: calc(100vh - 90px);
  }
  #login-box {
    width: calc(100% - 30px);
  }
  #top-left1, #top-right1 {
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