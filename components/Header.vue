<template>
  <!-- Header Wrap -->
  <div id="site-header-wrap">
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
              <li v-bind:class="{'current-menu-item': currentItem === 'HOME'}" class="menu-item">
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
              <li v-bind:class="{'current-menu-item': currentItem === 'PROJECTS'}" class="menu-item">
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
              <li v-bind:class="{'current-menu-item': currentItem === 'SERVICES'}" class="menu-item">
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
              <li v-bind:class="{'current-menu-item': currentItem === 'CONTACT'}" class="menu-item">
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
#main-nav li:hover .sub-menu { opacity: 1; visibility: visible; -webkit-transform: translateY(0);-moz-transform: translateY(0); -ms-transform: translateY(0);
   -o-transform: translateY(0); transform: translateY(0); }
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
