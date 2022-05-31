## 1. create.buxt.app 4.0.0
- 建立文件夹与文件
  - assets
    - 放sass文件做需要全局引入的变量，比如各种颜色要在各个组件中使用(在nuxt.config.js中配置)
    - 放一些静态文件
    - font文件是来自https://fontawesome.com/icons上的icon
    - middleware
      - 路由切换之前也就是进入页面前运行的自定义函数。可以在三个位置设置中间件，执行顺序如下：
        1. 全局设置nuxt.config.js
        2. layouts 文件的 middleware 属性
        3. pages 文件的 middleware 属性
  - layouts
  - sever
  - .eslintrc.js
## 2. 配置文件nuxt.config
- 静态文件打包配置
## 3. package.json
- eslint
- sass
- express
- 配置本地运行端口号
  ```
  方式1 nuxt.config.js
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  方式2 package.json
  "config": {
  "nuxt": {
    "host": "127.0.0.1",
    "port": "8888"
  }
 }
  ```
## 4. 在layouts进行页面布局
- default.vue
## 5. 路由配置
- 
## 10. 一些优化的提前操作
- 图片懒加载
- 路由懒加载
