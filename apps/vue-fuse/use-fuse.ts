import Fuse from 'fuse.js'
import { computed, ComputedRef, Ref, ref, watch } from 'vue-demi'

type MaybeReactiveList<T> = ComputedRef<Array<T>> | Array<T> | Ref<Array<T>> | Ref<null> | Ref<null | Array<T>>

export class VueFuse<T> {
  fuse: Ref<Fuse<T>>
  resultsRaw: Ref<Fuse.FuseResult<T>[]>
  results: ComputedRef<Array<T>>
  search: Ref<string>
  noResults: ComputedRef<boolean>
  runSearch: (search?: string | null) => void
  loadItems: (items: T[]) => void
  constructor (list: MaybeReactiveList<T>, options?: Fuse.IFuseOptions<T>) {
    this.search = ref('')
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

    this.loadItems = (items: T[]) => {
      this.fuse = ref(new Fuse(items, options))
      this.runSearch(this.search.value)
    }

    let localArray: Array<T> = []
    if (Array.isArray(list)) {
      localArray = list
    } else if (list) {
      localArray = list.value ?? []
      watch(list, () => {
        this.loadItems(list.value ?? [])
      })
    }
    this.fuse = ref(new Fuse(localArray, options))

    this.resultsRaw = ref([])

    this.noResults = computed(() => {
      if (this.results.value.length === 0 && this.search.value.length > 0) {
        return true
      }
      return false
    })

    this.results = computed(() => this.resultsRaw.value.map(r => r.item))

    watch(this.search, this.runSearch)
  }
}

export function useVueFuse<T> (list: MaybeReactiveList<T>, options?: Fuse.IFuseOptions<T>): VueFuse<T> {
  return new VueFuse(list, options)
}
