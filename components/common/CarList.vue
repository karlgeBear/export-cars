<template>
  <div class="car-list">
    <CommonCard :carListData="carListData" :cardW="cardW"></CommonCard>
  </div>
</template>

<script>
export default {
  name: 'CarList',
  data() {
    return {
      
    };
  },
  props:{
    carListData:[Array,Object],
    cardW:String
  },
  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>