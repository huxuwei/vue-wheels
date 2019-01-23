import Toast from './toast'

export default {
  install(Vue, Options) {
    // console.log(Vue)
    Vue.prototype.$toast =  (message)=>{
      let a = Vue.extend(Toast)
      let b = new a()
      console.log(b)
      b.$slots.default = [message]
      b.$mount()
      document.body.appendChild(b.$el)
    }
    
  }
}