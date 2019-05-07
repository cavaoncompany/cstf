<template>
  <!-- Footer -->
  <footer id="footer" class="clearfix">
    <div id="footer-widgets" class="container">
      <div class="themesflat-row gutter-30">
        <div class="col span_1_of_3">
          <div class="widget widget_text">
            <div class="textwidget">
              <p>
                <img :src="footer.logo" alt="Image" width="205" height="72">
              </p>
              <p class="margin-bottom-15">
                {{ footer.rights }}
              </p>
            </div>
          </div>
          <!-- /.widget_text -->
          <div
            class="themesflat-spacer clearfix"
            data-desktop="0"
            data-mobile="0"
            data-smobile="35"
          />
        </div>
        <!-- /.col -->

        <div class="col span_1_of_3">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="0"
            data-mobile="0"
            data-smobile="0"
          />

          <div class="widget widget_lastest">
            <h2 class="widget-title">
              <span>{{ footer.site }}</span>
            </h2>
            <ul class="site-data data-effect clearfix row">
              <li
                v-for="(item, index) in footer.links"
                :key="index"
                class="clearfix col-6"
              >
                <a @click="scrollToTop(item.title.toLowerCase())">{{ item.title }}</a>
              </li>
            </ul>
          </div>
          <!-- /.widget_lastest -->
        </div>
        <!-- /.col -->
        <div class="col span_1_of_3">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="0"
            data-mobile="35"
            data-smobile="35"
          />

          <div class="widget widget_tags">
            <h2 class="widget-title margin-bottom-30">
              <span>{{ footer.contact }}</span>
            </h2>
            <ul>
              <li>
                <div class="inner">
                  <span class="fa fa-phone" />
                  <span class="text">{{ footer.tel }}</span>
                </div>
              </li>

              <li>
                <div class="inner">
                  <span class="fa fa-envelope" />
                  <span class="text">{{ footer.email }}</span>
                </div>
              </li>

              <li class="margin-top-7">
                <div class="inner">
                  <span class="fa fa-map-marker" />
                  <span class="text">{{ footer.address }}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.themesflat-row -->
      <div class="row associations">
        <img v-for="(association, i) in footer.associations" :key="i" :src="association.image" :alt="association.title">
      </div>
    </div>
    <!-- /#footer-widgets -->
  </footer>
  <!-- /#footer -->
</template>

<script>
import footer from '../content/footer.json'

export default {
  data() {
    return {
      footer: footer
    }
  }
}
</script>

<style>
.site-data li a {
  color: #ffffff;
}
.site-data li:hover {
  cursor: pointer;
}
#footer .associations {
  display: flex;
  width: 100%;
  border-top: 1px solid #585858;
}
#footer .associations img {
  margin-top: 25px;
}
#footer .themesflat-row .span_1_of_3 {
  margin-bottom: 15px;
}
</style>
