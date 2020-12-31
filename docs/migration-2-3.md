# 2.0 to 3.0 Migration Guide

vue-fuse 3.0 has 2 simple goals.
1. Provide compatibility with Vue 3.0
2. Use the latest version of Fuse.js, and make supporting new versions easier going forward.

## Vue 3 & Vue 2 Compatibility
vue-fuse 3.0 will work with Vue 3 and Vue 2, as Vue 2 is still carrying the majority
of production projects in the Vue community. We have dropped support for Vue 1.0 in vue-fuse 3.0.

## Breaking Changes
### 1. Consolidated props into a `fuseOpts` prop. 
Previously, all of the Fuse.js config options where listed as individual props. 
Now, we combine these into a single object.
This will make fuse.js updates easier going forward.

### 2. Results format. 
In the latest version of Fuse.js, results are returned like so:
```
[
  {
    item: {
      my: 'thing'
    },
    refIndex: 0
  }
]
```
`item` represents the matching item from the list of results. `refIndex` refers to the
index of the item in the original list that was search took place against.

### 3. The global `$search` method is gone. 
If you want to "roll your own" search method, just 
import fuse.js directly into your component/setup function.

### 4. No more Vue 1.0 support
This just eliminates extra overhead as we move things forward.

### 5. No more custom event names.
Vue 3 requires that emmited events be declared in `emits`, so we've settled on

`fuse-results` and `fuse-input`

### 6. No more parent emmits

`fuse-results` and `fuse-input` events used to be emitted from the parent as well
as the `vue-fuse` component. This is no longer the case Vue3 requires emits to be
declared ahead of time.