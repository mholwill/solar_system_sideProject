<template lang="html">
  <div id="planets-container">
    <div id="planet-grid">
      <img class="sun col-8" src="/images/theSun.png" alt="The Sun">
      <img class="mercury" :src="planets[0].image"/>
      <img class="venus" :src="planets[1].image"/>
      <img class="earth" :src="planets[2].image"/>
      <img class="mars" :src="planets[3].image"/>
      <img class="jupiter" :src="planets[4].image"/>
      <img class="saturn" :src="planets[5].image"/>
      <img class="uranus" :src="planets[6].image"/>
      <img class="neptune" :src="planets[7].image"/>
    </div>

    <div class="planet-name">
      <h2 v-for="(planet, index) in planets">{{planet.name}}</h2>
    </div>
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

  #planets-container {
    width: 100%;
  }

  [class*="col-"] {
    float: left;
    padding: 15px;
    border: 1px solid red;
  }

  .col-1 {width: 11.1%;}
  .col-2 {width: 22.2%;}
  .col-3 {width: 33.3%;}
  .col-4 {width: 44.4%;}
  .col-5 {width: 55.5%;}
  .col-6 {width: 66.6%;}
  .col-7 {width: 77.7%;}
  .col-8 {width: 88.8%;}
  .col-9 {width: 100%;}

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
    width: 35px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .earth:hover {
    transform: scale(1.7);
    transition-duration: 0.5s;
  }

  .mars{
    width: 35px;
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
    width: 200px;
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
