### 1. 创建独特且准确的网页标题
1. &#60;title&#62; 元素可告诉用户和搜索引擎特定网页的主题是什么。请将 &#60;title&#62; 元素放在 HTML 文档的 &#60;head&#62; 元素中，并为您网站上的每个网页创建独一无二的标题文字。
```
<html>
<head>
    <title>Brandon's Baseball Cards - Buy Cards, Baseball News, Card Prices</title>
    <meta name="description" content="Brandon's Baseball Cards provides a large selection of
    vintage and modern baseball cards for sale.
    We also offer daily baseball news and events.">
</head>
<body>
...
```
2. &#60;title&#62;内容文字建议
   1. 准确描述网页内容
   2. 为每个网页创建独一无二的 &#60;title&#62; 元素
   3. 使用简短但描述准确的 &#60;title&#62; 元素
   4. 书写格式：“栏目名称_关键词 1,关键词 2,关键词 3_网站名称”的形式进行写作
      1. 如：Buy a car_ car for sale at low prices_Australian Car Network”
3. title应紧贴head标签后边，避免在title标签前添加大段 CSS/JS 代码，这样搜索引擎才能迅速找到网页的标签标题。
4. 引用外部 CSS 样式文件，减少冗余和搜索引擎计算量。
### 2. 使用元描述标记
1. 网页的元描述标记可让 Google 和其他搜索引擎了解该网页的大致内容。网页的标题可以是几个词或一个短语，而网页的元描述标记则可以是一两个句子甚至是一小段话。与 title 元素一样，元描述标记也位于 HTML 文档的 head 元素中。
```
<html>
<head>
    <title>Brandon's Baseball Cards - Buy Cards, Baseball News, Card Prices</title>
    <meta name="description" content="Brandon's Baseball Cards provides a large selection of vintage and modern baseball cards for sale. We also offer daily baseball news and events.">
</head>
<body>
...
```
2. content内容填写建议
   1. 准确总结网页内容
   2. 为每个网页使用不同的说明
   3. 想象您在编写大纲，想想网页内容的要点和次要点是什么，这将有助于决定在何处使用标题标记
   4. 在网页上谨慎使用小标题：应在合适的位置使用标题标记，因为如果网页上的标题标记过多，用户将难以浏览内容，也难以确定主题的起止位置。
3. 书写格式建议
  1. 语句要通顺 | 描述必须兼顾用户体验，语句通顺，有一定的吸引力，能够准确概括网页内
容
  2. 融入必要的关键词 | 在网页描述中可以融入标题中的关键词，添加一些二级关键词以增加
网页的收录率。
  3. 为每个网页设置不同的描述 | 每个网页必须要有对应的网页描述，如果采用相同描述，不
利于搜索引擎对网页的搜索抓取

### 3. 添加结构化数据标记
1. 结构化数据简述
   1. 可添加到网站网页中的代码
   2. 用于向搜索引擎描述内容，以便搜索引擎更好地了解网页上的信息
   3. 搜索引擎可以利用这类信息在搜索结果中以有用的（且吸引用户的）方式显示您的内容
   4. 这也有助于为您的业务吸引到理想的客户
2. 理解
   1. 就是在网页添加一段结构化数据
   2. 数据内容是描述网页的精要（标题，描述，作者，时间，其它详情等等）
   3. 当用户搜索数据化数据里的内容，Google就会启用*特殊的搜索结果功能和增强功能*，Google就会以特定的方式显示我们的内容，以便于吸引客户（富媒体搜索结果）
