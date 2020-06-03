<template>
<div id = "no-order">
    <div id = "receipt-title">
            <div class = "receipt-back">
                <img onclick="closeCheckOutFunction();" src = "@/assets/left-arrow.png">
            </div>
            Your order
        </div>
    <img src = "@/assets/order.png" id = "image1">
    <div id = "description">
        You haven’t added anything to your cart yet! Start adding your favourite dishes
    </div>
</div>
</template>

<script>
export default {
  name: 'Receipt',
}
</script>

<style scoped lang = "scss">

#receipt-title {
    height: 50px;
    line-height: 60px;
    font-weight: 700;
    margin-top: 10px;
    font-size: 0.9rem;
    background: white;
    font-family: Montserrat;
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
#description {
    color: #707070;
    font-size: 0.9rem;
    line-height: 1.4;
    padding: 0 20px;
}
#image1 {
    width: 80px;
    margin-top: 30px;
    margin-bottom: 15px;
}

@media only screen and (max-width: 900px) {
    #receipt-title {
        border-bottom: 1px solid #dbdbdb;
        font-size: 0.9rem;
        margin-top: 0;
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
    }
    #no-order {
        padding-top: 80px;
    }
    .receipt-back {
        display: block;
    }
}
</style>