import VueFuse from './components/VueFuse.vue'
import Fuse from 'fuse.js'

function install (Vue) {
  Vue.component(VueFuse.name, VueFuse)
  Vue.prototype.$search = function (term, list, options) {
    return new Promise(function (resolve, reject) {
      var run = new Fuse(list, options)
      var results = run.search(term)
      resolve(results)
    })
  }
}

// to be registered via Vue.use() as well as Vue.component()
VueFuse.install = install

// Export component by default
export default VueFuse
