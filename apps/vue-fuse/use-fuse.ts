import Fuse from 'fuse.js'
import { computed, reactive, watch, ref, Ref, ComputedRef } from 'vue-demi'

export class VueFuse<T> {
  fuse: Fuse<T>
  results: Fuse.FuseResult<T>[]
  searchString: Ref<string>
  noResults: ComputedRef<boolean>
  search: (search?: string | null) => void
  constructor(list: readonly T[], options?: Fuse.IFuseOptions<T>) {
    this.fuse = new Fuse(list, options)
    this.results = []
    this.searchString = ref('')
    this.noResults = computed(() => {
      if (this.results.length === 0 && this.searchString.value.length > 0) {
        return true
      }
      return false
    })
    this.search = (search?: string | null) => {
      if (!this.fuse) {
        return
      }
      if (!this.search) {
        this.results = []
        return
      }
      this.results = this.fuse.search(search as string)
    }
    watch(this.searchString, this.search)
  }
}

export const useFuse = (list: readonly unknown[], options?: Fuse.IFuseOptions<unknown>) => {
  const vf = new VueFuse(list, options)
  return reactive(vf)
}