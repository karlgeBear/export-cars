<template>
  <div class="default">
    <nuxt/>
  </div>
</template>

<script>
export default {
  // mounted(){
  //   let scroollAction = {
  //     y: null
  //   }
  //   var _that = this;
  //   // 滚动监听
  //   $(window).scroll(function () {
  //     var scrollTopNum = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
  //     // 判断页面滚动方向
  //     if (scrollTopNum > 100) {
  //       if (!scroollAction.y) {
  //         scroollAction.y = scrollTopNum
  //       }
  //       let diffY = scroollAction.y - scrollTopNum
  //       let isShowMyAndLang = _that.$store.state.isShowMyAndLang
  //       if (diffY > 0) {
  //         if (!isShowMyAndLang) {
  //           _that.$store.commit('setShowMyAndLang',true)
  //           // _that.isShowFixedTop = true
  //         }

  //       } else if (diffY < 0) {
  //         if (isShowMyAndLang) {
  //           _that.$store.commit('setShowMyAndLang',false)
  //           // _that.isShowFixedTop = false
  //         }
  //       }
  //       scroollAction.y = scrollTopNum
  //     }
  //   });
  // }
}
</script>
<style>
html {
  font-family: Helvetica,sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

@media screen and (min-width: 1023px) {
  .default {
    padding-top: 70px;
  }
}
@media screen and (min-width: 320px) and (max-width: 1023px) {
  .default {
    padding-bottom: 48px;
  }
}
</style>