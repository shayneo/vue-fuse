<template>
  <input type="search" v-model="search">
</template>
<script>
import Fuse from 'fuse.js'
window.Fuse = Fuse

export default {
  data () {
    return {
      fuse: null,
      search: '',
      result: []
    }
  },
  props: {
    eventName: {
      type: String,
      default: 'fuseResultsUpdated'
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
    search() {
      if (this.search.trim() === '')
        if (this.defaultAll) {
          this.result = this.list 
        } else {
          this.result = []
        }
      else
        this.result = this.fuse.search(this.search.trim())
    },
    result () {
      this.$parent.$emit(this.eventName, this.result)
    }
  },
  methods: {
    initFuse () {
      this.fuse = new window.Fuse(this.list, this.options);
      if (this.defaultAll) {
        this.result = this.list
      }
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
