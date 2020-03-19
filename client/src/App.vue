<template>
  <div id="app">
    <h2>Solar System</h2>
    <img class="sun" src="/images/theSun.png" alt="The Sun">
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

  .sun {
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 0px;
    width: 300px;
  }
</style>
