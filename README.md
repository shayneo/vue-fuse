# vue-fuse [![npm package](https://img.shields.io/npm/v/vue-fuse.svg)](https://www.npmjs.org/package/vue-fuse)

A Vue.js pluggin for fuzzy search library, Fuse.js. This plugin wraps Fuse.js in a convenient component with most of the boilerplate and props already set up. It's designed to enable you drop a client-side fuzzy search into your app without much work.

## Migrating from 2 to 3
The 3.x version of `vue-fuse` is compatible with both Vue 2.x and Vue 3.x. However, there were some breaking changes made
to better accomodate things going forward. For full details, check out the [migration guide](https://github.com/shayneo/vue-fuse/blob/master/docs/migration-2-3.md)

## Installation
```bash
npm install vue-fuse
```

VueFuse should be registered as a component within a parent component

```
<script>
import VueFuse from 'vue-fuse'

export default {
  components: {
    VueFuse,
  },
}
</script>
```

## Full Fuse.js Documentation
This is just a simple drop in component leverage Fuse.js. For complete documentation, check out [http://fusejs.io/](http://fusejs.io/)

## vue-fuse Component
The `vue-fuse` component can be added any of your existing Vue components. It creates an `input` html element, and takes props (listed below) to execute a search. Search results are then returned via events.

### vue-fuse Compoment Props
Most of the props line up with Fuse.js `options` with the defaults set to match the defaut Fuse.js behavior.
<table>
  <tr>
    <th>Property</th>
    <th>Desc</th>
    <th>Type</th>
    <th>Default values</th>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>placeholder text for the input</td>
    <td>String</td>
    <td>`""`</td>
  </tr>
  <tr>
    <td>defaultAll</td>
    <td>If true, results will inclide ALL items in list when search is null. If false, results will inclide no items when search is null.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>list</td>
    <td>The array of items that Fuse will search</td>
    <td>Array</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>fuseOpts</td>
    <td>
      The fuse.js configuration object.
    </td>
    <td>Oject, required</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>defaultAll</td>
    <td>If true, results will inclide ALL items in list when search is null. If false, results will inclide no items when search is null.</td>
    <td>Boolean</td>
    <td>true</td>
  </tr>
  <tr>
    <td>mapResults</td>
    <td>If true, search meta info (such as score and original index) will be removed from the result payload, and only the item from the list will be returned.</td>
    <td>Boolean</td>
    <td>false</td>
  </tr>
  <tr>
    <td>search</td>
    <td>Binding to the search prop will allow you to map data directly to the input</td>
    <td>String</td>
    <td>""</td>
  </tr>
</table>

### Component  Demo / Example
* [LIVE DEMO](https://vue-fuse-demo.netlify.com/)
* [DEMO SOURCE](https://github.com/shayneo/vue-fuse/blob/master/src/App.vue)

```
<template>
  <VueFuse :keys="keys" :list="bikes" :defaultAll="false" />
</template>

<script>
export default {
  data () {
    return {
      bikes: [
        {
          brand: "Schwinn",
          model: {
            name: "Classic",
            id: "1345"
          }
        },
        {
          brand: "Red Line",
          model: {
            name: "Flight",
            id: "5430"
          }
        },
        {
          brand: "Hoffman",
          model: {
            name: "Condore",
            id: "0543"
          }
        },
        {
          brand: "Tribe",
          model: {
            name: "CRMO",
            id: "0432"
          }
        }
      ],
      opts: {
        keys: ["brand", "model.name", "model.id"]
      }
    }
  }
}
</script>
```

### Accessing Results from vue-fuse Component
Results are stored in the `result` data array of the `vue-fuse` component. The component `watch`es the `result` array and emits an event when the array is changed. This event is named `fuse-results` and contains the result array.

