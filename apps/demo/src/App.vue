<template>
  <div class="w-full mx-auto bg-gray-200 min-h-screen p-6 flex flex-col items-center">
    <h1 class="text-center text-2xl">VueFuse Example</h1>

    <input type="text" v-model="search" class="h-[48px]  px-4 py-1 rounded-md shadow-md my-4" placeholder="Search">
    <div class="result-list flex flex-col gap-y-6">
      <p v-if="noResults">Sorry, no results for {{search}}</p>
      <p v-if="search === ''">Try searching books of the Bible via the input above.</p>
      <div v-for="(book, i) in results" :key="i">
        <div class="font-semibold text-lg">{{book.name}}</div>
        <div class="font-sm">{{book.description}}</div>
      </div>
    </div>
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

<style scoped>
.result-list {
  max-width: 450px;
}
</style>
