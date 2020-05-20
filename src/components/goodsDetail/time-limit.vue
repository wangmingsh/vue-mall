<template>
  <div>
    <van-row type="flex" style="background-color: rgba(209,169,255,0.13)">
      <van-col class="goods-price">
        <span> ￥{{ 1000 }} </span>
        <del class="goods-originalPrice"> ￥ {{ 2000 }} </del>
      </van-col>
      <van-col class="time-limit">
        <van-cell

          title="限时购"
          style="background: rgb(203, 51, 46);color: #fff"
        >
          <div slot="default" style="color: #fff">
            <van-count-down
              ref="countDown"
              style="color:#fff"
              millisecond
              :time="time"
              :format="textLimitStartTime + ' HH:mm:ss'"
              @finish="finish"
            />
          </div>
        </van-cell>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row, Toast } from "vant";

export default {
  name: "time-limit",
  props: {
    isLimitTimeShow: {
      type: Boolean,
      default() {
        return false;
      }
    },
    limitStartTime: {
      type: String,
      default() {
        return '';
      }
    },
    limitEndTime: {
      type: String,
      default() {
        return '';
      }
    }
  },
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Toast.name]: Toast
  },
  data() {
    return {
      textLimitStartTime: '距开始',
      textPurchase: '立即购买',
      isPurchaseBtn: false,
      time: 0,
    };
  },
  methods: {
    finishTime(isCreated) {
      const startTime = new Date(this.limitStartTime.replace(/-/g, "/")) - new Date();
      if (startTime <= 0) {
        const endTime = new Date(this.limitEndTime.replace(/-/g, "/")) - new Date();
        if (endTime <= 0) {
          this.isPurchaseBtn = true;
          if (isCreated) {
            Toast.fail("抢购已结束");
          }
          this.textPurchase = "已结束";
        } else {
          if (isCreated) {
            Toast("抢购开始");
          }
          this.textLimitStartTime = "距结束";
          this.textPurchase = "立即抢购";
          this.time = endTime;
          this.isPurchaseBtn = false;
        }
      } else {
        this.isPurchaseBtn = true;
        this.time = startTime;
        this.textPurchase = "未开始";
      }
      if (this.limitStartTime) {
        this.isLimitTimeShow = true;
      }
    }
  }
};
</script>

<style scoped lang="less">
.goods-price {
  background-color: rgb(206, 149, 92);
  font-size: 18px;
  font-weight: bold;
  padding: 7px;
  color: #fff;
  border-top-right-radius: 40px;
  .goods-originalPrice {
    font-size: 12px;
    color: #ddd;
    font-weight: normal;
    padding-left: 2px;
  }
}
.time-limit {
  font-size: 16px;
}
</style>
