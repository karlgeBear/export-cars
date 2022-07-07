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
              <a href="#"><img src="~/assets/imgs/cars/blog-card-768x513.jpg" alt="blog-card-car"></a>
            </div>
            <div class="recent-post__content">
              <a href="#">How Close are we to Autonomous Cars?</a>
              <a href="#" class="text-click">Read more</a>
            </div>
          </div>
          <div class="recent-post">
           <div class="recent-post__img">
            <a href="#"><img src="~/assets/imgs/cars/blog-card-768x513.jpg" alt="blog-card-car"></a>
           </div>
            <div class="recent-post__content">
              <a href="#">How Close are we to Autonomous Cars?</a>
              <a href="#" class="text-click">Read more</a>
            </div>
          </div>
          <div class="post-link text-click"><a href="#">Read All Posts</a></div>
        </div> 
        <div class="about-us">
          <h4>About Us</h4>
          <div class="about-us__content">
            <div class="about-us-person">
              <div class="about-us-person__avatar">
                <img src="~/assets/imgs/ourTeamMember/blog-editor-150x150.jpg" alt="blog-editor">
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
          <h4>Popular Tags</h4>
          <div class="popular-tags__links">
            <a href="#">premium</a>
            <a href="#">sedan</a>
            <a href="#">speed</a>
            <a href="#">sport</a>
            <a href="#">supercars</a>
            <a href="#">suv</a>
          </div>

        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Blog',

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
    .recent-posts{
      .recent-post{
        display: flex;
        padding-bottom: 20px;
        border-bottom: 1px solid #dfe3eb;
        margin-bottom: 20px;
        .recent-post__img{
          width: 100px;
          margin-right: 20px;
          a{
            position: relative;
            display: block;
            width: 100px;
            height: 100px;
            overflow: hidden;
            border-radius: 10px;
            background: #eff0f1;
            img{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transform: scale3d(1, 1, 1);
              transition: opacity 0.8s, transform 0.8s;
              &:hover{
                transform: scale(1.11);
              }
            }
          }
        }
        .recent-post__content{
          a{
            &:first-child{
              display: block;
              font-size: 16px;
              line-height: 25px;
              margin-bottom: 21px;
              color: #222732;
              font-weight: bold;
              transition: all 0.2s ease;
            }
          }
        }
      }
    }
    .about-us{
      border-radius: 10px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #E7EDF3;
      box-shadow: 0px 0px 10px 0px #e7edf3;
      transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
      padding: 20px;
      h4{
        margin: 0px 0px 16px 0px;
        padding: 0px 0px 10px 0px;
        border-style: solid;
        border-width: 0px 0px 1px 0px;
        border-color: #EFEFEF;
      }
      .about-us-person{
        display: flex;
        margin-bottom: 20px;
        .about-us-person__avatar{
          width: 54px;
          height: 54px;
          margin-right: 20px;
          img{
            border-radius: 50%;
          }
        }
        .about-us-person__name{
          font-size: 16px;
          line-height: 20px;
          font-weight: 800;
          margin-bottom: 3px;
        }
        .about-us-person__intro{
          font-size: 12px;
          line-height: 17px;
          color: var(--primary);
        }
      }
      .about-us-person__desc{
        color: #95989D;
        font-size: 15px;
        font-weight: 500;
        line-height: 27px;
      }
    }
    .popular-tags{
      .popular-tags__links{
        text-align: center;
        a{
          display: inline-block;
          border-radius: 8px;
          background-color: rgba(246, 246, 246, 0.7);
          color: rgba(0, 0, 0, 0.48);
          line-height: 24px;
          padding: 7px 25px;
          margin-bottom: 8px;
          transition: all 0.1s ease;
          border: 1px solid #E7EDF3;
          font-size: 14px !important;
          font-weight: 600;
          &:hover{
            color: #222732;
            border: 1px solid var(--primary);
            background-color: var(--primary-light);
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