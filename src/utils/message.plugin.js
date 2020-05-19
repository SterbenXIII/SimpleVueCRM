export default {
    install(Vue, options) {
      Vue.prototype.$message = function(html) {
        Window.M.toast({html})
      }
  
      Vue.prototype.$error = function(html) {
        Window.M.toast({html: `[ну как так-то]: ${html}`})
      }

      console.log(options)
    }

        
  }
  