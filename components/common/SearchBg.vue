<template>
  <div class="search__box">
    <slot name="title"></slot>
    <div class="filter">
      <slot name="car-type"></slot>
      <div class="filter-method">
        <div class="filter__box">
          <slot name="elIconS"></slot>
          <slot name="select1"></slot>
          <slot name="input"></slot>
          <button class="btn"><i class="fa-search"></i></button>
        </div>
        <div class="filter-opacity-border"></div>
      </div>
      <div class="some-filter-car-condition">
        <slot name="type"></slot>
        <slot name="select2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBg',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.search__box {
  color: #fff;
  .filter {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
    .filter-method {
      position: relative;
      z-index: 10;
      .filter__box {
        padding: 15px;
        background-color: #ffffff;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn {
          width: 57px;
          height: 53px;
          background-color: var(--primary);
          border-radius: 10px;
          i {
            font-family: "Font Awesome 5 Free";
            font-weight: 600;
            color: #ffffff;
          }
        }
      }
      .filter-opacity-border {
        content: "";
        display: block;
        position: absolute;
        bottom: -9px;
        left: 0;
        background: #fff;
        width: 100%;
        height: 50%;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        opacity: 0.59;
        z-index: -1;
      }
    }

    .some-filter-car-condition {
      margin-top: 80px;
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>