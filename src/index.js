import component from './components/VueFuse.vue'
import fuse from 'fuse.js'

let VueFuse = Vue => {
  Vue.component(component.name, component)

  Vue.prototype.$search = function (term, list, options) {
    return new Promise(function (resolve, reject) {
      var run = new fuse(list, options)
      var results = run.search(term)
      resolve(results)
    })
  }
}
export default VueFuse