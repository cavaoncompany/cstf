<template>
  <section
    id="projects"
    class="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search"
  >
    <Header currentItem="PROJECTS" />
    <!-- Main Content -->
    <div id="main-content" class="site-main clearfix">
      <div id="content-wrap">
        <div id="site-content" class="site-content clearfix">
          <div id="inner-content" class="inner-content-wrap">
            <div class="page-content">
              <!-- SERVICES -->
              <div class="row-services">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="73"
                        data-mobile="60"
                        data-smobile="60"
                      />
                      <div class="themesflat-headings style-2 clearfix">
                        <h2 class="heading">
                          {{ projects.title }}
                        </h2>
                        <div class="sep has-width w80 accent-bg clearfix" />
                      </div>
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="40"
                        data-mobile="35"
                        data-smobile="35"
                      />
                      <div
                        class="themesflat-project style-2 isotope-project has-margin mg15 data-effect clearfix"
                      >
                        <div v-for="(project, index) in projects.projects" :key="index" class="project-item green villa">
                          <div class="inner">
                            <div
                              class="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-19"
                            >
                              <img :src="project.img" :alt="project.name">
                              <div class="elm-link">
                                <a href="#" class="icon-1 icon-search" data-toggle="modal" :data-target="'#project-detail-' + index" />
                                <!-- <a href="#" class="icon-1"></a> -->
                              </div>
                              <div class="overlay-effect bg-color-3" />
                            </div>
                            <div class="text-wrap">
                              <h5 class="heading">
                                <a href="#">{{ project.name }}</a>
                              </h5>
                              <p>{{ project.type }}</p>
                              <!-- <div class="elm-meta">
                                <span>
                                  <a href="#">Green House</a>
                                </span>
                                <span>
                                  <a href="#">Villa</a>
                                </span>
                              </div> -->
                            </div>
                          </div>
                        </div>
                        <!-- /.project-item -->
                      </div>
                      <!-- /.themesflat-project -->
                      <!-- <div class="button-wrap has-icon icon-left size-14 pf21 text-center">
                        <a href="#" class="themesflat-button bg-accent pd32">
                          <span>
                            LOAD MORE
                            <span class="icon">
                              <i class="ion-load-c"></i>
                            </span>
                          </span>
                        </a>
                      </div> -->
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="72"
                        data-mobile="60"
                        data-smobile="60"
                      />
                    </div>
                    <!-- /.col-md-12 -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /.container -->
              </div>
              <!-- END SERVICES -->
            </div>
            <!-- /.page-content -->
          </div>
          <!-- /#inner-content -->
        </div>
        <!-- /#site-content -->
      </div>
      <!-- /#content-wrap -->
    </div>
    <!-- /#main-content -->
    <Footer />
    <div
      v-for="(project, index) in projects.projects"
      :id="'project-detail-' + index"
      :key="index"
      class="modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="projectDetail"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <!--Carousel Wrapper-->
              <div :id="'carousel-thumb'+index" class="carousel slide carousel-fade carousel-thumbnails" data-interval="false" data-ride="carousel">
                <!--Slides-->
                <div class="carousel-inner" role="listbox">
                  <div v-for="(image, i) in project.otherImages" :key="i" class="carousel-item" v-bind:class="{'active': i === 0 }">
                    <img class="d-block w-100" :src="image.img" :alt="project.name">
                  </div>
                </div>
                <!--/.Slides-->
                <!--Controls-->
                <a class="carousel-control-prev" :href="'#carousel-thumb' + index" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" :href="'#carousel-thumb' + index" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
                <!--/.Controls-->
                <ol class="carousel-indicators">
                  <li v-for="(image, i) in project.otherImages" :key="i" :data-target="'#carousel-thumb' + index" :data-slide-to="i" v-bind:class="{'active': i === 0 }"> <img class="d-block w-100 img-fluid" :src="image.img"></li>
                </ol>
              </div>
              <!--/.Carousel Wrapper-->
            </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
import projects from '../content/projects.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style>
#projects .text-wrap p {
  margin-bottom: 0;
}
#projects .modal-content {
  background: transparent;
  border: none;
}
#projects .owl-thumb-item {
  overflow-y: hidden;
}
#projects .owl-thumbs {
  display: flex;
}
#projects .owl-prev {
  margin-left: -65px;
}
#projects .owl-next {
  margin-right: -65px;
}
#projects .carousel-indicators {
  bottom: -22px;
}
#projects .carousel-control-prev-icon {
  background-image: url('/img/left.png');
  margin-left: -160px;
  height: 30px;
  width: 30px;
}
#projects .carousel-control-next-icon {
  background-image: url('/img/right.png');
  margin-right: -160px;
  height: 30px;
  width: 30px;
}
#projects .carousel-indicators .active {
  background-color: #FED00E;
}

#projects .carousel-item img {
  height: 100%;
}
</style>
