<template lang="html">
  <div id="planets-container">
    <div id="planet-grid">
      <img class="sun " src="/images/theSun.png" alt="The Sun">
      <img class="mercury " :src="planets[0].image"/>
      <img class="venus " :src="planets[1].image"/>
      <img class="earth" :src="planets[2].image"/>
      <img class="mars" :src="planets[3].image"/>
      <img class="jupiter" :src="planets[4].image"/>
      <img class="saturn" :src="planets[5].image"/>
      <img class="uranus" :src="planets[6].image"/>
      <img class="neptune" :src="planets[7].image"/>
    </div>

    <!-- <div class="planet-name">
      <h2 v-for="(planet, index) in planets">{{planet.name}}</h2>
    </div> -->
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

  #planet-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-column-gap: 1em;
  }

  .planet-name {

  }

  .sun {
    float: left;
    top: 0;
    padding-top: 0px;
    width: 300px;
    transform: scale(1.2);
    transition-duration: 0.5s;
  }

  .sun:hover {
    transform: scale(1.4);
    transition-duration: 0.5s;
  }

  .mercury{
    width: 20px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .mercury:hover{
    transform: scale(1.7);
    transition-duration: 0.5s;
    /* visibility: visible; */
  }

  .venus{
    width: 30px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .venus:hover {
    transform: scale(1.7);
    transition-duration: 0.5s;
  }

  .earth{
    width: 50px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .earth:hover {
    transform: scale(1.7);
    transition-duration: 0.5s;
  }

  .mars{
    width: 45px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .mars:hover {
    transform: scale(1.7);
    transition-duration: 0.5s;
  }

  .jupiter{
    width: 275px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .jupiter:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }


  .saturn{
    width: 350px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .saturn:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }

  .uranus{
    width: 100px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .uranus:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }

  .neptune{
    width: 120px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .neptune:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }

</style>
