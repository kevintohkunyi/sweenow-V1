<template>
    <div id = "menu-category">
        <a href = "#promotions"><div class = "m-category">Promotions</div></a>
        <a href = "#promotions"><div class = "m-category">Mains</div></a>
        <a href = "#promotions"><div class = "m-category">Side Dishes</div></a>
        <a href = "#promotions"><div class = "m-category">Desserts</div></a>
        <a href = "#promotions"><div class = "m-category">Wine</div></a>
        <a href = "#promotions"><div class = "m-category">Liquor</div></a>
        <a href = "#promotions"><div class = "m-category">Beer</div></a>
        
    </div>
</template>

<script>
export default {
  name: 'MenuInfo'
}
</script>

<style scoped lang="scss">
#menu-category {
    padding: 0 30px;
    text-align: left;
    display: inline-block;
    border-bottom: 1px solid #dbdbdb;
    position: sticky;
    top: 60px;
    background: white;
    width: calc(100% - 60px);
    overflow-x: auto;
    white-space: nowrap;
    z-index: 1;

    
}

#menu-category::-webkit-scrollbar {
  width: 4px;
  border: 1px solid #d5d5d5;
}

#menu-category::-webkit-scrollbar-track {
  border-radius: 0;
  background: #f1f1f3;
}

#menu-category::-webkit-scrollbar-thumb {
  border-radius: 0;
  background: #c1c1c1;
}


        

.m-category {
    padding: 25px 0;
    display: inline-block;
    margin-right: 30px;
    text-transform: uppercase;
    font-size: 0.8rem;
}

.m-category:hover {
    cursor: pointer;
}


@media only screen and (max-width: 550px) {
    #menu-category {
        padding: 0;
        width: calc(100% - 15px);   
    }
    .m-category {
        margin-right: 20px;
        font-size: 0.75rem;
    }
    #menu-category {
        padding-left: 15px;
    }
    
    
}

</style>