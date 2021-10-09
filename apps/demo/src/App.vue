<template>
  <h1>VueFuse Example</h1>
  <input type="text" v-model="search">
  <p v-if="noResults">Sorry, no results for {{search}}</p>
  <div v-for="(book, i) in results" :key="i">
    <div>{{book.name}}</div>
    <div>{{book.description}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useVueFuse } from 'vue-fuse'
import { books } from './books'

export default defineComponent({
  name: 'App',
  setup () {
    const fuse = useVueFuse(books, { keys: [{ name: 'name', weight: 2} , { name: 'description', weight: 1}]})
    const { search, results, noResults } = fuse
    return {
      search,
      results,
      noResults,
    }
  }
})
</script>


