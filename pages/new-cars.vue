<template>
  <div class="new-cars">
    <Nav :diyrate="2" :diynavbg="1"/>
    <BreadNav />
    <section class="filter-car-items">
      <div class="container">
        <div class="filter-list" :class="{showMoreFilters:showMoreFiters}">
          <div class="first-row row">
              <div class="filter-car-select">
                <el-select v-model="type" @change="getSelectVal" filterable placeholder="Type" clearable :popper-append-to-body="false" :class="{selectedHighBorder:type}">
                  <el-option
                    v-for="item in type0OptionData"
                    :key="item.type"
                    :label="item.label"
                    :value="item.type"
                    >
                  </el-option>
                </el-select>
            </div>
            <div class="filter-car-select">
                <el-select v-model="make" @change="getSelectVal" @clear="clearModel" filterable placeholder="Make" clearable :popper-append-to-body="false" :class="{selectedHighBorder:make}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
            <div class="filter-car-select">
                <el-select v-model="model" @change="getSelectVal" :disabled="make == ''" filterable placeholder="Model" clearable :popper-append-to-body="false" :class="{selectedHighBorder:model}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
            <div class="filter-car-input">
              <div class="price-input">
                <div class="input-content filter-car-input-left ">
                  <input type="text" placeholder="min Price" 
                    v-model="minPrice" 
                    @input="minPrice=minPrice.replace(/[^0-9]/g,'')" 
                    :class="{SelectedHighBorder:minPrice}"
                  >
                  <span class="close-icon" v-show="minPrice" @click="minPrice=''"><i class="el-icon-circle-close"></i></span>
                </div>
                <div class="input-content filter-car-input-right">
                  <input type="text" placeholder="max Price" 
                    v-model="maxPrice" 
                    @input="macPrice=maxPrice.replace(/[^0-9]/g,'')" 
                    :class="{SelectedHighBorder:maxPrice}"
                  >
                  <span class="close-icon" v-show="maxPrice" @click="maxPrice=''"><i class="el-icon-circle-close"></i></span>
                </div>
              </div>
            </div>
            <div class="filter-car-select">
                <el-select v-model="mileage" filterable placeholder="Mileage" clearable :popper-append-to-body="false" :class="{selectedHighBorder:mileage}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
          </div>
          <div class="second-row row">
            <div class="filter-car-select">
                <el-select v-model="driveType" filterable placeholder="Drive Type" clearable :popper-append-to-body="false" :class="{selectedHighBorder:driveType}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
             <div class="filter-car-select">
                <el-select v-model="fuelType" filterable placeholder="Fuel Type" clearable :popper-append-to-body="false" :class="{selectedHighBorder:fuelType}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
            <div class="filter-car-select">
                <el-select v-model="features" filterable placeholder="Features" clearable :popper-append-to-body="false" :class="{selectedHighBorder:features}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
             <div class="filter-car-select">
                <el-select v-model="transmission" filterable placeholder="Transmission" clearable :popper-append-to-body="false" :class="{selectedHighBorder:transmission}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
             <div class="filter-car-select">
                <el-select v-model="color" filterable placeholder="Color" clearable :popper-append-to-body="false" :class="{selectedHighBorder:color}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
          </div>
          <div class="third-row row">
             <div class="filter-car-select">
                <el-select v-model="doors" filterable placeholder="Doors" clearable :popper-append-to-body="false" :class="{selectedHighBorder:doors}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
             <div class="filter-car-select">
                <el-select v-model="safetyFeatures" filterable placeholder="Safety Features" clearable :popper-append-to-body="false" :class="{safetyFeatures:cylinders}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
             <div class="filter-car-select">
                <el-select v-model="cylinders" filterable placeholder="Cylinders" clearable :popper-append-to-body="false" :class="{selectedHighBorder:value}">
                  <el-option
                    v-for="item in typeOptionData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                  </el-option>
                </el-select>
            </div>
            <div class="filter-car-input">
              <div class="year-input">
                <div class="input-content filter-car-input-left ">
                  <input type="text" placeholder="min Year" 
                    v-model="minYear" 
                    @input="minYear=minYear.replace(/[^0-9]/g,'')" 
                    :class="{SelectedHighBorder:minYear}"
                  >
                  <span class="close-icon" v-show="minYear" @click="minYear=''"><i class="el-icon-circle-close"></i></span>
                </div>
                <div class="input-content filter-car-input-right">
                  <input type="text" placeholder="max Year" 
                    v-model="maxYear" 
                    @input="macYear=maxYear.replace(/[^0-9]/g,'')" 
                    :class="{SelectedHighBorder:maxYear}"
                  >
                  <span class="close-icon" v-show="maxYear" @click="maxYear=''"><i class="el-icon-circle-close"></i></span>
                </div>
              </div>
            </div>
            <div class="filter-car-input">
              <div class="input-content vin">
                <input type="text" placeholder="VIN" 
                  v-model="vin" 
                  @input="vin=vin.replace(/[^0-9]/g,'')" 
                  :class="{SelectedHighBorder:vin}"
                >
                <span class="close-icon" v-show="vin" @click="vin=''"><i class="el-icon-circle-close"></i></span>
              </div>
            </div>
          </div>
           <div class="filter-clear-more">
          <div class="clear-all" @click='clearAll'>Clear all</div>
          <div class="more-filters" @click="showMoreFiters=!showMoreFiters">
            <span><i class="fas fa-angle-double-down"></i>More filters</span>
          </div>
        </div>
        </div>
      </div>
    </section>
    <section class="filter-car-bar">
      <div class="container">
        <div class="filter-compare-search__key">
          <div class="compare"><i class="fas fa-exchange-alt"></i>Compare</div>
          <div class="search__key" :class="{SelectedHighBorder:keyword}">
            <input type="text" maxlength="25" placeholder="Enter keyword" v-model="keyword"> 
            <div class="keyword-icon">
              <i class="fas fa-search" v-show="!keyword"></i>
              <i class="el-icon-circle-close" v-show="keyword"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="filter-results">
      <div class="container">
        <div class="filter-sort">
          <div class="filter-sort-left">
            <span class="filter-results-num">12</span>
            Results
          </div>
          <div class="filter-sort-right">
            <div class="filter-results-layout">
              <button :class="{buttonHighColor:carlistLayout}" @click="carlistLayout = !carlistLayout"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g transform="translate(-819 -493)"><rect data-name="Rectangle 5" width="9" height="8" rx="3" transform="translate(819 493)" fill="#888e95"></rect> <rect data-name="Rectangle 6" width="9" height="8" rx="3" transform="translate(830 493)" fill="#888e95"></rect> <rect data-name="Rectangle 7" width="9" height="8" rx="3" transform="translate(830 505)" fill="#888e95"></rect> <rect data-name="Rectangle 8" width="9" height="8" rx="3" transform="translate(819 505)" fill="#888e95"></rect></g></svg></button>
              <button :class="{buttonHighColor:!carlistLayout}" @click="carlistLayout = !carlistLayout" class="vehica-inventory-v1__view__button-active"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20"><g id="lista" transform="translate(-830 -493)"><rect data-name="Rectangle 6" width="25" height="8" rx="3" transform="translate(830 493)" fill="#888e95"></rect> <rect data-name="Rectangle 7" width="25" height="8" rx="3" transform="translate(830 505)" fill="#888e95"></rect></g></svg></button>
            </div>
            <div class="filter-sort-select">
              <div class="label">Sort by:</div>
              <div class="filter-car-select">
                <el-select v-model="sortValue" filterable placeholder="Most Relevant" clearable :popper-append-to-body="false">
                    <el-option
                      v-for="item in sortOptionData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      >
                    </el-option>
                  </el-select>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <div class="container">
      <p>Final Page</p>
      <ul>
        <li><NuxtLink to="/new-cars/">Go to /new-cars</NuxtLink></li>
        <li><NuxtLink to="/new-cars/index">Go to /new-cars/index</NuxtLink></li>
        <li><NuxtLink to="/new-cars/make1/">Go to /new-cars/make1/</NuxtLink></li>
        <li><NuxtLink to="/new-cars/make2">Go to /child2</NuxtLink></li>
        <li><NuxtLink to="/new-cars/make/model">Go to /make/model</NuxtLink></li>
      </ul>
        <hr>
      <div class="box">
          <p>嵌套子页面内容区</p>
          <!-- <nuxt-child>标签在父页面组件中相当于是子页面组件的占位符；嵌套中这个不可少 -->
          <nuxt-child keep-alive></nuxt-child>
      </div>
    </div>
    <section class="carlist-loading">
      <div class="container">
        <div :class="{carlistLayout:carlistLayout}">
          <Carlist :carlistLayout="carlistLayout"/>
          <Carlist :carlistLayout="carlistLayout"/>
          <Carlist :carlistLayout="carlistLayout"/>
          <Carlist :carlistLayout="carlistLayout"/>
          <Carlist :carlistLayout="carlistLayout"/>
          <Carlist :carlistLayout="carlistLayout"/>
          <Carlist :carlistLayout="carlistLayout"/>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ExportNewCars',
  // 当前组件对象将要更新前调用, 可以访问this
  // beforeRouteUpdate (to, from, next) {
  //   console.log('',this.getQueryUrl)
  // },
  data() {
    return {
      showMoreFiters:false,
      carlistLayout: false,
      value:'',
      type:'',
      make:'',
      model:'',
      minPrice: '',
      maxPrice:'',
      mileage:'',
      driveType:'',
      fuelType:'',
      features:'',
      transmission:'',
      color:'',
      doors:'',
      safetyFeatures:'',
      cylinders:'',
      minYear:'',
      maxYear:'',
      vin:'',
      keyword:'',
      sortValue:'',
      // value值应该与v-model中的值一致
      type0OptionData: [
        {
          type: "Audi",
          label: `Audi`,
        },
        {
          type: "BMW",
          label: "BMW",
        },
        {
          type: "Bentley",
          label: "Bentley",
        },
        {
          type: "Porsche",
          label: "Porsche",
        },
        {
          tyep: "Cadillac",
          label: "Cadillac",
        },
      ],
      sortOptionData: [
        {
          value:'Relevant',
          label: 'Most Relevant'
        },
        {
          value:'Newest',
          label: 'Date list: Newest'
        },
        {
          value:'lowestPrice',
          label: 'Price: Lowest'
        },
        {
          value:'highestPrice',
          label: 'Price: Highest'
        },
        {
          value:'lowestMileage',
          label: 'Mileage: Lowest'
        },
        {
          value:'highestMileage',
          label: 'Mileage: Highest'
        },

      ],
      typeOptionData: [
        {
          value: "Audi",
          label: `Audi`,
        },
        {
          value: "BMW",
          label: "BMW",
        },
        {
          value: "Bentley",
          label: "Bentley",
        },
        {
          value: "Porsche",
          label: "Porsche",
        },
        {
          value: "Cadillac",
          label: "Cadillac",
        },
      ],
    };
  },
  computed: {
    breadData(){
      return [
        this.$route.name,
        this.make,
        this.model
      ]
    },
    getQueryUrl(){
      // if(this.make && this.model) return;
      let param = {
        'type': this.type,
        'price-from': this.minPrice,
        'price-to': this.maxPrice,
        'mileage': this.mileage,
        'drive-type': this.driveType,
        'fuel-type': this.fuelType,
        'features': this.features,
        'transmission': this.transmission,
        'color': this.color,
        'door': this.doors,
        'safety-features': this.safetyFeatures,
        'cylinders': this.cylinders,
        'year-from': this.minYear,
        'year-to': this.maxYear
      }
      let paramStr = ''
      let route = ''
      let defaultParamStr = 'current-page=1&sort-by=newest'
      Object.keys(param).forEach((item,index) => {
        if(!param[item] == ''){
          paramStr += item +'='+ param[item] + '&'
        }
      })
      if(!this.make == ''){
        route = `/${this.make}${this.model == '' ? '/?' : '/' + this.model + '/?'}`
      }else{
        paramStr = '/?' + paramStr
      }
      console.log('testRoute:',route)
      return route + paramStr + defaultParamStr
    }
  },
  methods: {
    getSelectVal(value){
      console.log('------------urlparam---------',this.getQueryUrl)
      console.log('目前选中的值是：',value)
      this.$router.push(`/new-cars${this.getQueryUrl}`)
      // this.$router.push({path: '/new-cars/',query:param})
    },
    clearModel(){
      this.model = ''
    },
    clearAll(){
      this.type=""
      this.make=""
      this.model=""
      this.minPrice= ''
      this.maxPrice=""
      this.mileage=""
      this.driveType=""
      this.fuelType=""
      this.features=""
      this.transmission=""
      this.color=""
      this.doors=""
      this.safetyFeatures=""
      this.cylinders=""
      this.minYear=""
      this.maxYear=""
      this.vin=""
    },
    deconstructUrl(){
      this.type =  this.$route.query.type == undefined || null ? '' : this.$route.query.type,
      this.make = this.$route.params.make == undefined || null ? '' : this.$route.params.make,
      this.model = this.$route.params.model == undefined || null ? '' : this.$route.params.model
      // this.minPrice =  this.$route.query.minPrice,
      // this.maxPrice =  this.$route.query.maxPrice,
      // this.mileage =  this.$route.query.mileage,
      // this.driveType =  this.$route.query.driveType,
      // this.fuelType =  this.$route.query.fuelType,
      // this.features =  this.$route.query.features,
      // this.transmission =  this.$route.query.transmission,
      // this.color =  this.$route.query.color,
      // this.door =  this.$route.query.doors,
      // this.safety-features =  this.$route.query.safetyFeatures,
      // this.cylinders =  this.$route.query.cylinders,
      // this.minYear =  this.$route.query.minYear,
      // this.maxYear =  this.$route.query.maxYear
    },
    changeFilter(value){
      
    }
  },  
  
  mounted() {
    console.log('随机改变的url为: ',this.getQueryUrl)
    this.deconstructUrl()
  },


};
</script>

