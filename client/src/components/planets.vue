<template lang="html">
  <div>
    <h2 v-for="planet in planets">{{planet.name}}</h2>
  </div>
</template>

<script>


export default {
  name: "planets",
  data(){
    return {

    }
  },
  props: ['planets']
}
</script>

<style lang="css" scoped>
</style>
