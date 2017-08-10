import VueFuse from './src/VueFuse.vue'
import fuse from 'fuse.js'

VueFuse.install = function(Vue) {
  Vue.component('vue-fuse', VueFuse)
  Vue.prototype.$testfuse = function (val) {
    console.log(val)
  }
  Vue.prototype.$search = function (term, list, options) {
    return new Promise((resolve, reject) => {
      var run = new fuse(list, options)
      var results = run.search(term)
      resolve(results)
    })
  }
}

export default VueFuse