3. 结构化数据的构建
    1. 所有的数据标记属性都要符合https://schema.org中的规范，要搭建起来必须理解里边的type和property体系，而schema.org是一个共享词汇表，其使命是创建、维护和推广 Internet、网页、电子邮件等信息中的结构化数据的模式
    2. 结构化数据分为两层
       1. A Schema.org Type: 
          1. 理解：也就是@type，可以一次声明多个类型
          2. 作用：标记的信息进行分类(Product,brand下的Brand)
          3. 可以通过来url的方式来快速查找https://schema.org/typeName，找到的就是一系列该类可用的属性
       2. property
             1. 就是Type中可用的属性(sku,gtin14...等),
             2. 作用：标记每个详细的内容
    3. HTML部署
        1. JSON-LD 结构标注是一种放在 &#60;<head>&#62; 或者是 &#60;<body>&#62; 部分的代码
        2. 将URL或它们的类别映对应到不同的结构，并突出显示静态和动态值（考虑品牌与产品架构的价格）
        3. 其它用法具体可以查看<a href="https://ahrefs.com/blog/zh/schema-markup/#generate-markup">什么是Schema Markup (结构标记)? 它对SEO有什么用？</a>
```
// 例如车
    <script type="application/ld+json">
    {
      "@context": "https://schema.org/",  
      "@type": "Product",          
      "sku": "trinket-12345",      // 库存单位 (SKU)，即产品或服务或报价所指产品的商家特定标识符。
      "gtin14": "12345678901234",
      "image": [
        "https://example.com/photos/16x9/trinket.jpg",
        "https://example.com/photos/4x3/trinket.jpg",
        "https://example.com/photos/1x1/trinket.jpg"
      ],
      "name": "Nice trinket",
      "description": "Trinket with clean lines",
      "brand": {
        "@type": "Brand",
        "name": "MyBrand"
      },
      "offers": {
        "@type": "Offer",
        "url": "http://www.example.com/trinket_offer",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock",
        "price": "39.99",
        "priceCurrency": "USD",
        "priceValidUntil": "2020-11-20",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "3.49",
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "US",
            "postalCodeRange": {
              "postalCodeBegin": "98100",
              "postalCodeEnd": "98199"
            }
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": "0",
              "maxValue": "1"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": "1",
              "maxValue": "5"
            },
            "cutOffTime": "19:30-08:00",
            "businessDays": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [ "https://schema.org/Monday", "https://schema.org/Tuesday", "https://schema.org/Wednesday", "https://schema.org/Thursday" ]
            }
          }
        }
      },
      "review": {
        "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Fred Benson"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "reviewCount": "89"
        }
      }
    </script>
```
4. 验证结构化数据
    1. <a href="https://search.google.com/test/rich-results?utm_source=support. google.com/webmasters/&utm_medium=referral&utm_campaign=7445569">富媒体搜索  结果测试</a>工具可以验证数据结构化数据的语法，在开发时非常有用，在上线钱确保  结构数据的有效性，在某些情况下，还能提供示例，以说明Google Search中可能出现的 相应结果
    2. 在 Google 搜索结果中的实际显示效果可能会有不同。您可以使用<a href="https:/ /search.google.com/test/rich-results?utm_source=support.google.com/  webmasters/&utm_medium=referral&utm_campaign=7445569">富媒体搜索结果测试</a>  来预览大多数功能
    3. <a href="https://search.google.com/test/rich-results?utm_source=support. google.com/webmasters/&utm_medium=referral&utm_campaign=7445569">富媒体搜索  结果测试</a>是一种简单实用的工具，可用于验证结构化数据；在某些情况下，还可用于预览 Google 搜索中的功能
    4. 如何详细使用：
5. 富媒体搜索结果: 
   1. 前言：当使用Google搜索引擎会看到各种不同的结果
        1. 如：文本字段(就是蓝色链接)以及富媒体搜索结果(带图片还有视频，一个软件的评分等等一特定的形式在谷歌搜索展现出来，可以看<a href="https://developers.google.com/search/docs/advanced/structured-data/search-gallery">搜索浏览功能库</a>除了里边的也还有其它的写法)
   2. 富媒体搜索结果实例理解：
        1. 搜索任1地点或者乐团，可能会看到附近是否有相关活动
        2. 搜索豆丸子等食物，可能会看到相关的食谱之类的图片和相关视频
   3. 要使网站能出现在富媒体搜索结果中，以增加网站对用户的吸引力，因此就要执行*结构化数据标记*
   4. 如何实现？
      1. 使用结构化数据标记来实现
   5. 如何去看文档以及决策：
      1. Review Search Gallery(检视搜索功能示例)
      2. Find a structued data type(找到适合所属内容的结构化数据类型)
      3. Check guidelines and requirements(查阅纳入搜寻结果的相关指引与规章以符合要求)
      4. Implement the markup(在自家网站执行标记)
      5. 完成后即可使用 <a href="https://search.google.com/search-console/about">Search Console</a>,以优化执行效能并管控网页与搜索结果的表现
   6. 怎么看富媒体搜索结果的表现
      1. 当内含结构数据的页面纳入Google搜索索引后，Search Console(add--->search apperance) 便会显示这类结构数据类型的相关报告，完成其设置，并确定页面已编入搜索索引后，。接下来就是监视搜寻结果的表现了
      2. 网站登入Search Console,以观察具体表现
      3. <a href="https://hrefgo.com/blog/google-search-console-guide">什么是谷歌站长工具(Google Search Console)：SEO教程</a>
