<template>
  <div class="car-card" >
    <div class="featured-item">
      <div class="item-img">
        <a href="#">
          <div class="single-car-img">
            <img
              src="~/assets/imgs/cars/audi3-670x372.jpg"
              alt="car"
              class="scaling"
            />
          </div>
          <div class="img-inner">
            <div class="img-inner__favorite">
              <i class="far fa-star"></i>
            </div>
            <div class="img-inner__num">
              <i class="far fa-images"><span>6</span></i>
            </div>
          </div>
        </a>
      </div>
      <div class="item-text">
        <div class="item-text-top">
          <div class="single-car-title">
            Ferrari LaFerrari 2-door coupe red
          </div>
          <div class="single-car-price">$810,000</div>
        </div>
        <div class="item-text-bottom">
          <div class="btn vehica-car-card__info__single">2021</div>
          <div class="vehica-car-card__info__single">Automatic</div>
          <div class="vehica-car-card__info__single">Diesel</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  data() {
    return {};
  },

  mounted() { },

  methods: {},
};
</script>

<style lang="scss" scoped>
.car-card{
  width: 100%;
  margin: 0 10px 20px;
  .featured-item {
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    .item-img {
      position: relative;
      a {
        width: 100%;
        display: inline-block;
        overflow: hidden;
        .single-car-img{
          width: 100%;
          margin-right: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          overflow: hidden;
          .scaling {
            width: 100%;
            transform: scale(1);
            transition: transform 0.6s ease-in-out;
            display: block;
            &:hover{
              transform: scale(1.11);
            }
          }  
        }
        .img-inner {
          width: 100%;
          position: absolute;
          bottom: 2px;
          padding: 0 22px 19px 22px;
          display: flex;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0)
            linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.6) 8%,
              rgba(0, 0, 0, 0) 94%
            )
            repeat scroll 0 0;
          z-index: 2;
          line-height: 25px;
          color: #a7a7a7;
          span {
            margin-left: 5px;
            font-weight: 900;
          }
          .img-inner__favorite{
            border-radius: 50%;
            z-index: 20;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            opacity: 1;
            transition: all 0.5s ease;
            &:hover{
              background: #f2f5fb;;
              line-height: 30px;
            }
          }
        }
      }
    }
    .item-text {
      background-color: #222732;
      margin-top: -2px;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      padding: 20px 24px;
      .item-text-top {
        padding-bottom: 10px;
        border-bottom: 1px solid #343b4a;
        .single-car-title {
          font-size: 17px;
          line-height: 21px;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #fff;
        }
        .single-car-price {
          line-height: 35px;
          font-size: 20px;
          font-weight: 900;
        }
      }
      .item-text-bottom {
        display: flex;
        margin-top: 15px;
        div:first-child {
          display: flex;
        }
        .vehica-car-card__info__single {
          line-height: 28px;
          font-size: 14px;
          margin-right: 12px;
          &:not(:first-child) {
            color: #99a1b2;
          }
        }
        .btn {
          padding: 0 11px;
          color: #fff;
          background: var(--primary);
          border-radius: 5px;
          font-size: 14px;
          font-weight: 500;
          margin-right: 20px;
          line-height: 28px;
        }
      }
    }
  }
}

</style>
