<template>
<div id = "confirmdiv">
  <AddAddress />
  <div id = "top-nav">
    <div id = "top-nav-container">
      <router-link to="/order-continue"><div class = "top-nav-back">
        <img src = "@/assets/left-arrow.png">
      </div></router-link>
      Confirm order
    </div>
  </div>
  <div id = "confirm-body">
  <div id = "confirm-container">
  <div id = "confirm-left">
    <div class = "d-title">Delivery to:</div>
    <div class = "d-location">
      <div id = "add-img"><img src = "@/assets/add.png"></div>
      <div id = "add-address">Click to add address <span id = "a-arrow">&#8594;</span></div>
    </div>
  </div>
  <div id = "confirm-right">
    <div class = "d-title">Your order:</div>
    
    <div class = "receipt-item">
      <div class = "qty-toggle">
                <div>
                    <span class = "toggle">-</span>
                    <span class = "value">1</span>
                    <span class = "toggle">+</span>
                </div>
            </div>
            <div class = "item-name">
                <div class = "item-title">Matcha Milk Tea</div>
                <div class = "item-options">Less Ice</div>
                <div class = "item-options">50% Sugar</div>
                <div class = "item-instruction">Note: More boba please, thank you.</div>
            </div>
            <div class = "item-price">
                <div class = "discounted-p">35.000đ</div>
                <div class = "regular-p">50.000đ</div>
            </div>
    </div>

    <div class = "receipt-item">
            <div class = "qty-toggle">
                <div>
                    <span class = "toggle">-</span>
                    <span class = "value">1</span>
                    <span class = "toggle">+</span>
                </div>
            </div>
            <div class = "item-name">
                <div class = "item-title">Tiger Sugar Milk Tea</div>
                <div class = "item-options"></div>
                <div class = "item-options"></div>
                <div class = "item-instruction"></div>
            </div>
            <div class = "item-price">
                <div class = "discounted-p">35.000đ</div>
                <div class = "regular-p">50.000đ</div>
            </div>
        </div>
        <div class = "receipt-item">
            <div class = "qty-toggle">
                <div>
                    <span class = "toggle">-</span>
                    <span class = "value">1</span>
                    <span class = "toggle">+</span>
                </div>
            </div>
            <div class = "item-name">
                <div class = "item-title">Taro Milk Tea</div>
                <div class = "item-options"></div>
                <div class = "item-options"></div>
                <div class = "item-instruction"></div>
            </div>
            <div class = "item-price">
                <div class = "discounted-p">35.000đ</div>
                <div class = "regular-p">50.000đ</div>
            </div>
        </div>
        <div class = "seperator"></div>
            <div id = "voucher-discount" class = "receipt-bottom">
                <span class = "left">Promo</span>
                <span class = "right">- 30.000đ</span>
            </div>
            <div id = "subtotal" class = "receipt-bottom">
                <span class = "left">Subtotal</span>
                <span class = "right">75.000đ</span>
            </div>
            <div id = "VAT" class = "receipt-bottom">
                <span class = "left">VAT (10%)</span>
                <span class = "right">10.500đ</span>
            </div>
            
            
            <div id = "delivery-fee" class = "receipt-bottom">
                <span class = "left">Delivery Fee (2.4km)</span>
                <span class = "right">20.000đ</span>
            </div>
            <div id = "order-total" class = "receipt-bottom">
                <span class = "left">Total</span>
                <span class = "right">100.500d</span>
            </div>
            <div id = "seperator1"></div>
            <div id = "voucher">
                <span class = "left">
                    <img src = "@/assets/coupon.png">
                    <span class = "vouchertitle">Add Voucher</span>
                </span>
                <span class = "right">KUNGFU666</span>
            </div>
            <div class = "seperator"></div>
            <div id = "payment" class = "receipt-bottom">
                <span class = "left">
                    <img src = "@/assets/dollar.png">
                    <span class = "paytitle">Payment</span>
                </span>
                <span class = "right">Cash</span>
            </div>
            <router-link to = "/thank-you"><div id = "bar-bottom"> 
                <span class = "bar-icon">
                    <img src = "@/assets/bag.png">
                </span>
                <span class = "bar-title">Checkout</span>
                <span class = "bar-total">100.500đ</span>
            </div></router-link>
    
  </div>
  </div>
  </div>
</div>
</template>

<script>

import AddAddress from '@/components/AddAddress.vue'

export default {
  name: 'Add-Address',
  components: {
    AddAddress
    
  }
}
</script>

<style scoped lang="scss">

#add-img img {
  width: 50px;
  margin-bottom: 10px;
}
#add-address {
  color: #333;
  font-weight: 700;
  font-size: 1rem;
}
#a-arrow {
  font-size: 1.7rem;
  position: relative;
  top: 2px;
}
#confirm-body {
  background: #f6f6f7;
  overflow: hidden;
}
#top-nav {
  height: 60px;
  background: white;
  line-height: 60px;
  text-align: center;
  font-family: Montserrat;
  font-size: 0.9rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 0 20px rgba(0,0,0,0.07);
}
#top-nav-container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 0 40px;
}
.top-nav-back {
    position: absolute;
    left: 40px;
    top: 3px;
    img {
        width: 15px;
    }
}
.top-nav-back img:hover {
  cursor: pointer;
}
#confirmdiv {
  text-align: left;
  display: block;
  overflow: hidden;
}
#confirm-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 40px;
  margin-top: 60px;
}
#confirm-left {
  width: calc(100% - 470px);
  float: left;
  background: white;
  padding: 25px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}
