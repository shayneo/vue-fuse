import Fuse from 'fuse.js'
import { computed, watch, ref, Ref, ComputedRef } from 'vue-demi'

export class VueFuse<T> {
  fuse: Ref<Fuse<T>>
  resultsRaw: Ref<Fuse.FuseResult<T>[]>
  results: ComputedRef<Array<T>>
  search: Ref<string>
  noResults: ComputedRef<boolean>
  runSearch: (search?: string | null) => void
  constructor(list: readonly T[], options?: Fuse.IFuseOptions<T>) {
    this.fuse = ref(new Fuse(list, options))
    this.resultsRaw = ref([])
    this.search = ref('')

    this.noResults = computed(() => {
      if (this.results.value.length === 0 && this.search.value.length > 0) {
        return true
      }
      return false
    })

    this.results = computed(() => this.resultsRaw.value.map(r => r.item))

    this.runSearch = (search?: string | null) => {
      if (!this.fuse) {
        return
      }
      if (!search) {
        this.resultsRaw.value = []
        return
      }
      this.resultsRaw.value = this.fuse.value.search(search as string)
    }
    watch(this.search, this.runSearch)
  }
}

export function useVueFuse<T>(list: readonly T[], options?: Fuse.IFuseOptions<T>): VueFuse<T> {
 return new VueFuse(list, options)
}

