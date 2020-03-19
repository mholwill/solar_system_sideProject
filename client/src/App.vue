<template>
  <div id="app">
    <h2>Solar System</h2>
    <planets :planets="planets"/>
  </div>
</template>

<script>
import PlanetsService from "./services/PlanetsService.js"
import planets from "./components/planets.vue"

export default {
  name: 'App',
  data() {
    return {
      planets: []
    }
  },
  mounted() {
    PlanetsService.getPlanets()
    .then(data => this.planets = data)
  },
  components: {
    'planets': planets
  }
}
</script>

<style>
#app {
  font-family: DJB Chalk It Up, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 3em;
  color: white;
  margin-top: 60px;
}
</style>
