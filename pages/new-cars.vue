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
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
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
</style>