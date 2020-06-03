<template>
    <div class = "sub-container" id = "promotions">
        <div class = "seperator"></div>
        
        <div class = "category-container">
            <div class = "category-name">
                Promotions
            </div>
            <div class = "item-container">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </div>
    </div>
</template>

<script>
import MenuItem from '@/components/MenuItem.vue'

export default {
  name: 'MenuCategory',
  components: {
      MenuItem
  }
}
</script>

<style scoped lang="scss">

.sub-container:before {
    content:'';
    width: 100px;
    height: 120px;
    background: red;
    display: block;
    margin-top: -130px;
    visibility: hidden;
}
.seperator {
    display: block;
    background: #f1f1f3;
    height: 15px;
    overflow: hidden;

}
.category-container {
    padding: 40px 25px;
    text-align: left;
    overflow: hidden;
    position: relative;
    background: white;
}


.category-name {
    font-weight: 700;
    font-size: 1.15rem;
    margin-bottom: 15px;
    padding: 0 5px;
    font-family: Montserrat;
}




@media screen and (max-width:768px) {
    .category-name {
        padding: 0;
    }
}

@media screen and (max-width: 550px) {
    .category-container {
        padding: 30px 15px;
        padding-bottom: 0;
    }
    .category-name {
        font-size: 1rem;
        margin-bottom: 10px;
    }
   
}

        
    

</style>