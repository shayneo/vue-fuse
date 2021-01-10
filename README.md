# vue-fuse [![npm package](https://img.shields.io/npm/v/vue-fuse.svg)](https://www.npmjs.org/package/vue-fuse)

> A Vue.js pluggin for fuzzy search library, Fuse.js
> There are two ways to use this plugin. The `vue-fuse` component, or the `$search` method. Be sure to take a look at the documentation for both below.

## Install
```bash
npm install vue-fuse
```

In main.js
```js
import VueFuse from 'vue-fuse'

Vue.use(VueFuse)
```
## Full Fuse.js Documentation
This is just a simple drop in component leverage Fuse.js. For complete documentation, check out [http://fusejs.io/](http://fusejs.io/)


* `term` - (required) the search term or query that you will search by
* `list` - (required) an array of items to search
* `options` - (required) an object with fuse.js options. At minimum, you must provide an array of `keys`. Other options will default to the fuse.js defaults (see here: http://fusejs.io/)

## vue-fuse Component
The `vue-fuse` component can be added any of your existing Vue components. It creates an `input` html element, and takes props (listed below) to execute a search. Search results are then returned via events.

### Compoment Props
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
Results are stored in the `result` data array of the `vue-fuse` component. The component `watch`es the `result` array and emits an event when the array is changed. This event is named `fuseResultsUpdated` and contains the result array. You can also name the event yourself (this is handy if you have more than one instance of `vue-fuse` in your application) by passing in a string to the `eventName` prop.

