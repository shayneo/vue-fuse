import VueFuse from './src/VueFuse.vue'

VueFuse.install = function(Vue) {
  Vue.component('vue-fuse', VueFuse)
}

export default VueFuse
