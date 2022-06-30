<template>
  <div class="contact">
    <Nav :diyrate="5" :diynavbg="1"/>
    <div class="contact-content container">
      <div class="contact-us">
        <h1>Contact Us</h1>
        <p>Award-winning, family owned dealership of new and pre-owned vehicles with several locations across the city. Lowest prices and the best customer service guaranteed.</p>
        <div class="address">
          <a href="#">
            <span>West 12th Street</span>
            <span>New York, NY, USA</span>
          </a>
        </div>
        <div class="contact-motheds">
          <div class="phone">
            <span>(123)</span>
            <span>456-78901</span>
          </div>
          <div class="email">
            <a href="#">
              <i class="fa fa-envelope highColor"></i>
              support@vehica.com
            </a>
            
          </div>
        </div>
        <div class="follow-us">
          <span>Follow Us</span>
          <a href="#" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="#" title="Twitter" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="#" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="form">
        <CommonSendMessage />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ExportCarsContact',

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
.contact-content{
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  >div{
    width: 50%;
  }
  .form{
    background-color: var(--bg);
    padding: 40px;
    border-radius: 20px;
  }
  .contact-us{
    h1{
      color: #222732;
      font-size: 50px;
      font-weight: 900;
      line-height: 63px;
      margin-bottom: 40px;
    }
    p{
      line-height: 28px;
      margin-bottom: 37px;
    }
    .address{
      line-height: 28px;
      margin: 37px 0;
      a{
        span{
          display: block;
        }
      }
    }
    .contact-motheds{
      margin-bottom: 37px;
      .phone{
        color: var(--primary);
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 10px;
        span{
          &:first-child{
            color: #222732;
          }
        }
      }
      .email{
        font-size: 17px;
        i{
          padding-right: 10px;
        }
      }
    }
    .follow-us{
      span{
        width: auto;
        margin-right: 21px;
        font-size: 17px;
        font-weight: 500;
        color: #99a1b2;
      }
      a{
        background: #eff0f1;
        color: #222732;
        width: 41px;
        height: 41px;
        line-height: 41px;
        display:inline-block;
        position: relative;
        border-radius: 50%;
        margin-left: 9px;
        text-align: center;
        transition: all 0.2s ease;
        &:hover{
          background-color: #dfdfdf;
        }
      }
    }
  }
}
</style>