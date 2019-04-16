<template>
  <section id="quote" class="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
    <Header />
    <div class="container">
      <div class="wrapper">
        <form
          id="quoteForm"
          @submit.prevent="onSubmit"
        >
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
          <div class="progress-bar-wrapper bg-white-column row">
            <div class="invisible page-navigation disabled" role="button" aria-disabled="true" @click="previousPage()"><i class="fa fa-chevron-left"></i> {{ quote.back }}</div>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
              </div>
              <div>Page {{ currentPage }} of {{ totalPages }}</div>
            </div>
            <div class="page-navigation disabled" role="button" aria-disabled="true" @click="nextPage(2)" v-bind:class="{'yellow': page2enabled === true}">{{ quote.next }} <i class="fa fa-chevron-right"></div>
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
              <a @click="nextPage(2)" class="themesflat-button bg-accent" role="button" v-bind:class="{'disabled': page2enabled === false}" aria-disabled="true">{{ quote.nextButton }}</a>
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
          <div class="progress-bar-wrapper bg-white-column row">
            <div class="page-navigation disabled" role="button" aria-disabled="true" @click="previousPage()"><i class="fa fa-chevron-left"></i> {{ quote.back }}</div>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
              </div>
              <div>Page {{ currentPage }} of {{ totalPages }}</div>
            </div>
            <div class="page-navigation disabled" role="button" aria-disabled="true" @click="nextPage(3)" v-bind:class="{'yellow': page3enabled === true}">{{ quote.next }} <i class="fa fa-chevron-right"></div>
          </div>

          <article class="bg-white-column questionnaire">
            <h3>
              {{ quote.profession.title }}
            </h3>
            <article class="with-border">
              <div v-for="(prof, index) in quote.profession.professions" :key="index">
                <input
                  :id="'profession' + index"
                  v-model="profession"
                  type="radio"
                  name="profession"
                  :value="prof"
                >
                <label :for="'profession' + index">{{ prof }}</label><br>
              </div>
            </article>
            
            <h3>
              {{ quote.projectType.title }}
            </h3>
            <article  class="with-border">
              <div v-for="(proj, index) in quote.projectType.type" :key="index">
                <input
                  :id="'project' + index"
                  v-model="type"
                  type="radio"
                  name="project"
                  :value="proj"
                >
                <label :for="'project' + index">{{ proj }}</label><br>
              </div>
            </article>
            <div v-if="projectType === 'residential'">
              <h3>
                {{ quote.detail.title }}
              </h3>
              <article>
                <div v-for="(det, index) in quote.detail.detail" :key="index">
                  <input
                    :id="'detail' + index"
                    v-model="detail"
                    type="radio"
                    name="detail"
                    :value="det"
                    @change="checkIfOther(det)"
                  >
                  <label :for="'detail' + index">{{ det }}</label><br>
                </div>
                <input
                  v-if="otherDetailSelected"
                  id="residentialDetail"
                  v-model="detailOther"
                  type="text"
                  placeholder="Other"
                  name="detailOther"
                  size="100"
                >
              </article>
            </div>
            <div v-if="projectType === 'commercial'">
              <h3>
              {{ quote.commercialDetail.title }}
            </h3>
            <article>
              <div v-for="(det, index) in quote.commercialDetail.detail" :key="index">
                <input
                  :id="'commercialDetail' + index"
                  v-model="detail"
                  type="radio"
                  name="detail"
                  :value="det"
                  @change="checkIfOther(det, otherDetailSelected)"
                >
                <label :for="'commercialDetail' + index">{{ det }}</label><br>
              </div>
              <input
                v-if="otherDetailSelected"
                id="commercialDetail"
                v-model="detailOther"
                type="text"
                placeholder="Other"
                name="detailOther"
                size="100"
              >
            </article>
            </div>
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="elm-button">
            <a @click="nextPage(3)" class="themesflat-button bg-accent" role="button" aria-disabled="true" v-bind:class="{'disabled': page3enabled === false}">{{ quote.nextButton }}</a>
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
          <div class="progress-bar-wrapper bg-white-column row">
            <div class="page-navigation" @click="previousPage()"><i class="fa fa-chevron-left"></i> {{ quote.back }}</div>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" />
              </div>
              <div>Page {{ currentPage }} of {{ totalPages }}</div>
            </div>
            <div class="page-navigation" @click="nextPage(4)" v-bind:class="{'yellow': page4enabled === true}">{{ quote.next }} <i class="fa fa-chevron-right"></div>
          </div>
          <article class="bg-white-column questionnaire">
            <h3>
              {{ quote.DAApproval.title }}
            </h3>
            <article class="with-border">
              <div v-for="(DA, index) in quote.DAApproval.approval" :key="index">
                <input
                  :id="'DAApproval' + index"
                  v-model="DAApproval"
                  type="radio"
                  name="DA"
                  :value="DA"
                  @change="checkIfNo('DAApproval')"
                >
                <label :for="'DAApproval' + index">{{ DA }}</label><br>
              </div>
              <article v-if="noDAApprovalSelected === true" class="sub-quote-article">
                <p>{{ quote.noDAApproval.title }}</p>
                <div v-for="(noDA, index) in quote.noDAApproval.reasons" :key="index">
                  <input
                    :id="'noDAApproval' + index"
                    v-model="noDAApproval"
                    type="radio"
                    name="noDA"
                    :value="noDA"
                  >
                  <label :for="'noDAApproval' + index">{{ noDA }}</label>
                </div>
              </article>
            </article>
            <h3>
              {{ quote.architecturalPlan.title }}
            </h3>
            <article class="with-border">
              <div>
                <input
                  id="architectural0"
                  v-model="architecturalPlans"
                  type="radio"
                  name="architectural"
                  :value="quote.architecturalPlan.plans[0]"
                  @change="checkIfNo('architectural')"
                >
                <label for="architectural0">{{ quote.architecturalPlan.plans[0] }}</label><br>
              </div>
              <div >
                <input
                  id="architectural1"
                  v-model="architecturalPlans"
                  type="radio"
                  name="architectural"
                  data-toggle="modal"
                  data-target="sorry-modal"
                  :value="quote.architecturalPlan.plans[1]"
                  @change="checkIfNo('architectural')"
                >
                <label for="architectural1" data-toggle="modal" data-arget="sorry-modal">{{ quote.architecturalPlan.plans[1] }}</label><br>
              </div>
              <article v-if="architecturalPlansSelected" class="sub-article-dashed">
                <h3>
                  {{ quote.architecturalPlan.upload }}
                </h3>
                <div v-if="architecturalPlan !== ''" class="uploaded-files">
                  <img :src="quote.yellowTick" alt="file uploaded">
                  <p>{{ architecturalPlan }}</p>
                </div>
                <input
                  id="architecturalPlans"
                  type="file"
                  ref="architecturalfile"
                  name="architecturalPlans"
                  @change="showUploadedFile($event, 'architecture')"
                  multiple
                >
                <label for="architecturalPlans">
              <i class="fa fa-upload" />
              {{ quote.architecturalPlan.uploadButton }}
            </label>
              </article>
            </article>
            <h3 v-bind:class="{'greyed-out': engineeringPlansEnabled === false}">
              {{ quote.engineeringPlan.title }}
            </h3>
            <article class="with-border" v-bind:class="{'greyed-out': engineeringPlansEnabled === false}">
              <div v-for="(eng, index) in quote.engineeringPlan.plans" :key="index">
                <input
                  :id="'engineering' + index"
                  v-model="engineeringPlans"
                  type="radio"
                  name="engineering"
                  :value="eng"
                  @change="checkIfNo('engineering')"
                  disabled
                >
                <label :for="'engineering' + index">{{ eng }}</label><br>
              </div>
              <article v-if="engineeringPlansSelected" class="sub-article-dashed">
                <h3>
                  {{ quote.engineeringPlan.upload }}
                </h3>
                <div v-if="engineeringPlan !== ''" class="uploaded-files">
                  <img :src="quote.yellowTick" alt="file uploaded">
                  <p>{{ engineeringPlan }}</p>
                </div>
                <input
                  id="engineeringPlans"
                  type="file"
                  ref="engineeringfile"
                  name="engineeringPlans"
                  @change="showUploadedFile($event, 'engineering')"
                >
                <label for="engineeringPlans">
              <i class="fa fa-upload" />
              {{ quote.engineeringPlan.uploadButton }}
            </label>
              </article>
            </article>
            <h3 v-bind:class="{'greyed-out': structuralPlansEnabled === false}">
              {{ quote.structuralPlan.title }}
            </h3>
            <article v-bind:class="{'greyed-out': structuralPlansEnabled === false}">
            <div v-for="(struct, index) in quote.structuralPlan.plans" :key="index">
              <input
                :id="'structural' + index"
                v-model="structuralPlans"
                type="radio"
                name="structural"
                :value="struct"
                disabled
              >
              <label :for="'structural' + index">{{ struct }}</label><br>
            </div>
          </article>
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <div class="elm-button">
            <a @click="nextPage(4)" class="themesflat-button bg-accent" role="button" aria-disabled="true" v-bind:class="{'disabled': page4enabled === false}">{{ quote.nextButton }}</a>
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
          <div class="progress-bar-wrapper bg-white-column row">
            <div class="page-navigation  disabled" role="button" aria-disabled="true" @click="previousPage()"><i class="fa fa-chevron-left"></i> {{ quote.back }}</div>
            <div class="progress-wrapper">
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" />
              </div>
              <div>Page {{ currentPage }} of {{ totalPages }}</div>
            </div>
            <div class="page-navigation invisible disabled" role="button" aria-disabled="true" @click="nextPage()">{{ quote.next }} <i class="fa fa-chevron-right"></div>
          </div>
          <article class="bg-white-column questionnaire">
            <h3>
              {{ quote.quoteFor.title }}
            </h3>
            <article class="with-border">
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
            </article>
            <h3>
              {{ quote.startProject.title }}
            </h3>
            <article class="with-border">
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
            </article>
            <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
          <h3>
              {{ quote.message }}
          </h3>
          <article>
            <textarea id="quoteMessage" name="message" cols="40" rows="4" />
          </article>
          <div class="elm-button">
            <input
              id="quote-submit"
              type="submit"
              :value="quote.submitButton"
              class="themesflat-button bg-accent"
              name="submit"
              disabled
              v-bind:class="{'disabled': submitEnabled === false}"
            >
          </div>
          </article>
          <div
            class="themesflat-spacer clearfix"
            data-desktop="73"
            data-mobile="60"
            data-smobile="60"
          />
        </section>
        </form>
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
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
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
import { constants } from 'crypto';

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
      otherDetailSelected: false,
      name: this.$route.params.name,
      email: this.$route.params.email,
      company: this.$route.params.company,
      projectType: '',
      profession: '',
      type: '',
      detail: '',
      detailOther: '',
      DAApproval: '',
      noDAApprovalSelected: false,
      noDAApproval: '',
      architecturalPlans: '',
      architecturalPlansSelected: false,
      architecturalPlan: '',
      architecturalPlanPath: '',
      architecturalFile: '',
      engineeringPlans: '',
      engineeringPlan: '',
      engineeringPlanPath: '',
      engineeringPlansSelected: false,
      engineeringPlansEnabled: false,
      engineeringFile: {},
      structuralPlans: '',
      structuralPlansEnabled: false,
      quoteFor: '',
      startProject: '',
      page2enabled: false,
      page3enabled: false,
      page4enabled: false,
      submitEnabled: false
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    addProjectType: function(project, e) {
      const type = 'type-' + project.type
      const tick = 'tick-' + project.type
      for (let i = 0; i < this.quote.typeOfProject.types.length; i++) {
        const thisType = 'type-' + this.quote.typeOfProject.types[i].type
        const thisTick = 'tick-' + this.quote.typeOfProject.types[i].type
        document.getElementById(thisType).classList.remove('projectSelected')
        document.getElementById(thisType).classList.add('projectDeselected')
        document.getElementById(thisTick).classList.add('invisible')
        this.page2enabled = false
      }
      if (this.projectType === project.type) {
        this.projectType = ''
      } else {
        this.projectType = project.type
        document.getElementById(tick).classList.remove('invisible')
        document.getElementById(type).classList.remove('projectDeselected')
        document.getElementById(type).classList.add('projectSelected')
        this.page2enabled = true
      }
    },
    nextPage: function(value) {
      if (this.currentPage < this.totalPages) {
        if (value === 2) {
          if (this.projectType !== '') {
            this.currentPage++
          }
        } else if (value === 3) {
          if (this.profession !== '' && this.type !== '' && this.detail !== '') {
            this.currentPage++
          }
        } else if (value === 4) {
          if (this.DAApproval !== '' && this.architecturalPlans !== '' && this.engineeringPlans !== '' && this.structuralPlans !== '') {
            this.currentPage++
          }
        } else if (value === 'submit') {
          if (this.quoteFor !== '' && this.startProject !== '') {
          }
        }
      }
    },
    previousPage: function() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    checkIfOther: function (value, changer) {
      if (value.toLowerCase() === 'other') {
        this.otherDetailSelected = true
      } else {
        this.otherDetailSelected = false
      }
    },
    checkIfNo: function(value) {
      if (value === 'DAApproval') {
        if (this.DAApproval === 'No') {
          this.noDAApprovalSelected = true
        } else {
          this.noDAApprovalSelected = false
        }
      } else if (value === 'architectural') {
        if (this.architecturalPlans === 'No') {
          $('#sorry-modal').modal({
            backdrop: 'static',
            keyboard: false
          })
          this.architecturalPlansSelected = false
        } else {
          this.architecturalPlansSelected = true
        }
      } else if (value === 'engineering') {
        if (this.engineeringPlans === 'Yes') {
          this.engineeringPlansSelected = true
        } else {
          this.engineeringPlansSelected = false
        }
      }
    },
    showUploadedFile: function(e, area) {
      const file = e.target.files[0]
      if (area === 'architecture'){
        this.architecturalPlan = file.name
        this.architecturalFile = this.$refs.architecturalfile.files[0]
        this.architecturalPlanPath = this.createFile(file)
      } else if ( area === 'engineering') {
        this.engineeringPlan = file.name
        this.engineeringFile = this.$refs.engineeringfile.files[0]
        this.engineeringPlanPath = this.createFile(file)
      }
    },
    createFile: function(file) {
      const reader = new FileReader()
      const vm = this

      reader.onload = (e) => {
        reader.readAsDataURL(file)
      }
    },
    removeDisabled: function(el) {
      document.getElementById(el).disabled = false
    },
    sendEmail: function() {
      const emailData = {
        email: this.email,
        name: this.name,
        company: this.company,
        projectType: this.projectType,
        profession: this.profession,
        type: this.type,
        detail: this.detail,
        detailOther: this.detailOther,
        DAApproval: this.DAApproval,
        noDAApproval: this.noDAApproval,
        architecturalPlans: this.architecturalPlans,
        architecturalPlan: this.architecturalPlan,
        architecturalPlanPath: this.architecturalPlanPath,
        architecturalFile: this.architecturalFile,
        engineeringPlans: this.engineeringPlans,
        engineeringPlan: this.engineeringPlan,
        engineeringPlanPath: this.engineeringPlanPath,
        engineeringFile: this.engineeringFile,
        structuralPlans: this.structuralPlans,
        quoteFor: this.quoteFor,
        startProject: this.startProject
      }
      this.$store.dispatch('getQuote', emailData)
      this.email = ''
      this.name = ''
      this.company = ''
      this.projectType = ''
      this.profession = ''
      this.type = ''
      this.detail = ''
      this.detailOther =''
      this.DAApproval = ''
      this.noDAApproval = ''
      this.architecturalPlans = ''
      this.architecturalPlan = ''
      this.architecturalPlanPath = ''
      this.architecturalFile = ''
      this.engineeringPlans = ''
      this.engineeringPlan = ''
      this.engineeringPlanPath = ''
      this.engineeringFile = {},
      this.structuralPlans = ''
      this.quoteFor = ''
      this.startProject = ''
      this.$router.replace({ path: 'success' })
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')
        this.sendEmail()
      } catch (error) {
        console.log('Submission error: ', error)
      }
    }
  },
  watch: {
    profession: function() {
      if (this.profession !== '' && this.type !== '' && this.detail === 'other' && this.detailOther !== ''){
        this.page3enabled = true
      } else if (this.profession !== '' && this.type !== '' && this.detail !== 'other' && this.detail !== '') {
        this.page3enabled = true
      } else {
        this.page3enabled = false
      }
    },
    type: function() {
      if (this.profession !== '' && this.type !== '' && this.detail.toLowerCase() === 'other' && this.detailOther !== ''){
        this.page3enabled = true
      } else if (this.profession !== '' && this.type !== '' && this.detail !== 'other' && this.detail !== '') {
        this.page3enabled = true
      } else {
        this.page3enabled = false
      }
    },
    detail: function() {
      if (this.profession !== '' && this.type !== '' && this.detail.toLowerCase() === 'other' && this.detailOther !== ''){
        this.page3enabled = true
      } else if (this.profession !== '' && this.type !== '' && this.detail.toLowerCase() !== 'other' && this.detail !== '') {
        this.page3enabled = true
      } else {
        this.page3enabled = false
      }
    },
    detailOther: function() {
      if (this.profession !== '' && this.type !== '' && this.detail.toLowerCase() === 'other' && this.detailOther !== ''){
        this.page3enabled = true
      } else if (this.profession !== '' && this.type !== '' && this.detail.toLowerCase() !== 'other' && this.detail !== '') {
        this.page3enabled = true
      } else {
        this.page3enabled = false
      }
    },
    DAApproval: function() {
      if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'Yes' && this.engineeringPlan !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'No') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans !== 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else {
        this.page4enabled = false
      }
    },
    architecturalPlans: function() {
      if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else if (this.architecturalPlans === 'Yes') {
        this.page4enabled = false
        for (let i = 0; i < this.quote.engineeringPlan.plans.length; i++) {
          this.removeDisabled('engineering' + i)
        }
        this.engineeringPlansEnabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'No') {
        this.page4enabled = true
      } else {
        this.page4enabled = false
      }
    },
    architecturalPlan: function() {
      if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'Yes' && this.engineeringPlan !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'No') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans !== 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else {
        this.page4enabled = false
      }
    },
    engineeringPlans: function() {
      if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'Yes' && this.engineeringPlan !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else if (this.engineeringPlans === 'Yes') {
        this.page4enabled = false
        for (let i = 0; i < this.quote.structuralPlan.plans.length; i++) {
          this.removeDisabled('structural' + i)
        }
        this.structuralPlansEnabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'No') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else {
        this.page4enabled = false
        this.structuralPlansEnabled = false
      }
    },
    engineeringPlan: function() {
      if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'Yes' && this.engineeringPlan !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'No') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans !== 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else {
        this.page4enabled = false
      }
    },
    structuralPlans: function() {
      if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'Yes' && this.engineeringPlan !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans === 'No') {
        this.page4enabled = true
      } else if (this.DAApproval !== '' && this.architecturalPlans === 'Yes' && this.architecturalPlan !== '' && this.engineeringPlans !== '' && this.structuralPlans !== '') {
        this.page4enabled = true
      } else {
        this.page4enabled = false
      }
    },
    quoteFor: function() {
      if (this.quoteFor !== '' && this.startProject !== '') {
        this.submitEnabled = true
        this.removeDisabled('quote-submit')
      } else {
        this.submitEnabled = false
      }
    },
    startProject: function() {
      if (this.quoteFor !== '' && this.startProject !== '') {
        this.submitEnabled = true
        this.removeDisabled('quote-submit')
      } else {
        this.submitEnabled = false
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
  text-align: center;
  margin: 0 auto;
}
#quote .themesflat-button {
  text-align: center;
  margin-top: 70px;
  margin-bottom: 50px;
  color: #FFF;
}
#quote .sep {
  margin: 0 auto;
}
#quote .progress {
  width: 60%;
  margin: 0 auto;
  height: 15px;
  margin-top: 6px;
}
#quote .page-navigation {
  width: 20%;
  color: #c4c4c4;
  cursor: pointer;
}
#quote .progress-wrapper {
  display: flex;
  justify-content: center;
}
#quote .progress-bar {
  background-color: #FED00E;
}
#quote .progress-bar-wrapper {
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
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
    background-color: #FED00E;
  }
  #quote .questionnaire h3 {
    text-align: left;
  }
  #quote .with-border {
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 30px;
  }
  #quote .sub-quote-article {
    background-color: #f7f7f7;
    padding: 20px;
    margin-top: 20px;
  }
  #quote .sub-article-dashed {
    border: 1px dashed #E0E0E0;
    padding: 20px;
    margin-top: 20px;
  }
  #quote .sub-article-dashed h3 {
    margin-top: 20px;
  }
  #architecturalPlans,
  #engineeringPlans {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  #architecturalPlans + label,
  #engineeringPlans + label {
    font-size: 14px;
    font-weight: 600;
    color: #111;
    background-color: transparent;
    border: 1px solid #E5E5E5;
    display: inline-block;
    cursor: pointer;
    padding: 8px;
    margin-top: 10px;
  }
  #architecturalPlans:focus + label,
  #architecturalPlans + label:hover,
  #engineeringPlans:focus + label,
  #engineeringPlans + label:hover {
    background-color: #FED00E;
    color: #FFF;
  }
  #quote .themesflat-button.disabled,
  #quote .themesflat-button.disabled:hover,
  #quote .themesflat-button.bg-accent.disabled:hover:before {
    background-color: #E0E0E0 !important;
    color: #111;
  }
  #quote .yellow {
    color: #FED00E;
  }
  #quote .uploaded-files {
    display: flex;
  }
  #quote .uploaded-files img {
    height: 25px;
  }
  #quote .greyed-out {
    color: #E0E0E0;
  }
  #sorry-modal .modal-header {
    border: none;
  }
  #sorry-modal .close {
    margin-left: auto;
    overflow: hidden;
  }
</style>
