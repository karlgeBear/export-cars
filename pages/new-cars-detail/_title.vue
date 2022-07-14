<template>
  <div class="used-cars-detail">
    <Nav :diyrate="3" :diynavbg="1"/>
    <BreadNav />
    <div class="top-tabbar">
      <div class="container">
        <ul class="tabbar-list">
          <li class="tabbar-item selected">车系首页</li>
          <li class="tabbar-item">配置</li>
          <li class="tabbar-item">图片</li>
          <li class="tabbar-item">视频</li>
          <li class="tabbar-item">资讯</li>
          <li class="tabbar-item">报价</li>
        </ul>
      </div>

    </div>
    <CommonSwiperPC>
      <div class="pk" slot="pk">
        <div class="pk-top">
          <div class="Competitiveness">
            <span><i class="small-circle"></i>竞争力指数:</span>
            <span class="highColor">70.6分</span>
          </div>
          <div class="ranking">
            <span><i class="small-circle"></i>同级车排行:</span>
            <span class="highColor">NO.35</span>
          </div>
          <div class="detail">
            <a href="#" class="highColor">查看详情></a>
          </div>
        </div>
        <div class="pk-swiper">
          <div class="arrow-left" @click="left">
            <i class="el-icon-arrow-left"></i>
          </div>
          <div class="pk-swiper-content">
            <div class="pk-card">
              <ul class="pk-card-list" :style="{left:pkCardSwiperW + 'px'}">
                <li class="pk-card-item" v-for="(item,index) in pkCardSwiper" :key="index" ref="pkCardItem">
                  <a href="#">
                    <div class="pk-card-img">
                      <img :src="item.picture" alt="pk-car">
                    </div>
                    <div class="right">
                      <div class="title">{{item.title}}</div>
                      <div class="price-range">
                        <span class="highColor">{{item.rank}}</span>
                        <button>PK</button>
                      </div>
                      <div class="competitiveness">
                        竞争力指数 <span class="highColor">{{item.competitivenessIndex}}</span> 分
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="arrow-right" @click="right">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </CommonSwiperPC>
    <div class="section">
      <div class="container">
        <div class="section-left">
          <section class="article">
            <h1 class="section-title">文章</h1>
            <a href="#" class="highColor">查看更多></a>
            <div class="article-list">
              <div class="article-item" v-for="(item,index) in article" :key="index">
                <img :src="item.picture" alt="article-car">
                <div class="article-item-content">
                  <h2 class="sub-title">{{item.title}}</h2>
                  <div class="article-item-desc">
                    <p>{{item.descrition[0]}}</p>
                    <p>{{item.descrition[1]}}</p>
                  </div>

                  <button class="btn">阅读更多</button>
                </div>

              </div>
            </div>
          </section>
          <section class="car-model">
            <h1 class="section-title">车型</h1>
            <div class="select-box" @mouseleave="mouseleave(1)">
              <span class="highColor" @mouseenter="mouseenter(1)">{{carModelTitle}}年款∨</span>
              <ul class="select-list" v-show="isShowCarModel">
                <li class="select-item" v-for="(item,index) in [2022,2021,2020,2019,2018,2017]"
                :class="{focus:modelFocusIndex == index}"
                @click="model(item,index)"
                :key="index">
                  {{item}} 年款
                </li>
              </ul>
            </div>
            <table class="car-model-table">
              <tr>
                <th>纯电动</th>
                <th>纯电续航</th>
                <th>指导价</th>
                <!-- <th></th> -->
              </tr>
              <tr v-for="(item,index) in carModel" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.driveLife}}</td>
                <td>{{item.guidePrice}}</td>
                <td>
                  <button>PK</button>
                </td>
              </tr>
            </table>
          </section>
        </div>
        <div class="section-right">
          <section class="car-recommend">
            <h1 class="section-title">竞争力车型推荐</h1>
            <div class="select-box" @mouseleave="mouseleave(2)">
              <span class="highColor" @mouseenter="mouseenter(2)">{{carRemmondTitle}}∨</span>
              <ul class="select-list" v-show="isShowCarRemmond">
                <li class="select-item" v-for="(item,index) in carModelRecommend.carModel"
                :class="{focus:recommendFocusIndex == index}"
                @click="recommend(item,index)"
                :key="index">
                  {{item}} 年款
                </li>
              </ul>
            </div>
            <div class="car-remmend-ranking">
              <ul class="the-top-three">
                <li v-for="(item,index) in carModelRecommend.carMdodelData[0][0].topThree" :key="index">
                  <div class="rank-num">{{index+1}}</div>
                  <img :src="item.picture" alt="remmend-car">
                  <div class="car-remmend-info">
                    <h2>{{item.title}}</h2>
                    <p class="price-range highColor">{{item.rank}}万元</p>
                    <p class="competitiveness">竞争力指数<span class="highColor">{{item.competitivenessIndex}}</span></p>
                  </div>
                </li>
              </ul>
              <ul>
                <li></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div class="container">
        <div class="section-left">
          <section class="img">
            <h1 >图片</h1>
          </section>
          <section class="video">
            <h1>视频</h1>
          </section>
          <section class="inpression">
            <h1>口碑印象</h1>
          </section>
        </div>
        <div class="section-right">
          <section class="history">
              <h1>浏览过的车型</h1>
          </section>
        </div>
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
      pkCardSwiperW: 0,
      modelFocusIndex: 0,
      recommendFocusIndex:0,
      isShowCarModel:false,
      isShowCarRemmond:false,
      carModelTitle: '2021',
      carRemmondTitle: '小型轿车',
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
      ],
      pkCardSwiper:[
        {
          picture:require('~/assets/imgs/cars/swiper-car-1.jpg'),
          title:'奥迪',
          rank:'79.65 - 1234',
          competitivenessIndex:7.12
        },
        {
          picture:require('~/assets/imgs/cars/swiper-car-1.jpg'),
          title:'奥迪',
          rank:'79.65 - 1234',
          competitivenessIndex:7.12
        },
        {
          picture:require('~/assets/imgs/cars/swiper-car-1.jpg'),
          title:'奥迪',
          rank:'79.65 - 1234',
          competitivenessIndex:7.12
        },
        {
          picture:require('~/assets/imgs/cars/swiper-car-1.jpg'),
          title:'奥迪',
          rank:'79.65 - 1234',
          competitivenessIndex:7.12
        },
        {
          picture:require('~/assets/imgs/cars/swiper-car-1.jpg'),
          title:'奥迪',
          rank:'79.65 - 1234',
          competitivenessIndex:7.12
        },
      ],
      article:[
        {
          picture:require('~/assets/imgs/cars/swiper-car-2.jpg'),
          title:'特斯拉竟然8年160万公里',
          descrition: [
            '1、2014年德国出租车司机买了一辆Model S(配置|询价) P85的试驾车，他花了9年时间，将这辆Model S开161万公里！',
            '2、8年时间更换了三次电池，换了8个电机，截止到今年......'
          ]
        },
        {
          picture:require('~/assets/imgs/cars/swiper-car-2.jpg'),
          title:'特斯拉竟然8年160万公里',
          descrition: [
            '1、2014年德国出租车司机买了一辆Model S(配置|询价) P85的试驾车，他花了9年时间，将这辆Model S开161万公里！',
            '2、8年时间更换了三次电池，换了8个电机，截止到今年......'
          ]
        }
        
      ],
      carModel:[
        {
          name:'2022款Model S 长续航升级版',
          driveLife:'719',
          guidePrice: '98.3'
        },
        {
          name:'2022款Model S 长续航升级版',
          driveLife:'719',
          guidePrice: '98.3'
        },
        {
          name:'2022款Model S 长续航升级版',
          driveLife:'719',
          guidePrice: '98.3'
        },
        {
          name:'2022款Model S 长续航升级版',
          driveLife:'719',
          guidePrice: '98.3'
        },
      ],
      carModelRecommend:{
        carModel:['小型轿车','紧凑型轿车','中型轿车','中大型轿车','小型SUV','紧凑型SUV','中型SUV','多用途车','纯电动','插电式混动'],
        carMdodelData:[
          [
            {
              topThree:[
                {
                  picture:require('~/assets/imgs/cars/swiper-car-3.jpg'),
                  title:'奥迪',
                  rank:'79.65 - 1234',
                  competitivenessIndex:7.12
                },
                {
                  picture:require('~/assets/imgs/cars/swiper-car-3.jpg'),
                  title:'奥迪',
                  rank:'79.65 - 1234',
                  competitivenessIndex:7.12
                },
                {
                  picture:require('~/assets/imgs/cars/swiper-car-3.jpg'),
                  title:'奥迪',
                  rank:'79.65 - 1234',
                  competitivenessIndex:7.12
                },
              ],
              others:[
                {
                  title:'奥迪',
                  competitivenessIndex:7.12
                },
                {
                  title:'奥迪',
                  competitivenessIndex:7.12
                },
                {
                  title:'奥迪',
                  competitivenessIndex:7.12
                },
                {
                  title:'奥迪',
                  competitivenessIndex:7.12
                },
                {
                  title:'奥迪',
                  competitivenessIndex:7.12
                },
                {
                  title:'奥迪',
                  competitivenessIndex:7.12
                },
                {
                  title:'奥迪',
                  competitivenessIndex:7.12
                },
              ]
            }
          ]
        ],
      },
      imgs:{
          appearance:[
            require('~/assets/imgs/cars/swiper-car-3.jpg'),
            require('~/assets/imgs/cars/swiper-car-3.jpg'),
            require('~/assets/imgs/cars/swiper-car-3.jpg'),
            require('~/assets/imgs/cars/swiper-car-3.jpg'),
          ],
          interior:[],
          detail:[],
          space:[],
          engineGround:[],
          official:[],
          carShow:[]
      },
      browsingHistory:[
        {
          picture:require('~/assets/imgs/cars/swiper-car-2.jpg'),
          title:'奥迪 S6',
          rank:'79.65 - 23432',
        },
        {
          picture:require('~/assets/imgs/cars/swiper-car-2.jpg'),
          title:'奥迪 S6',
          rank:'79.65 - 23432',
        }
      ],

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
    let pkCardItemW = this.$refs.pkCardItem[0].offsetWidth
    console.log('单个pkCardItem:',pkCardItemW) 
    console.log(this.carModelRecommend.carMdodelData[0][0])
  },

  methods: {
    left(){
      let pkCardItemW = 352
      let maxW = pkCardItemW*(this.pkCardSwiper.length-2)
      if(this.pkCardSwiperW == 0) {
        this.pkCardSwiperW = -maxW
      }else{
        this.pkCardSwiperW += pkCardItemW
      }
      
      console.log('向左移动',this.pkCardSwiperW,maxW)
    },
    right(){
      let pkCardItemW = 352
      let maxW = pkCardItemW*(this.pkCardSwiper.length-2)
      if(Math.abs(this.pkCardSwiperW) == maxW) {
        this.pkCardSwiperW = 0
      }else{
        this.pkCardSwiperW -= pkCardItemW
      }
      
      console.log('向右移动',this.pkCardSwiperW,maxW)
    },
    mouseenter(num){
      switch(num){
        case 1:
          this.isShowCarModel = true;
        break;
        case 2:
          this.isShowCarRemmond = true;
        break;
      }
    },
    mouseleave(num){
      switch(num){
        case 1:
          this.isShowCarModel = false;
        break;
        case 2:
          this.isShowCarRemmond = false;
        break;
      }
    },
    model(val,index){
      this.modelFocusIndex = index
      this.carModelTitle = val
      this.isShowCarModel = false
    },
    recommend(val,index){
      this.recommendFocusIndex = index
      this.carRemmondTitle = val
      this.isShowCarRemmond = false
    },
  },
};
</script>

