<template>
  <div class="navDIY">
    <div class="nav-PC">
      <div class="nav" v-show="navshow" :class="{navbg:diynavbg==1}">
        <div class="nav-left">
          <div class="nav-logo">
            <img src="~assets/imgs/vehica-logo-white.png" alt="logo">
          </div>
          <div class="nav-menu">
            <ul class="nav-menu-list">
              <li class="nav-menu-item"><NuxtLink to="/" title="Home" class="nav-link" :class="{selected:diyrate==1}">Home</NuxtLink></li>
              <li class="nav-menu-item"><NuxtLink to="/used-cars" title="used-cars" class="nav-link" :class="{selected:diyrate==2}">Used car</NuxtLink></li>
              <li class="nav-menu-item"><NuxtLink to="/new-cars" title="new-cars" class="nav-link" :class="{selected:diyrate==3}">New car</NuxtLink></li>
              <li class="nav-menu-item"><NuxtLink to="/blog" title="blog" class="nav-link" :class="{selected:diyrate==4}">Blog</NuxtLink></li>
              <li class="nav-menu-item"><NuxtLink to="/contact" title="contact" class="nav-link" :class="{selected:diyrate==5}">Contact</NuxtLink></li>
            </ul>
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
            <ul class="nav-menu-list">
              <li class="nav-menu-item"><NuxtLink to="/" title="Home" class="nav-link" :class="{selected:diyrate==1}">Home</NuxtLink></li>
              <li class="nav-menu-item"><NuxtLink to="/used-cars" title="used-cars" class="nav-link" :class="{selected:diyrate==2}">Used car</NuxtLink></li>
              <li class="nav-menu-item"><NuxtLink to="/new-cars" title="new-cars" class="nav-link" :class="{selected:diyrate==3}">New car</NuxtLink></li>
              <li class="nav-menu-item"><NuxtLink to="/blog" title="blog" class="nav-link" :class="{selected:diyrate==4}">Blog</NuxtLink></li>
              <li class="nav-menu-item"><NuxtLink to="/contact" title="contact" class="nav-link" :class="{selected:diyrate==5}">Contact</NuxtLink></li>
            </ul>
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
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props:['diynavbg','diyrate'],
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
  .nav-PC{
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1000;
    .navbg{
      background-color: #0F141E;
    }
    .nav,.nav-scrolldown-show{
      display: flex;
      justify-content: space-between;
      height: 100px;
      align-items: center;
      padding: 0 30px;
      .nav-left{
        display: flex;
        align-items: center;
        .nav-menu-list{
          display: flex;
          align-items: center;
          height: 70px;
          margin-left: 30px;
          .nav-menu-item{
            color: #FFF;
            margin: 0 30px;
            position: relative;
          }
          .selected{
            color: var(--primary);
            &::after{
              content: '';
              width: 100%;
              height: 2px;
              position: absolute;
              bottom: -15px;
              left: 0;
              border:1px solid var(--primary);
            }
          }
        }
        .nav-logo{
          img{
            max-height: 32px;
            height: 32px;
          }
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
          cursor: pointer;
          transition: all .3s ease;
          &:hover{
            background-color: var(--primary);
          }
          .fa-plus:before{
            font-weight: 600;
          }
          .add-listing-text{
            padding-left: 10px;
          }
        }
      }
    }
    .nav{
      .nav-link{
        font-weight: 600;
      }
      .add-listing,.login-text{
        color: #fff;
      }
    }
    .nav-scrolldown-show{
      position: fixed;
      width: 100%;
      top:0;
      left: 0;
      right: 0;
      padding:0 30px;
      box-shadow: 0 2px 7px 0 rgba(196,196,196,0.34);
      background-color: #fff;
      height: 70px !important;
      .nav-menu-item{
        color: #222732 !important;
      }
      .nav-link{
        font-weight: 600;
      }
      .add-listing{
        color: var(--primary);
      }
    }
    /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-nav-enter-active {
      top: 0;
      transition: top .3s ease-in-out;
    }
    .slide-nav-leave-active {
      transition: top .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-nav-enter, .slide-nav-leave-to{
      top: -100px;
    }
    
  }
}
</style>
<style lang="scss">

</style>