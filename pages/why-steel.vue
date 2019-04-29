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
      <div class="themesflat-spacer clearfix" data-desktop="37" data-mobile="35" data-smobile="35" />
      <div class="row why-steel-content">
        <div class="col-md-8 col-lg-9">
          <div id="why-steel-framing-accordion">
            <div v-for="(point, index) in whysteel.points" :id="'item-title-' + index" :key="index" class="card">
              <div class="card-header">
                <h5>{{ point.title }}</h5>
                <button class="btn btn-link expand" role="button" data-toggle="collapse" :data-target="'#item-content-' + index" :aria-controls="'item-content-' + index" type="button" @click="handleExpand(index)"><i class="fa fa-angle-down"></i></button>
              </div>
              <div :id="'item-content-' + index" class="collapse" aria-labelledby="'item-title-' + index" data-parent="#why-steel-framing-accordion">
                <div class="card-body">
                  <p v-for="(paragraph, i) in point.description" :key="i">
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-3">
          <div class="contact-box">
            <h5>{{ whysteel.contactBoxTitle }}</h5>
          <p>{{ whysteel.contactBoxDescription }}</p>
          <div class="elm-button">
            <a href="/contact" class="themesflat-button bg-accent">{{ whysteel.contactBoxButtonText }}</a>
          </div>
          </div>
        </div>
      </div>
      <!-- <div class="themesflat-spacer clearfix" data-desktop="37" data-mobile="35" data-smobile="35" />
      <div class="flat-content-wrap style-2 clearfix">
        <div id="sidebar-wrap" class="themesflat-tabs style-2 title-w170 clearfix">
          <ul id="sidebar" class="tab-title">
            <li v-for="(point, index) in whysteel.points" :id="'item-title-' + index" :key="index" v-bind:class="{'active' : index === 0}" class="item-title">
              <span class="inner" @click="findcontent('point-' + index, 'item-title-' + index)">{{ point.title }}</span>
            </li>
          </ul>
          <div id="spacer" class="invisible">
            DESIGN_FLEXIBILITY
          </div>
          <div id="steel-content" class="tab-content-wrap clearfix">
            <div class="outer-wrapper">
              <div v-for="(point, index) in whysteel.points" :id="'point-' + index" :key="index" class="tab-content">
                <div class="item-content">
                  <h5>{{ point.title }}</h5>
                  <p v-for="(paragraph, i) in point.description" :key="i">
                    {{ paragraph }}
                  </p>
                </div>
              </div>
              <!-- /.tab-content -->
            <!-- </div> -->
          <!-- </div> -->
          <!-- /.tab-content-wrap -->
        <!-- </div> -->
        <!-- /.themesflat-tabs -->
      <!-- </div>-->
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
  data() {
    return {
      whysteel: whysteel
    }
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line
      if (window.innerWidth > 479) {
        // eslint-disable-next-line
        const sidebar = document.getElementById('sidebar')
        const sidebarTop = sidebar.getBoundingClientRect()
        // eslint-disable-next-line
        const contentHeight = document.getElementById('steel-content').offsetHeight - 10
        // eslint-disable-next-line
        const scrollTop = window.pageYOffset + 50 || document.documentElement.scrollTop
        const coordinates = { top: sidebarTop.top + scrollTop }
        // eslint-disable-next-line
        document.addEventListener('scroll', event => {this.fixSidebarOnScroll(sidebar, coordinates.top, contentHeight)})
      }
    }
  },
  // destroyed() {
  //   // eslint-disable-next-line
  //   if (process.client) {
  //     // eslint-disable-next-line
  //     window.removeEventListener('scroll', this.fixSidebarOnScroll(sidebar, coordinates.top, contentHeight))
  //   }
  // },
  methods: {
    findcontent: function (content, button) {
      const buttons = document.getElementsByClassName('item-title')
      for (let i = 0; i < buttons.length; i++) {
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
      if (windowScrollTop <= sidebarTop) {
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
  }
}
</script>

<style>
#why-steel .about {
  background-color: #F7F7F7;
  margin: 0;
}
#why-steel .about-left p {
  margin: 0;
}
#why-steel .about-right {
  padding: 0;
}
#why-steel .card-header {
  display: flex;
  justify-content: space-between;
  background-color: #FFF;
  height: 75px;
}
#why-steel .card {
  border: none;
}
#why-steel .card-header h5 {
  margin-top: auto;
  margin-bottom: auto;
}
#why-steel .card-header button {
  color: black;
  font-size: 20px;
  width: 20px;
}
#why-steel .card-header button:focus,
#why-steel .btn.focus,
#why-steel .btn:focus {
  box-shadow: none;
}
#why-steel .card-body {
  padding: 20px;
}
#why-steel .contact-box {
  border: 1px solid #e5e5e5;
  text-align: center;
  padding: 40px 20px;
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
