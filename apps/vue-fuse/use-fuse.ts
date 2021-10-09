import Fuse from 'fuse.js'
import { computed, watch, ref, Ref, ComputedRef, toRefs , ToRefs} from 'vue-demi'

export class VueFuse<T> {
  fuse: Ref<Fuse<T>>
  results: Ref<Fuse.FuseResult<T>[]>
  term: Ref<string>
  noResults: ComputedRef<boolean>
  search: (search?: string | null) => void
  constructor(list: readonly T[], options?: Fuse.IFuseOptions<T>) {
    this.fuse = ref(new Fuse(list, options))
    this.results = ref([])
    this.term = ref('')
    this.noResults = computed(() => {
      if (this.results.value.length === 0 && this.term.value.length > 0) {
        return true
      }
      return false
    })
    this.search = (search?: string | null) => {
      if (!this.fuse) {
        return
      }
      if (!this.search) {
        this.results.value = []
        return
      }
      this.results.value = this.fuse.value.search(search as string)
    }
    watch(this.term, this.search)
  }
}

export function useVueFuse<T>(list: readonly T[], options?: Fuse.IFuseOptions<T>): ToRefs<VueFuse<T>> {
 const instance = new VueFuse(list, options)
 return toRefs(instance)
}