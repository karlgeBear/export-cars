<template>
  <div class="navDIY">
    <div class="nav-PC">
      <div class="nav">
        <div class="nav-left">
          <div class="nav-logo">
            <img src="" alt="logo">
          </div>
          <div class="nav-menu">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">Home</el-menu-item>
              <el-menu-item index="2">Search</el-menu-item>
              <el-submenu index="3">
                <template slot="title">Pages</template>
                <el-menu-item index="3-1">Our team</el-menu-item>
                <el-menu-item index="3-2">Our team - advanced</el-menu-item>
                <el-menu-item index="3-3">Sold</el-menu-item>
                <el-menu-item index="3-3">Loan Calculator</el-menu-item>
                <el-menu-item index="3-3">FAQ</el-menu-item>
                <el-menu-item index="3-3">About us</el-menu-item>
              </el-submenu>
              <el-menu-item index="4">Blog</el-menu-item>
              <el-menu-item index="5"><a href="https://www.ele.me" target="_blank">Contact</a></el-menu-item>
            </el-menu>
          </div>
        </div>
        <div class="nav-right">
          <div class="login-in">
            <i class="user-icon"></i>
            <div class="login">Login in</div>
          </div>
          <div class="add-listing">Add listing</div>
        </div>
      </div>
      <div class="nav-scrolldown-show">

      </div>
    </div>
    <h1>Welcome to the 17ziti www.17ziti.com</h1>
  </div>
</template>

<script>
export default {
  name: 'ExportCarsNav',

  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },

  mounted() {
    
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
};
</script>

<style lang="scss" scoped>
.navDIY{
   position: absolute;
   top:0;
   width: 100%;
   padding: 0 30px;
   height: 100px;
  .nav-PC{
    .nav{
      display: flex;
      justify-content: space-between;
      height: 100px;
      align-items: center;
      .nav-left{
        display: flex;
        .nav-logo{
          width: 230px;
        }
      }
      .nav-right{
        display: flex;
        .add-listing{
          padding-left: 20px;
        }
      }
    }
    
  }
}
</style>
<style lang="scss">
h1{
  font-family: 'Muli';
}
.el-menu-item{
  font-size: 16px;
  margin-left: 25px;
  &:hover{
    color: $theme-color !important;
  }
}
.el-menu--horizontal>.el-submenu:hover .el-submenu__title{
  color: $theme-color;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
  font-size: 16px;
}
</style>