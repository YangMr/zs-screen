<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div v-if="loading" class="loading" style="color: #fff">
    <span class="text">园区资源加载中...</span>
    <div class="loading-process">
      <div class="process-wrapper"></div>
    </div>
    <div class="box"></div>
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: absolute;
  left: 66%;
  top: 40%;
  transform: translateX(-50%);
  height: 100%;
  text-align: center;

  .text {
    font-size: 14px;
    color: #909399;
    margin-bottom: 16px;
  }

  .loading-process {
    margin-top: 16px;
    width: 280px;
    overflow: hidden;
    height: 5px;
    background: rgba(255, 255, 255, 0.16);
    border-radius: 10px;

    .process-wrapper {
      width: 5%;
      height: 100%;
      background: linear-gradient(90deg, #48ffff 0%, #3656ff 100%);
      //动画执行的时间
      animation-duration: 1000s;
      // 设置帧动画的名称
      animation-name: loading;
    }
  }
}

@keyframes loading {
  0% {
    transform: scaleX(1);
    //width: 5%;
  }
  1% {
    transform: scaleX(38);
    //width: 99%;
  }
  100% {
    //width: 100%;
    transform: scaleX(40);
  }
}
</style>
