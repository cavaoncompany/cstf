<template>
  <section id="home" class="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">
    <div id="wrapper" class="animsition">
      <div id="page" class="clearfix">
        <Header currentItem="HOME" />
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
                  <GetAQuote />
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
  </section>
</template>

<script>
import Header from '../components/Header'
import GetAQuoteModal from '../components/GetAQuoteModal'
import HowItWorks from '../components/HowItWorks'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Project from '../components/Project'
import GetAQuote from '../components/GetAQuote'
import Testimonials from '../components/Testimonials'
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
    GetAQuote,
    Testimonials,
    Iconbox,
    Footer
  },
  data() {
  },
  methods: {
    scrollToTop: function (el) {
      const element = document.getElementById(el)
      const rect = element.getBoundingClientRect()
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const coordinates = { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      window.scrollTo({ top: coordinates.top, behavior: 'smooth' })
    }
  }
}
</script>

<style>
</style>
