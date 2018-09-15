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
    eventName: {
      type: String,
      default: 'fuseResultsUpdated'
    },
    inputChangeEventName: {
      type: String,
      default: 'fuseInputChanged'
    },
    defaultAll: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array
    },
    caseSensitive: {
      type: Boolean,
      default: false
    },
    includeScore: {
      type: Boolean,
      default: false
    },
    includeMatches: {
      type: Boolean,
      default: false
    },
    tokenize: {
      type: Boolean,
      default: false
    },
    matchAllTokens: {
      type: Boolean,
      default: false
    },
    findAllMatches: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    shouldSort: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 0.6
    },
    location: {
      type: Number,
      default: 0
    },
    distance: {
      type: Number,
      default: 100
    },
    maxPatternLength: {
      type: Number,
      default: 32
    },
    minMatchCharLength: {
      type: Number,
      default: 1
    },
    keys:  {
      type: Array
    }
  },
  computed: {
    options () {
      var options = {
        caseSensitive: this.caseSensitive,
        includeScore: this.includeScore,
        includeMatches: this.includeMatches,
        tokenize: this.tokenize,
        matchAllTokens: this.matchAllTokens,
        findAllMatches: this.findAllMatches,
        shouldSort: this.shouldSort,
        threshold: this.threshold,
        location: this.location,
        distance: this.distance,
        maxPatternLength: this.maxPatternLength,
        minMatchCharLength: this.minMatchCharLength,
        keys: this.keys
      }
      if (this.id !== '') {
        options.id = this.id
      }
      return options
    }
  },
  watch: {
    list () {
      this.fuse.list = this.list
      this.fuseSearch()
    },
    search () {
      this.value = this.search
    },
    value () {
      this.$parent.$emit(this.inputChangeEventName, this.value)
      this.fuseSearch()
    },
    result () {
      this.$parent.$emit(this.eventName, this.result)
    }
  },
  methods: {
    initFuse () {
      this.fuse = new Fuse(this.list, this.options)
      if (this.defaultAll) {
        this.result = this.list
      }
      if (this.search) {
        this.value = this.search
      }
    },
    fuseSearch () {
      if (this.value.trim() === '')
        if (this.defaultAll) {
          this.result = this.list
        } else {
          this.result = []
        }
      else
        this.result = this.fuse.search(this.value.trim())
    }
  },
  /**
  * Vue 1.x
  */
  ready () {
    this.initFuse()
  },
  /**
  * Vue 2.x
  */
  mounted () {
    this.initFuse()
  }
}
</script>
