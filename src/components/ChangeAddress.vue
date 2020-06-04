<template>
    <div id = "address-popup">
        <div id = "address-container">

           <div id = "address-title">
                <img src = "@/assets/left-arrow.png" onclick="closeAddressFunction();">
                Delivery Address
            </div>

            <div id = "no-address">
                <div>
                    <img src = "@/assets/address.png">
                    Please add a new address
                </div>
            </div>

            <div id = "yes-address">
                <div class = "delivery-address" onclick="confirmAddressFunction();">
                    <div class = "da-name">Kevin Nguyen | 0965123456<span class="da-edit">Edit</span></div>
                    <div class = "da-address">208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Hồ Chí Minh</div>
                </div>
                <div class = "delivery-address" onclick="confirmAddressFunction();">
                    <div class = "da-name">Kevin Nguyen | 0965123456<span class="da-edit">Edit</span></div>
                    <div class = "da-address">208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Hồ Chí Minh</div>
                </div>
                <div class = "delivery-address" onclick="confirmAddressFunction();">
                    <div class = "da-name">Kevin Nguyen | 0965123456<span class="da-edit">Edit</span></div>
                    <div class = "da-address">208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Hồ Chí Minh</div>
                </div>
                <div class = "delivery-address" onclick="confirmAddressFunction();">
                    <div class = "da-name">Kevin Nguyen | 0965123456<span class="da-edit">Edit</span></div>
                    <div class = "da-address">208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Hồ Chí Minh</div>
                </div>
                <div class = "delivery-address" onclick="confirmAddressFunction();">
                    <div class = "da-name">Kevin Nguyen | 0965123456<span class="da-edit">Edit</span></div>
                    <div class = "da-address">208 Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, Hồ Chí Minh, Vietnam</div>
                </div>
            </div>

            <div id = "address-bottom" onclick="openAddAddressFunction();">
                    <div id = "address-btn">Add New Address</div>
                </div>    
            
            

    </div>
        
    </div>
</template>

<script>

export default {
  name: 'ChangeAddress',
  components: {
    
  }
}
</script>

<style scoped lang="scss">

    #address-popup {
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
    #address-container {
        width: 400px;
        display: block;
        background: #f1f1f3;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
        border-radius: 3px;
        height: 70vh;
        
    }
    #address-title {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        font-family: Montserrat;
        font-size: 0.9rem;
        width: 400px;
        border-bottom: 1px solid #dbdbdb;
    img {
        width: 15px;
        position: absolute;
        left: 20px;
        }
    }
    #address-title img:hover {
        cursor: pointer;
    }
    .da-edit {
        float: right;
        color: #D70F64;
        font-size: 0.75rem;
        position: relative;
        top: -1px;
    }
    #no-address {
        display: flex;
        text-align: center;
        font-size: 0.9rem;
        height: 50vh;
        align-items: center;
        justify-content: center;
        img {
            width: 50px;
            display: block;
            margin: 0 auto;
            margin-bottom: 10px;
        }
    }
    #yes-address {
        display: none;
        height: 400px;
        padding-top: 10px;
        overflow-x: hidden;
        overflow-y: auto;        
    }
    .delivery-address {
        padding: 20px;
        background: white;
        margin-bottom: 10px;
    }
    .delivery-address:last-of-type {
        margin-bottom: 120px;
    }
    .delivery-address:hover {
        cursor: pointer;
        background: white;
    }
    .da-name {
        font-weight: 700;
        font-size: 0.9rem;
    }
    .da-address {
        color: #707070;
        margin-top: 7px;
        font-size: 0.85rem;
        line-height: 1.35;
    }
    #address-bottom {
        height: 70px;
        background: white;
        border-radius: 0 0 3px 3px;
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #dbdbdb;
        position: absolute;
        bottom: 0;
    
    }
    #address-btn {
        width: calc(100% - 40px);
        background: #D70F64;
        color: white;
        margin: 0 auto;
        line-height: 50px;
        text-align: center;
        font-weight: 700;
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.03rem;
    }
    #address-btn:hover {
        cursor: pointer;
        background: #C50F5C;
    }

    

    
    @media only screen and (max-width: 500px) {
        .continue-container {
            margin-left: 15px;
            margin-right: 15px;
        }
        #address-container {
            width: calc(100% - 30px);
        }
        #address-title, #address-bottom {
            width: 100%;
        }
        #continue-fb, #continue-email {
            font-size: 0.85rem;
        }
        #continue-title, #continue-fb-title {
            font-size: 1.1rem;
        }
        #continue-subtitle, #continue-fb-subtitle {
            font-size: 0.9rem;
        }
        .fb-input {
            font-size: 0.85rem;
        }
        #fb-submit {
            font-size: 0.8rem;
        }
    }
        
    

</style>