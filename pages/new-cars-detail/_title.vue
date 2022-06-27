<template>
  <div class="new-cars-detail">
    <Nav :diyrate="2" :diynavbg="1"/>
    <BreadNav />
    <section class="new-cars-detail-content">
      <div class="container">
        <div class="car-info">
          <div class="car-info-left">
            <div class="car-info-imgs">
              <img src="~/assets/imgs/cars/car-detail.jpg" alt="car">
              <div class="picture-num">
                <i class="far fa-images"></i>
                1/1
              </div>
            </div>
            <div class="car-info-description">
              <div class="description head-title">
                Description
              </div>
              <div class="vin">123</div>
            </div>
            <div class="car-info__vehicle-history">
              <div class="card-border-top"></div>
              <div class="card-bottom">
                <div class="download-report">
                  <h1 class="download-report__title head-title">Vehicle history</h1>
                  <div class="download-report__btn"><a href="#"> DownLoad report</a></div>
                  <div class="download-report-imgs">
                    <img src="~/assets/imgs/icon/carfax_logo_eu_2.png" alt="car-arfax_logo_eu_2">
                    <img src="~/assets/imgs/icon/paypal.png" alt="paypal">
                  </div>
                </div>
                <div class="read-history">
                  Before you decide to buy a car, read its <a href="#" class="highColor">history</a> for free.
                </div>
              </div>

            </div>
          </div>
          <div class="car-info-right">
            <h1 class="car-title">TESR</h1>
            <div class="car-features">
              <span class="car-feature">2012<i class="fas fa-circle"></i></span>
              <span class="car-feature">0 miles<i class="fas fa-circle"></i></span>
              <span class="car-feature">Coupe<i class="fas fa-circle"></i></span>
              <span class="car-feature">Electric</span>
            </div>
            <div class="car-price">$22,222</div>
            <div class="favorites"><i class="far fa-star"></i>Add to favorites</div>
            <div class="car-info-detail">
              <div class="car-info-detail__key">
                <ul>
                  <li>Make:</li>
                  <li>Model:</li>
                  <li>Color:</li>
                  <li>Drive Type:</li>
                  <li>Transmission:</li>
                  <li>Condition:</li>
                  <li>Year:</li>
                  <li>Mileage:</li>
                  <li>Fuel Type:</li>
                  <li>Engine Size:</li>
                  <li>Doors:</li>
                  <li>VIN:</li>
                  <li>NEDC pure electric cruising range(km):</li>
                </ul>
              </div>
              <div class="car-info-detail__value">
                <ul>
                  <li v-for="(item,index) in carInfo" :key="index">{{item}}</li>
                </ul>
              </div>
            </div>
            <div class="send-message btn"><a class="send-message-link" href="#">send-message btn</a></div>
            <div class="offer-car-id">offter ID #20482</div>
            <div class="pay-mothods">
              <a class="share"><i class="fab fa-facebook"></i>Share</a>
              <a class="tweet"><i class="fab fa-twitter"></i>Tweet</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="send-message">
      <div class="container">
        <h1 class="head-title">Send message</h1>
        <div class="send-message-content">
          <div class="form">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <div class="form-input">
                <el-form-item prop="name">
                  <el-input v-model="ruleForm.name" placeholder="Name"></el-input>
                </el-form-item>
                <el-form-item prop="email">
                  <el-input v-model="ruleForm.email" placeholder="Email*"></el-input>
                </el-form-item>
                <el-form-item prop="phone">
                  <el-input v-model.number="ruleForm.phone" maxlength="11" show-word-limit placeholder="Phone*"></el-input>
                </el-form-item>
              </div>
              <div class="form-text-area">
                <el-form-item prop="message" >
                  <el-input type="textarea" :rows="9" placeholder="Messge" v-model="ruleForm.message">
                  </el-input>
                </el-form-item>
              </div>
              <div class="from-submit">
                <el-form-item prop="accept">
                  <el-checkbox v-model="ruleForm.accept">I accept the <a href="#" class="highColor">privacy policy</a></el-checkbox> 
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm(ruleForm)">send</el-button>
                </el-form-item>
              </div>
            </el-form>
          </div>
          <div class="seller">
            <div class="seller-top">
              <div class="seller-name"><a href="#">admin</a></div>
              <div class="seller-desc"><span class="highColor">Bussiness seller</span></div>
            </div>
            <div class="seller-bottom">
              <div class="seller-email">
                <a href="#"><i class="fa fa-envelope highColor"></i></a>
                <a href="#">business@aucn.net.au</a>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    <section class="related-listings">
      <div class="container">
        <h1 class="head-title">Related Listings</h1>
        <div class="related-listings-car-list">
          <CommonCard />
          <CommonCard />
          <CommonCard />
          <CommonCard />
        </div>

      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'ExportCarsTitle',

  data() {
    return {
      carInfo: [
        'Bentley',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental',
        'Continental'
      ],
      ruleForm: {
        email: '',
        phone: '',
        name:'',
        message: '',
        accept: false
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ],
        phone: [
          { required: true, message: '请输入您的手机号码', trigger: 'blur' },
          {pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: ['blur', 'change']}
        ]
      },

    };
  },

  mounted() {

  },

  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  },
};
</script>