```
<html>
  <head>
    <title>Party Coffee Cake</title>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": "Party Coffee Cake",
      "author": {
        "@type": "Person",
        "name": "Mary Stone"
      },
      "datePublished": "2018-03-10",
      "description": "This coffee cake is awesome and perfect for parties.",
      "prepTime": "PT20M"
    }
    </script>
  </head>
  <body>
    <h2>Party coffee cake recipe</h2>
    <p>
      <i>by Mary Stone, 2018-03-10</i>
    </p>
    <p>
      This coffee cake is awesome and perfect for parties.
    </p>
    <p>
      Preparation time: 20 minutes
    </p>
  </body>
</html>
```
### 4、组织网站层次结构
1. 搜索引擎编入索引条件
   1. 搜索引擎需要获得每部分内容的唯一网址，才能抓取内容并将其编入索引，并使用户转到相应内容。
   2. 不同内容（例如某个商店中的不同产品）以及修改后的内容（例如某内容的翻译版本或不同地区的版本）需要使用单独的网址，才能在搜索结果中得到恰当的展示。
### 5、使用面包屑导航列表
1. 建议使用<a href="https://developers.google.com/search/docs/advanced/structured-data/breadcrumb?hl=zh-cn">面包屑导航结构化数据标记</a>,那么不使用也可以吧？
2. 网页上的面包屑导航路径指明了网页在网站层次结构中的位置，有助于用户有效地了解和探索网站
3. 使用同一个网页，内容变化，路由不变，Goole似乎也会收录？
   1. Google 搜索使用网页正文中的面包屑导航标记在搜索结果中对来自该网页的信息进行分类
   2. 用户往往可通过各种不同类型的搜索查询到达同一个网页，虽然每次搜索有可能返回相同的网页，但面包屑导航会根据Goolge搜索查询的上下文对内容进行分类
### 6. 为用户创建简洁的导航栏
1. 使用文字进行导航： 最好用a标签
2. 为用户创建导航页，为搜索引擎创建站点地图
   1. 为方便用户使用，您可以为整个网站或最重要的网页（如果您有成百上千个网页）提供一个简洁的导航页。同时，创建一个 XML 站点地图文件，确保搜索引擎能够发现网站上的新增网页和更新后的网页，文件中要列出所有相关网址及其主要内容的最后修改日期。
3. 显示使用的404页面：自定义404页面，在自定义的404页面添加一个链接可以跳到网站热门内容或者网站相关内容

### 7. 优化图片
1. 使用 HTML <img> 或 <picture> 元素
   1. 语义 HTML 标记有助于抓取工具找到并处理图片。
   2. 使用 &#60;<picture>&#62; 元素，您还可以针对不同屏幕尺寸为自适应图片指定多个选项。您还可以在图片上使用 loading="lazy" 属性，提高用户的网页加载速度。
2. 添加alt属性，为图片提供说明性文件名


## 参考文献：
1. <a href="https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=zh-cn#uniquepagetitles">Google搜索中心</a>
2. <a href="https://ahrefs.com/blog/zh/schema-markup/#generate-markup">什么是Schema Markup (结构标记)? 它对SEO有什么用？</a>

