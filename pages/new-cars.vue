<template>
  <div class="new-cars">
    <Nav :diyrate="3" :diynavbg="0"/>
    <div class="search">
      <div class="container">
        <CommonSearchBg>
          <h1 slot="title" class="search__box-title">
            新能源车型大全
          </h1>
          <i slot="elIconS" class="el-icon-search"></i>
          <el-input slot="input" type="text" placeholder="请输入您要搜索的品牌或者车型" v-model="serachKeyValue"></el-input>
          <div slot="select2" class="select-box">
            <el-select v-model="value" placeholder="所有品牌">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" disabled placeholder="所有型号">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="价格">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="续航">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value" placeholder="类型">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
        </CommonSearchBg>
      </div>
    </div>
    <div class="all-car-make">
      <div class="container">
        <div class="all-car-make__tab-hover">
          <div class="all-car-make__title">
            <div class="title-widget highColor">AUTO SINA</div>
            <h1 class="title">新能源品牌</h1>
          </div>
          <div class="tab">
            <ul class="tab-hover-list">
              <li class="tab-hover-item" v-for="(item,index) in makeFilterOption" :key="index"
              :class="{active:isActive==index}"
              @mouseenter='hover(index)'
              >{{Object.keys(item)[0]}}</li>
            </ul>
          </div>
        </div>
        <div class="all-car-make__tab-show">
          <div class="car-make__single-box" v-for="(item,index) in makeFilterOption" :key="index" v-show="isActive == index">
            <ul class="tab-show-list">
              <li class="tab-show-item" v-for="(itemChild,indexChild) in Object.values(item)[0]" :key="indexChild">
                <a href="#" target="_blank" class="img" :alt="itemChild">
                  <img src="http://n.sinaimg.cn/auto/transform/brand/190/w95h95/20210722/25dd-3e9e30425bdafa619dbda61343da85a2.jpg" alt="捷豹">
                  <div class="carname">{{itemChild}}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <div class="long-battery-life">
      <div class="container">
        <div class="long-battery-life__title">
          <div class="title-widget highColor">AUTO SINA</div>
          <h1 class="title">超长续航</h1>
        </div>
      </div>
      <CommonCarList :carListData="carListData" cardW="18%"></CommonCarList>
    </div>
    <div class="bottom-search container">
      <input type="text" placeholder="输入你的关键词">
      <button>
        <i data-v-e2da6a34="" class="fa-search"></i>
      </button>
      <a href="#" class="arrow-back-top">
        <img src="~/assets/imgs/icon/arrow-back-top.png" alt="arrow-back-top"/>
      </a>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'NewCar',

  data() {
    return {
      value: "",
      serachKeyValue:'',
      isActive: 0,
       options: [
        {
          value: "1",
          label: "Audi",
        },
        {
          value: "2",
          label: "BMW",
        },
        {
          value: "3",
          label: "Bentley",
        },
        {
          value: "4",
          label: "Porsche",
        },
        {
          value: "5",
          label: "Cadillac",
        },
      ],
      makeFilterOption: [
        {
          '热门品牌':[
          '奔驰','宝马','奥迪','别克','丰田','沃尔沃','长安汽车','荣威',
          '奔驰','宝马','奥迪','别克','丰田','沃尔沃','长安汽车','荣威'
          ]
        },
        {'A': ['Audi']},
        {'B': ['BWN']},
        {'C':['Cupra']},
        {'D':['DMC']},
        {'E':['need fill carData']},
        {'F':['need fill carData']},
        {'G':['need fill carData']},
        {'H':['need fill carData']},
        {'I':['need fill carData']},
        {'J':['need fill carData']},
        {'K':['need fill carData']},
        {'L':['need fill carData']},
        {'M':['need fill carData']},
        {'N':['need fill carData']},
        {'O':['need fill carData']},
        {'P':['need fill carData']},
        {'Q':['need fill carData']},
        {'R':['need fill carData']},
        {'S':['need fill carData']},
        {'T':['need fill carData']},
        {'V':['need fill carData']},
        {'W':['need fill carData']},
        {'X':['need fill carData']},
        {'Y':['need fill carData']},
        {'Z':['need fill carData']},
      ],
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
        },
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

  mounted() {
    
  },

  methods: {
    hover(val){
      this.isActive = val
      console.log(val)
    }
  },
};
</script>

<style lang="scss" scoped>
.active{
  color: #FF4605;
  font-weight: bold;
  &::after{
    content:'';
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: #FF4605;
    border-radius: 200px 200px 200px 200px;
    opacity: 1;
  }
}
.title-widget{
  width: 222px;
  height: 40px;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 3px;
  +.title{
    width: 379px;
    font-size: 60px;
    letter-spacing: 3px;
  }
}
.search{
  background-image: url(~assets/imgs/bg-new-car.jpg);
  height: 620px;
  background-position: center center;
  background-size: contain;
  // background-size: cover;
  margin-top: -105px;
  padding-top: 130px;
  .search__box-title {
    text-align: center;
    font-size: 61px;
    line-height: 62px;
    font-weight: 900;
    padding-bottom: 50px;
  }
  .el-icon-search{
    font-size: 20px;
    color: #999999;
  }
  .select-box{
    display: flex;
    >div{
      margin: 0 15px;
    }
    /deep/ .el-input--suffix .el-input__inner{
      background-color: transparent;
    }
    /deep/ .el-input input::placeholder{
      color: #fff !important;
    }
  }
  /deep/ .filter__box .el-input>input{
    border: 0;
    height: 100%;
    letter-spacing: 2px;
  }
}
.all-car-make{
  margin: 50px 0;
  .all-car-make__tab-hover{
    display: flex;
    justify-content: space-between;
    margin-bottom:55px;
    .tab{
      width: 100%;
      align-self: flex-end;
      .tab-hover-list{
        width: 100%;
        display: flex;
        justify-content: space-around;
        .tab-hover-item{
          position: relative;
          padding-bottom: 9px;
          display: inline-block;
          cursor: pointer;
        }
      }
    }

  }
  .all-car-make__tab-show{
    .car-make__single-box{
      .tab-show-list{
        display: flex;
        flex-wrap: wrap;
        li{
          width: 10%;
          text-align: center;
          a{
            display: inline-block;
            width: 100%;
            img{
              width: 100%;
              padding:10px;
            }
            .carname{
              padding-top: 10px;
            }
          }
        }
      }
    }
  }
}
.long-battery-life{
  .long-battery-life__title{
    padding-bottom: 90px;
  }
  background-color: #EFF3FA;
  padding: 120px 250px;
}
.bottom-search{
  padding: 68px 0 88px;
  text-align: center;
  position: relative;
  input{
    border: 1px solid #999999;
    width: 350px;
    height: 60px;
    padding-left: 20px;
    background: #FFFFFF;
    border-radius:20px;
    opacity: 1;
    border: 1px solid #999999;
  }
  button{
    width: 57px;
    height: 53px;
    background-color: var(--primary);
    border-radius: 10px;
    i{
      font-family: "Font Awesome 5 Free";
      font-weight: 600;
      color: #ffffff;
    }
  }
  a{
    display: inline-block;
    width: 57px;
    height: 53px;
    position: absolute;
    right: 0;
  }
}
</style>