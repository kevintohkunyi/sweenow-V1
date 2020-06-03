<template>
    <div id = "erroraddr">
        <div class = "continue-container" id = "signup-popup">
           <div id = "continue-back">
                <img src = "@/assets/left-arrow.png" onclick="closeErrorAddrFunction();">
            </div>
            <img src = "@/assets/address.png" id = "continue-img">
            <div id = "continue-title">Add Delivery Address</div>
            <div id = "continue-subtitle">Please add a delivery address to continue with your order.</div>
           
            
        </div>
    </div>
        
    </div>
</template>

<script>

export default {
  name: 'ErrorAddr',
  components: {
    
  }
}
</script>

<style scoped lang="scss">

    #continue-img {
        width: 50px;
        margin-bottom: 10px;
    }
    #erroraddr{
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
    .continue-container {
        width: 280px;
        display: block;
        background: white;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
        padding-bottom: 30px;
        border-radius: 3px;
        text-align: center;
    }
    #continue-back {
        height: 60px;
        display: flex;
        align-items: center;
    img {
        width: 15px;
        position: absolute;
        left: 25px;
        }
    }
    #continue-back img:hover {
        cursor: pointer;
    }
    #continue-title {
        font-family: Montserrat;
        font-size: 1.1rem;
        color: #333;
        padding: 0 25px;
        line-height: 1.3;
        margin-bottom: 10px;
    }
    #continue-subtitle {
        padding: 0 25px;
        line-height: 1.3;
    }
    
    
    @media only screen and (max-width: 500px) {
        
        #continue-title {
            font-size: 1.1rem;
        }
        #continue-subtitle {
            font-size: 0.9rem;
        }
    }
        
    

</style>