<template>
  <div class="row-testimonials parallax-2">
    <div class="parallax-overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="themesflat-spacer clearfix" data-desktop="80" data-mobile="60" data-smobile="60" />
            <div
              class="themesflat-carousel-box has-arrows arrow-center arrow-circle offset-v-24 clearfix"
              data-gap="30"
              data-column="1"
              data-column2="1"
              data-column3="1"
              data-auto="true"
            >
              <div class="owl-carousel owl-theme">
                <div v-for="(testimonial, index) in testimonials.testimonials" :key="index" class="themesflat-testimonials style-1 max-width-70 align-center has-width w100 border-solid clearfix">
                  <div class="testimonial-item">
                    <div class="inner">
                      <div class="themesflat-headings style-1 text-center clearfix">
                        <h2 class="heading text-white">
                          {{ testimonials.title }}
                        </h2>
                      </div>
                      <blockquote class="text">
                        <p>“{{ testimonial.textTop }}<br>{{ testimonial.textBottom }}”</p>
                        <div class="sep has-width w80 accent-bg clearfix" />
                        <h6 class="name">
                          {{ testimonial.author }}
                        </h6>
                      </blockquote>
                    </div>
                  </div>
                </div><!-- /.themesflat-testimonials -->
              </div>
            </div><!-- /.themesflat-carousel-box -->
            <div class="themesflat-spacer clearfix" data-desktop="68" data-mobile="60" data-smobile="60" />
          </div><!-- /.col-md-12 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </div>
  </div>
</template>

<script>
import testimonials from '../content/testimonials.json'

export default {
  data() {
    return {
      testimonials: testimonials
    }
  }
}
</script>

<style>
.row-testimonials .parallax-overlay {
    height: 100%;
    width: 100%;
    background: rgba(1,1,1,0.8);
}
</style>
