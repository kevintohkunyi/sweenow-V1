<template>
<div id = "thankyoudiv":style="{'background-image': 'url(' + require('@/assets/banner2.jpg') + ')'}">
  <div id = "ty-container">
    <div>
    <div id = "ty-image">
      <img src = "@/assets/tick.png">
    </div>
    <div id = "ty-title">Your order has been placed!</div>
    <div id = "ty-description">Thank you for ordering. Your order is estimated to arrive in 24 minutes.</div>
    <router-link to = "/order-history"><div id = "track-button">Track your order</div></router-link>
    <router-link to="/order-continue"><div id = "back-menu-button">Back to home</div></router-link>
  </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'Thank-You'
  
  
}

</script>

<style scoped lang="scss">
  
  #thankyoudiv {
    height: calc(100vh + 60px);
    background: black;
    margin-top: -60px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: 50% 50%;
  }
  #ty-container {
    width: 350px;
    background: white;
    border-radius: 3px;
    margin-top: 60px;
    padding: 35px 20px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
  }
  #ty-image {
    margin-bottom: 20px;
    img {
      width: 70px;
    }
  }
  #ty-title {
    font-family: Montserrat;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  #ty-description {
    max-width: 350px;
    margin: 0 auto;
    color: #707070;
    line-height: 1.3;
    margin-bottom: 25px;
  }
  #track-button, #back-menu-button {
    width: 100%;
    color: white;
    margin-top: 7px;
    margin-left: auto;
    margin-right: auto;
    height: 50px;
    line-height: 50px;
    font-family: Montserrat;
    font-size: 0.9rem;
    border-radius: 3px;
  }
  #track-button {
    background: #D70F64;
  }
  #back-menu-button {
    background: #333;
  }
  #track-button:hover {
    cursor: pointer;
    background: #C50F5C;
  }
  #back-menu-button:hover {
    cursor: pointer;
    background: black;
  }

  @media only screen and (max-width: 500px) {
    #ty-container {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 0;
      padding-bottom: 0;
    }
    #back-menu-button, #track-button {
      font-size: 0.85rem;
    }
    #ty-title {
      font-size: 1rem;
    }
    #ty-description {
      font-size: 0.9rem;
    }
  }

</style>