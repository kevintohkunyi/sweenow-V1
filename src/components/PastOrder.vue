<template>
    <div class = "past-order-div">
        <div class = "date-status">
            <span class = "date">16 Jun 2020, 18.01 PM</span>
            <span class = "status">Delivered</span>
        </div>
        <div class = "history-item">
            <div class = "item-name">
                <div class = "item-left">
                    <div class = "name-box">
                    Matcha Milk Tea
                    </div> 
                    <div class = "number-box">x 1</div>
                    <div class = "item-description d-box">Less Ice</div>
                    <div class = "item-description d-box">50% Sugar</div>
                    <div class = "item-description d-box">Note: More boba please</div>
                </div>
                <div class = "price">
                    <div class = "regular">50.000đ</div>
                    <div class = "discounted">35.000đ</div>
                </div>
            </div>
        </div>
        <div class = "history-item">
            <div class = "item-name">
                <div class = "item-left">
                    <div class = "name-box">
                    Tiger Sugar Milk Tea
                    </div> 
                    <div class = "number-box">x 1</div>
                </div>
                <div class = "price">
                    <div class = "regular">50.000đ</div>
                    <div class = "discounted">35.000đ</div>
                </div>
            </div>
        </div>
        <div class = "history-item">
            <div class = "item-name">
                <div class = "item-left">
                    <div class = "name-box">
                    Taro Milk Tea
                    </div> 
                    <div class = "number-box">x 1</div>
                </div>
                <div class = "price">
                    <div class = "regular">50.000đ</div>
                    <div class = "discounted">35.000đ</div>
                </div>
            </div>
        </div>
        <div class = "history-bottom">
            <div class = "promo">
                <span class = "left">Promo</span>
                <span class = "right">- 30.000đ</span>
            </div>
            <div class = "subtotal">
                <span class = "left">Subtotal</span>
                <span class = "right">75.000đ</span>
            </div>
            <div class = "VAT">
                <span class = "left">VAT</span>
                <span class = "right">10.500đ</span>
            </div>
            <div class = "delivery">
                <span class = "left">Delivery Fee</span>
                <span class = "right">20.000đ</span>
            </div>
            <div class = "total">
                <span class = "left">Total</span>
                <span class = "right">100.500đ</span>
            </div>
        </div>
        
        
        
    </div>
</template>

<script>

export default {
  name: 'PastOrder',

}
</script>

<style scoped lang="scss">
.past-order-div {
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 0 15px;
    position: relative;
    overflow: hidden;
    margin-bottom: 20px;
}
.past-order-div:last-of-type {
    margin-bottom: 0;
}
.date-status {
    font-size: 0.8rem;
    margin-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
    text-align: right;
    padding: 20px 0;
}
.date {
    font-family: Montserrat;
}
.status {
    font-weight: 700;
    background: #3CB371;
    color: white;
    border-radius: 3px;
    padding: 8px 8px;
    position: absolute;
    left: 15px;
    top: 12px;
}
.status-item {
    display: block;
    width: 100%;
    overflow: hidden;
    margin-bottom: 15px;
    opacity: 0.7;
}
.active {
    opacity: 1;
    font-weight: 700;
}
.status-item:last-of-type {
    margin-bottom: 0;
}
.history-item {
    position: relative;
    display: block;
    overflow: hidden;
    margin-bottom: 20px;
}
.item-name {
    font-size: 0.9rem;
    display: block;
    overflow: hidden;
}
.item-description {
    font-size: 0.85rem;
    color: #707070;
    margin-top: 3px;
    display: block;
    overflow: hidden;
}
.item-left {
    display: inline-block;
    width: calc(100% - 120px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
}
.price {
    font-size: 0.9rem;
    text-align: right;
    display: inline-block;
    float: right;
    width: 120px;
    margin-top: -3px;
}


.regular, .discounted {
    display: inline-block;
}

.regular {
    font-size: 0.8rem;
    color: #707070;
    margin-top: 3px;
    text-decoration: line-through;
    margin-right: 5px;
}
.left {
    font-size: 0.9rem;
}
.right {
    float: right;
    font-size: 0.9rem;
}
.promo, .subtotal, .VAT , .delivery, .total {
    margin-top: 15px;
}
.history-bottom {
    border-top: 1px solid #dbdbdb;
    display: block;
    overflow: hidden;
    padding-bottom: 20px;
}
.total {
    font-weight: 700;
}
.promo {
    color: #D70F64;
}
.order-status {
    display: block;
    overflow: hidden;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #dbdbdb;
    font-size: 0.9rem;
    width: 100%;
}
.status-img, .status-description, .status-time {
    display: inline-block;
    float: left;
}
.status-img {
    width: 35px;
    height: 35px;
    margin-right: 20px;
    background-size: cover;
}
.status-description, .status-time {
    height: 35px;
    line-height: 35px;
}
.status-time {
    float: right;
}
.name-box, .d-box {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.d-box {
    max-width: calc(100% - 25px);
}
.name-box {
    display: inline-block;
    float: left;
    max-width: calc(100% - 25px);
}
.number-box {
    display: inline-block;
    margin-left: 5px;
}

@media only screen and (max-width: 500px) {
    .status-description {
        font-size: 0.85rem;
    }
    .item-name, .price, .left, .right {
        font-size: 0.85rem;
    }
    .regular, .item-description {
        font-size: 0.75rem;
    }
    
} 

  

</style>