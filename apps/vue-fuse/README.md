# vue-fuse

A fully typed, lightweight, and reactive interface for [Fuse.js](https://fusejs.io/)
fuzzy search lib.

[Live Demo](https://vue-fuse-demo.netlify.app/)

## 4.X
Version 4.X is a complete rewrite, intended to leverage Vue 3 (but still works with Vue 2 with the composition-api plugin).

Check out the [3.x branch](https://github.com/shayneo/vue-fuse/tree/3.x) for older version, or look at release notes.

## Vue 3 or Vue 2
`vue-fuse` uses [vue-demi](https://www.npmjs.com/package/vue-demi) to offer
Vue 3.X or Vue 2.X compatibility.

**Vue 2.X requires** [@vue/composition-api](https://www.npmjs.com/package/@vue/composition-api)

## Getting Started
```
npm i vue-fuse fuse.js
```

```vue
<template>
  <input type="text" v-model="search">
    <p v-if="noResults">Sorry, no results for {{search}}</p>
    <div v-for="(r, i) in results" :key="i">
      {{ r }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVueFuse } from 'vue-fuse'

export default defineComponent({
  setup () {
    const myList = ['aaaa', 'bbbb', 'cccc', 'abc', 'xyz']
    const { search, results, noResults } = useVueFuse(myList)

    return {
      search,
      results,
      noResults,
    }
  }
})
</script>
```

## Typings
A vue-fuse instance will detect the typed array of items
needed to search. Thus, your results should be fully typed
to match the type of the array items passed in.

## Options
`useVueFuse` and/or the `VueFuse` class constructor accept an optional
second argument where you can pass in a [Fuse.js Options Object](https://fusejs.io/api/options.html)

## results, resultsRaw, noResults
```js
const { results, resaltsRaw, noResults } = useVueFuse(['a', 'b', 'c'])
```

`results` - is an array containing a the subset of items you passed in that match the search
`resultsRaw` - exposed the full result payload from Fuse.js, this contains things like the
original array index or the match "score".
`noResults` - a computed boolean that will be `true` when there are no results,
but the search term is not empty

## Searching Array of Objects
The examples above include simple arrays of strings, but you'll probably want to
search accross more complex data structures. Fuse.js supports this by allowing you to
pass [keys](https://fusejs.io/api/options.html#keys) into the search options.

so if you have an array of objects like this:
```js
const bikes = [
  {
    brand: 'Santa Cruz',
    model: '5010',
    year: 2021,
    wheelSize: 27.5,
  },
  {
    brand: 'Canyon',
    model: 'Neuron',
    year: 2021,
    wheelSize: 29,
  }
]
```

To search by brand and model, you could set your config to:
```js
{
  keys: ['brand', 'model']
}
```

You can also weight each key differently
```js
{
  keys: [
    {
      name: 'brand',
      weight: 3,
    },
    {
      name: 'model',
      weight: 1,
    }
  ]
}
```

You can also search nested keys by chaining the property names
```js
{
  keys: ['foo', 'bar.baz.buzz']
}
```
