<template>
  <div id="account-popup">
    <div id = "account-container">
      <div id = "account-title">
        <div id = "account-back">
          <img src = "@/assets/left-arrow.png" onclick="closeAccountFunction();">
        </div>
        My Account
      </div>
      <div class = "account-info" onclick="openEditProfileFunction();">
        <div class = "left">First Name</div>
        <div class = "right">Kevin 
          <img src = "@/assets/right-arrow.png" class = "edit-arrow">
        </div>
      </div>
       <div class = "account-info" onclick="openEditProfileFunction();">
        <div class = "left">Last Name</div>
        <div class = "right">Nguyen
          <img src = "@/assets/right-arrow.png" class = "edit-arrow">
        </div>
      </div>
       <div class = "account-info" id = "account-email" onclick="openEditProfileFunction();">
        <div class = "left">Email</div>
        <div class = "right">kevin@sweego.vn 
          <img src = "@/assets/right-arrow.png" class = "edit-arrow">
        </div>
      </div>
      <div class = "change-password">
        <div class = "left">Change Password</div>
        <div class = "right">
          <img src = "@/assets/right-arrow.png" class = "edit-arrow">
        </div>
      </div>
      <router-link to = "/"><div class = "logout" onclick="logoutFunction();">
        <div class = "left">Log out</div>
        <div class = "right">
          <img src = "@/assets/right-arrow.png" class = "edit-arrow">
        </div>
      </div></router-link>
      
        
      </div>
      
      </div>
      
      
      
    </div>
  
  </div>

</template>

<script>
export default {
  name: 'MyAccount'
}
</script>

<style scoped lang="scss">
#account-popup {
  display: none;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
}
#account-container {
  width: 400px;
  background: #f1f1f3;
  margin: 30px 0;
  top: 0;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  text-align: left;
  position: relative;
  border-radius: 3px;
  height: 80vh;
  overflow: auto;
}
#account-title {
  height: 60px;
  line-height: 60px;
  font-weight: 700;
  font-size: 0.95rem;
  background: white;
  border-radius: 3px 3px 0 0;
  text-align: center;
  font-family: Montserrat;
  display: block;
  overflow: hidden;
  margin-bottom: 15px;

}
#account-back {
    position: absolute;
    left: 20px;
    top: 3px;

    img {
        width: 15px;
    }
}
#account-back:hover {
    cursor: pointer;
}
.account-info, .change-password, .logout {
  background: white;
  padding: 17px 20px;
  border-bottom: 1px solid #dbdbdb;
  font-size: 0.9rem;
  position: relative;
  display: block;
  overflow: hidden;
}
#account-email {
  border: 0;
}
.change-password, .logout {
  border: 0;
  margin-top: 15px;
}

.left {
  display: inline-block;
  font-weight: 700;
}
.right {
  display: inline-block;
  float: right;
}
.edit-arrow {
  width: 12px;
  position: relative;
  top: 1px;
  margin-left: 8px;
}
.account-info:hover, .change-password:hover, .logout:hover {
  cursor: pointer;
}


@media only screen and (max-width: 500px) {
  #account-container {
    width: 100%;
    border-radius: 0;
    height: 100vh;
    position: absolute;
    top: 0;
    margin: 0;
  }
  .account-info, .change-password, .logout {
    font-size: 0.85rem;
    padding-left: 15px;
    padding-right: 15px;
  }
  #account-title {
    font-size: 0.9rem;
  }
  #account-back {
    left: 15px;
  }
  
}
</style>
