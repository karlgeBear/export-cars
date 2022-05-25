## 1.为sass配置全局变量和混合等等
- npm install @nuxtjs/style-resources -D
```
nuxt.config.js
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources' // 在所有样式文件中共享变量、mixin、函数（@import不需要）
  ],
  styleResources: {
    scss: [
      'assets/sass/global.scss' // 全局 scss 变量
    ]
  },
```
## 2.开始思考class的命名中的连接用 驼峰式 or '-' or '_'
1. 三中均符合W3C命名规范
2. 但网上不太建议使用'_',有某些(已授权，旧的，NS4型)浏览器中的类名或ID不允许下划线。
3. 那么
    1.长名称或词组可以使用中横线来为选择器命名。
    2.不建议使用“_”下划线来命名CSS选择器。
    3.css用中划线，js用驼峰。
## 3. 不导入componets,直接在页面以及组件使用，发现问题
1. 在componets文件夹下的文件的命名一定要是驼峰式，否则在全局使用不了该组件
## 4. 静态文件放在static和assetsm目录的区别：
1. static:
   1. 该目录下的文件是不会被wabpack处理的，它们会被直接复制到最终的打包目录下面（默认是 dist/static ），且必须使用绝对路径来引用这些文件
   2. 这是通过在 config.js 文件中的 build.assetsPublicPath 和 build.assetsSubDirectory 链接来确定的
   3. <font color="red">注意:</font>任何放在 static 中的文件需要以绝对路径的形式引用：/static/[filename]
2. assets:
   1. Nuxt服务器启动的时候，该目录下的文件会映射至应用的根路径/下，像robots.txt或sitemap.xml这种类型的文件就很适合好放到中
   2. 经过webpack打包编译，webpack使用的是CommonJs规范，在动态绑定中，assets中路径中的图片会加载失败，所以要使用require
   3. ```
//   HTML  结构

<div class="myDemo">
    //   直接显示文件内容
    <h5>直接路径</h5>
    
    <img src="../assets/logo.png" title="assets中的图片">
    <img src="/static/logo.png" title="static中的图片">
    
    //   动态显示文件内容
    <h5>动态路径</h5>
    
    <img :src="asetUrl" title="assets中的图片">
    <img :src="sticUrl" title="static中的图片">
    
</div>

//   JS  

export default {
    name: 'myDemo',
    data (){
      return {
        asetUrl: require('../assets/logo.png'),
        sticUrl: '/static/logo.png'
    }
}````
3. 区别：
   1. 关键区别是是否需要webpack打包，打包后项目结构会变化
   2. 建议Static中放一些第三方(如robots.txt,stiemap.xml等等)，自己文件放在assets（例如自己写的js,css,字体文件，图片都放到assets）
   3. 理解：assets文件夹下是页面和组件中用到的静态资源，比如公共样式文件，字体图标文件，图片等。放在assets中的文件会进行压缩体积、代码格式化，压缩后会放置在static中一同上传服务器。因此建议样式文件放在assets中进行打包，引入的第三方文件放到static中，因为引入的文件已经做过打包处理。使用assets下面的资源，在js中使用的话，路径要经过webpack中file-loader编译，路径不能直接写。static中的文件，不会经过编译。项目在经过打包后，会生成dist文件夹，static中的文件只是复制一遍而已
# element-ui踩坑系列
## el-select
1. 改变css样式，为了