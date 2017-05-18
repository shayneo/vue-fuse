<template>
<div id="app">
  <input type="text" v-model="search">
</div>
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
      return {
        shouldSort: this.shouldSort,
        threshold: this.threshold,
        location: this.location,
        distance: this.distance,
        maxPatternLength: this.maxPatternLength,
        minMatchCharLength: this.minMatchCharLength,
        keys: this.keys
      }
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
      this.$emit(this.eventName, this.result)
    }
  },
  mounted () {
    this.fuse = new window.Fuse(this.list, this.options);
    if (this.defaultAll) {
      this.result = this.list
    }
  }
}
</script>