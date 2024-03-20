<script setup>
import { getParkInfoApi } from '@/api/park.js'
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import VScaleScreen from 'v-scale-screen'

// 初始化一个变量,保存请求到的园区数据
const parkInfo = ref({})

// 获取园区数据
const getParkInfo = async () => {
  try {
    const res = await getParkInfoApi()
    parkInfo.value = res.data
  } catch (e) {
    console.log(e)
  }
}

// 1. 安装并引入E charts  2. 创建渲染的画布 3. 实例化echarts 4. 设置配置项 5. 渲染配置项  6. 自适应

// 渲染年度收入分析图表

const initBarChart = () => {
  const { parkIncome } = parkInfo.value
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '0',
      top: '10px',
      bottom: '0',
      right: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: parkIncome?.xMonth
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        barWidth: '10px',
        data: parkIncome?.yIncome.map((item, index) => {
          let color = ''
          if (index % 2 === 0) {
            color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0.23, color: '#74c0f8' },
              { offset: 1, color: 'rgba(116,192,248,0.00)' }
            ])
          } else {
            color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0.23, color: '#ff7152' },
              { offset: 1, color: 'rgba(255,113,82,0.00)' }
            ])
          }
          return {
            value: item,
            itemStyle: {
              color: color
            }
          }
        }),

        type: 'bar'
      }
    ],
    textStyle: {
      color: '#B4C0CC'
    }
  }
  // const barChart = ref(null)
  const myChart = echarts.init(document.getElementById('barChart'))
  option && myChart.setOption(option)
}

const initPieChart = () => {
  const { parkIndustry } = parkInfo.value

  const option = {
    color: ['#00B2FF', '#2CF2FF', '#892CFF', '#FF624D', '#FFCF54', '#86ECA2'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      // top: '5%',
      left: 'center',
      bottom: '0',
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#c6d1db'
      }
    },
    series: [
      {
        name: '园区产业分析',
        type: 'pie',
        radius: ['55%', '60%'],
        avoidLabelOverlap: false,
        center: ['50%', '40%'],
        label: {
          show: false,
          position: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return `${params.seriesName} <br/>${params.marker}  ${params.name} ${params.percent}%`
          }
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: parkIndustry
      }
    ]
  }

  const myChart = echarts.init(document.getElementById('pieChart'))

  option && myChart.setOption(option)
}

onMounted(async () => {
  await getParkInfo()
  initBarChart()
  initPieChart()
})
</script>

<template>
  <VScaleScreen height="1080" width="1920">
    <div class="all-charts">
      <div class="section-one">
        <img
          alt="logo"
          class="img-header"
          src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E6%A6%82%E5%86%B5%402x.png"
        />
        <div class="icons-container">
          <div class="item">
            <div class="icons-item building-icon">
              <span class="number">{{ parkInfo.base?.buildingTotal }}</span>
            </div>
            <span class="title">楼宇总数</span>
            <span class="unity">(栋)</span>
          </div>
          <div class="item">
            <div class="icons-item enterprise-icon">
              <span class="number">{{ parkInfo.base?.enterpriseTotal }}</span>
            </div>
            <span class="title">入驻企业总数</span>
            <span class="unity">(家)</span>
          </div>
          <div class="item">
            <div class="icons-item car-icon">
              <span class="number">{{ parkInfo.base?.parkingTotal }}</span>
            </div>
            <span class="title">车位总数</span>
            <span class="unity">(个)</span>
          </div>
          <div class="item">
            <div class="icons-item rod-icon">
              <span class="number">{{ parkInfo.base?.chargePoleTotal }}</span>
            </div>
            <span class="title">一体杆总数</span>
            <span class="unity">(个)</span>
          </div>
        </div>
      </div>
      <div class="section-two">
        <img
          alt="logo"
          class="img-header"
          src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E5%B9%B4%E5%BA%A6%E6%94%B6%E5%85%A5%E5%88%86%E6%9E%90%402x.png"
        />
        <div class="bar-chart-title">
          <span>单位：元</span>
          <div>
            <span class="bar-icon blue-bar-icon"></span>
            <span class="bar-icon red-bar-icon"></span>
            收入情况
          </div>
        </div>
        <div id="barChart" class="bar-chart"></div>
      </div>
      <div class="section-three">
        <img
          alt="logo"
          class="img-header"
          src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E4%BA%A7%E4%B8%9A%E5%88%86%E5%B8%83%402x.png"
        />
        <div id="pieChart" class="pie-chart">123</div>
      </div>
    </div>
  </VScaleScreen>
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

  .img-header {
    height: 30px;
  }

  .section-one {
    flex-basis: 25%;

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

        .building-icon {
          background: url('@/assets/building-icon.png') no-repeat 50% 0 / contain;
        }

        .enterprise-icon {
          background: url('@/assets/enterprise-icon.png') no-repeat 50% 0 / contain;
        }

        .car-icon {
          background: url('@/assets/car-icon.png') no-repeat 50% 0 / contain;
        }

        .rod-icon {
          background: url('@/assets/rod-icon.png') no-repeat 50% 0 / contain;
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

  .section-two {
    flex-basis: 35%;

    .bar-chart-title {
      display: flex;
      justify-content: space-between;
      height: 30px;
      align-items: center;

      .bar-icon {
        width: 30px;
        height: 10px;
        background: red;
        display: inline-block;
      }

      .blue-bar-icon {
        background: linear-gradient(90deg, #74c0f8, rgba(116, 192, 248, 0));
      }

      .red-bar-icon {
        background: linear-gradient(90deg, #ff7152, rgba(255, 113, 82, 0));
      }
    }

    .bar-chart {
      height: calc(100% - 60px);
    }
  }

  .section-three {
    flex-basis: 35%;

    .pie-chart {
      height: calc(100% - 30px);
      margin: 0 auto;
      padding-bottom: 20px;
      width: 80%;
    }
  }
}
</style>
