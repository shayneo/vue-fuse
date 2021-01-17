import VueFuse from './components/VueFuse.vue'

function install (Vue) {
  Vue.component(VueFuse.name, VueFuse)
}

// to be registered via Vue.use() as well as Vue.component()
VueFuse.install = install

// Export component by default
export default VueFuse
