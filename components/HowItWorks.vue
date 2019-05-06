<template>
  <div class="works-row parallax parallax-1 parallax-overlay">
    <div class="container">
      <div class="themesflat-headings style-1 text-center clearfix">
        <h2 class="heading">
          {{ howitworks.title }}
        </h2>
      </div>
      <div class="row desktop-only">
        <div v-for="(item, index) in howitworks.services" :key="index" class="works-container">
          <!-- <img :src="item.img" :alt="item.title"> -->
          <div class="number">{{ index + 1 }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.timeframe }}</p>
        </div>
      </div>
      <div class="row mobile-only">
        <div v-for="(item, index) in howitworks.services" :key="index" class="works-container">
          <!-- <img :src="item.img" :alt="item.title"> -->
          <div class="number-mobile">{{ index + 1 }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.timeframe }}</p>
        </div>
      </div>
    </div>
    <div class="bg-parallax-overlay overlay-black" />
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 30px 5px 0;
}
.works-row .heading {
  color: #fff;
}
.works-container .number {
    color: #FED00E;
    font-size: 40px;
    font-weight: 600;
    border: 1px solid #FED00E;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: absolute;
    left: -32px;
    top: 35px;
}
.works-container .number-mobile {
    color: #FED00E;
    font-size: 40px;
    font-weight: 600;
    border: 1px solid #FED00E;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: absolute;
    left: 50px;
    top: -29px;
}
.works-container p {
  color: #fff;
}
.works-container h3 {
    font-size: 16px;
    color: #fff;
}
.works-row {
    padding-top: 80px;
    padding-bottom: 80px;
    background-image: url('/img/about-bg.png');
    background-size: cover;
}
.works-row .themesflat-headings {
    margin-bottom: 50px;
}
.works-row h3 {
    margin-bottom: 5px;
    color: #fff;
}
</style>
