<template>
  <div class="banner-row">
    <div id="banner-carousel-desktop" class="carousel slide desktop-medium-only" data-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(slide, i) in banner.slides" :key="i" data-target="#banner-carousel-desktop" data-slide-to="i" />
      </ol>
      <div class="carousel-inner">
        <div v-for="(slide, i) in banner.slides" :key="i" :class="{'active': i === 0}" class="carousel-item">
          <!-- <img class="d-block w-100" :src="slide.image" :alt="slide.title"> -->
          <div class="slider-img" :style="{ background: `url('` + slide.image + `') no-repeat top` }" />
          <!-- <div class="slider-img" /> -->
          <div class="overlay-black" />
        </div>
      </div>
    </div>
    <div id="banner-carousel-mobile" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(slide, i) in banner.slides" :key="i" data-target="#banner-carousel-mobile" data-slide-to="i" />
      </ol>
      <div class="carousel-inner mobile-only">
        <div v-for="(slide, i) in banner.slides" :key="i" :class="{'active': i === 0}" class="carousel-item">
          <img class="d-block w-100" :src="slide.mobileImage" :alt="slide.title">
          <div class="overlay-black" />
        </div>
      </div>
    </div>
    <div class="b-row">
      <div class="container">
        <div class="row">
          <div class="banner-content col-md-9 col-lg-6">
            <p>{{ banner.topLine }}</p>
            <h1>{{ banner.bottomLine }}</h1>
            <div class="elm-button">
              <a href="#" class="themesflat-button bg-accent" data-toggle="modal" data-target="#getAQuoteModal">{{ banner.buttonText }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from '../content/banner.json'

export default {
  data() {
    return {
      banner: banner
    }
  }
}
</script>

<style>
.banner-row .container {
  padding-bottom: 50px;
  min-height: 500px;
}
.banner-row .container p {
  color: #ffffff;
}
.banner-row .container h1 {
  color: #ffffff;
  margin-bottom: 30px;
}
.banner-row .themesflat-button {
  color: #111;
}
.banner-row .overlay-black {
  background-color: rgba(1, 1, 1, 0.5);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.banner-row .carousel-inner .slider-img {
  height: 545px;
  width: 100%;
  background-size: cover;
  background-attachment: fixed;
}
</style>
