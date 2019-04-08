<template>
  <section id="quote">
    <Header />
    <div class="container">
      <div class="wrapper">
        <form></form>
        <!-- SECTION 1 -->
        <section v-if="currentPage === 1" id="quote-page-1">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="themesflat-headings style-2 clearfix text-center">
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
            <p @click="nextPage()">{{ quote.next }}</p>
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
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          </div>
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
        </section>
        <!-- SECTION 2  residential -->
        <section v-if="currentPage === 2 && projectType === 'residential'" id="quote-page-2">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.residentialProject }}
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
              <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Page {{ currentPage }} of {{ totalPages }}</p>
            <p @click="nextPage()">{{ quote.next }}</p>
          </div>

          <article class="bg-white-column questionnaire">
            <h3>
              {{ quote.profession.title }}
            </h3>
            <div v-for="(prof, index) in quote.profession.professions" :key="index">
              <input
                :id="'profession' + index"
                v-model="profession"
                type="radio"
                name="profession"
                :value="profession"
              >
              <label :for="'profession' + index">{{ prof }}</label><br>
            </div>
            
            <h3>
              {{ quote.projectType.title }}
            </h3>
            <div v-for="(proj, index) in quote.projectType.type" :key="index">
              <input
                :id="'project' + index"
                v-model="type"
                type="radio"
                name="project"
                :value="project"
              >
              <label :for="'project' + index">{{ proj }}</label><br>
            </div>
            <h3>
              {{ quote.detail.title }}
            </h3>
            <div v-for="(det, index) in quote.detail.detail" :key="index">
              <input
                :id="'project' + index"
                v-model="detail"
                type="radio"
                name="detail"
                :value="detail"
                @change="checkIfOther(detail)"
              >
              <label :for="'profession' + index">{{ det }}</label><br>
            </div>
            <input
              v-if="otherSelected"
              id="detail"
              v-model="detailOther"
              type="text"
              placeholder="Other"
              name="detailOther"
              size="100"
            >
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="elm-button">
            <a href="#" @click="getNext(3)" class="themesflat-button bg-accent">{{ quote.nextButton }}</a>
          </div>
          </article>
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
        </section>
        <!-- SECTION 2  commercial -->
        <section v-if="currentPage === 2 && projectType === 'commercial'" id="quote-page-2">
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
              <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Page {{ currentPage }} of {{ totalPages }}</p>
            <p @click="nextPage()">{{ quote.next }}</p>
          </div>
          <article class="bg-white-column questionnaire">
            <h3>
              {{ quote.profession.title }}
            </h3>
            <div v-for="(prof, index) in quote.profession.professions" :key="index">
              <input
                :id="'profession' + index"
                v-model="profession"
                type="radio"
                name="profession"
                :value="profession"
              >
              <label :for="'profession' + index">{{ prof }}</label><br>
            </div>
            
            <h3>
              {{ quote.projectType.title }}
            </h3>
            <div v-for="(proj, index) in quote.projectType.type" :key="index">
              <input
                :id="'project' + index"
                v-model="type"
                type="radio"
                name="project"
                :value="project"
              >
              <label :for="'project' + index">{{ proj }}</label><br>
            </div>
            <h3>
              {{ quote.detail.title }}
            </h3>
            <div v-for="(det, index) in quote.detail.detail" :key="index">
              <input
                :id="'project' + index"
                v-model="detail"
                type="radio"
                name="detail"
                :value="detail"
                @change="checkIfOther(detail)"
              >
              <label :for="'profession' + index">{{ det }}</label><br>
            </div>
            <input
              v-if="otherSelected"
              id="detail"
              v-model="detailOther"
              type="text"
              placeholder="Other"
              name="detailOther"
              size="100"
            >
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="elm-button">
            <a href="#" @click="getNext(3)" class="themesflat-button bg-accent">{{ quote.nextButton }}</a>
          </div>
          </article>
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
      currentPage: 2,
      totalPages: 4,
      otherSelected: false,
      name: this.$route.params.name,
      email: this.$route.params.email,
      company: this.$route.params.company,
      projectType: 'residential',
      profession: '',
      type: '',
      detail: '',
      detailOther: ''
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
    },
    nextPage: function() {
      this.currentPage++
    },
    previousPage: function() {
      this.currentPage--
    },
    checkIfOther: function (value) {
      if (value.toLowerCase() === 'other') {
        this.otherSelected = true
      } else {
        this.otherSelected = false
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
#quote .row {
  margin: 0;
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
#quote h2 {
  text-align: center;
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
#quote .sep {
  margin: 0 auto;
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
#quote input[type="radio"] {
    width: 0px;
    margin-top: 8px;
    vertical-align: middle;
    visibility: hidden;
    position: absolute;
  }
#quote input[type=radio] + label:before {
    height:12px;
    width:12px;
    margin-right: 2px;
    content: " ";
    display:inline-block;
    vertical-align: baseline;
    border:1px solid #E2E2E2;
    border-radius:50%;
    margin-right: 10px;
  }
  input[type=radio]:checked + label:before {
    background:#FFC716;
  }
  #quote .questionnaire {
    padding: 2% 15%;
  }
  #quote .questionnaire h3 {
    text-align: left;
  }
</style>
