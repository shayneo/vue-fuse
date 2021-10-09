<template>
  <div>hello world</div>
  <input type="text" v-model="fuse.term.value">
  {{fuse.results.value }}
</template>

<script lang="ts">
import { defineComponent,ref, watchEffect  } from "vue";
import { useVueFuse } from 'vue-fuse'

export default defineComponent({
  name: 'App',
  setup () {
    const fuse = useVueFuse(['aaa', 'bbb', 'ccc'])
    return {
      fuse,
    }
  }
})
</script>

