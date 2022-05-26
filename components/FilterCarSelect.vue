<template>
  <div class="filter-car-select">
      <el-select v-model="value" filterable :placeholder="title" clearable :popper-append-to-body="false" :class="{selectedHighBorder:value}">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          >
        </el-option>
      </el-select>
  </div>
</template>

<script>
export default {
  name: 'FilterCarSelect',
  props:{
    title: String,
    options: Array
  },
  data() {
    return {
      value: ''
    };
  },

  mounted() {

  },

  methods: {
    
  },
};
</script>

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