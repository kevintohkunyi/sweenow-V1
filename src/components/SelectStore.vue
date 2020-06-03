<template>
  <div id="store-popup">
    <div id = "store-container">
      <div id = "store-title">
        <div id = "store-back">
          <img src = "@/assets/left-arrow.png" onclick="closeStoreFunction();">
        </div>
        Select an outlet
      </div>
      <div id = "location-container">
        <div class = "store-location" onclick="selectStoreFunction();">
          <div class = "store-name">
            Thao Dien
          </div>
          <div class = "store-address">
            14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh
          </div>
          <div class = "store-arrow">
            <img src = "@/assets/right-arrow.png">
          </div>
        </div>
        <div class = "store-location" onclick="selectStoreFunction();">
          <div class = "store-name">
            Thao Dien
          </div>
          <div class = "store-address">
            14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh
          </div>
          <div class = "store-arrow">
            <img src = "@/assets/right-arrow.png">
          </div>
        </div>
        <div class = "store-location" onclick="selectStoreFunction();">
          <div class = "store-name">
            Thao Dien
          </div>
          <div class = "store-address">
            14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh
          </div>
          <div class = "store-arrow">
            <img src = "@/assets/right-arrow.png">
          </div>
        </div>
        <div class = "store-location" onclick="selectStoreFunction();">
          <div class = "store-name">
            Thao Dien
          </div>
          <div class = "store-address">
            14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh
          </div>
          <div class = "store-arrow">
            <img src = "@/assets/right-arrow.png">
          </div>
        </div>
        <div class = "store-location" onclick="selectStoreFunction();">
          <div class = "store-name">
            Thao Dien
          </div>
          <div class = "store-address">
            14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh
          </div>
          <div class = "store-arrow">
            <img src = "@/assets/right-arrow.png">
          </div>
        </div>
        <div class = "store-location" onclick="selectStoreFunction();">
          <div class = "store-name">
            Thao Dien
          </div>
          <div class = "store-address">
            14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh
          </div>
          <div class = "store-arrow">
            <img src = "@/assets/right-arrow.png">
          </div>
        </div>
        <div class = "store-location" onclick="selectStoreFunction();">
          <div class = "store-name">
            Thao Dien
          </div>
          <div class = "store-address">
            14A5 Đường Thảo Điền, Thảo Điền, Quận 2, Hồ Chí Minh
          </div>
          <div class = "store-arrow">
            <img src = "@/assets/right-arrow.png">
          </div>
        </div>
      
      </div>
      
      
      
    </div>
  
  </div>

</template>

<script>
export default {
  name: 'SelectStore'
}
</script>

<style scoped lang="scss">
#store-popup {
  display: none;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
}
#store-container {
  width: 450px;
  padding-bottom: 30px;
  background: #f6f6f7;
  margin: 60px 0;
  position: absolute;
  top: 0;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  text-align: left;
}
#store-title {
  height: 60px;
  line-height: 60px;
  font-weight: 700;
  font-size: 0.9rem;
  background: white;
  text-align: center;
  font-family: Montserrat;
  display: block;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  margin-bottom: 20px;

}
#store-back {
    position: absolute;
    left: 20px;
    top: 3px;

    img {
        width: 15px;
    }
}
#store-back:hover {
    cursor: pointer;
}
.store-location {
  padding: 20px;
  border-radius: 3px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  position: relative;
  display: block;
  overflow: hidden;
}
.store-location:hover {
  cursor: pointer;
  top: -1.5px;
}
.store-name {
  font-family: Montserrat;
  font-size: 0.85rem;
  margin-bottom: 5px;
}
.store-address {
  font-size: 0.85rem;
  color: #707070;
  line-height: 1.3;
  width: calc(100% - 30px);
}
.store-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  height: 100%;
  width: 50px;
  position: absolute;
  right: 0;
  top: 0;

  img {
    width: 15px;
    position: absolute;
    right: 20px;
  }
}
@media only screen and (max-width: 500px) {
  #store-popup {
  }
  #store-container {
    margin: 0;
    width: 100%;
    display: block;
    min-height: calc(100vh - 30px);
    padding-bottom: 30px;
  }
  #location-container {
    padding-top: 60px;
  }
  .store-location {
    margin-left: 5px;
    margin-right: 5px;
    width: calc(100% - 50px);
    display: block;
  }
  
  #store-title {
    font-size: 0.9rem;
    margin-bottom: 0;
    position: fixed;
    z-index: 100;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
  }
  .store-name {
    font-size: 0.85rem;
  }
  .store-address {
    font-size: 0.85rem;
  }
}
</style>
