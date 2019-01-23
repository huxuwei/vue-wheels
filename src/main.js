import Vue from 'vue'
import Demo from './demo.vue'
import Toast from './plugin.js'

Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
  render: h => h(Demo)
}).$mount('#app')