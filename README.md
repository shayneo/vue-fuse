# vue-fuse [![npm package](https://img.shields.io/npm/v/vue-fuse.svg)](https://www.npmjs.org/package/vue-fuse)

A plugin for Vue.js with the purpose of fuzzy searching. It wraps the Fuse.js library into a convinient component that handles most of the boilerplate and props.

## Migrating from v2 to v3
The v3.x of `vue-fuse` is compatible with Vue 2.x & Vue 3.x! 
However, there were some breaking changes made to better accommodate development going forward. For full details, check out the [migration guide](https://github.com/shayneo/vue-fuse/blob/master/docs/migration-2-3.md)

## Fuse.js Documentation
This is just a simple drop in component that leverage Fuse.js. For complete documentation, check out [http://fusejs.io/](http://fusejs.io/)

## Installation
```bash
npm install vue-fuse
```

VueFuse should be registered as a component within a parent component.
```
<script>
import VueFuse from 'vue-fuse'

export default {
  components: {
    VueFuse
  }
}
</script>
```

## Component
This component can be added into any of your existing project. It creates an `input` element, and takes props _(listed below)_ to execute a search. 
Search results are returned via `events`.

## Props
Most of the props line up with Fuse.js `options` with the defaults set to match the default Fuse.js behavior.

| Prop | Info | Type | Default | 
| ---- | ---- | ---- | ------- |
| `placeholder` | Text that will be used as a placeholder. | `String` | `''` |
| `defaultAll`  | Returns all items when search query is empty. | `Boolean` | `true` |
| `list`        | Array of items that will be queried. | `Array` | `[]` |
| `fuseOpts`    | An object that is used for configuration. | `Object (required)` | `{}` |
| `mapResults`  | Returns exact structure passed through as a `list`, but removes additional meta data. | `Boolean` | `false` |
| `search`      | Immediately query for results. | `String` | `''` |

| Event | Info |
| ----- | ---- |
| `@fuse-input` | Returns the value of input field. | 
| `@fuse-results` | Returns the results of queried list. |

## Demo
- [Demo Preview](https://vue-fuse-demo.netlify.com/)
- [Demo Source](https://github.com/shayneo/vue-fuse/blob/master/src/App.vue)

## Quick Example
```
<template>
  <VueFuse 
    :list="bikes"  
    :fuse-opts="fuseOptions"
    placeholder="Enter your search query..."
    @fuse-results="fuseResults"
  />
</template>

<script>
export default {
  data () {
    return {
      bikes: [
        {
          brand: 'Schwinn',
          model: {
            name: 'Classic',
            id: 1345
          }
        },
        {
          brand: 'Red Line',
          model: {
            name: 'Flight',
            id: 5430
          }
        },
        {
          brand: 'Hoffman',
          model: {
            name: 'Condore',
            id: 0543
          }
        },
        {
          brand: 'Tribe',
          model: {
            name: 'CRMO',
            id: 0432
          }
        }
      ],
      fuseOptions: {
        keys: ['brand', 'model.name', 'model.id']
      }
    }
  },

  methods: {
    fuseResults (results) {
      console.log(results)
    }
  }
}
</script>
```
