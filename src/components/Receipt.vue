<template>
    <div id = "receipt-container">
        <div class = "bottom-bar">
            <div class = "bar-inner"  onclick="openContinueFunction();"> 
                <span class = "bar-icon">
                    <img src = "@/assets/bag.png">
                </span>
                <span class = "bar-title">Continue</span>
                <span class = "bar-total" id = "no-voucher4">115.500đ</span>
                <span class = "bar-total" id = "yes-voucher4">82.500đ</span>
            </div>
        </div>
        <div class = "receipt-title">
            <div class = "receipt-back">
                <img onclick="closeCheckOutFunction();" src = "@/assets/left-arrow.png">
            </div>
            Your order
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
                <span class = "right" id = "yes-voucher1">75.000đ</span>
                 <span class = "right" id = "no-voucher1">105.000đ</span>
            </div>
            <div id = "VAT" class = "receipt-bottom">
                <span class = "left">VAT (10%)</span>
                <span class = "right" id = "no-voucher5">10.500đ</span>
                <span class = "right" id = "yes-voucher5">7.500đ</span>
            </div>
            
            
            <div id = "delivery-fee" class = "receipt-bottom">
                <span class = "left">Delivery Fee</span>
                <span class = "right">Not yet calculated</span>
            </div>
            <div id = "order-total" class = "receipt-bottom">
                <span class = "left">Total</span>
                <span class = "right" id = "yes-voucher2">82.500d</span>
                <span class = "right" id = "no-voucher2">115.500d</span>
            </div>
            <div id = "seperator1"></div>
            <div id = "voucher">
                <span class = "left">
                    <img src = "@/assets/coupon.png">
                    <span class = "vouchertitle">Add Voucher</span>
                </span>
                <span class = "right" onclick="openVoucherFunction();">
                    <span id = "yes-voucher3">KUNGFU666</span>
                    <span id = "no-voucher3">Select a voucher</span>
                </span>
            </div>
            <div class = "seperator"></div>
            <div id = "payment" class = "receipt-bottom">
                <span class = "left">
                    <img src = "@/assets/dollar.png">
                    <span class = "paytitle">Payment</span>
                </span>
                <span class = "right">Cash</span>
            </div>
    </div>
</template>

<script>

export default {
  name: 'Receipt',
}
</script>

<style scoped lang="scss">
#yes-voucher1, #yes-voucher2, #yes-voucher3, #yes-voucher4, #yes-voucher5 {
    display: none;
}
#receipt-container {
    overflow-y: auto;
    height: calc(100% - 135px);
    display: block;
}
.receipt-title {
    height: 50px;
    line-height: 60px;
    font-weight: 700;
    margin-top: 10px;
    font-size: 0.9rem;
    background: white;
    font-family: Montserrat;
}
.receipt-item {
    display: table;
    width: calc(100% - 30px);
    font-size: 0.9rem;
    padding: 0 15px;
    margin-bottom: 0px;
    overflow: hidden;
}
.item-title {
    margin-bottom: 3px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 150px;
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
        background: #f1f1f2;
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
    width: calc(100% - 30px);
    margin: 20px auto;
    background: #dbdbdb;
    overflow: hidden;
}

.receipt-bottom {
    padding: 0 15px;
    font-size: 0.9rem;
    display: block;
    width: calc(100% - 30px);
    overflow: hidden;
    margin-bottom: 15px;
}
.left {
    float: left;
}
.right {
    float: right;
}
#order-total {
    font-weight: 700;
}
.bottom-bar {
    position: fixed;
    bottom: 0;
    background: white;
    display: block;
    width: 320px;
    padding: 10px 15px;
    border-top: 1px solid #dbdbdb;
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
.receipt-back {
    position: absolute;
    left: 15px;
    top: 3px;
    display: none;

    img {
        width: 15px;
    }
}
.receipt-back:hover {
    cursor: pointer;
}

#seperator1 {
    display: block;
    background: #dbdbdb;
    height: 0.5px;
    margin-top: 20px;
    overflow: hidden;
    width: calc(100% - 30px);
    margin-left: 15px;
    margin-right: 15px;
}
#voucher {
    font-size: 0.9rem;
    margin: 0 15px;
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
    display: none;
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


@media only screen and (max-width: 900px) {
    .bottom-bar {
        width: calc(100% - 30px);
    }
    #receipt-container {
        height: calc(100% - 140px);
        padding-top: 70px;
    }
    .receipt-bottom:last-of-type {
        padding-bottom: 15px;
    }
    .receipt-title {
        border-bottom: 1px solid #dbdbdb;
        font-size: 0.9rem;
        margin-top: 0;
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
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
    
}
@media only screen and (max-width: 900px) {
    .item-name {
        width: 500px;
    }
}
@media only screen and (max-width: 700px) {
    .item-name {
        width: 400px;
    }
}
@media only screen and (max-width: 600px) {
    .item-name {
        width: 300px;
    }
}
@media only screen and (max-width: 500px) {
    .item-name {
        width: 200px;
    }
}
@media only screen and (max-width: 400px) {
    .item-name {
        width: 150px;
    }
}

</style>