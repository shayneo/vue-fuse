<template>
  <div>hello world</div>
  <input type="text" v-model="fuse.searchString">
  {{fuse.results }}
</template>

<script lang="ts">
import { defineComponent,ref, watchEffect  } from "vue";
import { useFuse } from 'vue-fuse'

export default defineComponent({
  name: 'App',
  setup () {
    const fuse = useFuse(['aaaa', 'bbbb', 'ccc'])
    return {
      fuse,
    }
  }
})
</script>

