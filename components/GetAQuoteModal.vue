<template>
  <div
    id="getAQuote"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="getAQuote"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <form id="getAQuoteForm">
            <h1>{{ getaquote.title }}</h1>
            <div class="sep has-width w80 accent-bg clearfix" />
            <p>{{ getaquote.intro }}</p>
            <label for="quote-name" class="hide-element">{{ getaquote.namePlaceholder }}</label>
            <input id="quote-name" type="text" name="name" :placeholder="getaquote.namePlaceholder" v-model="name">
            <label for="quote-email" class="hide-element">{{ getaquote.emailPlaceholder }}</label>
            <input id="quote-email" type="email" name="email" :placeholder="getaquote.emailPlaceholder" v-model="email">
            <label for="quote-company" class="hide-element">{{ getaquote.companyPlaceholder }}</label>
            <input id="quote-company" type="text" name="company" :placeholder="getaquote.companyPlaceholder" v-model="company">
            <div class="elm-button">
            <a :href="$router.resolve({name:'quote', params:{name: name, email: email, company: company}}).href" class="themesflat-button bg-accent">{{ getaquote.nextButton }}</a>
            </div>
          </form>
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
      company: ''
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
</style>
