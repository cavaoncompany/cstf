<template>
  <section id="why-steel" class="header-fixed page header-style-2 topbar-style-1 menu-has-search">
    <Header currentItem="ABOUT" />
    <div class="container">
      <div class="themesflat-spacer clearfix" data-desktop="60" data-mobile="60" data-smobile="60" />
      <div class="row about">
        <div class="col-sm-7 about-left">
          <p>{{ whysteel.about }}</p>
          <div class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ whysteel.title }}
            </h2>
            <div class="sep has-width w80 accent-bg clearfix" />
          </div>
          <div class="themesflat-spacer clearfix" data-desktop="39" data-mobile="35" data-smobile="35" />
          <p>{{ whysteel.intro }}</p>
        </div>
        <div class="col-sm-5 about-right">
          <img :src="whysteel.img" :alt="whysteel.title">
        </div>
      </div>
      <div class="themesflat-spacer clearfix" data-desktop="37" data-mobile="35" data-smobile="35"></div> 
        <div class="flat-content-wrap style-2 clearfix">
          <div id="sidebar-wrap" class="themesflat-tabs style-2 title-w170 clearfix">
              <ul id="sidebar" class="tab-title">
                  <li v-for="(point, index) in whysteel.points" :id="'item-title-' + index" :key="index" v-bind:class="{'active' : index === 0}" class="item-title">
                      <span class="inner" @click="findcontent('point-' + index, 'item-title-' + index)">{{ point.title }}</span>
                  </li>
              </ul>
              <div id="spacer" class="invisible">DESIGN_FLEXIBILITY</div>
              <div id="steel-content" class="tab-content-wrap clearfix">
                <div class="outer-wrapper">
                    <div v-for="(point, index) in whysteel.points" :id="'point-' + index" :key="index" class="tab-content">
                        <div class="item-content">  
                          <h5>{{ point.title }}</h5>                                                          
                            <p v-for="(paragraph, index) in point.description" :key="index">
                              {{ paragraph }}  
                            </p>                                                    
                        </div>
                    </div><!-- /.tab-content -->
                  </div>
              </div><!-- /.tab-content-wrap -->
          </div><!-- /.themesflat-tabs -->
        </div>
    </div>
    <div class="themesflat-spacer clearfix" data-desktop="73" data-mobile="60" data-smobile="60" />
    <Footer />
    <a id="scroll-top" />
  </section>
</template>

<script>
import whysteel from '../content/whysteel.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    if (process.client) {
      if(window.innerWidth > 479) {
        const sidebar = document.getElementById('sidebar')
      const sidebarTop = sidebar.getBoundingClientRect()
      const contentHeight = document.getElementById('steel-content').offsetHeight - 10
      const scrollTop = window.pageYOffset + 50 || document.documentElement.scrollTop
      const coordinates = { top: sidebarTop.top + scrollTop }
      document.addEventListener('scroll', event => {this.fixSidebarOnScroll(sidebar, coordinates.top, contentHeight)})
      }
    }
  },
  data() {
    return {
      whysteel: whysteel
    }
  },
  methods: {
    findcontent: function(content, button) {
      const buttons = document.getElementsByClassName('item-title')
      for (let i =0; i < buttons.length; i++) {
        buttons[i].classList.remove('active')
      }
      document.getElementById(button).classList.add('active')
      this.scrollToElement(content)
    },
    scrollToElement: function (el) {
      const element = document.getElementById(el)
      const rect = element.getBoundingClientRect()
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const coordinates = { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      window.scrollTo({ top: coordinates.top, behavior: 'smooth' })
    },
    fixSidebarOnScroll: function (sidebar, sidebarTop, contentHeight) {
      const spacer = document.getElementById('spacer')
        const windowScrollTop = window.scrollY
        if (windowScrollTop <= sidebarTop){
          if (sidebar.classList.contains('absolute')) {
            sidebar.classList.remove('absolute')
          }
          sidebar.classList.remove('sticky')
          spacer.classList.add('hide-element')
          spacer.classList.remove('invisible')
        } else if (windowScrollTop >= contentHeight) {
          sidebar.classList.remove('sticky')
          sidebar.classList.add('absolute')
        } else if (windowScrollTop >= sidebarTop) {
          if (sidebar.classList.contains('absolute')) {
            sidebar.classList.remove('absolute')
          }
          if (!sidebar.classList.contains('sticky')) {
            sidebar.classList.add('sticky')
            spacer.classList.remove('hide-element')
            spacer.classList.add('invisible')
          }
        }
      }
  },
  destroyed () {
    if (process.client) { 
        window.removeEventListener('scroll', this.fixSidebarOnScroll(sidebar, coordinates.top, contentHeight))
    }
}
}
</script>

<style>
#why-steel .about {
  background-color: #F7F7F7;
  margin: 0;
}
#why-steel .about-left {
  padding: 35px;
}
#why-steel .about-left p {
  margin: 0;
}
#why-steel .about-right {
  padding: 0;
}
#sidebar.sticky {
  position:fixed;
  top:5px;
}
#sidebar.absolute {
  position: absolute;
  bottom: 0
}
.invisible {
  opacity: 0;
  padding: 13px;
}
/* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
  } */
</style>
