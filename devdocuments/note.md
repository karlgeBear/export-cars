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