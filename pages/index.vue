<template>
  <section id="home" class="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">
    <div id="wrapper" class="animsition">
      <div id="page" class="clearfix">
        <Header current-item="HOME" />
        <!-- Main Content -->
        <div id="main-content" class="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" class="site-content clearfix">
              <div id="inner-content" class="inner-content-wrap">
                <div class="page-content">
                  <!-- SLIDER -->
                  <!-- <BANNER /> -->
                  <Banner />
                  <!-- END BANNER -->
                  <!-- WHY STEEL FRAMING ICONBOX -->
                  <Iconbox />
                  <!-- END STEEL FRAMING ICONBOX -->
                  <!-- HOW IT WORKS ICONBOX -->
                  <HowItWorks />
                  <!-- HOW IT WORKS END ICONBOX -->
                  <!-- SERVICES -->
                  <Services />
                  <!-- END SERVICES -->
                  <!-- ABOUT -->
                  <About />
                  <!-- END ABOUT -->
                  <!-- PROJECT -->
                  <Project />
                  <!-- END PROJECT -->
                  <!-- TESTIMONIALS -->
                  <!-- <Testimonials /> -->
                  <!-- END TESTIMONIALS -->
                  <!-- QUOTE -->
                  <OurPartners />
                  <!-- END QUOTE -->
                </div><!-- /.page-content -->
              </div><!-- /#inner-content -->
            </div><!-- /#site-content -->
          </div><!-- /#content-wrap -->
        </div><!-- /#main-content -->
        <Footer />
      </div><!-- /#page -->
    </div><!-- /#wrapper -->
    <a id="scroll-top" />
    <GetAQuoteModal />
    <div id="projectModal">
      <div
        v-for="(project, index) in projects.projects"
        :id="'project-detail-home-mobile-' + index"
        :key="index"
        class="modal carousel-mobile-only"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-content project-home-modal-content">
          <div class="modal-header project-home-modal-mobile-header">
            <button
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body project-home-modal-body">
            <div :id="'mobile-projects-home-carousel' + index" class="carousel slide" data-ride="carousel" data-interval="false">
              <div :id="'swipearea' + index" class="carousel-inner">
                <div v-for="(image, i) in project.otherImages.images" :key="i" :class="{'active': i === 0}" class="carousel-item mobile-carousel-item">
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
    </div>
  </section>
</template>

<script>
import projects from '../content/projects.json'
import Header from '../components/Header'
import GetAQuoteModal from '../components/GetAQuoteModal'
import HowItWorks from '../components/HowItWorks'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Project from '../components/Project'
import OurPartners from '../components/OurPartners'
import Iconbox from '../components/Iconbox'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Banner,
    GetAQuoteModal,
    HowItWorks,
    About,
    Services,
    Project,
    OurPartners,
    Iconbox,
    Footer
  },
  data() {
    return {
      projects: projects
    }
  },
  created() {
    const vm = this
    if (process.client) {
      for (let i = 0; i < this.projects.projects.length; i++) {
        // eslint-disable-next-line
        const el = document.getElementById('swipearea' + i)
        if (el) {
          this.swipedetect(el, function (swipedir) {
          // swipedir contains either "none", "left", "right", "top", or "down"
            vm.swipeImage(swipedir, i)
          })
        }
      }
    }
  },
  methods: {
    scrollToTop: function (el) {
      const element = document.getElementById(el)
      const rect = element.getBoundingClientRect()
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const coordinates = { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      window.scrollTo({ top: coordinates.top, behavior: 'smooth' })
    },
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
    swipeImage: function (direction, i) {
      if (direction === 'left') {
        // eslint-disable-next-line
        $('#mobile-projects-home-carousel' + i).carousel('next')
      } else if (direction === 'right') {
        // eslint-disable-next-line
        $('#mobile-projects-home-carousel' + i).carousel('prev')
      }
    }
  }
}
</script>

<style>
  /* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
  } */
</style>