<style lang="scss" scoped>
.head-title{
    color: #222732;
    font-size: 22px;
    font-weight: 900;
    line-height: 28px;
}
.car-info{
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  .car-info-left{
    position: relative;
    margin-right: 15px;
    width: 60%;
    .car-info-imgs{
      cursor: pointer;
      width: 100%;
      overflow: hidden;
      position: relative;
      img{
        width: 100%;
        border-radius: 10px;
      }
      .picture-num{
        position: absolute;
        bottom: 20px;
        right: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 800;
        i{
          opacity: 0.5;
          margin-right: 5px;
        }
      }
    }
    .description{
      padding: 30px 0;
    }
    .vin{
      margin-bottom: 30px;
    }
    .car-info__vehicle-history{
      .card-border-top{
        padding: 32px 35px 16px 34px;
        background: var(--bg);
        margin-bottom: 1px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
      .card-bottom{
        display: flex;
        background-color: var(--bg);
        background-color: #F2F5FB;
        background-image: url('~assets/imgs/Layer-56.png');
        background-position: bottom right;
        background-repeat: no-repeat;
        background-size: initial;
        margin-bottom: 50px;
        .download-report{
          display: flex;
          flex-direction: column;
          padding: 0px 10px 35px 34px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          .download-report__title{
            padding: 30px 0;
          }
          .download-report__btn a{
            display: inline-block;
            font-size: 16px;
            line-height: 21px;
            border-style: solid;
            border-width: 1px 1px 1px 1px;
            border-radius: 10px 10px 10px 10px;
            padding: 13px 25px 13px 25px;
            border-radius: 10px;
            border: 1px solid var(--primary);
            background-color: #FFF0EB;
            transition: all ease-in-out .3s;
            margin-bottom: 35px;
            &:hover{
              background-color: var(--primary);
            }
          }
          .download-report-imgs{
            display: flex;
            img{
              height: 25px;
              &:last-child{
                height: 30px;
              }
            }
          }
        }
        .read-history{
          align-self: center;
          width: 35%;
          padding-left: 25px;
          line-height: 27px;
          margin-left: 45px;
        }
      }
    }
  }
  .car-info-right{
    margin-left: 15px;
    padding-left: 30px;
    padding-right: 95px;
    width: 40%;
    .car-title{
      font-size: 30px;
      line-height: 1.3;
      color: #222732;
    }
    .car-features{
      color: #a7a8a8;
      padding: 25px 0;
      border-bottom: 1px solid #E8E8E8;
      i{
        color: var(--primary);
        padding-left: 3px;
      }
    }
    .car-price{
      font-size: 35px;
      line-height: 44px;
      font-weight: 800;
      color: var(--primary);
      padding: 20px 0;
    }
    .favorites{
      color: #a7a8a8;
      font-size: 16px;
      i{
        font-size: 20px;
        padding-right: 5px;
      }
    }
    .car-info-detail{
      display: flex;
      margin-top: 20px;
      background-color: var(--bg); 
      padding: 25px 40px 18px 40px;
      border-radius: 10px;
      line-height: 30px;
      .car-info-detail__key{
        font-weight: 700;
      }
    }
    .send-message.btn{
      background: none;
      padding: 0;
      .send-message-link{
        font-size: 17px;
        display: inline-block;
        width: 100%;
        font-weight: 600;
        line-height: 20px;
        border-radius: 10px 10px 10px 10px;
        padding: 15px 15px 15px 15px;
        background-color: var(--primary);
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #fff;
      }
    }
    .offer-car-id{
      text-align: center;
      margin: 30px 0;
    }
    .pay-mothods{
      display: flex;
      justify-content: center;
      padding: 30px 0;
      a{
        display: inline-block;
        font-size: 14px;
        line-height: 16px;
        color: #fff;
        padding: 8px 12px;
        border-radius: 4px;
        margin: 0 10px;
        &:first-child{
          background-color: #39579A;
        }
        &:last-child{
          background-color: #01ABF0;
        }
        i{
          padding-right: 12px;
        }
      }
    }
  }
}
.send-message{
  background-color: var(--bg);
  padding: 50px 0;
  .head-title{
    padding-bottom: 30px;
  }
  .send-message-content{
    display: flex;
    .form{
      width: 59%;
      form{
        display: flex;
        flex-direction: column;
        padding-right: 150px;
        div{
          width: 100%;
        }
        .form-input{
          display: flex;
        }
        .from-submit{
          display: flex;
          .el-form-item{
            &:last-child{
              text-align: right;
              button{
                background-color: var(--primary);
                border: 0 solid transparent;
                padding: 15px 40px;
                border-radius: 10px;
                font-size: 17px;
              }
            }
          }
        }
      }
    }
    .seller{
      width: 41%;
      >div{
        padding: 30px 37px 33px 37px;
        background-color: #FFFFFF;
        border-style: solid;
        border-width: 1px 1px 1px 1px;
        border-color: #E7EDF3;
        box-shadow: 1.2px 1.6px 0px 0px rgba(196, 196, 196, 24%);
        border-radius: 10px;
        &:first-child{
          position: relative;
          bottom: -10px;
        }
      }
      .seller-name{
        font-size: 22px;
        line-height: 28px;
        font-weight: bold;
        color: #222732;
      }
      .seller-desc{
        padding-bottom: 45px;
      }
      .seller-email{
        padding-bottom: 30px;
        padding-top: 20px;
        i{
          padding-right: 15px;
        }
      }
    }
  }
}
.related-listings{
  padding: 50px 0;
  h1{
    margin-bottom: 30px;
  }
  .related-listings-car-list{
    display: flex;
  }
}
</style>

<style lang="scss">
.send-message {
  .el-form-item__content{
    margin-left: 15px !important;
    .el-input__inner{
      min-height: 53px;
      border-radius: 10px;
      width: 100%;
      padding: 10px 27px;
      font-size: 14px;
      line-height: 16px;
      margin: 0;
      box-shadow: 1px 1px 0 0 rgba(196, 196, 196, 24%);
      border: 1px solid #e7edf3;
    }
  }
}
</style>