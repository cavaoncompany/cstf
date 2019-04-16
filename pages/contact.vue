<template>
  <section
    id="contact"
    class="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search"
  >
    <Header currentItem="CONTACT" />
    <!-- Main Content -->
    <div id="main-content" class="site-main clearfix">
      <div id="content-wrap">
        <div id="site-content" class="site-content clearfix">
          <div id="inner-content" class="inner-content-wrap">
            <div class="page-content">
              <!-- CONTACT -->
              <div class="row-contact">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="61"
                        data-mobile="60"
                        data-smobile="60"
                      />
                    </div>
                    <!-- /.col-md-12 -->
                  </div>
                  <!-- /.row -->
                  <div class="row">
                    <div class="col-md-6">
                      <div class="themesflat-headings style-2 clearfix">
                        <h2 class="heading">
                          {{ contact.title }}
                        </h2>
                        <div class="sep has-width w80 accent-bg clearfix" />
                        <p class="sub-heading">
                          {{ contact.intro }}
                        </p>
                      </div>
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="36"
                        data-mobile="35"
                        data-smobile="35"
                      />
                      <div class="themesflat-contact-form style-2 clearfix">
                        <form
                          id="contactusform"
                          @submit.prevent="onSubmit"
                          accept-charset="utf-8"
                          class="form-submit contact-form wpcf7-form"
                        >
                          <input type="hidden" name="form-name" value="startAProject">
                          <p class="hidden">
                            <label>
                              Don’t fill this out if you're human:
                              <input name="bot-field">
                            </label>
                          </p>
                          <span class="wpcf7-form-control-wrap your-name">
                            <label
                              for="contact-name"
                              class="hide-element"
                            >{{ contact.namePlaceholder }}</label>
                            <input
                              id="contact-name"
                              v-model="name"
                              type="text"
                              tabindex="1"
                              name="name"
                              value
                              class="wpcf7-form-control input_text"
                              :placeholder="contact.namePlaceholder"
                              required
                            >
                          </span>
                          <span class="wpcf7-form-control-wrap your-phone">
                            <label
                              for="contact-phone"
                              class="hide-element"
                            >{{ contact.phonePlaceholder }}</label>
                            <input
                              id="contact-phone"
                              v-model="phone"
                              type="text"
                              tabindex="2"
                              name="phone"
                              value
                              class="wpcf7-form-control input_text"
                              :placeholder="contact.phonePlaceholder"
                            >
                          </span>
                          <span class="wpcf7-form-control-wrap your-email">
                            <label
                              for="contact-email"
                              class="hide-element"
                            >{{ contact.emailPlaceholder }}</label>
                            <input
                              id="contact-email"
                              v-model="email"
                              type="email"
                              tabindex="3"
                              name="email"
                              value
                              class="wpcf7-form-control input_text"
                              :placeholder="contact.emailPlaceholder"
                              required
                            >
                          </span>
                          <span class="wpcf7-form-control-wrap your-subject">
                            <label
                              for="contact-subject"
                              class="hide-element"
                            >{{ contact.subjectPlaceholder }}</label>
                            <input
                              id="contact-subject"
                              v-model="subject"
                              type="text"
                              tabindex="4"
                              name="subject"
                              value
                              class="wpcf7-form-control input_text"
                              :placeholder="contact.subjectPlaceholder"
                            >
                          </span>
                          <span class="wpcf7-form-control-wrap your-message">
                            <label
                              for="contact-message"
                              class="hide-element"
                            >{{ contact.messagePlaceholder }}</label>
                            <textarea
                              id="contact-message"
                              v-model="message"
                              name="message"
                              tabindex="5"
                              cols="40"
                              rows="10"
                              class="wpcf7-form-control wpcf7-textarea"
                              :placeholder="contact.messagePlaceholder"
                              required
                            />
                          </span>
                          <span class="wrap-submit">
                            <input
                              id="contact-submit"
                              type="submit"
                              :value="contact.sendButtonText"
                              class="submit wpcf7-form-control wpcf7-submit"
                              name="submit"
                              disabled
                              v-bind:class="{'disabled': submitEnabled === false}"
                            >
                          </span>
                        </form>
                      </div>
                      <!-- /.themesflat-contact-form -->
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6">
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="0"
                        data-mobile="0"
                        data-smobile="35"
                      />
                      <div class="themesflat-headings style-2 clearfix">
                        <h2 class="heading">
                          {{ contact.information }}
                        </h2>
                        <div class="sep has-width w80 accent-bg clearfix" />
                      </div>
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="36"
                        data-mobile="35"
                        data-smobile="35"
                      />
                      <div class="themesflat-tabs style-1 w168 clearfix">
                        <div class="tab-content-wrap clearfix">
                          <div class="tab-content">
                            <div class="item-content">
                              <ul>
                                <li class="clearfix">
                                  <div class="inner">
                                    <span class="fa fa-map-marker" />
                                    <span class="text">{{ contact.address }}</span>
                                  </div>
                                </li>

                                <li class="clearfix">
                                  <div class="inner">
                                    <span class="fa fa-phone" />
                                    <span class="text">{{ contact.callUs }} {{ contact.tel }}</span>
                                  </div>
                                </li>

                                <li class="clearfix">
                                  <div class="inner">
                                    <span class="fa fa-envelope" />
                                    <span class="text">{{ contact.emailUs }} {{ contact.email }}</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- /.themesflat-tabs -->
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="20"
                        data-mobile="35"
                        data-smobile="35"
                      />
                      <!-- <div class="themesflat-map" /> -->
                      <div id="map-wrap" style="height: 20vh; width: 100%;">
                        <no-ssr>
                          <l-map :zoom="10" :center="[47.413220, -1.219482]">
                            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                            <l-marker :lat-lng="[-33.833220, 151.209482]"></l-marker>
                          </l-map>
                        </no-ssr>
                      </div>
                    </div>
                    <!-- /.col-md-6 -->
                  </div>
                  <!-- /.row -->
                  <div class="row">
                    <div class="col-md-12">
                      <div
                        class="themesflat-spacer clearfix"
                        data-desktop="78"
                        data-mobile="60"
                        data-smobile="60"
                      />
                    </div>
                    <!-- /.col-md-12 -->
                  </div>
                  <!-- /.row -->
                </div>
                <!-- /.container -->
              </div>
              <!-- END CONTACT -->
            </div>
            <!-- /.page-content -->
          </div>
          <!-- /#inner-content -->
        </div>
        <!-- /#site-content -->
      </div>
      <!-- /#content-wrap -->
    </div>
    <!-- /#main-content -->
    <Footer />
  </section>
