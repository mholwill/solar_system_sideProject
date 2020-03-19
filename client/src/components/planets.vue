<template lang="html">
  <div id="planets-container">
    <img class="mercury" :src="planets[0].image"/>
    <img class="venus" :src="planets[1].image"/>
    <img class="earth" :src="planets[2].image"/>
    <img class="mars" :src="planets[3].image"/>
    <img class="jupiter" :src="planets[4].image"/>
    <img class="saturn" :src="planets[5].image"/>
    <img class="uranus" :src="planets[6].image"/>
    <img class="neptune" :src="planets[7].image"/>
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

  .mercury{
    width: 20px;
  }

  .venus{
    width: 81px;
  }

  .earth{
    width: 100px;
  }

  .mars{
    width: 70px;
  }

  .jupiter{
    width: 317px;
    transform: scale(1);
    transition-duration: 0.5s;
  }

  .jupiter:hover {
    transform: scale(1.2);
    transition-duration: 0.5s;
  }


  .saturn{
    width: 250px;
  }

  .uranus{
    width: 150px;
  }

  .neptune{
    width: 180px;
  }

</style>
