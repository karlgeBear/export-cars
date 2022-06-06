## 1.配置文件
1. eslint怎么玩的？

## 2.总结博客meta之详解
- 参考文章:
  - <a href="http://gaocarri.top/post/%E8%AF%A6%E8%BF%B0meta%E6%A0%87%E7%AD%BE/#meta%E6%A0%87%E7%AD%BE%E7%9A%84%E5%B1%9E%E6%80%A7%E5%88%86%E7%B1%BB">详述meta标签</a>
- name属性
  - apple-mobile-web-app-capable
  - 删除默认的苹果工具栏和菜单栏。
  - 需要显示工具栏和菜单栏时，不需要添加，默认值为no，即正常显示。如果content设置为yes，Web应用会以全屏模式运行，可以通过只读属性window.navigator.standalone来确定网页是否以全屏模式显示
 ```
 <meta content="no" name="apple-mobile-web-app-capable">
 ```