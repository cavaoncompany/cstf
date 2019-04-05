<template>
  <section>
    <Header />
    <div class="container">
      <div class="row">
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import footer from '../content/footer.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      footer: footer
    }
  }
}
</script>
