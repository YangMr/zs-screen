import request from '@/utils/request.js'

/**
 * 园区大屏-查询楼宇概况 收入和产业信息
 * @returns {*}
 */
export const getParkInfoApi = () => {
  return request({
    url: '/park/statistics/info',
    method: 'get'
  })
}

// 获取点击的楼宇信息
export const getBuildingInfoApi = (id) => {
  console.log('===>', id)
  return request({
    url: '/park/statistics/building',
    method: 'get',
    params: {
      id
    }
  })
}

// 获取点击的停车场信息
export const getAreaInfoApi = (id) => {
  return request({
    url: `/parking/area/${id}`,
    method: 'get'
  })
}
