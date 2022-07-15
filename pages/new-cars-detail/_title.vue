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
            <a href="#" class="highColor">查看更多 ></a>
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
              <span class="highColor" @mouseenter="mouseenter(1)">{{carModelTitle}}年款 ∨</span>
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
                <li class="the-top-three__item" v-for="(item,index) in carModelRecommend.carMdodelData[0][0].topThree" :key="index">
                  <div class="rank-num">{{index+1}}</div>
                  <a href="#">
                    <img :src="item.picture" alt="remmend-car">
                    <div class="car-remmend-info">
                      <h2 class="sub-title">{{item.title}}</h2>
                      <p class="price-range highColor">{{item.rank}}万元</p>
                      <p class="competitiveness">竞争力指数<span class="highColor">{{item.competitivenessIndex}} 分</span></p>
                    </div>
                    <div class="arrow-right">></div>
                  </a>

                </li>
              </ul>
              <ul class="ohters">
                <li class="others" v-for="(item,index) in carModelRecommend.carMdodelData[0][0].others" :key="index">
                  <div class="rank-num">{{index+4}}</div>
                  <a href="#">
                    <div class="car-remmend-info">
                      <h2>{{item.title}}</h2>
                      <p class="competitiveness">竞争力指数<span class="highColor">{{item.competitivenessIndex}} 分</span></p>
                    </div>
                    <div class="arrow-right">></div>
                  </a>

                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div class="container">
        <div class="section-left">
          <section class="img">
            <h1 class="section-title">图片</h1>
            <a href="#" class="highColor">查看更多 ></a>
            <div class="section-img-tabbar">
              <ul class="tabbar-list">
                <li class="tabbar-item" 
                  v-for="(item,index) in imgs.tabbar" 
                  :key="index" 
                  :class="{tabbarImgSelected:tabbarImgIndex == index}"
                  @click="imgtabChange(index)"
                >
                    {{item}}
                </li>
              </ul>
              <ul class="tabbar-show-img">
                <li v-for="(item,index) in imgs.appearance" :key="index">
                  <a :href="item" :download="item.split('/')[-1]">
                    <img :src="item" :alt="item.split('/').slice[-1]">
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section class="video">
            <h1 class="section-title">视频</h1>
            <a href="#" class="highColor">查看更多 ></a>
          </section>
          <section class="inpression">
            <h1 class="section-title">口碑印象</h1>
            <ul class="car-relate-list__webgit">
              <li>
                <div class="relate-title">特斯拉 Model S 频道介绍</div>
                <div class="relate-content">新浪汽车提供特斯拉Model S报价，以及特斯拉Model S实拍图/配置/口碑/论坛等信息，关注特斯拉Model S，就上特斯拉Model S频道，新车上市，降价优惠一网打尽！欢迎浏览特斯拉Model S触屏版。</div>
              </li>
              <li>
                <div class="relate-title">相关阅读</div>
                <div class="relate-content">特斯拉Model S 特斯拉Model S报价 特斯拉Model S多少钱 特斯拉Model S怎么样 特斯拉Model S参数配置 特斯拉Model S图片 特斯拉Model S报价及图片 特斯拉Model S视频 特斯拉Model S资讯 特斯拉Model S4S店</div>
              </li>
              <li>
                <div class="relate-title">车系对比</div>
                <div class="relate-content">特斯拉Model S和Ghibli哪个好？ 特斯拉Model S和奥迪S6哪个好？ 特斯拉Model S和宝马M3哪个好？ 特斯拉Model S和AMG C哪个好？ 特斯拉Model S和奥迪RS 4哪个好？ 特斯拉Model S和雷克萨斯LS哪个好？</div>
              </li>
              <li>
                <div class="relate-title">热门推荐</div>
                <div class="relate-content">微型车 小型车 紧凑型 中型车 大型车 两厢车 三厢车 SUV MPV 跑车 国产车大全 德系车大全 美系车大全 日系车大全 合资车大全 10万以内性价比高的车 10-15万性价比高的车 15-20万性价比高的车 20-25万性价比高的车</div>
              </li>
            </ul>
          </section>
        </div>
        <div class="section-right">
          <section class="history">
              <h1 class="section-title">浏览过的车型</h1>
              <ul class="browsing-car-list">
                <li class="browsing-car-item" v-for="(item,index) in browsingHistory" :key="index">
                  <a href="#">
                    <img :src="item.picture" :alt="item.picture.split('/').slice[-1]">
                    <h2>{{item.title}}</h2>
                    <div class="rank highColor">{{item.rank}}</div>
                  </a>
                </li>
              </ul>
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
      tabbarImgIndex :0,
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
          tabbar:['外观','内饰','细节','空间','引擎地盘','官方','车展'],
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
    // let pkCardItemW = this.$refs.pkCardItem[0].offsetWidth
    // console.log('单个pkCardItem:',pkCardItemW) 
    // console.log(this.carModelRecommend.carMdodelData[0][0])
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
    imgtabChange(index){
      this.tabbarImgIndex = index
    }
  },
};
</script>

