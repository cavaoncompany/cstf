<template>
  <section id="contact" class="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">
    <Header />
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
                          <div class="themesflat-spacer clearfix" data-desktop="61" data-mobile="60" data-smobile="60"></div>
                        </div><!-- /.col-md-12 -->
                      </div><!-- /.row -->
                      <div class="row">
                        <div class="col-md-6">
                          <div class="themesflat-headings style-2 clearfix">
                            <h2 class="heading">{{ contact.title }}</h2>
                            <div class="sep has-width w80 accent-bg clearfix"></div>                                               
                            <p class="sub-heading">{{ contact.intro }}</p>
                          </div>
                          <div class="themesflat-spacer clearfix" data-desktop="36" data-mobile="35" data-smobile="35"></div>
                            <div class="themesflat-contact-form style-2 clearfix">
                                <form id="contactform" action="/success" netlify-honeypot="bot-field" name="contact-form" method="post" data-netlify="true" accept-charset="utf-8" class="form-submit contact-form wpcf7-form">
                                  <input type="hidden" name="form-name" value="startAProject">
                                  <p class="hidden">
                                    <label>Don’t fill this out if you're human: <input name="bot-field"></label>
                                  </p>
                                  <span class="wpcf7-form-control-wrap your-name">
                                    <label for="contact-name" class="hide-element">{{ contact.namePlaceholder }}</label>
                                    <input type="text" tabindex="1" id="contact-name" name="name" value="" class="wpcf7-form-control" :placeholder="contact.namePlaceholder" required>
                                  </span>
                                  <span class="wpcf7-form-control-wrap your-phone">
                                    <label for="contact-phone" class="hide-element">{{ contact.phonePlaceholder }}</label>
                                    <input type="text" tabindex="2" id="contact-phone" name="phone" value="" class="wpcf7-form-control" :placeholder="contact.phonePlaceholder">
                                  </span>                                                            
                                  <span class="wpcf7-form-control-wrap your-email">
                                    <label for="contact-email" class="hide-element">{{ contact.emailPlaceholder }}</label>
                                    <input type="email" tabindex="3" id="contact-email" name="email" value="" class="wpcf7-form-control" :placeholder="contact.emailPlaceholder" required>
                                  </span>
                                  <span class="wpcf7-form-control-wrap your-subject">
                                    <label for="contact-subject" class="hide-element">{{ contact.subjectPlaceholder }}</label>
                                    <input type="text" tabindex="4" id="contact-subject" name="subject" value="" class="wpcf7-form-control" :placeholder="contact.subjectPlaceholder">
                                  </span>
                                  <span class="wpcf7-form-control-wrap your-message">
                                    <label for="contact-message" class="hide-element">{{ contact.messagePlaceholder }}</label>
                                    <textarea id="contact-message" name="message" tabindex="5" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" :placeholder="contact.messagePlaceholder" required ></textarea>
                                  </span>                                                             
                                  <span class="wrap-submit">
                                    <input type="submit" :value="contact.sendButtonText" class="submit wpcf7-form-control wpcf7-submit" id="contact-submit" name="submit">
                                  </span>                                                            
                                </form>
                              </div><!-- /.themesflat-contact-form -->
                            </div><!-- /.col-md-6 -->
                            <div class="col-md-6">
                              <div class="themesflat-spacer clearfix" data-desktop="0" data-mobile="0" data-smobile="35"></div>
                                <div class="themesflat-headings style-2 clearfix">
                                  <h2 class="heading">{{ contact.information }}</h2>
                                  <div class="sep has-width w80 accent-bg clearfix"></div>                                               
                                </div>
                                <div class="themesflat-spacer clearfix" data-desktop="36" data-mobile="35" data-smobile="35"></div>
                                <div class="themesflat-tabs style-1 w168 clearfix">
                                  <div class="tab-content-wrap clearfix">
                                    <div class="tab-content">
                                      <div class="item-content">                                                            
                                        <ul>
                                          <li class="clearfix">
                                            <div class="inner">
                                              <span class="fa fa-map-marker"></span>
                                              <span class="text">{{ contact.address }}</span>
                                            </div>
                                          </li>

                                          <li class="clearfix">
                                            <div class="inner">
                                              <span class="fa fa-phone"></span>
                                              <span class="text">{{ contact.callUs }} {{ contact.tel }}</span>
                                            </div>
                                          </li>

                                          <li class="clearfix">
                                            <div class="inner">
                                              <span class="fa fa-envelope"></span>
                                              <span class="text">{{ contact.emailUs }} {{ contact.email }}</span>
                                            </div>
                                          </li>
                                        </ul>                                                     
                                      </div>
                                    </div>
                                  </div>
                                </div><!-- /.themesflat-tabs -->
                                <div class="themesflat-spacer clearfix" data-desktop="20" data-mobile="35" data-smobile="35"></div>
                                  <div class="themesflat-map"></div>
                                </div><!-- /.col-md-6 -->
                              </div><!-- /.row -->
                              <div class="row">
                              <div class="col-md-12">
                                <div class="themesflat-spacer clearfix" data-desktop="78" data-mobile="60" data-smobile="60"></div>
                              </div><!-- /.col-md-12 -->
                            </div><!-- /.row -->
                          </div><!-- /.container -->
                        </div>
                        <!-- END CONTACT -->
                      </div><!-- /.page-content -->
                    </div><!-- /#inner-content -->
                  </div><!-- /#site-content -->
                </div><!-- /#content-wrap -->
            </div><!-- /#main-content -->
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
    data() {
        return {
            contact: contact
        }
    }
}
</script>

<style>
.hidden {
    display: none;
}
/* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
  } */
</style>
