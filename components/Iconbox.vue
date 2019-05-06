<template>
  <div class="row-iconbox">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="themesflat-spacer clearfix" data-desktop="61" data-mobile="60" data-smobile="60" />
          <div class="themesflat-headings style-1 text-center clearfix">
            <h2 class="heading font-size-30">
              {{ icons.title }}
            </h2>
          </div>
          <!-- <div class="themesflat-spacer clearfix" data-desktop="57" data-mobile="35" data-smobile="35" /> -->
        </div><!-- /.col-md-12 -->
      </div><!-- /.row -->

      <div class="themesflat-row gutter-30 clearfix">
        <div v-for="(icon, index) in icons.items" :key="index" class="col-6 col-md-4 icon-item">
          <div class="themesflat-icon-box icon-left accent-color style-2 clearfix">
            <div class="icon-wrap">
              <img :src="icon.icon" :alt="icon.title" class="icon-build">
            </div>
            <div class="text-wrap">
              <h5 class="heading">
                <a href="#">{{ icon.title }}</a>
              </h5>
              <p class="sub-heading">
                {{ icon.description }}
              </p>
            </div>
          </div>
          <!-- /.themesflat-icon-box -->
        </div>
        <!-- /.col-md-4 -->
      </div><!-- /.row -->

      <div class="row">
        <div class="col-md-12">
          <div class="themesflat-spacer clearfix" data-desktop="72" data-mobile="60" data-smobile="60" />
          <div class="elm-button text-center why-steel-btn">
            <a href="/why-steel" class="themesflat-button bg-accent">{{ icons.buttonText }}</a>
          </div>
          <div class="themesflat-spacer clearfix" data-desktop="62" data-mobile="35" data-smobile="35" />
        </div><!-- /.col-md-12 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </div>
</template>

<script>
import icons from '../content/iconbox.json'
export default {
  data() {
    return {
      icons: icons
    }
  }
}
</script>

<style>
.icon-build {
  max-width: 50px;
  max-height: 50px;
}

.themesflat-row {}
</style>
