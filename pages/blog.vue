<template>
  <div class="blog">
    <Nav :diyrate="4" :diynavbg="0"/>
    <div class="blog-header">
      <div class="elementor-background-overlay"></div>
      <div class="elementor-titles">
        <h1>Our Latest <span class="highColor">News</span></h1>
        <h2>From spy shots to new releases to auto show coverage</h2>
      </div>
    </div>
    <div class="blog-bread-nav"><BreadNav /></div>
    <div class="blog-main container">
      <div class="blog-main-left">
        <BlogCard />
        <BlogCard />
      </div>
      <div class="blog-main-right">
        
        <div class="blog-search">
          <el-input placeholder="Search ..." suffix-icon="el-icon-search" v-model="serachInput"></el-input>
        </div>
        <div class="categories">
          <h4>Recent Posts</h4>
          <ul class="categories-list">
            <li class="category"><a href="#">Auto Detailing</a>(1)</li>
            <li class="category"><a href="#">Car News</a>(2)</li>
            <li class="category"><a href="#">Car Reviews</a>(3)</li>
          </ul>
        </div>
        <div class="recent-posts">
          <h4>Recent Posts</h4>
          <div class="recent-post">
            <div class="recent-post__img">
              <img src="~/assets/imgs/cars/blog-card-768x513.jpg" alt="blog-card-car">
            </div>
            <div class="recent-post__content">
              <a href="#">How Close are we to Autonomous Cars?</a>
              <a href="#">Read more</a>
            </div>
          </div>
          <div class="recent-post">
           <div class="recent-post__img">
            <img src="~/assets/imgs/cars/blog-card-768x513.jpg" alt="blog-card-car">
           </div>
            <div class="recent-post__content">
              <a href="#">How Close are we to Autonomous Cars?</a>
              <a href="#">Read more</a>
            </div>
          </div>
          <div class="post-link text-clik">Read All Posts</div>
        </div> 
        <div class="about-us">
          <h4>About Us</h4>
          <div class="about-us__content">
            <div class="about-us-person">
              <div class="about-us-person__avatar">
                <img src="" alt="">
              </div>
              <div class="about-us-person__info">
                <div class="about-us-person__name">John Hendricks</div>
                <div class="about-us-person__intro">Blog Editor</div>
              </div>
            </div>
            <p class="about-us-person__desc">
              We went down the lane, by the body of the man in black, sodden now from the overnight hail, and broke into the woods..
            </p>
          </div>
        </div>
        <div class="popular-tags">
          <a href="">premium</a>
          <a href="">sedan</a>
          <a href="">speed</a>
          <a href="">sport</a>
          <a href="">supercars</a>
          <a href="">suv</a>
        </div>
      </div>
    </div>
    <h1>BLOG</h1>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ExportCarsBlog',

  data() {
    return {
      serachInput: ''
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.blog-header{
    height: 500px;
    background-image: url(https://chinaexportcar.com/wp-content/uploads/2020/09/photo-hoteam-196xdwXDHc0-unsplash.jpg);
    background-position: center center;
    background-size: cover;
    margin-top: -105px;
    padding-top: 130px;
    position: relative;
    z-index: 1;
    .elementor-background-overlay{
      background-color: #0F141E;
      opacity: 0.6;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
      z-index: -1;
    }
    .elementor-titles{
      text-align: center;
      height: 100%;
      padding: 80px 0;
      h1{
        color: #FFFFFF;
        font-size: 45px;
        line-height: 51px;
        font-weight: 900;
      }
      h2{
        color: #FFFFFF9C;
        font-size: 22px;
        font-weight: 500;
        line-height: 51px;
      }
    }
}
.blog-bread-nav{
  background-color: var(--bg);
}
.blog-main{
  display: flex;
  .blog-main-left{
    width: 70%;
    display: flex;
  }
  .blog-main-right{
    margin-top: 60px;
    width: 30%;
    >div{
      margin-bottom: 40px;
    }
    .blog-search{
      padding: 20px 20px;
      background-color: var(--bg);
      border-radius: 10px;
    }
    h4{
      font-size: 21px;
      line-height: 30px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .categories{
      .categories-list{
        padding: 20px 30px;
        box-shadow: 1px 1px 0 0 rgba(196, 196, 196, 24%);
        border: solid 1px #e7edf3;
        border-radius: 10px;
        li:not(:last-child){
          padding-bottom: 15px;
          border-bottom: 1px solid var(--bg);
          margin-bottom: 15px;
          text-align: right;
          color: var(--primary);
          a{
            float: left;
            color: #222732;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.blog{
  .el-input__inner{
    height:50px;
    border-radius: 10px;
    font-weight: 600;
  }
}
</style>