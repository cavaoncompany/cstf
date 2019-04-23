<template>
  <div class="banner-row parallax parallax-3 parallax-overlay">
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
    <div class="bg-parallax-overlay overlay-black" />
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
</style>
