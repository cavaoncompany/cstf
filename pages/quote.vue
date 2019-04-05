<template>
  <section id="quote">
    <Header />
    <div class="container">
      <div class="wrapper">
        <form></form>
        <section id="quote-page-1">
          <div class="themesflat-headings style-2 clearfix">
            <h2 class="heading">
              {{ quote.title }}
            </h2>
            <div class="sep has-width w80 accent-bg clearfix" />
            <div class="progress-bar bg-white-column">progress bar</div>
            <div class="row bg-white-column">
              <div v-for="(type, index) in quote.typeOfProject.types" :key="index" class="col-md-6">
                <img :src="type.img" :alt="type.question">
                <p>{{ type.question }}</p>
              </div>
            </div>
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
      totalPages: 4
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
}
</style>
