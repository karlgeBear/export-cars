<template>
  <div class="pk-card">
    <a href="#">
      <img src="#" alt="pk-car">
      <div class="right">
        <div class="title">奥迪 S6</div>
        <div class="price-range pk">
          <span class="highColor">79.65 - 1236</span>
          <button>pk</button>
        </div>
        <div class="competitiveness">
          竞争力指数 <span>7.14</span> 分
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'PkCard',

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
.pk-card{
  width: 100%;
  a{
    display: inline-block;
    border-radius: 10px;
  }
}
</style>