<template>
   <div class = "options-container">
       <div class = "options-title">Sugar Level</div>
       <div class = "options-select">
           <form>
           <div><input type = "radio" name = "select1" value = "option1">
            25%
            <span class = "options-price"></span>
           </div>
           <div><input type = "radio" name = "select1" value = "option1">
            25%
            <span class = "options-price"></span>
           </div>
           <div><input type = "radio" name = "select1" value = "option1">
            25%
            <span class = "options-price">+ 10.000d</span>
           </div>
           <div><input type = "radio" name = "select1" value = "option1">
            25%
            <span class = "options-price">+ 10.000d</span>
           </div>
           </form>
       </div>
    </div>
</template>

<script>
export default {
  name: 'ItemOptions'
}
</script>

<style scoped lang="scss">
    .options-container {
        padding-top: 25px;
        padding-bottom: 25px;
        overflow: hidden;
        display: block;
        border-bottom: 1px solid #dbdbdb;
    }
    .options-container:first-of-type {
        display: none;
    }

    .options-title {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 5px;
        display: block;
        overflow: hidden;
    }
    input {
        margin-left: 0;
        margin-right: 10px;
    }
    .options-select {
        display: block;
        overflow: hidden;
        font-size: 1rem;

        div {
            margin-top: 15px;
        }
    }
    .options-price {
        float: right;
        color: #707070;
    }

    @media only screen and (max-width: 500px) {
        .options-title {
            font-size: 0.95rem;
        }
        .options-select div {
            font-size: 0.9rem;
        }
    }

    

</style>