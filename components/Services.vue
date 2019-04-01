<template>
  <div class="row-services">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="themesflat-spacer clearfix" data-desktop="60" data-mobile="60" data-smobile="60" />
          <div class="themesflat-headings style-1 text-center clearfix">
            <h2 class="heading">
              {{ services.title }}
            </h2>
            <!-- <div class="sep has-icon width-125 clearfix">
              <div class="sep-icon">
                <span class="sep-icon-before sep-center sep-solid" />
                <span class="icon-wrap"><i class="autora-icon-build" /></span>
                <span class="sep-icon-after sep-center sep-solid" />
              </div>
            </div> -->
            <p class="sub-heading">
              {{ services.intro }}
            </p>
          </div>
          <div class="themesflat-spacer clearfix" data-desktop="39" data-mobile="35" data-smobile="35" />
          <div
            class="themesflat-carousel-box data-effect clearfix"
            data-gap="30"
            data-column="3"
            data-column2="2"
            data-column3="1"
            data-auto="false"
          >
            <div class="service-container row">
              <div v-for="(service, index) in services.services" :key="index" class="card col-md-3">
                <div class="thumb data-effect-item">
                  <img :src="service.img" :alt="service.title" class="card-img-top">
                  <div class="overlay-effect bg-color-accent" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">
                    {{ service.title }}
                  </h5>
                  <p class="card-text">
                    {{ service.description }}
                  </p>
                  <a href="#" class="btn btn-link">{{ service.buttonText }}</a>
                </div>
              </div>
            </div>
            <!-- <div class="owl-carousel owl-theme">
              <div v-for="(service, index) in services.services" :key="index" class="themesflat-image-box style-1 has-icon icon-right w65 clearfix">
                <div class="image-box-item">
                  <div class="inner">
                    <div class="thumb data-effect-item">
                      <img :src="service.img" :alt="service.title">
                      <div class="overlay-effect bg-color-accent" />
                    </div>
                    <div class="text-wrap">
                      <h5 class="heading">
                        <a href="#">{{ service.title }}</a>
                      </h5>
                      <span class="icon-wrap">
                        <i class="fa fa-angle-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div> -->
            <!-- /.themesflat-image-box -->
            <!-- </div> -->
          </div><!-- /.themesflat-carousel-box -->
          <div class="themesflat-spacer clearfix" data-desktop="50" data-mobile="35" data-smobile="35" />
          <!-- <div class="elm-button text-center">
            <a href="#" class="themesflat-button bg-accent">ALL SERVICES</a>
          </div> -->
          <div class="themesflat-spacer clearfix" data-desktop="73" data-mobile="60" data-smobile="60" />
        </div><!-- /.col-md-12 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </div>
</template>

<script>
import services from '../content/services.json'

export default {
  data() {
    return {
      services: services
    }
  }
}
</script>

<style>
.service-container {
  margin: 40px 0;
}
.service-container .card {
  border: none;
}
.service-container .card-title {
  margin-top: 25px;
}
.service-container .btn-link {
  color: #FED00E;
  font-size: 14px;
  font-weight: 600;
  float: right;
}
.service-container .btn-link:hover,
.service-container .btn-link:focus,
.service-container .btn-link.focus {
  text-decoration: none;
  box-shadow: none;
}
.service-container .card-img-top {
  width: 100%;
}
</style>
