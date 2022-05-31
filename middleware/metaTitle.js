// 将页面的meta取出来放到route中存起来
export default ({store, route, redirect}) => {
  route.matched.forEach((item, index) => {
      item.meta.title = route.meta[index].title || '';
  })
}