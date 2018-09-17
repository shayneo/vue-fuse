import Vue from 'vue'
import VueFuse from './components/VueFuse.vue'
import Fuse from 'fuse.js'

Vue.component(VueFuse.name, VueFuse)
Vue.prototype.$search = function (term, list, options) {
  return new Promise(function (resolve, reject) {
    var run = new Fuse(list, options)
    var results = run.search(term)
    resolve(results)
  })
}
export default { VueFuse }
