<template>
  <div id="app">
    <h1>vue-fuse demo</h1>
    <p>This pluggin provides the 'vue-fuse' component, which can be dropped into your app. The component UI is a barebones &ltinput&gt tag, as shown below.</p><p> The component also takes a number of props, that are used to configure the search and define the event that is eminated when the search results update.</p>
    <vue-fuse :keys="keys" :list="bikes" eventName="bikesChanged" :defaultAll="defaultAllToggle"></vue-fuse>
    <label><input type="checkbox" @click="toggle">defaultAll</label>
    <div id="list">
      <ul>
        <li v-for="bike in results" key="bike.model.id">{{bike.brand}} | {{bike.model.name}} {{bike.model.id}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      defaultAllToggle: false,
      results: [],
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
  created () {
    this.$on('bikesChanged', results => {
      this.results = results
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#list {
  margin-left: 33%;
  margin-right: 33%;
}
</style>
