<template>
  <section id="thankyou">
    <Header />
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
    </div>
    <div
      class="themesflat-spacer clearfix"
      data-desktop="73"
      data-mobile="60"
      data-smobile="60"
    />
    <div>
      <p>{{ thankyou.thankYouMessage }}</p>
      <div class="elm-button">
          <a href="/" class="themesflat-button bg-accent">{{ thankyou.returnHome }}</a>
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
      thankyou: quote
    }
  }
}
</script>
