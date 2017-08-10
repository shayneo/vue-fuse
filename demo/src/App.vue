<template>
  <div id="app">
    <div class="demo">
      <h2><code>vue-fuse</code> component demo</h2>
      <p>This pluggin provides the 'vue-fuse' component, which can be dropped into your app. The component UI is a barebones &ltinput&gt tag, as shown below.</p><p> The component also takes a number of props, that are used to configure the search and define the event that is eminated when the search results update.</p>
      <vue-fuse :keys="keys" :list="bikes" event-name="bikesChanged" :default-all="defaultAllToggle"></vue-fuse>
      <label><input type="checkbox" @click="toggle">defaultAll</label>
      <div id="list">
        <ul>
          <li v-for="bike in componentResults" key="bike.model.id">{{bike.brand}} | {{bike.model.name}} {{bike.model.id}}</li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="demo">
      <h2><code>$search</code> instance method demo</h2>
      <p>Instead of using the component, you can use the $search instance method to execute a search programatically</p>
      <input type="search" v-model="term">
      <div id="list">
        <ul>
          <li v-for="bike in methodResults" key="bike.model.id">{{bike.brand}} | {{bike.model.name}} {{bike.model.id}}</li>
        </ul>
      </div>
    </div>
    <hr>
    <div class="demo">
      <h2>here's a list of bikes to search through!</h2>
      <div id="list">
        <ul>
          <li v-for="bike in bikes" key="bike.model.id">{{bike.brand}} | {{bike.model.name}} {{bike.model.id}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      term: '',
      defaultAllToggle: false,
      options: {
        keys: ["brand", "model.name", "model.id"]
      },
      componentResults: [],
      methodResults: [],
      keys: ["brand", "model.name", "model.id"],
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
        },
        {
          brand: "Mongoose",
          model: {
            name: "isLoose",
            id: "5000"
          }
        },
        {
          brand: "GT",
          model: {
            name: "Dyno",
            id: "2345"
          }
        },
        {
          brand: "Canonndale",
          model: {
            name: "3500",
            id: "cd35"
          }
        },
        {
          brand: "Giant",
          model: {
            name: "pegasus",
            id: "6346"
          }
        }
      ]
    }
  },
  methods: {
    toggle () {
      this.defaultAllToggle = !this.defaultAllToggle
      this.$forceUpdate()
    }
  },
  watch: {
    term () {
      this.$search(this.term, this.bikes, this.options).then(results => {
        this.methodResults = results
      })
    }
  },
  created () {
    this.$on('bikesChanged', results => {
      this.componentResults = results
    })
  }
}
</script>
