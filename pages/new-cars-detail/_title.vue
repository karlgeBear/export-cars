<template>
  <div class="new-cars-detail">
    <Nav :diyrate="2" :diynavbg="1"/>
    <BreadNav />
    <div class="container">
      <section class="car-info">
        <div class="car-info-left">
          <div class="car-info-imgs">
            <img src="~/assets/imgs/cars/car-detail.jpg" alt="car">
            <div class="picture-num">
              <i class="far fa-images"></i>
              1/1
            </div>
          </div>
          <div class="car-info-description"></div>
          <div class="car-info__vehicle-history">

          </div>
        </div>
        <div class="car-info-right">
          <h1 class="car-title">TESR</h1>
          <div class="car-features">
            <span class="car-feature">2012<i class="fas fa-circle"></i></span>
            <span class="car-feature">0 miles<i class="fas fa-circle"></i></span>
            <span class="car-feature">Coupe<i class="fas fa-circle"></i></span>
            <span class="car-feature">Electric</span>
          </div>
          <div class="car-price">$22,222</div>
          <div class="favorites"><i class="far fa-star"></i>Add to favorites</div>
          <div class="car-info-detail">
            <div class="car-info-detail__key">
              <ul>
                <li>Make:</li>
                <li>Model:</li>
                <li>Color:</li>
                <li>Drive Type:</li>
                <li>Transmission:</li>
                <li>Condition:</li>
                <li>Year:</li>
                <li>Mileage:</li>
                <li>Fuel Type:</li>
                <li>Engine Size:</li>
                <li>Doors:</li>
                <li>VIN:</li>
                <li>NEDC pure electric cruising range(km):</li>
              </ul>
            </div>
            <div class="car-info-detail__value">
              <ul>
                <li v-for="(item,index) in carInfo" :key="index">{{item}}</li>
              </ul>
            </div>
          </div>
          <div class="send-message btn"><a class="send-message-link" href="#">send-message btn</a></div>
          <div class="offer-car-id">offter ID #20482</div>
          <div class="pay-mothods">
            <a class="share"><i class="fab fa-facebook"></i>Share</a>
            <a class="tweet"><i class="fab fa-twitter"></i>Tweet</a>
          </div>
        </div>
        
      </section>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'ExportCarsTitle',

  data() {
    return {
      carInfo: ['Bentley','Continental','Continental','Continental','Continental','Continental','Continental','Continental','Continental','Continental','Continental']
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.car-info{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  >div{
    border: 1px solid var(--primary);
  }
  .car-info-left{
    position: relative;
    margin-right: 15px;
    width: 60%;
    .car-info-imgs{
      cursor: pointer;
      width: 100%;
      overflow: hidden;
      img{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
      }
      .picture-num{
        position: absolute;
        bottom: 20px;
        right: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 800;
        i{
          opacity: 0.5;
          margin-right: 5px;
        }
      }
    }
  }
  .car-info-right{
    margin-left: 15px;
    padding-left: 30px;
    padding-right: 95px;
    width: 40%;
    .car-title{
      font-size: 30px;
      line-height: 1.3;
      color: #222732;
    }
    .car-features{
      color: #a7a8a8;
      padding: 25px 0;
      border-bottom: 1px solid #E8E8E8;
      i{
        color: var(--primary);
        padding-left: 3px;
      }
    }
    .car-price{
      font-size: 35px;
      line-height: 44px;
      font-weight: 800;
      color: var(--primary);
      padding: 20px 0;
    }
    .favorites{
      color: #a7a8a8;
      font-size: 16px;
      i{
        font-size: 20px;
        padding-right: 5px;
      }
    }
    .car-info-detail{
      display: flex;
      margin-top: 20px;
      background-color: var(--bg); 
      padding: 25px 40px 18px 40px;
      border-radius: 10px;
      line-height: 30px;
      .car-info-detail__key{
        font-weight: 700;
      }
    }
    .send-message.btn{
      .send-message-link{
        font-size: 17px;
        display: inline-block;
        width: 100%;
        font-weight: 600;
        line-height: 20px;
        border-radius: 10px 10px 10px 10px;
        padding: 15px 15px 15px 15px;
        background-color: var(--primary);
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #fff;
      }
    }
    .offer-car-id{
      text-align: center;
      margin: 30px 0;
    }
    .pay-mothods{
      display: flex;
      justify-content: center;
      a{
        display: inline-block;
        font-size: 14px;
        line-height: 16px;
        color: #fff;
        padding: 8px 12px;
        border-radius: 4px;
        margin: 0 10px;
        &:first-child{
          background-color: #39579A;
        }
        &:last-child{
          background-color: #01ABF0;
        }
        i{
          padding-right: 12px;
        }
      }
    }
  }
}
</style>