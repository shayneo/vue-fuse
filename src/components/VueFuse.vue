<template>
  <input
    v-model="value"
    :placeholder="placeholder"
    type="search"
  >
</template>
<script>
import Fuse from 'fuse.js'

export default {
  name: 'VueFuse',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    search: {
      type: String,
      default: '',
    },
    defaultAll: {
      type: Boolean,
      default: true,
    },
    list: {
      type: Array,
      default: () => [],
    },
    fuseOpts: {
      type: Object,
      default: () => {},
    },
    mapResults: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      fuse: null,
      value: '',
      result: [],
    }
  },
  emits: ['fuse-input', 'fuse-results'],
  watch: {
    list () {
      if (this.fuse) {
        this.fuse.setCollection(this.list)
        this.fuseSearch()
      }
    },
    fuseOpts () {
      this.fuse.options = this.fuseOpts
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
    },
  },
  mounted () {
    this.initFuse()
  },
  methods: {
    defaultAllList (list) {
      if (this.mapResults) {
        return list
      }
      return list.map((item, refIndex) => {
        return { item, refIndex }
      })
    },
    initFuse () {
      this.fuse = new Fuse(this.list, this.fuseOpts)
      if (this.defaultAll) {
        this.result = this.defaultAllList(this.list)
      }
      if (this.search) {
        this.value = this.search
      }
    },
    fuseSearch () {
      if (this.value.trim() === '') {
        if (this.defaultAll) {
          this.result = this.defaultAllList(this.list)
        } else {
          this.result = []
        }
      } else {
        const r = this.fuse.search(this.value.trim())
        this.result = this.mapResults ? r.map(r => r.item) : r
      }
    },
  },
}
</script>
