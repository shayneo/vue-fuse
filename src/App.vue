<template>
  <div id="app">
    <VueFuse
      placeholder="Seach for a bike"
      event-name="bikesChanged"
      :list="bikes"
      :keys="['brand', 'model.name', 'model.id']"
    />
    <ul>
      <li v-for="result in results" :key="result.model.id">
        {{ result.brand }} {{ result.model.name}} {{ result.model.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import VueFuse from './components/VueFuse.vue'

export default {
  name: 'app',
  components: {
    VueFuse
  },
  data () {
    return {
      results: [],
      bikes: [
        {
          brand: 'Schwinn',
          model: {
            name: 'Classic',
            id: '1345ppppgd'
          }
        },
        {
          brand: 'Red Line',
          model: {
            name: 'Flight',
            id: '5430sdfsdf'
          }
        },
        {
          brand: 'Hoffman',
          model: {
            name: 'Condore',
            id: '0543ADS'
          }
        },
        {
          brand: 'Tribe',
          model: {
            name: 'CRMO',
            id: '043dfgdfg2'
          }
        },
        {
          brand: 'Mongoose',
          model: {
            name: 'isLoose',
            id: '50ff00'
          }
        },
        {
          brand: 'GT',
          model: {
            name: 'Dyno',
            id: '234fff5'
          }
        },
        {
          brand: 'Canonndale',
          model: {
            name: '3500',
            id: 'cd3asd5'
          }
        },
        {
          brand: 'Giant',
          model: {
            name: 'pegasus',
            id: '6346'
          }
        }
      ]
    }
  },
  created () {
    this.$on('bikesChanged', results => {
      this.results = results
    })
  }
}
</script>
