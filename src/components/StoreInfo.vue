<template>
    <div id = "storeinfo">
        <div id = "s-info-container">
            
            <div id = "s-info-banner" :style="{'background-image': 'url(' + require('@/assets/googlemaps.png') + ')'}">
                <div id = "s-info-close" onclick="closeStoreInfoFunction();">
                    <img src = "@/assets/left-arrow.png">
                </div>
              
            </div>  
            <div id = "item-container">
                <div id = "item-top">
                    
                    <div id = "s-info-name">
                        Kung Fu Tea
                        
                    </div>
                    <div id = "s-info-address">
                        <img src = "@/assets/pin.png" class = "s-info-img">
                        14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh
                    </div>
                    <div id = "s-info-phone">
                        <img src = "@/assets/call.png" class = "s-info-img">
                        0965 123 456
                    </div>
                </div>
                <div id = "item-bottom">
                    <div id = "deliveryhours">Delivery Hours</div>
                    <div class = "deliveryday">
                        <div class = "left">Monday</div>
                        <div class = "right">10.00 AM - 9.00 PM</div>
                    </div>
                    <div class = "deliveryday">
                        <div class = "left">Tuesday</div>
                        <div class = "right">10.00 AM - 9.00 PM</div>
                    </div>
                    <div class = "deliveryday">
                        <div class = "left">Wednesday</div>
                        <div class = "right">10.00 AM - 9.00 PM</div>
                    </div>
                    <div class = "deliveryday">
                        <div class = "left">Thursday</div>
                        <div class = "right">10.00 AM - 9.00 PM</div>
                    </div>
                    <div class = "deliveryday" id = "today">
                        <div class = "left">Friday</div>
                        <div class = "right">10.00 AM - 9.00 PM</div>
                    </div>
                    <div class = "deliveryday">
                        <div class = "left">Saturday</div>
                        <div class = "right">10.00 AM - 11.00 PM</div>
                    </div>
                    <div class = "deliveryday">
                        <div class = "left">Sunday</div>
                        <div class = "right">10.00 AM - 11.00 PM</div>
                    </div>
                </div>
            </div>
            

        </div>
        
    </div>
</template>

<script>
import ItemOptions from '@/components/ItemOptions.vue'

export default {
  name: 'ItemPopup',
  components: {
  }
}
</script>

<style scoped lang="scss">

    #storeinfo {
        position: fixed;
        display: none;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 99999;
        overflow-y: auto;
        overflow-x: hidden;
        min-height: 100vh;
        text-align: left;
    }
    #s-info-container {
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
    #s-info-banner {
        height: 150px;
        width: calc(100% - 40px);
        background-size: cover;
        background-position: 50% 50%;
        padding: 20px;
        overflow: hidden;
        display: block;
        position: relative;
    }
    #s-info-close {
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
    #s-info-close:hover {
        cursor: pointer;
    }
    #item-container {
        padding: 25px 20px;
        display: block;
        overflow: hidden;
        position: relative;
    }
    #s-info-name {
        font-size: 1rem;
        font-family: Montserrat;
        margin-bottom: 7px;
    }
   
    #s-info-address {
        font-size: 0.9rem;
        color: #707070;
        line-height: 1.3;
        display: block;
        overflow: hidden;
        margin-bottom: 5px;
    }
    #s-info-phone {
        font-size: 0.9rem;
        color: #707070;
        margin-bottom: 15px;
    }
    .s-info-img {
        width: 15px;
        position: relative;
        top: 2.5px;
        margin-right: 3px;
    }
   
    #item-top {
        border-bottom: 1px solid #dbdbdb;
        display: block;
        overflow: hidden;
        padding-bottom: 10px;
    }
    #deliveryhours {
        font-family: Montserrat;
        margin-top: 20px;
        font-size: 0.95rem;
        margin-bottom: 20px;
    }
    .deliveryday {
        display: block;
        overflow: hidden;
        margin-bottom: 15px;
        font-size: 0.95rem;
        color: #707070;
        .left {
            display: inline-block;
        }
        .right {
            float: right;
            display: inline-block;
        }
    }
    #today {
        color: #D70F64;
        font-weight: 700;
    }
    
    @media only screen and (max-width: 600px) {
        #s-info-container {
            width: 100%;
            margin: 0;
            height: 100vh;
            overflow: auto;
        }
        #s-info-name {
            font-size: 0.9rem;
        }
        #s-info-address {
            font-size: 0.85rem;
        }
        #s-info-phone {
            font-size: 0.85rem;
        }
        #deliveryhours {
            font-size: 0.9rem;
        }
        .deliveryday {
            font-size: 0.85rem;
        }
        #item-container {
            padding: 20px 15px;
            padding-bottom: 10px;
        }
        #s-info-banner {
            padding-left: 15px;
            padding-right: 15px;
            width: calc(100% - 30px);
            height: 100px;
        }
    }
    
    

</style>