<template>
   <div class = "menu-item">
       <div class = "item-inner" onclick="openPopupFunction();">
           <div class = "item-left">      
                <div class = "item-name">Matcha Milk Tea</div>
                <div class = "item-description">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                </div>
                <div class = "item-price">
                    <span class = "regular-price">50.000đ</span>
                    <span class = "discounted-price">35.000đ</span>
                </div>   
            </div>
            <div class = "item-right">
                <img src = "@/assets/milktea.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MenuItem'
}
</script>

<style scoped lang="scss">
.menu-item {
    width: 50%;
    float: left;
    overflow: hidden;
    margin-top: 10px;
}
.item-inner {
    margin: 0 5px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 0px 20px;
    overflow: hidden;
    display: table;
    vertical-align: center;
}
.item-inner:hover {
    cursor: pointer;
}
.item-left {
    display: table-cell;
    padding-right: 15px;
    vertical-align: middle;
    padding-top: 20px;
    padding-bottom: 20px;
}

.item-name {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 10px;
}
.item-description {
    color: #707070;
    font-size: 0.9rem;
    margin-bottom: 10px;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    
}

.regular-price {
    font-size: 0.9rem;
    text-decoration: line-through;
    padding-right: 5px;
    color: #707070;
}
.discounted-price {
    font-size: 1rem;
    font-weight: 700;
}
.item-right {
    display: table-cell;
    width: 20%;
    vertical-align: middle;
    padding: 5px 0;
    
    img {
        width: 100%;
        margin-top: 5px;
        border-radius: 3px;
    }
    
}

@media screen and (max-width: 768px) {
    .menu-item {
        width: 100%;
    }
    .item-inner {
        margin: 0;
    }
}
@media screen and (max-width: 550px) {
    .menu-item {
        margin-top: 0;
    }
    .item-inner {
        padding: 0;
        border: 0;
        border-bottom: 1px solid #dbdbdb;
        border-radius: 0;
    }
    
    .item-name, .regular-price, .discounted-price {
        font-size: 0.95rem;
    }
    .item-description {
        font-size: 0.85rem;
    }
    .item-right {
        width: 25%;
    }
    .menu-item:last-of-type .item-inner {
        border-bottom: 0;
    }
}

</style>