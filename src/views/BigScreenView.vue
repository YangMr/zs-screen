<script setup></script>

<template>
  <div class="all-charts">
    <div class="section-one">
      <img
        alt="logo"
        class="img-header"
        src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E6%A6%82%E5%86%B5%402x.png"
      />
      <div class="icons-container">
        <div class="item">
          <div class="icons-item">
            <span class="number">28</span>
          </div>
          <span class="title">楼宇总数</span>
          <span class="unity">(栋)</span>
        </div>
        <div class="item">
          <div class="icons-item">
            <span class="number">5</span>
          </div>
          <span class="title">入驻企业总数</span>
          <span class="unity">(家)</span>
        </div>
        <div class="item">
          <div class="icons-item">
            <span class="number">1530</span>
          </div>
          <span class="title">车位总数</span>
          <span class="unity">(个)</span>
        </div>
        <div class="item">
          <div class="icons-item">
            <span class="number">48</span>
          </div>
          <span class="title">一体杆总数</span>
          <span class="unity">(个)</span>
        </div>
      </div>
    </div>
    <div class="section-two" style="background: yellow">2</div>
    <div class="section-three" style="background: green">3</div>
  </div>
</template>

<style lang="scss" scoped>
.all-charts {
  width: 480px;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(
    to left,
    rgba(0, 6, 15, 0) 0%,
    rgba(0, 6, 15, 0) 20%,
    rgba(0, 0, 0, 0.4) 30%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(1, 4, 11, 1) 70%,
    #04070d 100%
  );
  padding: 88px 20px 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;

  .section-one {
    flex-basis: 25%;

    .img-header {
      height: 30px;
    }

    .icons-container {
      display: flex;
      justify-content: space-between;
      padding: 20px 0;

      .item {
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: center;

        .icons-item {
          width: 100%;
          height: 80px;
          background: url('@/assets/building-icon.png') no-repeat 50% 0 / contain;
          position: relative;

          .number {
            font-size: 18px;
            font-family: FontquanXinYiGuanHeiTi, FontquanXinYiGuanHeiTi-Regular;
            color: #ffffff;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .title,
        .unity {
          font-size: 14px;
          color: #cdd7e1;
        }

        .title {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>