<style lang="scss" scoped>
.SelectedHighBorder{
  border-color: var(--primary) !important;
}
.carlistLayout{
  display: flex;
  flex-wrap: wrap;
}

.el-icon-circle-close{
  color: var(--primary);
}

.filter-car-items{
  background-color: #F2F5FB;
  padding: 30px 0;
  .filter-list{
    display: flex;
    flex-direction: column;
    position:relative;
        transition: all .3s ease;
    .row{
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      .price-input,.year-input{
        display: flex;
        width: 100%;
      }
      .filter-car-input{
        width: 20%;
        padding: 0 6px;
        input{
          padding: 10px 27px 10px 27px;
          min-height: 51px;
          margin: 0;
          font-size: 14px;
          line-height: 16px;
          width: 100%;
          color: var(--primary);
          font-weight: 900;
          border: 1px solid #DCDFE6;
        }
        .input-content{
          position: relative;
          .el-icon-circle-close{
            position: absolute;
            right: 10px;
            top: 35%;
          }
        }
        .filter-car-input-left{
          input{
            border-radius: 10px 0 0 10px;
          }
        }
        .filter-car-input-right{
          input{
            border-radius: 0 10px 10px 0;
          }
        }
        .vin{
          width: 100%;
          input{
            border-radius: 10px;
          }
        }
      }
    }
    .filter-clear-more{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 6px 6px 0;
    width: 100%;
    height: 30%;
    position: absolute;
    bottom: 6px;
    background: #F2F5FB;
    transition: all .3s ease;
    div{
      cursor: pointer;
      transition: all .3s ease;
      &:hover{
        color: var(--primary);
      }
    }
    .more-filters{
      padding-left: 30px;
      i{
        padding-right: 10px;
        color: var(--primary);
      }
    }
    }
  }
  .showMoreFilters{
    margin-bottom: 50px;
    .filter-clear-more{
      bottom: -50px !important;
    }
  }
}
.filter-results{
  .filter-sort{
    padding: 37px 30px 46px 30px;
    display: flex;
    justify-content: space-between;
    .filter-sort-left{
      font-size: 30px;
      line-height: 53px;
      font-weight: 900;
    }
    .filter-sort-right{
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-height: 53px;
      .filter-results-layout{
        margin-right: 60px;
        button{
          padding-right: 20px;
          background-color: #fff;
          transition: all .3s ease-in-out;
          &:hover *{
            fill: var(--primary);
          }
        }
        .buttonHighColor *{
          fill: var(--primary);
        }
      }
      .filter-sort-select{
        display: flex;
        align-items: center;
        .label{
          font-size: 15px;
          font-weight: 500;
          width: 90px;
        }
        .filter-car-select{
          width: 100%;
        }
      }
    }
  }
}

