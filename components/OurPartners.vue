<template>
  <div id="getAQuote" class="row-quote bg-row-1">
    <div class="container desktop-medium-only">
      <div class="row">
        <div class="col-md-12">
          <div class="themesflat-spacer clearfix" data-desktop="40" data-mobile="60" data-smobile="60" />
          <div class="themesflat-quote style-1 clearfix">
            <div class="quote-item">
              <div class="inner">
                <div class="heading-wrap">
                  <h3 class="heading">
                    {{ quote.partnerTitle }}
                  </h3>
                </div>
                <div class="button-wrap has-icon .sep-icon-after">
                  <img v-for="(partner, i) in quote.partners" :key="i" :src="partner.image" :alt="partner.title">
                </div>
              </div>
            </div>
          </div>
          <div class="themesflat-spacer clearfix" data-desktop="31" data-mobile="60" data-smobile="60" />
        </div><!-- /.col-md-12 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
    <div class="mobile-only partner-wrapper">
      <div class="top-row">
        <div class="container">
          <h3 class="heading">
            {{ quote.partnerTitle }}
          </h3>
        </div>
      </div>
      <div class="bottom-row">
        <img v-for="(partner, i) in quote.partners" :key="i" :src="partner.image" :alt="partner.title">
      </div>
    </div>
  </div>
</template>

<script>
import quote from '../content/quote.json'

export default {
  data() {
    return {
      quote: quote
    }
  }
}
</script>

<style>
#getAQuote .themesflat-quote .icon {
  margin-left: 5px;
  top: 33%;
}
.row-quote .icon .fa {
  font-size: 19px;
}
.row-quote .themesflat-button.small {
  padding-right: 46px;
}
.partner-wrapper {
  flex-direction: column;
}
.partner-wrapper .top-row {
  background: #FED00E;
  width: 100%;
  text-align: center;
  font-size: 12px;
}
.partner-wrapper .bottom-row {
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
.partner-wrapper .bottom-row img {
  margin-left: 5px;
  margin-right: 5px;
  max-height: 80px;
}
.partner-wrapper .top-row h3 {
  margin-top: 15px;
}
</style>
