<template>
  <div class="blog-card">
    <article class="blog-card__inner">
      <a href="#">
        <img src="~/assets/imgs/cars/blog-card-768x513.jpg" alt="blog-card-car">
      </a>
      <div class="blog-card__content">
        <h3>
            <a class="blog-card__title" href="https://chinaexportcar.com/how-close-are-we-to-autonomous-cars/" title="How Close are we to Autonomous Cars?">
                How Close are we to Autonomous Cars?
            </a>
        </h3>
        <div class="blog-card__content__top">
            <div class="blog-card__author">
              <div class="blog-card__author__name"><i class="far fa-user"></i>admin</div>
            </div>
                
            <div class="blog-card__date">
              <i class="far fa-calendar"></i>
              <span>March 25, 2020</span>
            </div>
        </div>
        <div class="blog-card__excerpt">
          How the adventure ended will be seen anon. Aouda was anxious, though she said nothing. As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the...
        </div>
        <div class="blog-card-v2__button-wrapper">
          <a class="button" href="https://chinaexportcar.com/how-close-are-we-to-autonomous-cars/" title="How Close are we to Autonomous Cars?">
            Read more
          </a>
        </div>
      </div>
    </article>
  </div>

</template>

<script>
export default {
  name: 'ExportCarsBlogCard',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.blog-card{
  width: 50%;
  margin: 60px 0 30px;
  padding-right: 32px;
  .blog-card__inner {
    background: #FFFFFF;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 0 0 rgba(196, 196, 196, 24%);
    border: 1px solid #e7edf3;
    overflow: hidden;
    transition: all 0.2s ease;
    position: relative;
    &:hover{
      border: 1px solid var(--primary);
    }
    >a {
      padding-top: 0;
      height: 300px;
      position: relative;
      display: block;
      background: #f2f5fb;
      overflow: hidden;
      padding-top: 55.5224%;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      color: #222732;
      transition: all 0.3s ease;
      text-decoration: none;
      img{
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        object-fit: cover;
        opacity: 1;
        transition: opacity 0.8s, transform 0.8s, filter 400ms;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        &:hover{
          transform: scale(1.11);
        }
      }
    }
    .blog-card__content {
      padding: 30px;
      text-align: left;
      h3{
        margin-bottom: 10px;
        a{
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
          white-space: initial;
          color: #222732;
          display: block;
          word-break: break-word;
          transition: all .3s ease;
          &:hover{
            color: var(--primary);
          }
        }
      }
      .blog-card__content__top {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        .blog-card__author {
          margin-bottom: 20px;
          margin-right: 18px;
          text-align: center;
          display: inline-block;
          .blog-card__author__name {
            float: left;
            font-size: 13px;
            line-height: 16px;
            font-weight: 600;
            color: #95989d;
            i{
              margin-right: 4px;
              color: var(--primary);
            }
          }
        }
       .blog-card__date {
          font-size: 13px;
          line-height: 16px;
          font-weight: 600;
          color: #95989d;
          margin-bottom: 15px;
          text-align: left;
          i{
            margin-right: 4px;
            color: var(--primary);
          }
        }
      }
      .blog-card__excerpt {
        margin-bottom: 20px;
        text-align: left;
        max-width: none;
        margin-left: 0;
        margin-right: 0;
        margin: 0 0 16px 0;
        color: #222732;
        opacity: 0.48;
        font-size: 15px;
        font-weight: 500;
        line-height: 1.64;
      }
      .button{
        overflow: hidden;
        display: inline-block;
        font-size: 17px;
        line-height: 21px;
        font-weight: 600;
        text-align: center;
        color: #fff;
        border: 0 solid transparent;
        box-shadow: none;
        cursor: pointer;
        padding: 16px 25px 16px 25px;
        vertical-align: top;
        border-radius: 10px;
        background-color: var(--primary);
        transition: all 0.2s ease-in-out;
        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: linear;
        transition-delay: 0s;
        align-items: center;
        transform: translateZ(0);
        text-decoration: none;
      }
    }
  }
}
</style>