<template>
  <section id="quote">
    <Header />
    <div class="container">
      <div class="wrapper">
        <form></form>
        <section id="quote-page-1">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.title }}
            </h2>
            <div class="sep has-width w80 accent-bg clearfix" />
          </div>
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="sep has-width w80 accent-bg clearfix" />
          <div class="progress-bar-wrapper bg-white-column">
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Page {{ currentPage }} of {{ totalPages }}</p>
          </div>
          <div class="row bg-white-column">
            <div class="themesflat-headings style-2 clearfix col-12">
              <h3>{{quote.typeOfProject.title}}</h3>
            </div>
            <div v-for="(type, index) in quote.typeOfProject.types" :key="index" class="col-md-6">
              <div :id="'type-' + type.type" class="project-type projectDeselected" @click="addProjectType(type, $event)">
                <img :id="'tick-' + type.type" :src="quote.tick" alt="ticked" class="tick invisible">
                <img :src="type.img" :alt="type.question">
                <p>{{ type.question }}</p>
              </div>
            </div>
            <div class="elm-button">
              <a href="#" @click="getNext(2)" class="themesflat-button bg-accent">{{ quote.nextButton }}</a>
            </div>
          </div>
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
        </section>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import quote from '../content/quote.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      quote: quote,
      currentPage: 1,
      totalPages: 4,
      name: this.$route.params.name,
      email: this.$route.params.email,
      company: this.$route.params.company,
      projectType: ''
    }
  },
  methods: {
    getNext: function(page) {
      this.currentPage = page
    },
    addProjectType: function(project, e) {
      const type = 'type-' + project.type
      const tick = 'tick-' + project.type
      for (let i = 0; i < this.quote.typeOfProject.types.length; i++) {
        const thisType = 'type-' + this.quote.typeOfProject.types[i].type
        const thisTick = 'tick-' + this.quote.typeOfProject.types[i].type
        document.getElementById(thisType).classList.remove('projectSelected')
        document.getElementById(thisType).classList.add('projectDeselected')
        document.getElementById(thisTick).classList.add('invisible')
      }
      if (this.projectType === project.type) {
        this.projectType = ''
      } else {
        this.projectType = project.type
        document.getElementById(type).classList.remove('projectDeselected')
        document.getElementById(type).classList.add('projectSelected')
        document.getElementById(tick).classList.remove('invisible')
      }
    }
  }
}
</script>

<style>
#quote {
  background-color: #f2f2f2;
}
#quote-page-1 img{
  max-height: 76px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}
#quote .project-type {
  text-align: center;
  margin: 50px;
  padding-top: 100px;
  padding-bottom: 80px;
  position: relative;
}
#quote .project-type:hover {
  cursor: pointer;
}
#quote .projectSelected {
  border: 1px solid #FED00E;
}
#quote .projectDeselected {
  border: 1px solid #E5E5E5;
}
#quote h3 {
  margin-top: 50px;
  font-size: 18px;
  text-align: center;
}
#quote .tick {
  height: 37px;
  width: 37px;
  position: absolute;
  top: -16px;
  right: -16px;
}
.invisible {
  opacity: 0;
}
#quote .elm-button {
  margin: 0 auto;
}
#quote h2, #quote .sep {
  text-align: center;
}
#quote .progress {
  width: 30%;
  margin: 0 auto;
}
#quote .progress-bar {
  background-color: #FED00E;
}
#quote .progress-bar-wrapper {
  padding-top: 10px;
  text-align: center;
}
</style>
