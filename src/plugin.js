import Toast from './toast'

export default {
  install(Vue, Options) {
    Vue.prototype.$toast =  (message)=>{
      let a = Vue.extend(Toast)
      let b = new a()
      
      b.$slots.default = [message]
      b.$mount()
      document.body.appendChild(b.$el)
    }
    
  }
}