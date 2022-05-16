<template>
  <div class="navDIY">
    <div class="nav-PC">
      <div class="nav" v-show="navshow">
        <div class="nav-left">
          <div class="nav-logo">
            <img src="~assets/imgs/vehica-logo-white.png" alt="logo">
          </div>
          <div class="nav-menu">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><a href="" title="Home">Home</a></el-menu-item>
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
            <span class="user-icon"><i class="far fa-user"></i></span>
            <span class="login-text">Login in</span>
          </div>
          <div class="add-listing">
            <span class="add-listing-icon"><i class="add fa-plus"></i></span>
            <span class="add-listing-text">Add listing</span>
          </div>
        </div>
      </div>
      <transition name="slide-nav">
      <div class="nav-scrolldown-show" v-show="!navshow">
        <div class="nav-left">
          <div class="nav-logo">
            <img src="~assets/imgs/vehica-logo-dark.png" alt="logo">
          </div>
          <div class="nav-menu">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><a href="" title="Home">Home</a></el-menu-item>
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
            <span class="user-icon"><i class="far fa-user"></i></span>
            <span class="login-text">Login in</span>
          </div>
          <div class="add-listing">
            <span class="add-listing-icon"><i class="add fa-plus"></i></span>
            <span class="add-listing-text">Add listing</span>
          </div>
        </div>
      </div>
      </transition>
    </div>
    <button @click.stop="navshow=!navshow" style="margin-top:888px">test</button>
  </div>
</template>

<script>
export default {
  name: 'ExportCarsNav',

  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      navshow: true,
      isAddLis: true
    };
  },

  mounted() {
    window.addEventListener('scroll',this.navScroll);
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    navScroll(){
        // let time = setTimeout(()=>{
        //   this.isAddLis = true
        // },1000)
      // if(!this.navshow) return;
      let scroll_height = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
      if(scroll_height<=0){
        this.navshow = true
        this.isAddLis = true
        return
      }
      if(this.isAddLis){
        if(scroll_height !== 0){
          this.navshow = false
          console.log('slideDown:',scroll_height)
          this.isAddLis = false
        }
      }
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
    position: relative;
    .nav-scrolldown-show{
      position: fixed;
      width: 100%;
      top:0;
      left: 0;
      right: 0;
      padding:0 30px;
      box-shadow: 0 2px 7px 0 rgba(196,196,196,0.34);
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-nav-enter-active {
      top: 0;
      transition: top .3s ease;
    }
    .slide-nav-leave-active {
      transition: top .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-nav-enter, .slide-nav-leave-to{
      top: -100px;
    }
    .nav,.nav-scrolldown-show{
      display: flex;
      justify-content: space-between;
      height: 100px;
      align-items: center;
      .nav-left{
        display: flex;
        align-items: center;
        .nav-logo img{
          max-height: 32px;
          height: 32px;
        }
      }
      .nav-right{
        display: flex;
        align-items: center;
        .login-in{
          margin-right: 20px;
          .far{
            color: $theme-color;
          }
          .login-text{
            padding-left: 15px;
          }
        }
        .add-listing{
          border: 1px solid $theme-color;
          border-radius: 5px;
          padding: 13px 20px;
          font-family: "Font Awesome 5 Free" !important;
          font-weight: 900 !important;
          .add-listing-text{
            padding-left: 10px;
          }
        }
      }
    }
    
  }
}
</style>
<style lang="scss">
.el-menu--horizontal>.el-menu-item{
  font-size: 16px;
  margin: 0 25px;
  padding: 0 8px;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  color: $theme-color;
}
.el-menu--horizontal>.el-submenu:hover .el-submenu__title{
  color: $theme-color;
}
.el-menu--horizontal>.el-submenu .el-submenu__title{
  font-size: 16px;
}
.el-menu--popup-bottom-start{
  display: block !important;
  border: 1px solid #e9eaee;
  color: #0f141e;
  font-size: 16px;
  min-width: 244px;
  border-radius: 10px;
  padding: 10px 0;   
  padding-bottom: 15px;
  background-color: #FFF;
}
.el-menu--popup-bottom-start::before{
  content: '';
  width: 0;
  height: 0;
  border-bottom: 10px solid #FFF;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  top: -10px;
  left: 30px;
}
.el-menu--horizontal .el-menu .el-menu-item{
  font-size: 17px;
  line-height: 22px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-weight: 600;
  color: rgb(15, 20, 30);
  border-bottom: 1px solid #e9eaee;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: 1px solid $theme-color !important;
}
</style>