#confirm-right {
  width: 350px;
  float: right;
  background: white;
  padding: 25px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}
.receipt-item {
    display: table;
    width: calc(100%);
    font-size: 0.9rem;
    padding: 0;
    margin-bottom: 0px;
    overflow: hidden;
}
.d-title {
  font-family: Montserrat;
  font-size: 1rem;
  margin-bottom: 20px;
}
.d-location {
  border: 2px dashed #3B96F3;
  border-radius: 3px;
  padding: 20px;
  position: relative;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.d-location:hover {
  cursor: pointer;
  top: -2px;
}
.d-name {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 8px;
}
.d-phone {
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #707070;
}
.d-address {
  font-size: 0.9rem;
  color: #707070;
}
.d-edit {
  float: right;
  color: blue;
  font-size: 0.85rem;
}
.d-edit:hover {
  cursor: pointer;
}
.d-item-name {
  font-size: 0.9rem;
  margin-bottom: 3px;
  span {
    margin: 0 5px;
  }
}
.item-options, .item-instruction {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 150px;
    color: #707070;
    line-height: 1.4;
    font-size: 0.8rem;
}
.item-instruction {
    font-style: italic;
}

.qty-toggle {
    display: table-cell;
    text-align: left;
    border-radius: 3px;
    width: 60px;
    overflow: hidden;
    padding-bottom: 0;

    div {
        display: inline-block;
        background: #f1f1f3;
        padding: 10px 0;
        border-radius: 3px;

    }
}
.toggle {
    font-size: 1.1rem;
    font-weight: 700;
    padding: 10px;
    color: #D70F64;
}
.toggle:hover {
    cursor: pointer;
}
.item-name {
    text-align: left;
    padding-left: 17px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 150px;
}

.item-price {
    display: table-cell;
    width: 90px;
    text-align: right;
    padding: 10px 0;

}
.regular-p {
    color: #707070;
    text-decoration: line-through;
    font-size: 0.8rem;
    margin-top: 3px;
    margin-bottom: -10px
}
.seperator {
    height: 1px;
    width: 100%;
    margin: 20px auto;
    background: #dbdbdb;
    overflow: hidden;
}
.receipt-bottom {
    font-size: 0.9rem;
    display: block;
    width: 100%;
    overflow: hidden;
    margin-bottom: 15px;
}
.left {
    float: left;
}
.right {
    float: right;
}

#seperator1 {
    display: block;
    background: #dbdbdb;
    height: 0.5px;
    margin-top: 20px;
    overflow: hidden;
    width: 100%;
}
#voucher {
    font-size: 0.9rem;
    display: block;
    overflow: hidden;
    margin-bottom: -10px;
    padding-top: 20px;
    img {
        width: 17px;
        margin-right: 5px;
    }
}
#payment {
    img {
        width: 17px;
        margin-right: 5px;
    }
}
#voucher .right {
    border: 1px solid #D70F64;
    color: #D70F64;
    font-size: 0.85rem;
    padding: 10px 12px;
    border-radius: 3px;
    margin-top: -10px;
}
#voucher-discount {
    color: #D70F64;
}
.vouchertitle, .paytitle {
    position: relative;
    top: -3.5px;
}
#voucher .right:hover {
  cursor: pointer;
}
#order-total {
  font-weight: 700;
}
#bar-bottom {
    background: #D70F64;
    color: white;
    padding: 18px 0;
    border-radius: 3px;
    font-size: 0.9rem;
    font-weight: 700;
    position: relative;
    text-align: center;
    margin-top: 30px;
    display: block;
    overflow: hidden;
}
#bar-bottom:hover {
    background: #C50F5C;
    cursor: pointer;
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





@media only screen and (max-width: 900px) {
 #confirm-container {
   padding: 30px 20px;
 }
 .top-nav-back {
   left: 20px;
 }
 
}
@media only screen and (max-width: 768px) {
  #body-main {
    background: white;
  }
  #top-nav {
    box-shadow: none;
    border-bottom: 1px solid #dbdbdb;
  }
  .top-nav-back {
    left: 15px;
  }
  #confirm-container {
    padding: 0;
  }
  #confirm-left, #confirm-right {
    width: calc(100% - 30px);
    padding: 24px 15px;
    box-shadow: none;

  }
  #confirm-right {
    margin-bottom: 0;
    border-top: 10px solid #f1f1f3;
  }
  
}
@media only screen and (max-width: 500px) {
  .d-title {
    font-size: 0.85rem;
  }
  .d-name {
    font-size: 0.9rem;
  }
  .d-phone, .d-address {
    font-size: 0.85rem;
  }
  .d-edit {
    font-size: 0.8rem;
  }
  .receipt-item, .receipt-bottom, #voucher {
    font-size: 0.85rem;
  }
  #voucher .right {
    font-size: 0.8rem;
  }
  .toggle {
    font-size: 1rem;
  }
  .receipt-back {
    display: block;
  }
  #bar-bottom {
    font-size: 0.85rem;
  }
}





</style>
