<template>
  <div class="new-cars">
    <Nav :diyrate="2" :diynavbg="1"/>
    <BreadNav />
    <div class="filter-car">
      <div class="container">
        <div class="first-row row">
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <div class="filter-car-input">
            <div class="price-input">
              <div class="input-content filter-car-input-left ">
                <input type="text" placeholder="min Price" v-model="minPrice" oninput="value=value.replace(/[^0-9]/g,'')">
                <span class="close-icon"><i class="el-icon-circle-close"></i></span>
              </div>
              <div class="input-content filter-car-input-right">
                <input type="text" placeholder="Max Price" v-model="maxPrice">
              </div>
            </div>

          </div>
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
        </div>
        <div class="second-row row">
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
        </div>
        <div class="third-row row">
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
          <FilterCarSelect :title="`type`" :options="typeOptionData" />
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
      minPrice: '',
      maxPrice:'',
      minYear:'',
      maxYear:'',
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

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.filter-car{
  background-color: #F2F5FB;
  padding: 30px 0;
  .container{
    display: flex;
    flex-direction: column;
    .row{
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
      .price-input{
        display: flex;
        width: 95%;
      }
      .filter-car-input{
        width: 20%;
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
            right: 0;
            top: 35%;
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
        }

      }
    }
  }
}
</style>
<style lang="scss">
.filter-car-input{
  .el-input--suffix{
    .el-input__inner{
    padding: 10px 27px 10px 27px;
    min-height: 51px;
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    width: 100%;
    color: var(--primary);
    font-weight: 900;
    
    }
    &:first-child .el-input__inner{
      border-radius: 10px 0 0 10px;
    }
    &:last-child .el-input__inner{
      border-radius: 0 10px 10px 0;
    }
  }
  .el-input.is-active .el-input__inner, .el-input__inner:focus{
    border-color: var(--primary);
  }
  .selectedHighBorder .el-input__inner{
    border-color: var(--primary);
  }
  .el-icon-circle-close:before{
    color: var(--primary);
    font-size: 16px;
    margin-top: -2px;
  }
}
</style>