<template>
  <section id="thankyou" class="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
    <Header />
    <div class="container">
      <div class="thank-you-wrapper">
        <div
          class="themesflat-spacer clearfix"
          data-desktop="73"
          data-mobile="60"
          data-smobile="60"
        />
        <div class="themesflat-headings style-2 clearfix text-center">
          <h2 class="heading">
            {{ thankyou.thankYou }}
          </h2>
        </div>
        <div>
          <p>{{ thankyou.thankYouMessage }}</p>
          <div class="elm-button">
              <a href="/" class="themesflat-button bg-accent">{{ thankyou.returnHome }}</a>
          </div>
        </div>
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

<style>
#thankyou {
  background-color: #f2f2f2;
}
#thankyou .thank-you-wrapper {
  background-color: #fff;
  text-align: center;
  margin: 70px;
  padding: 70px;
}
#thankyou .themesflat-button {
  margin-top: 50px;
}
</style>
