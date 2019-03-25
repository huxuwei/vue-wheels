import Toast from './toast'

export default {
  install(Vue, Options) {
    Vue.prototype.$toast =  (message, toastOptions)=>{
      let a = Vue.extend(Toast)
      let b = new a({
        propsData: {
          closeButton: toastOptions
        }
      })
      b.$slots.default = [message]
      b.$mount()
      document.body.appendChild(b.$el)
    }
    
  }
}