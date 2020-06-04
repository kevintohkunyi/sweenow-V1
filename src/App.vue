<template>
  <div id="app">
    <div id = "overlay" onclick="closeMenuFunction();">
      <div id = "sidemenu">
        <div id = "sidemenu-top">Kung Fu Tea</div>
        <div class = "sidemenu-item" onclick="openStoreFunction();">
          <span class = "sidemenu-icon" id = "menu0">
            <img src = "@/assets/cart.png">
          </span>
          View menu
        </div>
        <router-link to = "/order-history"><div class = "sidemenu-item" id = "menu1">
          <span class = "sidemenu-icon">
            <img src = "@/assets/food-delivery.png">
          </span>
          Order history <span class = "menu-number">1</span>
        </div></router-link>
        <div class = "sidemenu-item" id = "menu2" onclick="openVoucherFunction();">
          <span class = "sidemenu-icon">
            <img src = "@/assets/coupon-menu.png">
          </span>
          My vouchers <span class = "menu-number">2</span>
        </div>
        <div class = "sidemenu-item" id = "menu3" onclick="openStoreInfoFunction();">
          <span class = "sidemenu-icon">
            <img src = "@/assets/cafe.png">
          </span>
          Store information
        </div>
        <div class = "sidemenu-item" id = "menu4" onclick="openStoreFunction();">
          <span class = "sidemenu-icon">
            <img src = "@/assets/change.png">
          </span>
          Select outlet
        </div>
        <div class = "sidemenu-item" id = "menu5"  onclick="openContinueFunction();">
          <span class = "sidemenu-icon">
            <img src = "@/assets/user.png">
          </span>
          Sign up / Login
        </div>
        <div class = "sidemenu-item" id = "menu6" onclick="openAccountFunction();">
          <span class = "sidemenu-icon">
            <img src = "@/assets/user.png">
          </span>
          My Account
        </div>
        
      </div>
    </div>
    <div id="nav">
      <div class = "inner">
        <div id = "menu-left">
          <img onclick="openMenuFunction();" src = "./assets/menu.png">
        </div>
        <div id = "logo">Kung Fu Tea</div>
        <div id = "menu-right">EN | VN</div>
      </div>
    </div>
    <SelectStore />
    <ChangeVoucher />
    <StoreInfo />
    <MyAccount />
    <EditProfile />
    <ContinueOrder />
    
    
    
    
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import SelectStore from '@/components/SelectStore.vue'
import ChangeVoucher from '@/components/ChangeVoucher.vue'
import StoreInfo from '@/components/StoreInfo.vue'
import MyAccount from '@/components/MyAccount.vue'
import EditProfile from '@/components/EditProfile.vue'
import ContinueOrder from '@/components/ContinueOrder.vue'


export default {
  components: {
    ChangeVoucher,
    SelectStore,
    StoreInfo,
    MyAccount,
    EditProfile,
    ContinueOrder
    
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Pacifico&display=swap');


a {
  text-decoration :none;
  color: inherit;
}

body { 
  margin: 0;
  color: #333; 
}

#overlay {
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: none;
  position: fixed;
  z-index: 2000;
  width: 100%;
}

#sidemenu {
  display: block;
  height: 100vh;
  width: 270px;
  background: white;
  padding: 0;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);
  font-size: 0.95rem;
  z-index: 200;
  position: relative;
}
.sidemenu-item {
  background: white;
  text-align: left;
  height: 45px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 0.9rem;
}
.sidemenu-item:hover {
  cursor: pointer;
  background: #f1f1f3;
}

#sidemenu-top {
  height: 60px;
  line-height: 60px;
  font-weight: 700;
  border-bottom: 1px solid #dbdbdb;
  text-align: left;
  font-family: Pacifico;
  font-size: 1.4rem;
  font-weight: 400;
  padding: 0 15px;
  margin-bottom: 10px;
}
.sidemenu-icon img {
  width: 20px;
  margin-right: 10px;
  position: relative;
  top: 1px;
}
.menu-number {
  background: #D70F64;
  color: white;
  height: 17px;
  width: 17px;
  text-align: center;
  border-radius: 100%;
  margin-top: -1px;
  font-weight: 700;
  font-size: 0.7rem;
  position: absolute;
  right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 17px;

  
}

#nav {
  height: 60px;
  padding: 0 !important;
  width: 100%;
  line-height: 60px;
  font-weight: 700;
  border-bottom: 1px solid #dbdbdb;
  position: fixed;
  background: white;
  z-index: 1000;
}

#menu-left{
  position: absolute;
  left: 30px;
  top: 6px;
  img {
    width: 22px;
  }
  img:hover {
    cursor: pointer;
  }
}

#menu-right {
  position: absolute;
  right: 30px;
  top: 7px;
  padding: 0 12px;
  background:white;
  line-height: 44px;
  height: 44px;
  border-radius: 3px;
  font-size: 0.85rem;
  border: 1px solid #dbdbdb;
  }

#menu-right:hover {
  cursor: pointer;
}

#logo {
  font-size: 1.4rem;
  font-family: Pacifico;
  color: #333;
  font-weight: 400;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
}

@media only screen and (max-width: 550px) {
  #menu-left {
    left: 15px;
  }
  #menu-right {
    right: 15px;
  }
  #logo {
    font-size: 1.1rem;
  }
  #menu-right {
    font-size: 0.75rem;
    padding: 0 8px;
  }
  #menu-left {
    top: 4px;
    img {
      width: 18px;
    }
  }
  #sidemenu-top {
    font-size: 1.1rem;
  }
}


</style>
