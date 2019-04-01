<template>
  <div class="works-row">
    <div class="container">
      <div class="themesflat-headings style-1 text-center clearfix">
        <h2 class="heading">
          {{ howitworks.title }}
        </h2>
      </div>
      <div class="row">
        <div v-for="(item, index) in howitworks.services" :key="index" class="works-container">
          <img :src="item.img" :alt="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.timeframe }}</p>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
import howitworks from '../content/howitworks.json'

export default {
  data() {
    return {
      howitworks: howitworks
    }
  }
}
</script>

<style>
.works-container {
    position: relative;
    border: 1px solid #FED00E;
    margin: 25px;
    height: 150px;
    padding-left: 90px;
    padding-top: 45px;
}
.works-container img {
    height: 90px;
    position: absolute;
    left: -41px;
    top: 30px;
}
.works-container h3 {
    font-size: 16px;
}
.works-row {
    padding-top: 80px;
    padding-bottom: 80px;
}
.works-row .themesflat-headings {
    margin-bottom: 50px;
}
.works-row h3 {
    margin-bottom: 5px;
}
</style>
