<template>
  <div id="getAQuote" class="row-quote bg-row-1">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="themesflat-spacer clearfix" data-desktop="40" data-mobile="60" data-smobile="60" />
          <div class="themesflat-quote style-1 clearfix">
            <div class="quote-item">
              <div class="inner">
                <div class="heading-wrap">
                  <h3 class="heading">
                    {{ quote.startYourProject }}
                  </h3>
                </div>
                <div class="button-wrap has-icon .sep-icon-after">
                  <a href="#" class="themesflat-button bg-white small"><span class="themesflat-quote style-1 heading" data-toggle="modal" data-target="#getAQuote">{{ quote.title }}<span class="icon"><i class="fa fa-arrow-right" /></span></span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="themesflat-spacer clearfix" data-desktop="31" data-mobile="60" data-smobile="60" />
        </div><!-- /.col-md-12 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
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
</style>