<style lang="scss" scoped>
.section-title{
    color: #222732;
    font-size: 34px;
    font-weight: 900;
    line-height: 34px;
    padding-left: 20px;
    position: relative;
    margin-bottom: 30px;
    &::before{
      content: '';
      width: 6px;
      height: 26px;
      background: #FF4605;
      border-radius: 20px 20px 20px 20px;
      opacity: 1;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
}
.sub-title{
  font-weight: 700;
  font-size: 20px;
}
.small-circle{
  &::before{
    content: '';
    background-color: var(--primary);
    display: inline-block;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    margin-right: 12px;
  }
}
.selected{
  border: 1px solid var(--primary);
  background-color: var(--primary-light);
  border-radius: 10px;
  color: var(--primary);
}
.top-tabbar{
  margin-top: 40px;
  margin-bottom: 30px;
  .tabbar-list{
    .tabbar-item{
      padding: 12px 38px;
      display: inline-block;
      font-weight: 900;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
.pk{
  margin-bottom: 40px;
  .pk-top{
    >div{
      display: inline-block;
      margin-right: 16px;
      font-size: 12px;
    }
    
    
  }
  .pk-swiper{
    max-width: 736px;
    display: flex;
    margin-top: 20px;
    .arrow-left,.arrow-right{
      background-color: var(--bg);
      border-radius: 8px;
      cursor: pointer;
      i{
        font-weight: 900;
        padding: 30px 0;
      }
    }
    .pk-swiper-content{
      width: 705px;
    }
    .pk-card{
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 107%;
      .pk-card-list{
        width: 100%;
        display: flex;
        position: absolute;
        transition: all .3s ease-in-out;
        li{
          padding: 0 10px;
           a{
            display: flex;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #BEBEBE;
            .pk-card-img{
              &:first-child{
                width: 100px;
                font-size: 0;
              }
            }
            .right{
              padding: 10px 15px;
              line-height: 12px;
              .price-range{
                font-weight: 700;
                font-size: 14px;
                white-space: pre;
                button{
                  margin-left: 50px;
                  padding: 10px 20px;
                  background-color: var(--primary);
                  border-radius: 20px;
                  color: #ffffff;
                  font-weight: 700;
                }
              }
              .competitiveness{
                font-size: 12px;
                span{
                  font-weight: 700;
                }
              }
              .title{
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
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
    .send-message.btn{
      background: none;
      padding: 0;
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
      padding: 30px 0;
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
.focus{
  color: var(--primary) !important;
  background-color: var(--primary-light);
}
.section{
  .highColor{
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
    
  }
  .container{
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    >div{
      width: 50%;
      section{
        position: relative;
        margin-top: 30px;
        a{
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(50%);
        }
        .select-box{
          display: inline-block;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          .select-list{
            margin-top: 10px;
            border: 1px solid var(--bg);
            background: #ffffff;
            .select-item{
              border-bottom: 1px solid var(--bg);
              color: #606266;
              padding: 8px;
              cursor: pointer;
              &:hover{
                background-color: var(--primary-light);
              }
            }
          }
        }
      }
    }

    .section-left{
      margin-right: 15px;
      position: relative;
      a{
        position: absolute;
        top: 0;
        right: 0;
      }
      .article-list{
        display: flex;
        flex-wrap: wrap;
        >div{
          width: 50%;
          img{
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            display: block;
          }
          .article-item-content{
            padding: 20px;
            border: 1px solid #DDDDDD;
            border-top: 0 solid #DDDDDD;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            .article-item-desc{
              padding-top: 10px;
              padding-bottom: 10px;
              p{
                font-size: 12px;
                color: #999999;
                line-height: 20px;
              }
            }
            .btn{
              padding: 10px 15px;
              background-color: var(--primary);
              color: #ffffff;
              border-radius: 13px;
              font-size: 13px;
              font-weight: 600;
            }
          }
          &:nth-child(2n-1){
            padding-right: 15px;
          }
          &:nth-child(2n){
            padding-left: 15px;
          }
        }
      }
      .car-model-table{
        tr{
          th{
            width: 219px;
            padding: 22px 0;
            background-color: #EFF3FA;
            font-size: 20px;
            font-weight: bold;
            &:not(last-child){
              border-right: 3px solid #ffffff;
            }
          }
          td{
            font-size: 16px;
            padding: 15px 0;
            text-align: center;
            button{
              padding: 5px 10px;
              border-radius: 12px;
              background-color: var(--primary);
              color: #ffffff;
              font-size: 12px;
            }
          }
        }

      }
    }
    .section-right{
      margin-left: 15px;
      span.highColor{
        display: inline-block;
        width: 152px;
      }
    }
  }
  
}
</style>
