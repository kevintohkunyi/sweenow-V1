<template>
    <div id = "continue-popup">
        <div class = "continue-container" id = "signup-popup">
           <div id = "continue-back">
                <img src = "@/assets/left-arrow.png" onclick="closeContinueFunction();">
            </div>
            <div id = "continue-title">Hello there!</div>
            <div id = "continue-subtitle">Please login or register to continue with your order.</div>
            <div id = "continue-fb" onclick="openFbFunction();">
                <img src = "@/assets/facebook.png">
                Continue with Facebook
            </div>
            <router-link to = "/register"><div id = "continue-email" onclick="closeContinueFunction();">
                <img src = "@/assets/mail.png">
                Continue with Email
            </div></router-link>
            
        </div>
        <div class = "continue-container" id = "continue-fb-popup">
            <div id = "continue-fb-title">
                Account created!
            </div>
            <div id = "continue-fb-subtitle">
                Please enter the following information to help us process your order.
            </div>
            <form id = "continue-fb-form">
                <input type = "text" class = "fb-input" id = "fname" placeholder = "First name">
                <input type = "text" class = "fb-input" id = "lname" placeholder = "Last name">
                <input type = "email" class = "fb-input" id = "email" placeholder = "Email address">
                <router-link to = "/order-continue"><div id = "fb-submit" onclick="closeContinueFunction();">Continue</div></router-link>
           
            </form>
        </div>

    </div>
        
    </div>
</template>

<script>

export default {
  name: 'ContinueOrder',
  components: {
    
  }
}
</script>

<style scoped lang="scss">

    #continue-popup {
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
    .continue-container {
        width: 350px;
        display: block;
        background: white;
        overflow: hidden;
        position: relative;
        margin-top: 60px;
        margin-bottom: 60px;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
        padding-bottom: 30px;
        border-radius: 3px;
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
        font-size: 1.3rem;
        color: #333;
        padding: 0 25px;
        line-height: 1.3;
        margin-bottom: 10px;
    }
    #continue-subtitle {
        padding: 0 25px;
        margin-bottom: 25px;
        line-height: 1.3;
    }
    #continue-fb, #continue-email {
        color: white;
        height: 50px;
        line-height: 50px;
        margin-left: 25px;
        margin-right: 25px;
        margin-bottom: 8px;
        text-align: center;
        border-radius: 3px;
        font-weight: 700;
        font-size: 0.95rem;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 20px;
            position: absolute;
            left: 15px;
        }
    }
    #continue-fb:hover {
        cursor: pointer;
        background: #2D529C;
    }
    #continue-email:hover {
        cursor: pointer;
        background: black;
    }
    #continue-fb {
        background: #4267B2;
    }
    #continue-email {
        background: #333;
    }
    #continue-fb-popup {
        display: none;
    }
    #continue-fb-title {
        margin-top: 30px;
        margin-left: 25px;
        margin-right: 25px;
        font-size: 1.2rem;
        font-family: Montserrat;
        margin-bottom: 10px;  
    }
    #continue-fb-subtitle {
        font-size: 0.95rem;
        margin: 0 25px;
        line-height: 1.3;
    }
    #continue-fb-form {
        margin-top: 10px;
    }
    .fb-input {
        width: calc(100% - 70px);
        margin-left: 25px;
        margin-right: 25px;
        margin-top: 8px;
        height: 45px;
        padding: 0 10px;
        font-size: 0.9rem;
        background: white;
        border: 1px solid #dbdbdb;
        border-radius: 3px;
    }
    #fb-submit {
        margin-left: 25px;
        margin-right: 25px;
        width: calc(100% - 50px);
        margin-top: 20px;
        height: 50px;
        border: 0;
        background: #D70F64;
        font-family: Montserrat;
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-size: 0.85rem;
        border-radius: 3px;
        line-height: 50px;
        text-align: center;
    }
    #fb-submit:hover {
        cursor: pointer;
        background: #C50F5C;
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