<style lang="scss" scoped>
.section-title{
    color: #222732;
    font-size: 30px;
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
.tabbarImgSelected{
  color: var(--primary);
  &::after{
    content: '';
    width: 80%;
    position: absolute;
    border: 1px solid var(--primary);
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
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
  }
  a.highColor{
    transform: translateY(50%)
  }
  .container{
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    >div{
      // width: 50%;
      section{
        position: relative;
        margin-top: 30px;
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
        .the-top-three__item{
          display: flex;
          align-items: center;
          .rank-num{
            height: 100%;
            font-size: 40px;
            font-weight: bold;
            color: var(--primary);
            display: inline-block;
            margin-right: 25px;
          }
          a{
            width: 80%;
            display: flex;
            justify-content: space-between;
            padding: 20px 0;
            border-bottom: 1px solid #DDDDDD;
            img{
              width: 120px;
              // height: 75px;
              object-fit: cover;
              // image-rendering: -webkit-optimize-contrast;
              // image-rendering: crisp-edges;
              border-radius: 13px;
            }
            .car-remmend-info{
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              .highColor{
                font-weight: bolder;
              }
            }
            .arrow-right{
              background-color: var(--bg);
              height: 90px;
              line-height: 90px;
              font-size: 20px;
              padding: 0 3px;
              font-weight: bolder;
              border-radius: 15px;
            }
          }
        }
        .others{
          display: flex;
          align-items: center;
          font-size: 20px;
          font-weight: 700;
          .rank-num{
            margin-right: 25px;
            padding-left: 10px;
          }
          a{
            display: flex;
            width: 80%;
            padding: 24px 0;
            border-bottom: 1px solid #DDDDDD;   
            .car-remmend-info{
              display: flex;
              width: 100%;
              justify-content: space-between;
              .highColor{
                width: inherit;
              }
            }
          }


        }
      }
    }

    .section-left{
      width: 60%;
      margin-right: 15px;
      position: relative;
      a.highColor{
        position: absolute;
        top: 0;
        right: 0;
      }
      .section-img-tabbar{
        .tabbar-list{
          display: flex;
          font-size: 18px;
          font-weight:bold;
          margin-bottom: 20px;
          padding-left: 10px;
          li{
            margin-right: 50px;
            padding-bottom: 5px;
            position: relative;
            cursor: pointer;
          }
        }
        .tabbar-show-img{
          display: flex;
          flex-wrap: wrap;
          li{
            width: 50%;
            padding: 10px 10px 10px 10px;
            img{
              border-radius: 10px;
            }
          }
        }
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
            &:not(last-child){
              width: 245px;
              padding: 22px 0;
              background-color: #EFF3FA;
              font-size: 20px;
              font-weight: bold;
              border-right: 3px solid #ffffff;
            }
          }
          td{
            font-size: 18px;
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
      .car-relate-list__webgit{
        li{
          display: flex;
          align-items: center;
          padding: 20px;
          background-color: #F4F4F4;
          border-radius: 11px;
          margin-bottom: 20px;
          .relate-title{
            font-size: 18px;
            font-weight: bold;
            margin: 10px;
            padding-left: 30px;
            width: 30%;
            position: relative;
            &::before{
              content: '';
              height: 20px;
              border: 2px solid var(--primary);
              border-radius: 9px;
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          .relate-content{
            font-size: 14px;
            margin: 10px 25px;
            padding: 10px 25px;
            color: #999999;
            line-height: 26px;
            border-left: 1px solid #CDCDCD;
          }
        }
      }
    }
    .section-right{
      width: 40%;
      margin-left: 15px;
      padding-left: 30px;
      span.highColor{
        display: inline-block;
        width: 152px;
      }
      .browsing-car-list{
        display: flex;
        flex-wrap: wrap;
        .browsing-car-item{
          width: 50%;
          padding-top: 10px;
          padding-bottom: 10px;
          font-weight: bold;
          &:nth-child(2n-1){
            padding-right: 15px;
          }
          &:nth-child(2n){
            padding-right: 15px;
          }
          img{
            border-radius: 10px;
          }
          h2,div{
            padding-top: 10px;
          }
        }
      }
    }
  }
  
}
</style>