</template>

<script>
import contact from '../content/contact.json'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: {
    Header,
    Footer
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  data() {
    return {
      contact: contact,
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      submitEnabled: false
    }
  },
  watch: {
    name: function() {
      if (this.name !== '' && this.email !== '' && this.message !== '') {
        this.submitEnabled = true
        this.enableSubmit()
      } else {
        this.submitEnabled = false
      }
    },
    email: function() {
      if (this.name !== '' && this.email !== '' && this.message !== '') {
        this.submitEnabled = true
        this.enableSubmit()
      } else {
        this.submitEnabled = false
      }
    },
    message: function() {
      if (this.name !== '' && this.email !== '' && this.message !== '') {
        this.submitEnabled = true
        this.enableSubmit()
      } else {
        this.submitEnabled = false
      }
    }
  },
  methods: {
    enableSubmit: function() {
      document.getElementById('contact-submit').disabled = false
    },
    sendEmail: function() {
      const emailData = {
        email: this.email,
        name: this.name,
        phone: this.phone,
        subject: this.subject,
        message: this.message
      }
      this.$store.dispatch('contactUs', emailData)
      this.email = ''
      this.name = ''
      this.phone = ''
      this.subject = ''
      this.message = ''
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')
        this.sendEmail()
      } catch (error) {
        console.log('Submission error: ', error)
      }
    }
  }
}
</script>

<style>
.hidden {
  display: none
}
#contact .input_text {
    background-color: #fafafb;
    font-weight: 300;
    color: #777;
    border: 1px solid #e7e7e7;
    padding: 13px 20px;
    letter-spacing: 0;
    line-height: inherit;
    width: 100%;
    margin-bottom: 14px;
    height: auto;
    text-shadow: none;
    box-shadow: none;
    box-sizing: border-box;
    transition: border .238s ease;
}
#contact #contact-submit.disabled,
#contact #contact-submit.disabled:hover,
#contact #contact-submit.disabled:hover:before {
  background-color: #E0E0E0 !important;
  color: #111;
}
/* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
  } */
</style>
