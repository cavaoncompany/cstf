<template>
  <section
    id="projects"
    class="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search"
  >
    <Header current-item="PROJECTS" />
    <!-- Main Content -->
    <div id="main-content" class="site-main clearfix">
      <div id="content-wrap">
        <div id="site-content" class="site-content clearfix">
          <div id="inner-content" class="inner-content-wrap">
            <div class="page-content">
              <!-- PROJECTS -->
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
                        <div v-for="(project, index) in projects.projects" :key="'project' + index" class="project-item green villa">
                          <div class="inner">
                            <div
                              class="thumb data-effect-item has-effect-icon w40 offset-v-19 offset-h-19"
                            >
                              <img :src="project.img" :alt="project.name">
                              <div class="elm-link">
                                <a id="carousel-mobile-switch" href="#" class="icon-1 icon-search carousel-mobile-only" data-toggle="modal" :data-target="'#project-detail-mobile-' + index" />
                                <a id="carousel-desktop-switch" href="#" class="icon-1 icon-search carousel-desktop-only" data-toggle="modal" :data-target="'#project-detail-' + index" />
                              </div>
                              <div class="overlay-effect bg-color-3" />
                            </div>
                            <div class="text-wrap">
                              <h5 class="heading">
                                <a href="#">{{ project.name }}</a>
                              </h5>
                              <p>{{ project.type }}</p>
                            </div>
                          </div>
                        </div>
                        <!-- /.project-item -->
                      </div>
                      <!-- /.themesflat-project -->
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
              <!-- END PROJECTS -->
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
      v-show="mobile === false"
      :id="'project-detail-' + index"
      :key="'desktop-modal' + index"
      class="modal carousel-desktop-only"
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
                  <div v-for="(image, i) in project.otherImages.images" :key="'desktop-carousel' + i" class="carousel-item" :class="{'active': i === 0 }">
                    <img class="d-block" :src="image" :alt="project.name">
                  </div>
                </div>
                <!--/.Slides-->
                <!--Controls-->
                <a class="carousel-control-prev" :href="'#carousel-thumb' + index" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" :href="'#carousel-thumb' + index" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
                <!--/.Controls-->
                <ol class="carousel-indicators">
                  <li v-for="(image, i) in project.otherImages.images" :key="'desktop-carousel-indicator' + i" :data-target="'#carousel-thumb' + index" :data-slide-to="i" :class="{'active': i === 0, 'hidden': i > 4 }">
                    <img class="d-block img-fluid thumbnail-carousel-img" :src="image" :alt="project.name">
                  </li>
                </ol>
              </div>
              <!--/.Carousel Wrapper-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(project, index) in projects.projects"
      v-show="mobile === true"
      :id="'project-detail-mobile-' + index"
      :key="'mobile-modal' + index"
      class="modal carousel-mobile-only"
      tabindex="-1"
      role="dialog"
      aria-labelledby="projectDetail"
      aria-hidden="true"
    >
      <div class="modal-content projects-modal-content">
        <div class="modal-header project-modal-mobile-header">
          <button class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body projects-modal-body">
          <div id="mobile-projects-carousel" class="carousel" data-ride="carousel" data-interval="false">
            <div :id="'swipezone' + index" class="carousel-inner">
              <div v-for="(image, i) in project.otherImages.images" :key="'mobile-carousel' + i" :class="{'active': i === 0}" class="carousel-item mobile-carousel-item">
                <img class="d-block w-100" :src="image" :alt="project.name"><br>
                <div class="image-counter carousel-caption d-md-block">
                  <p>{{ i + 1 }}/{{ project.otherImages.images.length }}</p>
                </div>
              </div>
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
      projects: projects,
      mobile: false,
      swipe: ''
    }
  },
  created() {
    const vm = this
    if (process.client) {
      vm.mobile = this.isMobileDevice()

      for (let i = 0; i < this.projects.projects.length; i++) {
        // eslint-disable-next-line
        const el = document.getElementById('swipezone' + i)
        if (el) {
          this.swipedetect(el, function (swipedir) {
          // swipedir contains either "none", "left", "right", "top", or "down"
            vm.swipeImage(swipedir)
          })
        }
      }
      // this.swipedetect(el, function (swipedir) {
      // swipedir contains either "none", "left", "right", "top", or "down"
      //   vm.swipeImage(swipedir)
      // })
    }
  },
  methods: {
    // Swipe detection
    swipedetect: function (el, callback) {
      const touchsurface = el
      let swipedir = ''
      let startX = 0
      let startY = 0
      let distX = 0
      let distY = 0
      const threshold = 150 // required min distance traveled to be considered swipe
      const restraint = 100 // maximum distance allowed at the same time in perpendicular direction
      const allowedTime = 300 // maximum time allowed to travel that distance
      let elapsedTime = 0
      let startTime = 0
      const handleswipe = callback || function (swipedir) {}

      touchsurface.addEventListener('touchstart', function (e) {
        const touchobj = e.changedTouches[0]
        swipedir = 'none'
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
      }, false)

      touchsurface.addEventListener('touchmove', function (e) {
        e.preventDefault() // prevent scrolling when inside DIV
      }, false)

      touchsurface.addEventListener('touchend', function (e) {
        const touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime) { // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
            swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
          } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
            swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
          }
        }
        handleswipe(swipedir)
        e.preventDefault()
      }, false)
    },
    swipeImage: function (direction) {
      if (direction === 'left') {
        // eslint-disable-next-line
        $('#mobile-projects-carousel').carousel('next')
      } else if (direction === 'right') {
        // eslint-disable-next-line
        $('#mobile-projects-carousel').carousel('prev')
      }
    },
    isMobileDevice: function () {
      return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)
    }
  }
}
</script>

<style>
#projects .text-wrap p {
  margin-bottom: 0;
}
#projects .carousel-item img {
  width: auto;
}
#projects .mobile-carousel-item img {
  height: 90%;
}
#projects .thumbnail-carousel-img {
  height: 85px;
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
#projects .carousel-item.active {
  width: 800px;
  justify-content: center;
}
#projects .carousel-mobile-only .mobile-carousel-item.active {
  width: 100%;
  height: 215px;
}
#projects .carousel-mobile-only .carousel-caption {
  left: 0;
  bottom: -44px;
  right: auto;
}
#projects .modal-content {
  background-color: transparent;
  border: none;
}
.projects-modal-content {
  background: transparent;
  border: none;
  height: 100%;
}
.projects-modal-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 15px 100px 15px;
}
#projects .carousel-inner {
  margin-bottom: 10px;
}
#projects .project-modal-mobile-header {
  border: none;
}
#projects .project-modal-mobile-header button {
  color: #fff;
  text-align: right;
}
</style>
