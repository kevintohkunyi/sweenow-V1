<template>
<div id = "maindiv":style="{'background-image': 'url(' + require('@/assets/banner2.jpg') + ')'}">
  <div id = "box1">
    <div id = "store">Order Online @ Kung Fu Tea</div>
    <div id = "box-title">
      Enjoy 30% off when you order online, directly.
    </div>
    <div id = "box-description">
      Easily submit and track your orders. We deliver to anywhere in Ho Chi Minh city.
    </div>
    <div id = "box-button" onclick="openStoreFunction();">Order Now</div>
  </div>
  <SelectStore />
</div>
</template>

<script>
// @ is an alias to /src
import SelectStore from '@/components/SelectStore.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">
#menu1, #menu2, #menu3, #menu4, #menu6 {
  display: none;
}
#menu0, #menu5 {
  display: flex;
}

#nav {
  border-bottom: 0;
}
</style>

<style scoped lang="scss">


#maindiv {
  padding-top: 60px;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 80px;
  padding-right: 80px;
  background: black;
  background-size: cover;
  background-position: 50% 50%;
}
#box1 {
  max-width: 400px;
  color: #333;
  background: white;
  padding: 35px 40px 45px 40px;
  border-radius: 3px;
  display: block;
  box-shadow: 0 0 30px rgba(0,0,0,0.2);
}
#store {
  font-family: Pacifico;
  margin-bottom: 15px;
  color: #D70F64;
  font-size: 1.2rem;
  font-weight: 400;
}
#box-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 15px;  
  font-family: Montserrat;
  line-height: 1.2;
}
#box-description {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 25px;
}
#box-button {
  font-family: Montserrat;
  background: #D70F64;
  padding: 20px 0px;
  color: white;
  border-radius: 3px;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  text-align: center;
}
#box-button:hover {
  cursor: pointer;
  background: #C50F5C;
}

@media only screen and (max-width: 850px) {
  #menu-left {
    left: 40px;
  }
  #menu-right {
    right: 40px;
  }
  #maindiv {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media only screen and (max-width: 500px) {
  #menu-left {
    left: 15px;
  }
  #menu-right {
    right: 15px;
  }
  #maindiv {
    padding-left: 15px;
    padding-right: 15px;
    width: calc(100% - 30px);
    max-width: none;
  }
  #box1 {
    padding: 25px 25px 30px 25px;
  }
  #store {
    font-size: 0.95rem;
  }
  #box-title {
    font-size: 1.3rem;
  }
  #box-description {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 22px;
  }
  #box-button {
    font-size: 0.8rem;
  }
}





</style>
