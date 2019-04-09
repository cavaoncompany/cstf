<template>
  <div
    id="getAQuote"
    class="modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="getAQuote"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <h1>{{ getaquote.title }}</h1>
          <div class="sep has-width w80 accent-bg clearfix" />
          <p>{{ getaquote.intro }}</p>
          <div class="form-group">
            <label for="quote-name" class="hide-element">{{ getaquote.namePlaceholder }}</label>
            <input id="quote-name" type="text" name="name" :placeholder="getaquote.namePlaceholder" v-model="name">
          </div>
          <div class="form-group">
            <label for="quote-email" class="hide-element">{{ getaquote.emailPlaceholder }}</label>
            <input id="quote-email" type="email" name="email" :placeholder="getaquote.emailPlaceholder" v-model="email">
          </div>
          <div class="form-group">
            <label for="quote-company" class="hide-element">{{ getaquote.companyPlaceholder }}</label>
            <input id="quote-company" type="text" name="company" :placeholder="getaquote.companyPlaceholder" v-model="company">
          </div>
          <div class="elm-button">
          <input
            id="submitDetails"
            type="submit"
            :value="getaquote.nextButton"
            disabled
            v-bind:class="{'disabled': nextEnabled === false}"
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
      nextEnabled: false
    }
  },
  watch: {
    name: function () {
      if (this.name !== '' && this.email !== '' && this.company !== '') {
        this.nextEnabled = true
        this.enableButton()
      } else {
        this.nextEnabled = false
      }
    },
    email: function () {
      if (this.name !== '' && this.email !== '' && this.company !== '') {
        this.nextEnabled = true
        this.enableButton()
      } else {
        this.nextEnabled = false
      }
    },
    company: function () {
      if (this.name !== '' && this.email !== '' && this.company !== '') {
        this.nextEnabled = true
        this.enableButton()
      } else {
        this.nextEnabled = false
      }
    }
  },
  methods: {
    openQuoteForm: function() {
      if (this.nextEnabled) {
        this.$router.push({
          name: 'quote',
          params: {
            name: this.name,
            email: this.email,
            company: this.company
          }
      })
      $('.modal-backdrop').remove()
      }
    },
    enableButton: function() {
      document.getElementById('submitDetails').disabled = false
    }
  }
}
</script>

<style>
#getAQuote h1 {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: #232323;
}
#getAQuote p {
    text-align: center;
    color: #585858;
}
#getAQuote .modal-content {
    padding: 27px 35px;
}
#getAQuote input[type='text'],
#getAQuote input[type='email'] {
    margin-bottom: 30px;
}
#getAQuote .themesflat-button {
    width: 100%;
    text-align: center;
}
#getAQuote .sep {
    background: #fed00e;
    width: 60px;
    height: 3px;
    margin: 0 auto;
    margin-bottom: 18px;
}
#getAQuote .themesflat-button.disabled,
#getAQuote .themesflat-button.disabled:hover,
#getAQuote .themesflat-button.bg-accent.disabled:hover:before {
    background-color: #E0E0E0 !important;
    color: #111;
}
</style>
