<template>
  <div class="carlist" :class="{carlistLayout:carlistLayout}">
    <div class="vehica-car-card-row">
      <a href="#" class="vehica-car-card-link"></a>
      <div class="vehica-car-card-row__inner">
        <div class="car-left">
          <div class="vehica-car-card__featured">
            <div class="vehica-car-card__featured__inner">Featured</div>
          </div>
          <div class="car-img">
            <img src="~/assets/imgs/cars/car-red-335x186.jpg" alt="Audi">
            <div class="car-img-info">
              <div class="car-img-icon"><i class="far fa-images"></i><span>6</span></div>
              <div class="car-img-favorite" v-show="carlistLayout"><i class="far fa-star"></i></div>
            </div>
          </div>
        </div>
        <div class="car-info">
          <div class="title-price">
            <div class="car-title">Ferrari LaFerrari 2-door coupe red</div>
            <div class="car-price" v-show="carlistLayout">$810,000</div>
          </div>
          
          <div class="car-desc">
            <span class="car-desc__single">Bluetooth,</span>
            <span class="car-desc__single">Cooled seats,</span>
            <span class="car-desc__single">Leather seats</span>
            <span class="car-desc__single">Memory seat</span>
            <span class="car-desc__single">Navigation System</span>
            <span class="car-desc__single">Reversing camera</span>
          </div>
          <div class="car-type-info">
            <div class="car-type-info__single btn">2021</div>
            <div class="car-type-info__single">Automatic</div>
            <div class="car-type-info__single">
              <i class="fas fa-circle"></i>
              <span>Diesel</span>
            </div>
            <div class="car-type-info__single">
              <i class="fas fa-circle"></i>
              <span>Front Wheel Drive</span>
            </div>
          </div>
          <div class="car-address">
            <span class="highColor">location: </span>
            <span class="car-address-info">Philadelphia,PA,USA</span>
          </div>
        </div>
        <div class="car-right">
          <div class="favorite"><i class="far fa-star"></i></div>
          <div class="car-price">$810,000</div>
          <div class="calculate-financing">
            <a href="#" class="calculate-financing-link">calculate-financing</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExportCarsCarlist',
  props:['carlistLayout'],
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
.carlist.carlistLayout{
  width: 25%;
  padding: 0 11px 18px;
  .vehica-car-card-row{
    .vehica-car-card-row__inner{
      flex-direction: column;
      padding: 0;
      .car-left{
        padding-right: 0;
        .car-img{
          border-radius: 0;
          .car-img-info{
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;
            z-index: 11;
            .car-img-favorite{
              border-radius: 50%;
              font-size: 18px;
              height: 30px;
              width: 30px;
              line-height: 30px;
              text-align: center;
              color: #707070;
              transition: all 0.3s ease;
              margin-right: -11px;
              cursor: pointer;
              &:hover{
                background: #f2f5fb;
              }
            }
          }
        }
      }
      .car-info{
        padding: 0 22px 19px 22px;
        .title-price{
          padding-bottom: 10px;
          border-bottom: 1px solid var(--lightgray);
          .car-title{
            font-size: 17px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-weight: normal;
          }
          .car-price{
            font-size: 20px;
            font-weight: 800;
            margin-bottom: 10px;
            line-height: 24px;
            margin-left: auto;
          }
        }

        .car-desc{
          display: none;
        }
      }
      .car-right,.car-address{
        display: none;
      }
      .car-type-info{
        margin-top: 20px;
      }
    }
  }
}
.carlist{
  width: 100%;
  position: relative;
  .vehica-car-card-row{
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e7edf3;
    box-shadow: 1px 1px 0 0 rgbg(196 196 196 / 24%);
    background-color: #fff;
    transition: all 0.2s ease;
    margin: 0 0 11px 0;
    position: relative;
    .vehica-car-card-link{
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
    }
    &:hover{
      border-color: var(--primary);
    }
    .vehica-car-card-row__inner{
      display: flex;
      width: 100%;
      padding: 14px 20px 14px 16px;
      .car-left{
        padding-right: 36px;
        overflow: hidden;
        position: relative;
        min-width: 284px;
        .vehica-car-card__featured {
          position: absolute;
          z-index: 2;
          background: var(--primary);
          width: auto;
          padding: 3px 0px;
          font-weight: 600;
          text-align: center;
          color: #fff;
          transform: rotate(-41deg);
          margin-left: 0;
          left: -64px;
          top: 16px;
          min-width: 200px;
          max-width: 200px;
        }
        .car-img{
          padding-top: 55.5224%;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
          img{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 1;
            transition: all 0.8s ease;
          }
          .car-img-info{
            position: absolute;
            bottom: 0;
            right: 0;
            background: rgba(0, 0, 0, 0) linear-gradient(0deg, rgba(0, 0, 0, 0.6) 8%, rgba(0, 0, 0, 0) 94%) repeat scroll 0 0;
            position: absolute;
            text-align: right;
            z-index: 2;
            padding: 10px 22px;
            font-size: 15px;
            font-weight: 800;
            line-height: 25px;
            width: 100%;
            color: #a7a7a7;
            .car-img-icon span{
              margin-left: 6px;
            }
          }
        }
      }
      .car-info{
        padding-right: 32px;
        .car-title{
          font-size: 24px;
          line-height: 30px;
          font-weight: bold;
          color: #222732;
          width: 100%;
          max-width: 100%;
          margin-bottom: 8px;
          margin-top: 6px;
        }
        .car-desc{
          line-height: 30px;
          font-weight: 400;
          width: 100%;
          max-width: 100%;
          margin-bottom: 8px;
          margin-top: 6px;
          .car-desc__single{
            color: #919399;
          }
        }
        .car-type-info{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          overflow: hidden;
          max-height: 28px;
          .car-type-info__single.btn{
            padding: 0 11px;
            color: #fff;
            background: var(--primary);
            border-radius: 5px;
            font-size: 14px;
            font-weight: 500;
            line-height: 28px;
          }
          .car-type-info__single{
            margin-right: 13px;
            color: #99a1b2;
            i{
              color: var(--primary);
            }
          }
        }
        .car-address{
          margin-top: 19px;
          font-size: 15px;
          line-height: 19px;
          margin-bottom: 17px;
          font-weight: 500;
        }
      }
      .car-right{
        display: flex;
        flex-direction: column;
        margin-left: auto;
        padding-left: 18px;
        .favorite{
          text-align: right;
          margin-bottom: 23px;
          cursor: pointer;
          z-index: 20;
          position: relative;
          i{
            border-radius: 50%;
            font-size: 27px;
            height: 50px;
            width: 50px;
            line-height: 50px;
            text-align: center;
            color: #707070;
            transition: all 0.3s ease;
            margin-right: -11px;
            &:hover{
              background: #f2f5fb;
              color: #222732;
            }
          }
        }
        .car-price{
          font-size: 29px;
          line-height: 36px;
          font-weight: 800;
          color: var(--primary);
          text-align: right;
          white-space: nowrap;
          margin-top: auto;
          margin-bottom: 2px;
        }
        .calculate-financing{
          font-size: 15px;
          margin-top: 6px;
          text-align: right;
          text-decoration: underline;
          z-index: 11;
          white-space: nowrap;
          color: #919399;
          &:hover{
            color: var(--primary);
          }
        }
      }
    }
  }
}
</style>