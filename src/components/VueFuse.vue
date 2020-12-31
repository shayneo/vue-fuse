<template>
  <input type="search" v-model="value" :placeholder="placeholder">
</template>
<script>
import Fuse from 'fuse.js'

export default {
  name: 'VueFuse',
  data () {
    return {
      fuse: null,
      value: '',
      result: []
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    search: {
      type: String,
      default: ''
    },
    defaultAll: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array
    },
    fuseOpts: {
      type: Object,
      default: () => { return {}}
    }
  },
  watch: {
    list () {
      this.initFuse()
      this.fuseSearch()
    },
    search () {
      this.value = this.search
    },
    value () {
      this.$emit('fuse-input', this.value)
      this.fuseSearch()
    },
    result () {
      this.$emit('fuse-results', this.result)
    }
  },
  methods: {
    initFuse () {
      this.fuse = new Fuse(this.list, this.fuseOpts)
      if (this.defaultAll) {
        this.result = this.list
      }
      if (this.search) {
        this.value = this.search
      }
    },
    fuseSearch () {
      if (this.value.trim() === '') {
        if (this.defaultAll) {
          this.result = this.list
        } else {
          this.result = []
        }
      } else {
        this.result = this.fuse.search(this.value.trim())
      }
    }
  },
  mounted () {
    this.initFuse()
  }
}
</script>
