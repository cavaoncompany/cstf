<template>
  <section
    id="projects"
    class="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search"
  >
    <Header />
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
                      ></div>
                      <div class="themesflat-headings style-2 clearfix">
                        <h2 class="heading">{{ projects.title }}</h2>
                        <div class="sep has-width w80 accent-bg clearfix"></div>
                      </div>
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="40"
                        data-mobile="35"
                        data-smobile="35"
                      ></div>
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
                                <a href="#" class="icon-1 icon-search"></a>
                                <!-- <a href="#" class="icon-1"></a> -->
                              </div>
                              <div class="overlay-effect bg-color-3"></div>
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
                      ></div>
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
  </section>
</template>

<script>
import projects from "../content/projects.json"
import Header from "../components/Header"
import Footer from "../components/Footer"

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
</style>
