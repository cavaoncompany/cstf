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
              <a href="#" @click="nextPage()" class="themesflat-button bg-accent">{{ quote.nextButton }}</a>
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
        <!-- SECTION 2 -->
        <section v-if="currentPage === 2" id="quote-page-2">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div v-if="projectType === 'residential'" class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.residentialProject }}
            </h2>
            <div class="sep has-width w80 accent-bg clearfix" />
          </div>
          <div v-if="projectType === 'commercial'" class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.commercialProject }}
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
            <p @click="previousPage()">{{ quote.back }}</p>
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
            <div v-if="projectType === 'residential'">
              <h3>
                {{ quote.detail.title }}
              </h3>
              <div v-for="(det, index) in quote.detail.detail" :key="index">
                <input
                  :id="'detail' + index"
                  v-model="detail"
                  type="radio"
                  name="detail"
                  :value="detail"
                  @change="checkIfOther(detail)"
                >
                <label :for="'detail' + index">{{ det }}</label><br>
              </div>
              <input
                v-if="otherSelected"
                id="residentialDetail"
                v-model="detailOther"
                type="text"
                placeholder="Other"
                name="detailOther"
                size="100"
              >
            </div>
            <div v-if="projectType === 'commercial'">
              <h3>
              {{ quote.commercialDetail.title }}
            </h3>
            <div v-for="(det, index) in quote.commercialDetail.detail" :key="index">
              <input
                :id="'commercialDetail' + index"
                v-model="detail"
                type="radio"
                name="detail"
                :value="detail"
                @change="checkIfOther(detail)"
              >
              <label :for="'commercialDetail' + index">{{ det }}</label><br>
            </div>
            <input
              v-if="otherSelected"
              id="commercialDetail"
              v-model="detailOther"
              type="text"
              placeholder="Other"
              name="detailOther"
              size="100"
            >
            </div>
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="elm-button">
            <a href="#" @click="nextPage()" class="themesflat-button bg-accent">{{ quote.nextButton }}</a>
          </div>
          </article>
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
        </section>
        
        <!-- SECTION 3 residential & commercial -->
        <section v-if="currentPage === 3" id="quote-page-3">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div v-if="projectType === 'residential'" class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.residentialProject }}
            </h2>
            <div class="sep has-width w80 accent-bg clearfix" />
          </div>
          <div v-if="projectType === 'commercial'" class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.commercialProject }}
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
              <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Page {{ currentPage }} of {{ totalPages }}</p>
            <p @click="previousPage()">{{ quote.back }}</p>
            <p @click="nextPage()">{{ quote.next }}</p>
          </div>
          <article class="bg-white-column questionnaire">
            <h3>
              {{ quote.DAApproval.title }}
            </h3>
            <div v-for="(DA, index) in quote.DAApproval.approval" :key="index">
              <input
                :id="'DAApproval' + index"
                v-model="DAApproval"
                type="radio"
                name="DA"
                :value="DAApproval"
              >
              <label :for="'DAApproval' + index">{{ DA }}</label><br>
            </div>
            
            <h3>
              {{ quote.architecturalPlan.title }}
            </h3>
            <div>
              <input
                id="'architectural0'"
                v-model="type"
                type="radio"
                name="architectural"
                :value="quote.architecturalPlan.plans[0]"
                @change="checkIfNo(architecturalPlans)"
              >
              <label for="architectural0">{{ quote.architecturalPlan.plans[0] }}</label><br>
            </div>
            <div >
              <input
                id="'architectural1'"
                v-model="type"
                type="radio"
                name="architectural"
                :value="quote.architecturalPlan.plans[1]"
                data-toggle="modal"
                data-target="sorry-modal"
                @change="checkIfNo(architecturalPlans)"
              >
              <label for="architectural1">{{ quote.architecturalPlan.plans[1] }}</label><br>
            </div>
            <h3>
              {{ quote.engineeringPlan.title }}
            </h3>
            <div v-for="(eng, index) in quote.engineeringPlan.plans" :key="index">
              <input
                :id="'engineering' + index"
                v-model="engineeringPlans"
                type="radio"
                name="engineering"
                :value="eng"
                @change="checkIfNo(engineeringPlans)"
              >
              <label :for="'engineering' + index">{{ eng }}</label><br>
            </div>
            <h3>
              {{ quote.structuralPlan.title }}
            </h3>
            <div v-for="(struct, index) in quote.structuralPlan.plans" :key="index">
              <input
                :id="'structural' + index"
                v-model="structuralPlans"
                type="radio"
                name="structural"
                :value="struct"
                @change="checkIfNo(structuralPlan)"
              >
              <label :for="'structural' + index">{{ struct }}</label><br>
            </div>
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="elm-button">
            <a href="#" @click="nextPage()" class="themesflat-button bg-accent">{{ quote.nextButton }}</a>
          </div>
          </article>
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
        </section>

        <!-- SECTION 4 residential & commercial -->
        <section v-if="currentPage === 4" id="quote-page-4">
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div v-if="projectType === 'residential'" class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.residentialProject }}
            </h2>
            <div class="sep has-width w80 accent-bg clearfix" />
          </div>
          <div v-if="projectType === 'commercial'" class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.commercialProject }}
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
              <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p>Page {{ currentPage }} of {{ totalPages }}</p>
            <p @click="previousPage()">{{ quote.back }}</p>
          </div>
          <article class="bg-white-column questionnaire">
            <h3>
              {{ quote.quoteFor.title }}
            </h3>
            <div v-for="(quote, index) in quote.quoteFor.type" :key="index">
              <input
                :id="'quoteFor' + index"
                v-model="quoteFor"
                type="radio"
                name="quoteFor"
                :value="quote"
              >
              <label :for="'quoteFor' + index">{{ quote }}</label><br>
            </div>
            
            <h3>
              {{ quote.startProject.title }}
            </h3>
            <div v-for="(start, index) in quote.startProject.timeframe" :key="index">
              <input
                :id="'startProject' + index"
                v-model="startProject"
                type="radio"
                name="startProject"
                :value="start"
              >
              <label :for="'startProject' + index">{{ start }}</label><br>
            </div>
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="elm-button">
            <a href="#" @click="nextPage()" class="themesflat-button bg-accent">{{ quote.submitButton }}</a>
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
    <div
      id="sorry-modal"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="projectDetail"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="detail-gallery">
                <div class="themesflat-spacer clearfix" data-desktop="21" data-mobile="21" data-smobile="21" />
                <div>
                  <p>{{ quote.sorry }}</p>
                  <div class="elm-button">
                    <a href="/" class="themesflat-button bg-accent">{{ quote.returnHome }}</a>
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
      currentPage: 3,
      totalPages: 4,
      otherSelected: false,
      name: this.$route.params.name,
      email: this.$route.params.email,
      company: this.$route.params.company,
      projectType: 'residential',
      profession: '',
      type: '',
      detail: '',
      detailOther: '',
      DAApproval: 'No',
      noDAApproval: 'No',
      architecturalPlans: 'No',
      engineeringPlans: 'No',
      structuralPlans: 'No',
      quoteFor: '',
      startProject: ''
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
#quote input[type='radio'] {
    width: 0px;
    margin-top: 8px;
    vertical-align: middle;
    visibility: hidden;
    position: absolute;
  }
#quote input[type='radio'] + label:before {
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
  input[type='radio']:checked + label:before {
    background:#FFC716;
  }
  #quote .questionnaire {
    padding: 2% 15%;
  }
  #quote .questionnaire h3 {
    text-align: left;
  }
</style>
