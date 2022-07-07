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
  font-family: 'Muli', Arial,Helvetica,sans-serif !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body, textarea, input, button{
  font-family:'Muli', Arial,Helvetica,sans-serif!important;
}
h1, h2, h3, h4, h5, h6{
  font-family:'Muli', Arial,Helvetica,sans-serif
}
:root{
  --primary:#ff4605;
  --primary-light:#fff0eb;
  --bg:#EFF3FA;
  --lightgray:#EAEBED;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.highColor{
  color: var(--primary);
}
button,.btn,a{
  cursor: pointer;
}
.text-click{
  text-decoration: underline;
  color: var(--primary);
  cursor: pointer;
  background-color: #ffffff;
}
img{
  width: 100%;
}
.el-select input::placeholder{
  font-size: 16px;
  color: #2f3b48 !important;
  font-weight: 600;
}
.el-input input::placeholder{
  font-size: 16px;
  color: #909399 !important;
}
.el-input--suffix .el-input__inner {
    padding: 10px 0 10px 27px;
    min-height: 51px;
    margin: 0;
    font-size: 14px;
    line-height: 16px;
    width: 100%;
    color: var(--primary);
    font-weight: 900;
    border-radius: 10px;
}
.el-select .el-input__inner:focus {
  border-color: var(--primary);
}
.el-input.is-active .el-input__inner, .el-input__inner:focus{
  color: var(--primary);
  font-weight: 900;
}
.el-input.is-focus .el-input__inner,
.selectedHighBorder .el-input--suffix .el-input__inner,
.el-select-dropdown__item.selected,
.el-select .el-input.is-focus .el-input__inner,
.el-select .el-input__inner:focus{
  border-color: var(--primary);
}
@media screen and (min-width: 1023px) {
  .default {
    padding-top: 100px;
  }
  .container{
    max-width: 1468px;
    margin: auto;
    padding-left: 30px;
    padding-right: 30px;
  }
  .test{
    font-size: 36px;
    text-align: center;
    color: var(--primary);
  }
}
@media screen and (min-width: 320px) and (max-width: 1023px) {
  .default {
    padding-bottom: 48px;
  }
}
</style>