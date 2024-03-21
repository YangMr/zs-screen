import { ref } from 'vue'
import { getParkInfoApi } from '@/api/park.js'

export const useParkInfo = () => {
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
  return {
    parkInfo,
    getParkInfo
  }
}
