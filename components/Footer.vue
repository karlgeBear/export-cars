<template>
  <footer class="footer">
    <div class="container">
      <div class="top-content">
        <div class="logo">
          <img src="~/assets/imgs/vehica-logo-white.png" alt="logo-white">
        </div>
        <div class="menu-links">
          <ul class="menu-list">
            <li class="item"><a href="" class="item-link">Listings</a></li>
            <li class="item"><a href="" class="item-link">Blog</a></li>
            <li class="item"><a href="" class="item-link">FAQ</a></li>
            <li class="item"><a href="" class="item-link">Our team</a></li>
            <li class="item"><a href="" class="item-link">About us</a></li>
            <li class="item"><a href="" class="item-link">Contact</a></li>
          </ul>
        </div>
        <div class="vehica-short-info">
          <div class="vehica-short-info__inner">
            Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.
          </div>
        </div>
        <div class="contact-methods">
          <div class="vehica-phone"><a href="#"><span>(123)</span>456-78901</a></div>
          <div class="vehica-email"><a href="#">support@vehica.com</a></div>
          <div class="vehica-address"><a href="#"><span>West 12th Street 
            New York, NY, USA</span></a></div>
        </div>
      </div>
      <div class="bottom-content">
        <div class="copy">Copyright © 2022. All rights reserved.</div>
        <div class="vehica-profiles">
          <div class="vehica-icon"><a href="#"><i class="fa-facebook-f"></i></a></div>
          <div class="vehica-icon"><a href="#"><i class="fa-twitter"></i></a></div>
          <div class="vehica-icon"><a href="#"><i class="fa-instagram"></i></a></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ExportCarsButtom',

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
  footer{
    background-color: #222732;
    color: #fff;
    padding-top: 85px;
    padding-bottom: 28px;
    .top-content{
      display: flex;
      .logo{
        padding: 10px 50px 0 0;
        img{
          width: 165px;
        }
      }
      .menu-links{
        padding: 10px;
        max-width: 360px;
        .menu-list{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          .item{
            width: 50%;
            padding: 0 15px 27px 20px;
            position: relative;
            .item-link{
              font-size: 17px;
              font-weight: 600;
              &::after{
                position: absolute;
                left: 0;
                top: 3px;
                content: "\f111";
                font-family: "Font Awesome 5 Free";
                font-weight: 900;
                font-size: 7px;
                color: var(--primary);
              }
            }
          }
        }
      }
      .vehica-short-info{
        padding: 10px;
        width: 360px;
        line-height: 28px;
      }
      .contact-methods{
        flex: 1;
        text-align: right;
        div{
          margin-bottom: 20px;
        }
        .vehica-phone{
          color: var(--primary);
          font-size: 30px;
          font-weight: 900;
          span{
            color: #fff;
            white-space: pre-wrap;
          }
        }
        .vehica-address,.vehica-email{
          font-size: 17px;
        }
      }
    }
    .bottom-content{
      margin-top: 85px;
      padding-top: 28px;
      border-top: 1px solid #3B4250;
      display: flex;
      justify-content: space-between;
      .vehica-profiles{
        display: flex;
        .vehica-icon{
          width: 41px;
          height: 41px;
          background: #3b4250;
          color: #fff;
          display: block;
          position: relative;
          border-radius: 50%;
          margin-left: 9px;
          text-align: center !important;
          transition: all 0.2s ease;
          i{
            font-family:'Font Awesome 5 Brands' !important;
            position: relative;
            top: 12px;
          }
          &:hover{
            background-color: #0f141e;
          }
        }
      }
    }
  }
</style>