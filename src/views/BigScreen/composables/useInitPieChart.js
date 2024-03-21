import * as echarts from 'echarts'

export const useInitPieChart = (parkInfo) => {
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
  return {
    initPieChart
  }
}
