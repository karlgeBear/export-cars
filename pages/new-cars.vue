<template>
  <div class="new-cars">
    <Nav :diyrate="2" :diynavbg="1"/>
    <BreadNav />
    <div class="filter-car">
      <div class="container">
        <div class="filter-list">
          <div class="first-row row">
              <div class="filter-car-select">
                <el-select v-model="type" filterable placeholder="Type" clearable :popper-append-to-body="false" :class="{selectedHighBorder:type}">
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
                <el-select v-model="make" filterable placeholder="Make" clearable :popper-append-to-body="false" :class="{selectedHighBorder:make}">
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
                <el-select v-model="model" filterable placeholder="Model" clearable :popper-append-to-body="false" :class="{selectedHighBorder:model}">
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
        </div>
        <div class="filter-clear-more" :class="{showMoreFilers:showMoreFiters}">
          <div class="clear-all" @click='clearAll'>Clear all</div>
          <div class="more-filters" @click="showMoreFiters=!showMoreFiters">
            <span><i class="fas fa-angle-double-down"></i>More filters</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ExportCarsNewCars',
  data() {
    return {
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
      showMoreFiters:false,
      typeOptionData: [
        {
          value: "1",
          label: `Audi`,
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
      ]
    };
  },

  methods: {
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
    }
  },  
  
  mounted() {
    
  },


};
</script>

<style lang="scss" scoped>
.SelectedHighBorder{
  border-color: var(--primary) !important;
}
.showMoreFilers{
  bottom: -50px !important;
}

.filter-car{
  background-color: #F2F5FB;
  padding: 30px 0;
  .container{
    position:relative;
  }
  .filter-list{
    display: flex;
    flex-direction: column;
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
            color: var(--primary);
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
  }
  .filter-clear-more{
    display: flex;
    justify-content: flex-end;
    padding: 6px 6px 0;
    width: 96%;
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
</style>