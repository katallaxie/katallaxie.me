import Vue from 'vue'
import { App } from './components/app'
import store from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

// critical css
import './boot'

// enables pwa
if (__PROD__) {
  require('./pwa')
}

// // remove loading
const loading = document.getElementsByClassName('loading')
if (loading.length > 0) {
  document.body.removeChild(loading[0])
}
document.body.classList.remove('critical')

// register plugins
Vue.use(BootstrapVue)

const bootstrap = new Vue({
  store,
  router,
  render: (h) => h(App),
})

// bootstrap application
bootstrap.$mount('#app')





