<template>
  <div
    id="getAQuoteModal"
    class="modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="getAQuoteModal"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <h1>{{ getaquote.title }}</h1>
          <div class="sep has-width w80 accent-bg clearfix" />
          <p>{{ getaquote.intro }}</p>
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="(error, i) in errors" :key="i">
                {{ error }}
              </li>
            </ul>
          </p>
          <div class="form-group">
            <label for="quote-name" class="hide-element">{{ getaquote.namePlaceholder }}</label>
            <input
              id="quote-name"
              v-model="name"
              type="text"
              name="name"
              :placeholder="getaquote.namePlaceholder"
              @blur="sendWarning('name')"
            >
            <p v-if="nameIsEmpty === true" class="warning-message">
              {{ getaquote.nameMissing }}
            </p>
          </div>
          <div class="form-group">
            <label for="quote-email" class="hide-element">{{ getaquote.emailPlaceholder }}</label>
            <input
              id="quote-email"
              v-model="email"
              type="email"
              name="email"
              :placeholder="getaquote.emailPlaceholder"
              @blur="sendWarning('email')"
            >
            <p v-if="emailIsEmpty === true" class="warning-message">
              {{ getaquote.emailMissing }}
            </p>
          </div>
          <div class="form-group">
            <label for="quote-company" class="hide-element">{{ getaquote.companyPlaceholder }}</label>
            <input id="quote-company" v-model="company" type="text" name="company" :placeholder="getaquote.companyPlaceholder">
          </div>
          <div class="elm-button">
            <input
              id="submitDetails"
              type="submit"
              :value="getaquote.nextButton"
              disabled
              :class="{'disabled': nextEnabled === false}"
              class="themesflat-button bg-accent"
              @click="openQuoteForm()"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import quote from '../content/quote.json'

export default {
  data() {
    return {
      getaquote: quote,
      name: '',
      email: '',
      company: '',
      nextEnabled: false,
      errors: [],
      nameIsEmpty: false,
      emailIsEmpty: false
    }
  },
  watch: {
    name: function () {
      if (this.name !== '' && this.email !== '') {
        this.nextEnabled = true
        this.nameIsEmpty = false
        this.enableButton()
      } else if (this.name !== '') {
        this.nameIsEmpty = false
      } else {
        this.nextEnabled = false
      }
    },
    email: function () {
      if (this.name !== '' && this.email !== '') {
        this.nextEnabled = true
        this.emailIsEmpty = false
        this.enableButton()
      } else if (this.email !== '') {
        this.emailIsEmpty = false
      } else {
        this.nextEnabled = false
      }
    },
    company: function () {
      if (this.name !== '' && this.email !== '') {
        this.nextEnabled = true
        this.enableButton()
      } else {
        this.nextEnabled = false
      }
    }
  },
  methods: {
    openQuoteForm: function () {
      if (this.nextEnabled) {
        this.$router.push({
          name: 'quote',
          params: {
            name: this.name,
            email: this.email,
            company: this.company
          }
        })
        // eslint-disable-next-line
      $('.modal-backdrop').remove()
      }
    },
    enableButton: function () {
      document.getElementById('submitDetails').disabled = false
    },
    sendWarning: function (field) {
      if (field === 'name') {
        if (this.name === '') {
          this.nameIsEmpty = true
        } else {
          this.nameIsEmpty = false
        }
      } else if (field === 'email') {
        if (this.email === '') {
          this.emailIsEmpty = true
        } else {
          this.emailIsEmpty = false
        }
      }
    }
  }
}
</script>

<style>
#getAQuoteModal h1 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: #232323;
}
#getAQuoteModal p {
    text-align: center;
    color: #585858;
}
#getAQuoteModal .modal-content {
    padding: 27px 35px;
}
#getAQuoteModal input[type='text'],
#getAQuoteModal input[type='email'] {
    margin-bottom: 30px;
}
#getAQuoteModal .themesflat-button {
    width: 100%;
    text-align: center;
}
#getAQuoteModal .sep {
    background: #fed00e;
    width: 60px;
    height: 3px;
    margin: 0 auto;
    margin-bottom: 18px;
}
#getAQuoteModal .themesflat-button.disabled,
#getAQuoteModal .themesflat-button.disabled:hover,
#getAQuoteModal .themesflat-button.bg-accent.disabled:hover:before {
    background-color: #E0E0E0 !important;
    color: #111;
}
#getAQuoteModal .warning-message {
  color: red;
  font-size: 12px;
  text-align: left;
  margin-top: -30px;
  padding-left: 20px;
}
</style>
