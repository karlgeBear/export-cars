## body-parser
      是一个HTTP请求体解析的中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体
## res.header
```res.header('Access-Control-Allow-Credentials', true);```
- Access-Control-Allow-Credentials:服务器用来设置是否允许前端携带Cookies的标志位
- withCredentials: 前端用来表示是否给服务器发请求的时候带上Cookies的标志位
- 注意：
  - 前端向服务器发球请求并且携带Cookies那么需要设置Access-Control-Allow-Credentials: true
  - 对于附带身份凭证的请求，服务器不得设置 Access-Control-Allow-Origin 的值为“ * ”。这是因为请求的首部中携带了 Cookie 信息，如果 Access-Control-Allow-Origin 的值为“ * ”，请求将会失败