</style>

<style lang="scss">
.filter-car-select{
  width: 20%;
  padding: 0 6px;
  .el-select{
    width: 100%;
    box-shadow: 1px 1px 0 0 rgbg(196 196 196 / 24%);
    background: #fff;
    border-radius: 10px;
  }
  .el-input--suffix .el-input__inner{
    padding: 10px 0 10px 27px;
    min-height: 51px;
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    width: 100%;
    color: var(--primary);
    font-weight: 900;
    border-radius: 10px;
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus{
    color: var(--primary);
    font-weight: 900;
  }
  .el-select .el-input__inner:focus{
    border-color: var(--primary);
  }
  .el-icon-circle-close:before{
    color: var(--primary);
    font-size: 16px;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
    color: var(--primary);
  }
  .el-select-dropdown.el-popper{
    top: 45px !important;
  }
  .el-select-dropdown__item.selected{
    color: var(--primary);
  }
  .el-input.is-focus .el-input__inner,.selectedHighBorder .el-input--suffix .el-input__inner{
    border-color: var(--primary);
  }
}
.filter-car-bar{
  color:#f2f5fb;
  background-color: #F2F5FB;
  border-bottom: 1px solid #e7e9ee;
  border-top:1px solid #e7e9ee;
  .filter-compare-search__key{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 22px 0;
    .compare{
      color: #2f3b48;
      font-size: 19px;
      font-weight: 600px;
      margin-right: 27px;
      transition: all .3s ease-in-out;
      cursor: pointer;
      i{
        padding-right: 10px;
      }
      &:hover{
        color: var(--primary);
      }
    }
    .search__key{
      display: flex;
      color: #2f3b48;
      background: #fff;
      border-radius: 10px;
      border: 1px solid #fff;
      input{
        border-radius: 10px;
        height: 51px;
        padding-left: 26px;
        font-size: 17px;
        &::placeholder{
          color: #8B929B !important;
          font-weight: 400;
          font-size: 17px;
        }
      }
      .keyword-icon{
        padding: 4px 10px 0 40px !important;
        display: flex;
        align-items: center;
        border-top-right-radius: 10px;
        i{
          
        }
      }
    }
  }
}
</style>