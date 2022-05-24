<template>
  <div class="bread-nav">
    <div class="container">
      <el-breadcrumb separator="-">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in breadData" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExportCarsBreadNav',
  data() {
    return {
      breadData: []
    };
  },
  watch: {
    $route(){
      this.breadData = this.$route.matched.map((item) => {
        return {name:item.name,path:item.path}
      })
    }
  },

  mounted() {
    this.breadData=this.$route.matched.map((item) => {
      return {name:item.name,path:item.path}
    })
    console.log('路由匹配：', this.breadData)
  },

  methods: {
    
  },
};
</script>

<style>
.el-breadcrumb{
  padding-top: 17px;
  padding-bottom: 17px;
}
.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
    color: black;
    cursor: pointer;
}
.el-breadcrumb__item{
  font-size: 16px;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  color: #a7a8a8;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner, 
.el-breadcrumb__item:last-child .el-breadcrumb__inner a, 
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, 
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: var(--primary);
}
</style>