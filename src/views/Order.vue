<template>
<div class = "container" id = "home-main-div">
  <ContinueOrder />
  <ItemPopup />
  <div id = "checkout-bottom-bar">
    <div class = "bar-inner" onclick="openCheckOutFunction();">
        <span class = "bar-icon">
          <img src = "@/assets/bag.png">
        </span>
        <span class = "bar-title">View Cart</span>
        <span class = "bar-total" id = "no-item">0đ</span>
        <span class = "bar-total" id = "yes-voucher6">82.500đ</span>
        <span class = "bar-total" id = "no-voucher6">115.500đ</span>
    </div>
  </div>
  <div id = "home-main">
    <div id = "home-left">
      <MerchantInfo />
      <MenuInfo />
      <MenuCategory />
      <MenuCategory />
      <MenuCategory />
    </div>
    <div id = "home-right">
      <Receipt />
      <NoOrder />
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import ItemPopup from '@/components/ItemPopup.vue'
import MerchantInfo from '@/components/MerchantInfo.vue'
import MenuInfo from '@/components/MenuInfo.vue'
import MenuCategory from '@/components/MenuCategory.vue'
import Receipt from '@/components/Receipt.vue'
import ContinueOrder from '@/components/ContinueOrder.vue'
import NoOrder from '@/components/NoOrder.vue'

export default {
  name: 'Order',
  components: {
    ContinueOrder,
    ItemPopup,
    MerchantInfo,
    MenuInfo,
    MenuCategory,
    Receipt,
    NoOrder
  }
}
</script>

<style lang="scss">
#yes-voucher6, #no-voucher6 {
  display: none;
}
#menu1, #menu2, #menu6 {
  display: none;
}
#menu0, #menu3 , #menu4, #menu5 {
  display: flex;
}
</style>

<style scoped lang="scss">
#receipt-container {
  display: none;
}

.container {
  padding-top: 60px;  
}
#home-left {
  background: white;
  width: calc(100% - 350px);
  float: left;
}

#home-right {
  width: 350px;
  height: 100vh;
  background:white;
  float: right;
  box-shadow: 0 2px 28px 0 rgba(0,0,0,0.12);
  position: fixed;
  right: 0;
  z-index: 2;
}
#checkout-bottom-bar {
    background: white;
    display: none;
    width: calc(100% - 30px);
    padding: 10px 15px;
    border-top: 1px solid #dbdbdb;
    position: fixed;
    bottom: 0;
    z-index: 1000;
}
.bar-inner {   
    background: #D70F64;
    color: white;
    padding: 18px 0;
    border-radius: 3px;
    font-size: 0.9rem;
    font-weight: 700;
    position: relative;
}
.bar-inner:hover {
  cursor: pointer;
  background: #C50F5C;
}
.bar-icon {
    position: absolute;
    left: 15px;

    img {
        width: 25px;
        position: relative;
        top: -5px;
    }
}
.bar-title {
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.03rem;
}
.bar-total {
    position: absolute;
    right: 15px;
}

@media only screen and (max-width:900px) {
  #home-right {
    display: none;
    width: 100%;
    margin-top: -60px;
    z-index: 9999;
  }
  #home-left {
    width: 100%;
    padding-bottom: 80px;
  }
  #checkout-bottom-bar {
    display: block;
  }

}

</style>
