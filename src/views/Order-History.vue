<template>
<div id = "orderhistory">
  <div id = "history-body">
    <div id = "history-container">
      <div id = "active-orders">
        <div class = "title">Active Orders</div>
        <ActiveOrder />
      </div>
      <div id = "past-orders">
        <div class = "title">Past Orders</div>
        <PastOrder />
        <PastOrder />
        <PastOrder />
    
    
 
      </div>
    </div>
  </div>
</div>
</template>

<script>

import ActiveOrder from '@/components/ActiveOrder.vue'
import PastOrder from '@/components/PastOrder.vue'

export default {
  name: 'OrderHistory',
  components: {
    PastOrder,
    ActiveOrder
  }
}
</script>

<style scoped lang="scss">

#history-body {
  background: #f6f6f7;
  overflow: hidden;
  min-height: calc(100vh - 20px);
  padding-bottom: 20px;
}

#orderhistory {
  text-align: left;
  display: block;
  overflow: hidden;
}
#history-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 40px;
  margin-top: 60px;
}
#active-orders {
  width: calc(50% - 60px);
  float: left;
  background: white;
  padding: 25px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}
#past-orders {
  width: calc(50% - 60px);
  float: right;
  background: white;
  padding: 25px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
}
.title {
  font-family: montserrat;
  font-size: 1rem;
  margin-bottom: 20px;
}



@media only screen and (max-width: 1000px) {
  #history-container {
    max-width: none;
    padding: 25px;
  }
 #active-orders, #past-orders {
   width: calc(100% - 50px);
   padding: 25px;
   float: none;
 }
 #active-orders {
   margin-bottom: 20px;
 }
}

@media only screen and (max-width: 500px) {
  #history-container {
    background: white;
    padding: 10px 0;
  }
  #active-orders, #past-orders {
    box-shadow: none;
    padding: 15px;
    width: calc(100% - 30px);
  }
  #active-orders {
    margin-bottom: 0;
  }
  .title {
    font-size: 0.9rem;
  }
}






</style>
