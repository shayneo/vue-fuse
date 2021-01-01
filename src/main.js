import Vue from 'vue'
import App from './App.vue'
import './tailwind.css'
import Fuse from 'fuse.js'

Vue.config.productionTip = false

Vue.prototype.$search = function (term, list, options) {
  return new Promise(function (resolve, reject) {
    var run = new Fuse(list, options)
    var results = run.search(term)
    resolve(results)
  })
}

new Vue({
  render: h => h(App),
}).$mount('#app')
