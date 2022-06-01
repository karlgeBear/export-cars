<template>
  <div class="bread-nav">
    <div class="container">
      <el-breadcrumb separator="-" >
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in breadData" :key="index" :to="item.path" >{{item.name}}</el-breadcrumb-item>
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
      this.parseBreadUrl()
      console.log('路由监听',this.breadData)
    }
  },
  computed: {

  },

  mounted() {
    this.parseBreadUrl()
    console.log('路由匹配：', this.breadData,this.$route.matched,this.$route)
  },

  methods: {
    parseBreadUrl(){
      if(JSON.stringify(this.$route.params) == '{}'){
        this.breadData = [{path:this.$route.path,name:this.$route.name}]
        return
      };
      let path = this.$route.path
      let singleParams = ''
      this.breadData= path.split('/').map((item,index) => {
        singleParams += item + '/'
        return {path:singleParams,name:item}
      }).filter((item) => {
        return item.name != ''
      })
    }
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