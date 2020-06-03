<template>
    <div id = "voucher-popup">
        <div id = "voucher-container">
           <div id = "voucher-title">
                <img src = "@/assets/left-arrow.png" onclick="closeVoucherFunction();">
                My Vouchers
            </div>
            <div id = "no-voucher">
                <div>
                    <img src = "@/assets/voucher.png">
                    You currently have no vouchers
                </div>
            </div>
            <div id = "yes-voucher">
                <div class = "voucher-box" onclick="selectVoucherFunction();">
                    <div class = "voucher-left":style="{'background-image': 'url(' + require('@/assets/voucher-grab.jpg') + ')'}"></div>
                    <div class = "voucher-right">
                        <div class = "voucherdiv">
                            <div class = "voucher-code">KUNGFU666</div>
                            <div class = "voucher-discount">30K discount, minimum spending 100K</div>
                            <div class = "voucher-terms">
                                Valid until 31 Jun
                                <span class = "uselater">Use Later</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "voucher-box" onclick="selectVoucherFunction();">
                    <div class = "voucher-left":style="{'background-image': 'url(' + require('@/assets/voucher-grab.jpg') + ')'}"></div>
                    <div class = "voucher-right">
                        <div class = "voucherdiv">
                            <div class = "voucher-code">KUNGFU666</div>
                            <div class = "voucher-discount">30K discount, minimum spending 100K</div>
                            <div class = "voucher-terms">
                                Valid until 31 Jun
                                <span class = "usenow">Use Now</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "voucher-box" onclick="selectVoucherFunction();">
                    <div class = "voucher-left":style="{'background-image': 'url(' + require('@/assets/voucher-grab.jpg') + ')'}"></div>
                    <div class = "voucher-right">
                        <div class = "voucherdiv">
                            <div class = "voucher-code">KUNGFU666</div>
                            <div class = "voucher-discount">30K discount, minimum spending 100K</div>
                            <div class = "voucher-terms">
                                Valid until 31 Jun
                                <span class = "usenow">Use Now</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "voucher-box" onclick="selectVoucherFunction();">
                    <div class = "voucher-left":style="{'background-image': 'url(' + require('@/assets/voucher-grab.jpg') + ')'}"></div>
                    <div class = "voucher-right">
                        <div class = "voucherdiv">
                            <div class = "voucher-code">KUNGFU666</div>
                            <div class = "voucher-discount">30K discount, minimum spending 100K</div>
                            <div class = "voucher-terms">
                                Valid until 31 Jun
                                <span class = "usenow">Use Now</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div id = "voucher-bottom">
                <span id = "promo-code">
                    <input type = "text" placeholder = "Enter promo code here">
                    <span id = "apply-promo" onclick="addVoucherFunction();">Add Voucher</span>
                </span>
            </div>
            

    </div>
        
    </div>
</template>

<script>

export default {
  name: 'ChangeVoucher',
  components: {
    
  }
}
</script>

<style scoped lang="scss">

    #voucher-popup {
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
    #voucher-container {
        width: 400px;
        display: block;
        background: #f6f6f7;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
        border-radius: 3px;
        height: 80vh;
        
    }
    #voucher-title {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        font-family: Montserrat;
        font-size: 0.9rem;
        width: 400px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    img {
        width: 15px;
        position: absolute;
        left: 15px;
        }
    }
    #voucher-title img:hover {
        cursor: pointer;
    }
    
    #no-voucher {
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
    #yes-voucher {
        display: none;
        height: 400px;
        padding-top: 10px;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 15px;   
    }
    .voucher-box {
        background: white;
        padding: 10px;
        border-radius: 3px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        display: block;
        overflow: hidden;
        margin-bottom: 10px;
    }
    .voucher-box:hover {
        cursor: pointer;
    }
    .voucher-box:last-of-type {
        margin-bottom: 65px;
    }
    .voucher-left {
        height: 100px;
        width: 100px;
        float: left;
        border-radius: 3px;
        background-size: cover;
        background-position: 50% 50%;
    }
    .voucher-right {
        width: calc(100% - 116px);
        float: right;
        height: 100px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .voucher-code {
        font-family: Montserrat;
        font-size: 0.8rem;
        margin-bottom: 5px;
    }
    .voucher-discount {
        font-size: 0.85rem;
        margin-bottom: 15px;
    }
    .voucher-terms {
        font-size: 0.8rem;
        color: #707070;
    }
    .usenow {
        float: right;
        margin-right: 10px;
        font-weight: 700;
        color: blue;
    }
    .uselater {
        float: right;
        margin-right: 10px;
        font-weight: 700;
        color: red;
    }
    #voucher-bottom {
        height: 70px;
        background: white;
        bottom: 9vh;
        border-radius: 0 0 3px 3px;
        width: 370px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 15px;
        position: fixed;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    #promo-code input {
        height: 45px;
        padding: 0 10px;
        float: left;
        font-size: 0.85rem;
        border-radius: 3px;
        border: 1px solid #dbdbdb;
        width: calc(100% - 140px);
        background: #f7f7f9;
    }
    #apply-promo {
        height: 45px;
        line-height: 45px;
        background: #D70F64;
        display: inline-block;
        float: right;
        color: white;
        width: 110px;
        font-size: 0.85rem;
        text-align: center;
        border-radius: 3px;
        font-weight: 700;
    }
    #apply-promo:hover {
        cursor: pointer;
        background: #C50F5C;
    }
    

    

    
    @media only screen and (max-width: 500px) {
        #voucher-container {
            width: 100%;
            border-radius: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        #voucher-title {
            width: 100%;
            position: fixed;
            top: 0;
            background: white;
            z-index: 100;
            font-size: 0.85rem;
        }
        #voucher-bottom {
            bottom: 0;
            width: calc(100% - 16px);
            padding: 0 8px;
        }
        #no-voucher {
            height: auto;
        }
        .voucher-left {
            height: 90px;
            width: 90px;
        }
        .voucher-right {
            width: calc(100% - 105px);
            height: 90px;
        }
        .voucher-code {
            font-size: 0.8rem;
        }
        .voucher-discount {
            font-size: 0.85rem;
            margin-bottom: 10px;
        }
        .voucher-terms {
            font-size: 0.73rem;
        }
        #yes-voucher {
            padding-left: 8px;
            padding-right: 8px;
            height: auto;
            position: relative;
            top: 45px;
            padding-top: 25px;
            margin-bottom: 50px;
        }
        .usenow, .uselater {
            margin-right: 6px;
        }
        #apply-promo {
            font-size: 0.8rem;
        }
        #promo-code input {
            font-size: 0.85rem;
        }
        
    }
        
    

</style>