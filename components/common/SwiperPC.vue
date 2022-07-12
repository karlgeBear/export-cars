<template>
  <div class="used-cars-detail-content">
    <div class="container">
      <div class="car-info">
        <div class="car-info-left">
          <div class="car-info-imgs">
            <div class="block">
              <el-carousel trigger="click" height="532px" :autoplay="false" @change="swiperChange" ref="swiper">
                <el-carousel-item v-for="(item,index) in swiperImgs" :key="index">
                  <img :src="item" :alt="'car' + index">
                </el-carousel-item>
              </el-carousel>
              <div class="swiper-relative">
                <div class="swiper-relative__move" :style="{ left: moveStep}">
                  <ul class="swiper-relative__imgs">
                    <li class="swiper-relative__img" v-for="(item,index) in swiperImgs" :key="index" @click="$refs.swiper.setActiveItem(index)">
                      <img :src="item" :alt="'car' + index" :class="{imgActive: swiperImgIndex == index}">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="picture-num">
              <i class="far fa-images"></i>
              {{swiperImgIndex+1}}/{{swiperImgs.length}}
            </div>
          </div>
          <slot name="description"></slot>
          <slot name="history"></slot>
          <slot name="pk"></slot>
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
          <slot name="btn-id-pay"></slot>
          <!-- <div class="send-message btn"><a class="send-message-link" href="#">send-message btn</a></div>
          <div class="offer-car-id">offter ID #20482</div>
          <div class="pay-mothods">
            <a class="share"><i class="fab fa-facebook"></i>Share</a>
            <a class="tweet"><i class="fab fa-twitter"></i>Tweet</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Title',

  data() {
    return {
      swiperImgIndex : 0,
      moveStep: 0,
      swiperImgs: [
        require('~/assets/imgs/cars/swiper-car-1.jpg'),
        require('~/assets/imgs/cars/swiper-car-2.jpg'),
        require('~/assets/imgs/cars/swiper-car-3.jpg'),
        require('~/assets/imgs/cars/swiper-car-4.jpg'),
        require('~/assets/imgs/cars/swiper-car-5.jpg'),
        require('~/assets/imgs/cars/swiper-car-6.jpg'),
        require('~/assets/imgs/cars/swiper-car-7.jpg')
      ],
      carInfo: [
        'Bentley',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental'
      ]
    };
  },
  computed: {
    // moveStep() {
    //   return this.swiperImgIndex
    //   // if(this.swiperImgIndex > 4){
    //   //   return this.swiperImgIndex*164 + '-px'
    //   // }else {
    //   //   return 0
    //   // }
    // }
  },
  mounted() {
    console.log('test:',this.swiperImgs.length - this.swiperImgIndex)
  },

  methods: {
    swiperChange(index){
      // Corresponding to the following picture with add boder and moving by click the arrow
      console.log(index)
      let sum = this.swiperImgs.length
      this.swiperImgIndex = index
      let left = index > 4 ? `-${(sum-5)*164}px` : '0px'
      this.moveStep = left
      console.log('总长:',sum,'超出范围所剩个数:',sum-index,'left:',left) 

      // let {}
      // 需求: 点击对应的btn,点击btn会传一个index值过来
      // 已知变量： sum(索引的总数量) index(索引值)
      // 问题：如何让sum-index所得的值反过来排列 
      // 例如：sum=7; currentIndex= 1; result = sum-currentIndex;
        //     result: 6, 5, 4, 3, 2, 1, 0
        //     解决：   0, 1, 2, 3, 4, 5, 6
    }
  },
};
</script>

<style lang="scss" scoped>
.head-title{
    color: #222732;
    font-size: 22px;
    font-weight: 900;
    line-height: 28px;
}
.car-info{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  .car-info-left{
    position: relative;
    margin-right: 15px;
    width: 60%;
    .car-info-imgs{
      cursor: pointer;
      width: 100%;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .picture-num{
        position: absolute;
        bottom: 170px;
        right: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 800;
        z-index: 10;
        i{
          opacity: 0.5;
          margin-right: 5px;
        }
      }
      .swiper-relative{
        margin: 20px 0;
        position: relative;
        height: 120px;
        overflow: hidden;
        .swiper-relative__move{
           position: absolute;
           left: 0;
           top: 0;
           width: 100%;
           border: 1px solid blanchedalmond;
           transition: all .3s ease-in-out;
          .swiper-relative__imgs{
            white-space: nowrap;
            .swiper-relative__img{
              display: inline-block;
              width: 20%;
              padding: 0 10px;
              .imgActive{
                width: 100%;
                border: 2px solid var(--primary);
              }
            }
          }
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
  }
}
</style>

<style lang="scss">

.el-carousel--horizontal{
  border-radius: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.el-carousel__arrow{
    box-shadow: 0px 3px 40px 0 #dbe0e8;
    background-color: #fff;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    display: inline-block;
    text-align: center;
    transition: all 0.2s ease;
    color: black;
    &:hover{
      background-color: var(--primary-light);
      color: var(--primary);
    }
    i{
      font-size: 22px;
      font-weight: 600;
    }
}
</style>