<template>
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
    </div>-->
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
    </div>-->
    <!-- /.top-bar-socials -->
    <!-- </div>
            </div>
    </div>-->
    <!-- /#top-bar -->

    <!-- Header -->
    <header id="site-header">
      <div id="site-header-inner" class="container">
        <div class="wrap-inner clearfix">
          <div id="site-logo" class="clearfix">
            <div id="site-log-inner">
              <a href="/" rel="home" class="main-logo">
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
          </div>
          <!-- /#site-logo -->
          <a href="tel:+61285276342">
            <span class="menu-item-tel-mobile">+61 28 527 6342</span>
          </a>
          <div class="mobile-button">
            <span />
          </div>
          <!-- /.mobile-button -->

          <nav id="main-nav" class="main-nav">
            <ul id="menu-primary-menu" class="menu">
              <li v-bind:class="{'current-menu-item': currentItem === 'HOME'}" class="menu-item menu-item-has-children">
                <a href="/">HOME</a>
                <!-- <ul class="sub-menu">
                        <li class="menu-item current-item">
                          <a href="home.html">HOME 1</a>
                        </li>
                        <li class="menu-item">
                          <a href="home-2.html">HOME 2</a>
                        </li>
                </ul>-->
              </li>
              <li v-bind:class="{'current-menu-item': currentItem === 'PROJECTS'}" class="menu-item menu-item-has-children">
                <a href="/projects">PROJECTS</a>
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
                </ul>-->
              </li>
              <li v-bind:class="{'current-menu-item': currentItem === 'SERVICES'}" class="menu-item menu-item-has-children">
                <a href="/services">SERVICES</a>
                <!-- <ul class="sub-menu">
                        <li class="menu-item">
                          <a href="page-services.html">SERVICES</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-services-detail.html">SERVICES DETAIL</a>
                        </li>
                </ul>-->
              </li>
              <li v-bind:class="{'current-menu-item': currentItem === 'ABOUT'}" class="menu-item menu-item-has-children">
                <a href="/#about">ABOUT</a>
                <ul class="sub-menu">
                  <li class="menu-item">
                    <a href="/why-steel">WHY STEEL</a>
                  </li>
                  <!-- <li class="menu-item">
                    <a href="page-about-detail.html">ABOUT DETAIL</a>
                  </li>
                  <li class="menu-item">
                    <a href="page-about-team.html">ABOUT TEAM</a>
                  </li>
                  <li class="menu-item">
                    <a href="page-about-careers.html">ABOUT CAREERS</a>
                  </li> -->
                </ul>
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
              </li>-->
              <li v-bind:class="{'current-menu-item': currentItem === 'CONTACT'}" class="menu-item menu-item-has-children">
                <a href="/contact">CONTACT</a>
                <!-- <ul class="sub-menu right-sub-menu">
                        <li class="menu-item">
                          <a href="page-contact.html">CONTACT 1</a>
                        </li>
                        <li class="menu-item">
                          <a href="page-contact-2.html">CONTACT 2</a>
                        </li>
                </ul>-->
              </li>
              <li class="menu-item menu-item-last">
                <a id="tel" href="tel:+61285276342">
                  <span class="menu-item-tel">+61 28 527 6342</span>
                </a>
              </li>
            </ul>
          </nav>
          <!-- /#main-nav -->

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
          </div>-->

          <!-- /#header-search -->
        </div>
        <!-- /.wrap-inner -->
      </div>
      <!-- /#site-header-inner -->
    </header>
    <!-- /#site-header -->
  </div>
  <!-- #site-header-wrap -->
</template>

<script>
export default {
  props: {
    currentItem: String
  },
  data() {
    return {
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
</style>
