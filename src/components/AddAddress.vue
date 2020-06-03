<template>
    <div id = "add-address-popup">
        <div id = "address-container">
           <div id = "address-title">
                <img src = "@/assets/left-arrow.png" onclick="closeAddAddressFunction();">
                Add New Address
            </div>
            <div id = "add-new-address">
                <input type = "text" placeholder="Contact Name">
                <input type = "text" placeholder="Mobile Number">
                <input type = "text" placeholder="Delivery Address">
                <input type = "text" placeholder="Building, Floor No. (Optional)">
            </div>
            <div id = "address-bottom">
                <div id = "address-btn" onclick="enterAddressFunction();">Add New Address</div>
            </div>
    </div>
        
    </div>
</template>

<script>

export default {
  name: 'AddAddress',
  components: {
    
  }
}
</script>

<style scoped lang="scss">

    #add-address-popup {
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
        background: white;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
        border-radius: 3px;

    }
    #address-title {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        font-family: Montserrat;
        font-size: 0.9rem;
        position: fixed;
        width: 400px;
        border-radius: 3px 3px 0 0;
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
    #add-new-address {
        font-size: 0.9rem;
        margin-top: 90px;
        margin-bottom: 30px;
        padding: 0 20px;
        
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
    input {
        width: calc(100% - 30px);
        margin-bottom: 8px;
        height: 45px;
        border: 0;
        border-radius: 3px;
        padding: 0 15px;
        font-size: 0.85rem;
        border: 1px solid #dbdbdb;
    }
    input:last-of-type {
        margin-bottom: 0;
    }
    

    
    @media only screen and (max-width: 500px) {
        .continue-container {
            margin-left: 15px;
            margin-right: 15px;
            width: calc(100% - 30px);
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