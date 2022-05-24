<template>
  <div class="filter-car-select">
    <div class="container">
      <el-select v-model="value" filterable :placeholder="title">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

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
    console.log('test: ',this.props)
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>