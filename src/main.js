import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/index.scss'

import App from './App.vue'
import router from './router'

import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'

renderWithQiankun({
  // 挂载时
  mount(props) {
    console.log('mount')
    render(props)
  },

  bootstrap() {
    console.log('bootstrap')
  },
  unmount(props) {
    console.log('unmount', props)
  }
})

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

function render(props = {}) {
  const { container } = props
  console.log('container', container)
  const app = createApp(App)

  app.use(router)
  app.use(createPinia())

  app.mount(container ? container.querySelector('#app') : '#app')
}
