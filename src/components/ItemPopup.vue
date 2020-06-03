<template>
    <div id = "popup">
        <div id = "popup-container">
            <div id = "popup-banner" :style="{'background-image': 'url(' + require('@/assets/milktea.jpg') + ')'}">
                <div id = "popup-close" onclick="closePopupFunction();">
                    <img src = "@/assets/left-arrow.png">
                </div>
            </div>  
            <div id = "item-container">
                <div id = "item-top">
                    <div id = "item-name-price">
                        <span id = "item-name">Matcha Milk Tea</span>
                        <span id = "discounted-price">35.000đ</span>
                        <span id = "regular-price">50.000đ</span>
                    </div>
                    <div id = "item-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
                    </div>
                </div>
                <ItemOptions />
                <ItemOptions />
                <div id = "special">
                    <div id = "special-title">Special Instructions</div>
                    <textarea rows = "6" placeholder = "Let us know if you have any instructions.">
                        
                    </textarea>
                </div>
            </div>
            <div id = "options-bar">
                    <div id = "obar-left">
                        <div>
                            <span class = "toggle">-</span>
                            <span class = "value">1</span>
                            <span class = "toggle">+</span>
                        </div>
                    </div>
                    <div id = "obar-right" onclick="addItemFunction();">Add to Cart</div>
                </div>

        </div>
        
    </div>
</template>

<script>
import ItemOptions from '@/components/ItemOptions.vue'

export default {
  name: 'ItemPopup',
  components: {
    ItemOptions
  }
}
</script>

<style scoped lang="scss">

    #popup {
        position: fixed;
        display: none;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 99999;
        margin-top: -60px;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 100vh;
        text-align: left;
    }
    #popup-container {
        width: 500px;
        display: block;
        background: white;
        overflow: hidden;
        position: absolute;
        top: 0;
        margin-top: 60px;
        margin-bottom: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
    }
    #popup-banner {
        height: 250px;
        width: calc(100% - 40px);
        background-size: cover;
        background-position: 50% 50%;
        padding: 20px;
        overflow: hidden;
        display: block;
    }
    #popup-close {
        width: 30px;
        height: 30px;
        display: flex;
        background: white;
        border-radius: 1000px;
        border: 1px solid #dbdbdb;
        overflow: hidden;
        align-items: center;
        justify-content: center;

        img {
            width: 15px;
            height: 15px;
        }
    }
    #popup-close:hover {
        cursor: pointer;
    }
    #item-container {
        padding: 25px 20px;
        display: block;
        overflow: hidden;
    }
    #item-name-price {
        display: block;
        overflow: hidden;
        margin-bottom: 15px;
    }
    #item-name {
        float: left;
        font-size: 1.1rem;
        font-weight: 700;
    }
    #regular-price, #discounted-price {
        float: right;
    }
    #regular-price {
        text-decoration: line-through;
        color: #707070;
        margin-right: 3px;
        font-size: 0.95rem;
        position: relative;
        top: 1px;
    }
    #discounted-price {
        font-weight: 700;
        font-size: 1.1rem;
    }
    #item-description {
        font-size: 1rem;
        color: #707070;
        line-height: 1.3;
        display: block;
        overflow: hidden;
        padding-bottom: 15px;
    }
    #item-top {
        border-bottom: 1px solid #dbdbdb;
        display: block;
        overflow: hidden;
        padding-bottom: 10px;
    }
    
    #special {
        padding-top: 25px;

        textarea {
            width: calc(100% - 26px);
            resize: none;
            font-family: Helvetica, Arial, sans-serif;
            color: #333;
            padding: 15px 13px;
            font-size: 0.9rem;
        }
    }
    #special-title {
        font-size: 1rem;
        margin-bottom: 20px;
        font-weight: 700;
    }
    #options-bar {
        border-top: 1px solid #dbdbdb;
        padding: 10px 20px;
        background: white;
    }
    #obar-left {
        display: inline-block;
        width: 90px;
        background: #f1f1f2;
        height: 55px;
        border-radius: 3px;
        text-align: center;
        line-height: 55px;
        font-size: 1.1rem;
    }
    .toggle {
    font-size: 1.3rem;
    font-weight: 700;
    padding: 10px;
    color: #D70F64;
    }
    .toggle:hover {
        cursor: pointer;
    }
    #obar-right {
        display: inline-block;
        width: calc(100% - 105px);
        background: #D70F64;
        height: 55px;
        float: right;
        border-radius: 3px;
        text-align: center;
        line-height: 55px;
        color: white;
        font-weight: 700;
        font-size: 0.9rem;
        text-transform: uppercase;
    }
    #obar-right:hover {
        background: #C50F5C;
    }
    #obar-right:hover {
        cursor: pointer;
    }
    @media only screen and (max-width: 600px) {
        #popup-container {
            width: 100%;
            margin: 0;
            height: 100vh;
            overflow: auto;
        }
        #item-container {
            padding-left: 15px;
            padding-right: 15px;
        }
         #options-bar {
            position: fixed;
            bottom: 0;
            width: calc(100% - 30px);
            padding-left: 15px;
            padding-right: 15px;
        }
        #popup-banner {
            padding: 15px;
            width: calc(100% - 30px);
        }
    }
    @media only screen and (max-width: 500px) {
        #item-name, #discounted-price {
            font-size: 1rem;
        }
        #regular-price {
            font-size: 0.9rem;
            top: 2px;
        }
        #item-description {
            font-size: 0.9rem;
        }
        #special-title {
            font-size: 0.95rem;
        }
        #special textarea {
            font-size: 0.85rem;
        }
        #obar-right {
            font-size: 0.85rem;
            width: calc(100% - 90px);
        }
        #obar-left {
            font-size: 1rem;
            width: 80px;
        }
        .toggle {
            font-size: 1.1rem;
        }
        #popup-banner {
            height: 180px;
        }
       
        #item-container {
            padding-bottom: 100px;
        }
    
    }
    

</style>