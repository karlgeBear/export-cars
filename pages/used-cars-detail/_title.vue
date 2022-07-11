<template>
  <div class="used-cars-detail">
    <Nav :diyrate="2" :diynavbg="1"/>
    <BreadNav />
    <CommonSwiperPC >
      <div class="car-info-description" slot="description">
        <div class="description head-title">
          Description
        </div>
        <div class="car-description" v-if="isShowCarDesc">
          <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.</p>
          <p>If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three thousand miles from New York to Liverpool in the nine days, between the 12th and the 21st of December. It is true that, once arrived, the affair on board the Henrietta, added to that of the Bank of England, might create more difficulties for Mr. Fogg than he imagined or could desire.</p>
          <p>During the first days, they went along smoothly enough. The sea was not very unpropitious, the wind seemed stationary in the north-east, the sails were hoisted, and the Henrietta ploughed across the waves like a real trans-Atlantic steamer.</p>
          <div class="text-btn">
            <button class="show-less text-click" @click="switchCarDesc">Show less</button>
          </div>
        </div>
        <div class="car-description__inner" v-if="!isShowCarDesc">
          <p>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction.</p>
          <p>If, then—for there were “ifs” still—the sea did not become too boisterous, if the wind did not veer round to the east, if no accident happened to the boat or its machinery, the Henrietta might cross the three…</p>
          <div class="text-btn">
            <button class="show-more text-click" @click="switchCarDesc">Show-more</button>
          </div>
        </div>
      </div>
      <div class="car-info__vehicle-history" slot="history">
          <div class="card-border-top car-features-pills">
            <div class="car-features-pills__single">
              <i class="far fa-check-circle"></i>
              <span>Brake assist</span>
            </div>
            <div class="car-features-pills__single">
              <i class="far fa-check-circle"></i>
              <span>Forward-collision warning</span>
            </div>
            <div class="car-features-pills__single">
              <i class="far fa-check-circle"></i>
              <span>Lane keeping assist</span>
            </div>
            <div class="car-features-pills__single">
              <i class="far fa-check-circle"></i>
              <span>Parking assist systems</span>
            </div>
            <div class="car-features-pills__single">
              <i class="far fa-check-circle"></i>
              <span>Sideview camera</span>
            </div>
          </div>
          <div class="card-bottom">
            <div class="download-report">
              <h1 class="download-report__title head-title">Vehicle history</h1>
              <div class="download-report__btn"><a href="#"> DownLoad report</a></div>
              <div class="download-report-imgs">
                <img src="~/assets/imgs/icon/carfax_logo_eu_2.png" alt="car-arfax_logo_eu_2">
                <img src="~/assets/imgs/icon/paypal.png" alt="paypal">
              </div>
            </div>
            <div class="read-history">
              Before you decide to buy a car, read its <a href="#" class="text-click">history</a> for free.
            </div>
          </div>
      </div>
    </CommonSwiperPC>
    <div class="send-message">
      <div class="container">
        <h1 class="head-title">Send message</h1>
        <div class="send-message-content">
          <div class="form">
              <CommonSendMessage />
          </div>
          <div class="seller">
            <div class="seller-top">
              <div class="seller-name"><a href="#">admin</a></div>
              <div class="seller-desc"><span class="highColor">Bussiness seller</span></div>
            </div>
            <div class="seller-bottom">
              <div class="seller-email">
                <a href="#"><i class="fa fa-envelope highColor"></i></a>
                <a href="#">business@aucn.net.au</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <div class="related-listings">
      <div class="container">
        <h1 class="head-title">Related Listings</h1>
        <CommonCarList :carListData="carListData" cardW="23%"></CommonCarList>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Title',

  data() {
    return {
      isShowCarDesc:false,
      carListData: [
        {
          title:'Ferrari LaFerrari 2-door coupe red',
          price:'810,000',
          year:'2021',
          Transmission:'Auto',
          Kilometers: 17882,
          pictures:require('~/assets/imgs/cars/swiper-car-1.jpg'),
          pictureSum: 6
        },
        {
          title:'Ferrari LaFerrari 2-door coupe red',
          price:'810,000',
          year:'2021',
          Transmission:'Auto',
          Kilometers: 17882,
          pictures:require('~/assets/imgs/cars/swiper-car-2.jpg'),
          pictureSum: 6
        },
        {
          title:'Ferrari LaFerrari 2-door coupe red',
          price:'810,000',
          year:'2021',
          Transmission:'Auto',
          Kilometers: 17882,
          pictures:require('~/assets/imgs/cars/swiper-car-3.jpg'),
          pictureSum: 6
        },
        {
          title:'Ferrari LaFerrari 2-door coupe red',
          price:'810,000',
          year:'2021',
          Transmission:'Auto',
          Kilometers: 17882,
          pictures:require('~/assets/imgs/cars/swiper-car-4.jpg'),
          pictureSum: 6
        }
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
  },

  methods: {
    switchCarDesc(){
      this.isShowCarDesc = !this.isShowCarDesc
    },
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
.send-message{
  background-color: var(--bg);
  padding: 50px 0;
  .head-title{
    padding-bottom: 30px;
  }
  .send-message-content{
    display: flex;
    .form{
      width: 50%;
      padding-right: 100px;
      form{
        display: flex;
        flex-direction: column;
        padding-right: 150px;
        div{
          width: 100%;
        }
        .form-input{
          display: flex;
        }
        .from-submit{
          display: flex;
          .el-form-item{
            &:last-child{
              text-align: right;
              button{
                background-color: var(--primary);
                border: 0 solid transparent;
                padding: 15px 40px;
                border-radius: 10px;
                font-size: 17px;
              }
            }
          }
        }
      }
    }
    .seller{
      width: 41%;
      >div{
        padding: 30px 37px 33px 37px;
        background-color: #FFFFFF;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #E7EDF3;
        box-shadow: 1.2px 1.6px 0px 0px rgba(196, 196, 196, 24%);
        border-radius: 10px;
        &:first-child{
          position: relative;
          bottom: -10px;
        }
      }
      .seller-name{
        font-size: 22px;
        line-height: 28px;
        font-weight: bold;
        color: #222732;
      }
      .seller-desc{
        padding-bottom: 45px;
      }
      .seller-email{
        padding-bottom: 30px;
        padding-top: 20px;
        i{
          padding-right: 15px;
        }
      }
    }
  }
}
.related-listings{
  padding: 50px 0;
  h1{
    margin-bottom: 30px;
  }
  .related-listings-car-list{
    display: flex;
  }
}
.car-info-description{
  color: #222732;
  font-size: 16px;
  line-height: 30px;
  .description.head-title{
    padding: 30px 0;
  }
  .car-description{
    margin-bottom: 30px;
  }
  p{
    margin-bottom: 16px;
  }
}

.car-info__vehicle-history{
  .card-border-top{
    width: 100%;
    padding: 32px 35px 16px 34px;
    background: var(--bg);
    margin-bottom: 1px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .car-features-pills{
    display: inline-block;
    .car-features-pills__single{
      padding: 15px 20px;
      background-color: #FFFFFF;
      margin: 10px;
      border: 1px solid #e7edf3;
      float: left;
      border-radius: 10px;
      color: #222732;
      font-size: 16px;    
      line-height: 24px;
      font-weight: 600;
      i{
        display: inline-block;
        float: left;
        color: var(--primary);
        margin-right: 10px;
        font-size: 24px;
        line-height: 24px;
      }
    }
  }
  .card-bottom{
    display: flex;
    background-color: var(--bg);
    background-color: #F2F5FB;
    background-image: url('~assets/imgs/Layer-56.png');
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: initial;
    margin-bottom: 50px;
    .download-report{
      display: flex;
      flex-direction: column;
      padding: 0px 10px 35px 34px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      .download-report__title{
        padding: 30px 0;
      }
      .download-report__btn a{
        display: inline-block;
        font-size: 16px;
        line-height: 21px;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-radius: 10px 10px 10px 10px;
        padding: 13px 25px 13px 25px;
        border-radius: 10px;
        border: 1px solid var(--primary);
        background-color: #FFF0EB;
        transition: all ease-in-out .3s;
        margin-bottom: 35px;
        &:hover{
          background-color: var(--primary);
        }
      }
      .download-report-imgs{
        display: flex;
        img{
          height: 25px;
          &:last-child{
            height: 30px;
          }
        }
      }
    }
    .read-history{
      align-self: center;
      width: 35%;
      padding-left: 25px;
      line-height: 27px;
      margin-left: 45px;
    }
  }
}
</style>
