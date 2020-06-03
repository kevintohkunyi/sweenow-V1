<template>
  <div class="sub-container">
    <div id = "notice">Enjoy <span class = "boldtext">30% OFF</span> all items when you order direct!</div>
    <div id = "banner" :style="{'background-image': 'url(' + require('@/assets/banner.jpg') + ')'}"></div>
    <div id = "m-info">
      <div id = "m-name">Kung Fu Tea</div>
      <div id = "m-address">14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh</div>
      <div id = "hours"><span class = "circle">&#9679;</span> Open Now</div>
      <div id = "m-logo">
        <img src = "@/assets/kungfu-logo.png">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MerchantInfo'
}
</script>

<style scoped lang="scss">

#notice {
  color: white;
  background: #D70F64;
  font-size: 0.95rem;
  padding: 15px;
}
.boldtext {
  font-weight: 700;
}
#banner {
  width: 100%;
  height: 300px;
  display: block;
  background-size: cover;
  background-position: 50% 50%;
}

#m-info {
  text-align: left;
  padding: 20px 30px;
  color: #333;
  background: white;
  border-bottom: 1px solid #dbdbdb;
  position: relative;
}

#m-name {
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-family: Montserrat;
}

#m-address {
  font-size: 0.95rem;
  color: #707070;
  margin-bottom: 5px;
  line-height: 1.3;
}

#hours {
  font-size: 0.95rem;
  color: #03ae03;
}

.circle {
  margin-right: 2px;
}
#m-logo {
  display: block;
  position: absolute;
  top: -50px;
  right: 30px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }
}

@media only screen and (max-width: 550px) {
  #notice {
    font-size: 0.8rem;
  }
  #banner {
    height: 150px;
  }
  #m-name {
    font-size: 1rem;
  }
  #m-address, #hours {
    font-size: 0.9rem;
  }
  #m-info {
    padding: 20px 15px;
  }
  #m-logo {
    right: 15px;
    top: -28px;
    img {
      width: 56px;
      height: 56px;
    }
  }
}
</style>
