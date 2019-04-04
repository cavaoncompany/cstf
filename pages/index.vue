<template>
  <section id="home" class="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">
    <div id="wrapper" class="animsition">
      <div id="page" class="clearfix">
        <!-- Header Wrap -->
        <div id="site-header-wrap">
          <!-- Top Bar -->
          <!-- <div id="top-bar">
            <div id="top-bar-inner" class="container">
              <div class="top-bar-inner-wrap">
                <div class="top-bar-content">
                  <div class="inner">
                    <span class="address content">4946 Marmora Road, Central New</span>
                    <span class="phone content">+61 3 8376 6284</span>
                    <span class="time content">Mon-Sat: 8am - 6pm</span>
                  </div>
                </div> -->
          <!-- /.top-bar-content -->
          <!-- <div class="top-bar-socials">
                  <div class="inner">
                    <span class="text">Follow us:</span>
                    <span class="icons">
                      <a href="#"><i class="fa fa-facebook" /></a>
                      <a href="#"><i class="fa fa-twitter" /></a>
                      <a href="#"><i class="fa fa-pinterest-p" /></a>
                      <a href="#"><i class="fa fa-rss" /></a>
                    </span>
                  </div>
                </div> -->
          <!-- /.top-bar-socials -->
          <!-- </div>
            </div>
          </div> -->
          <!-- /#top-bar -->

          <!-- Header -->
          <header id="site-header">
            <div id="site-header-inner" class="container">
              <div class="wrap-inner clearfix">
                <div id="site-logo" class="clearfix">
                  <div id="site-log-inner">
                    <a href="home.html" rel="home" class="main-logo">
                      <img
                        src="/img/logo-small.png"
                        alt="Custom Steel Trusses & Frames"
                        width="186"
                        height="39"
                        data-retina="/img/logo-small@2x.png"
                        data-width="186"
                        data-height="39"
                      >
                    </a>
                  </div>
                </div><!-- /#site-logo -->
                <a href="tel:+61285276342"><span class="menu-item-tel-mobile">+61 28 527 6342</span></a>
                <div class="mobile-button">
                  <span />
                </div><!-- /.mobile-button -->

                <nav id="main-nav" class="main-nav">
                  <ul id="menu-primary-menu" class="menu">
                    <li class="menu-item menu-item-has-children current-menu-item">
                      <a @click="scrollToTop('home')">HOME</a>
                      <!-- <ul class="sub-menu">
                        <li class="menu-item current-item">
                          <a href="home.html">HOME 1</a>
                        </li>
                        <li class="menu-item">
                          <a href="home-2.html">HOME 2</a>
                        </li>
                      </ul> -->
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a @click="scrollToTop('projects')">PROJECTS</a>
                      <!-- <ul class="sub-menu">
                        <li class="menu-item">
                          <a href="page-projects.html">PROJECTS</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-projects-full.html">PROJECTS FULL WIDTH</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-project-detail.html">PROJECTS DETAIL</a>
                        </li>
                      </ul> -->
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a @click="scrollToTop('services')">SERVICES</a>
                      <!-- <ul class="sub-menu">
                        <li class="menu-item">
                          <a href="page-services.html">SERVICES</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-services-detail.html">SERVICES DETAIL</a>
                        </li>
                      </ul> -->
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a @click="scrollToTop('about')">ABOUT</a>
                      <!-- <ul class="sub-menu">
                        <li class="menu-item">
                          <a href="page-about.html">ABOUT US</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-about-detail.html">ABOUT DETAIL</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-about-team.html">ABOUT TEAM</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-about-careers.html">ABOUT CAREERS</a>
                        </li>
                      </ul> -->
                    </li>
                    <!-- <li class="menu-item menu-item-has-children">
                      <a href="page-testimonial.html">PAGE</a>
                      <ul class="sub-menu">
                        <li class="menu-item">
                          <a href="page-testimonial.html">PAGE TESTIMONIAL</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-pricing.html">PAGE PRICING</a>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <a href="page-blog.html">BLOG</a>
                      <ul class="sub-menu right-sub-menu">
                        <li class="menu-item">
                          <a href="page-blog.html">BLOG</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-blog-single.html">BLOG SINGLE</a>
                        </li>
                      </ul>
                    </li> -->
                    <li class="menu-item menu-item-has-children">
                      <a @click="scrollToTop('contact')">CONTACT</a>
                      <!-- <ul class="sub-menu right-sub-menu">
                        <li class="menu-item">
                          <a href="page-contact.html">CONTACT 1</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-contact-2.html">CONTACT 2</a>
                        </li>
                      </ul> -->
                    </li>
                    <li class="menu-item menu-item-last">
                      <a id="tel" href="tel:+61285276342"><span class="menu-item-tel">+61 28 527 6342</span></a>
                    </li>
                  </ul>
                </nav><!-- /#main-nav -->

                <!-- <div id="header-search">
                    <a href="#" class="header-search-icon">
                    <span class="search-icon fa fa-search" />
                  </a>

                  <form role="search" method="get" class="header-search-form" action="#">
                    <label class="screen-reader-text">Search for:</label>
                    <input type="text" value="" name="s" class="header-search-field" placeholder="Search...">
                    <button type="submit" class="header-search-submit" title="Search">
                      <i class="fa fa-search" />
                    </button>
                  </form>
                </div> -->

                <!-- /#header-search -->
              </div><!-- /.wrap-inner -->
            </div><!-- /#site-header-inner -->
          </header><!-- /#site-header -->
        </div><!-- #site-header-wrap -->
        <!-- Main Content -->
        <div id="main-content" class="site-main clearfix">
          <div id="content-wrap">
            <div id="site-content" class="site-content clearfix">
              <div id="inner-content" class="inner-content-wrap">
                <div class="page-content">
                  <!-- SLIDER -->
                  <!-- <Slider /> -->
                  <Banner />
                  <!-- END SLIDER -->
                  <!-- ICONBOX -->
                  <HowItWorks />
                  <!-- END ICONBOX -->
                  <!-- ABOUT -->
                  <About />
                  <!-- END ABOUT -->
                  <!-- SERVICES -->
                  <Services />
                  <!-- END SERVICES -->
                  <!-- PROJECT -->
                  <Project />
                  <!-- END PROJECT -->
                  <!-- ICONBOX -->
                  <Iconbox />
                  <!-- END ICONBOX -->
                  <!-- TESTIMONIALS -->
                  <Testimonials />
                  <!-- END TESTIMONIALS -->
                  <!-- QUOTE -->
                  <Quote />
                  <!-- END QUOTE -->
                  <!-- TABS -->
                  <!-- <Tabs /> -->
                  <!-- END TABS -->
                  <!-- PARTNER -->
                  <!-- <Partner /> -->
                  <!-- END PARTNER -->
                </div><!-- /.page-content -->
              </div><!-- /#inner-content -->
            </div><!-- /#site-content -->
          </div><!-- /#content-wrap -->
        </div><!-- /#main-content -->

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
                </div><!-- /.widget_text -->
                <div class="themesflat-spacer clearfix" data-desktop="0" data-mobile="0" data-smobile="35" />
              </div><!-- /.col -->

              <div class="col span_1_of_3">
                <div class="themesflat-spacer clearfix" data-desktop="0" data-mobile="0" data-smobile="0" />

                <div class="widget widget_lastest">
                  <h2 class="widget-title">
                    <span>{{ footer.site }}</span>
                  </h2>
                  <ul class="site-data data-effect clearfix row">
                    <li v-for="(item, index) in footer.links" :key="index" class="clearfix col-lg-6 col-sm-4">
                      <a @click="scrollToTop(item.title.toLowerCase())">{{ item.title }}</a>
                    </li>
                  </ul>
                </div><!-- /.widget_lastest -->
              </div><!-- /.col -->
              <div class="col span_1_of_3">
                <div class="themesflat-spacer clearfix" data-desktop="0" data-mobile="35" data-smobile="35" />

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
              </div><!-- /.col -->
            </div><!-- /.themesflat-row -->
          </div><!-- /#footer-widgets -->
        </footer><!-- /#footer -->
      </div><!-- /#page -->
    </div><!-- /#wrapper -->
    <a id="scroll-top" />
    <GetAQuoteModal />
  </section>
</template>

<script>
import footer from '../content/footer.json'
// import Slider from '../components/Slider'
import GetAQuoteModal from '../components/GetAQuoteModal'
import HowItWorks from '../components/HowItWorks'
import Banner from '../components/Banner'
import About from '../components/About'
import Services from '../components/Services'
import Project from '../components/Project'
import Quote from '../components/Quote'
import Testimonials from '../components/Testimonials'
import Iconbox from '../components/Iconbox'

export default {
  components: {
    // Slider,
    Banner,
    GetAQuoteModal,
    HowItWorks,
    About,
    Services,
    Project,
    Quote,
    Testimonials,
    Iconbox
  },
  data() {
    return {
      footer: footer
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
    }
  }
}
</script>

<style>
.menu-item-tel {
  border: 1px solid #FED00E;
  padding: 14px 20px;
}
.menu-item:hover {
  cursor: pointer;
}
.menu-item-last:hover {
  border: none;
}
.site-data li a {
  color: #ffffff;
}
.site-data li:hover {
  cursor: pointer;
}
</style>
