import Cookies from 'js-cookie'
// token常量
const TOKEN_KEY = 'vue_admin_template_token'

// 读取cookie
export const getCookie = () => {
  return Cookies.get(TOKEN_KEY)
}

// 设置cookie
export const setCookie = (value) => {
  Cookies.set(TOKEN_KEY, value)
}

// 清空cookie
export const removeCookie = () => {
  Cookies.remove(TOKEN_KEY)
}
