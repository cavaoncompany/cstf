<template>
  <div id="services" class="row-services">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="themesflat-spacer clearfix" data-desktop="60" data-mobile="60" data-smobile="60" />
          <div class="themesflat-headings style-1 text-center clearfix">
            <h2 class="heading">
              {{ services.title }}
            </h2>
            <p class="sub-heading desktop-only">
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
              <div v-for="(service, index) in services.services" :key="index" v-bind:class="{'padding-right': index % 2 === 0, 'padding-left' : index % 2 > 0}" class="card bg-dark text-white col-6 col-md-3">
                <div class="thumb data-effect-item">
                  <img :src="service.img" :alt="service.title" class="card-img-top">
                  <div class="overlay-effect bg-light-grey">
                  <p :id="service.id" class="card-text card-overlay-text">
                    {{ service.description }}
                  </p>
                  </div>
                </div>
                <div class="card-body">
                  <h5 :id="'service' + index" class="card-title text-center">
                    {{ service.title }}
                  </h5>
                </div>
              </div>
            </div>
          </div><!-- /.themesflat-carousel-box -->
          <div class="themesflat-spacer clearfix" data-desktop="50" data-mobile="35" data-smobile="35" />
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
      services: services,
      toBeExtended: false
    }
  },
  methods: {
    extend: function (el) {
      const extended = document.getElementById(el)
      extended.classList.toggle('higher')
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
.service-container .card-body .btn-link {
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
.service-container .card-body p {
  line-height: 1.5rem;
  max-height: 6rem;
  overflow: hidden;
}
.service-container .card-overlay-text {
  padding: 15px;
  color: #111111;
}
.higher {
  max-height: 15rem !important;
}
</style>
