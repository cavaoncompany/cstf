<template>
  <div id="about" class="row-about">
    <div class="container-fluid">
      <div class="row equalize sm-equalize-auto about-background">
        <div class="col-md-6 style-1" /><!-- /.col-md-6 -->
        <div class="col-md-6 bg-light-grey">
          <div class="themesflat-spacer clearfix" data-desktop="64" data-mobile="60" data-smobile="60" />
          <div class="themesflat-content-box clearfix about-content" data-margin="0 25% 0 4.5%" data-mobilemargin="0 0 0 4.5%">
            <div class="themesflat-headings style-1 clearfix">
              <h2 class="heading">
                {{ about.title }}
              </h2>
              <div class="sep has-width w80 accent-bg margin-top-11 clearfix" />
              <p class="sub-heading margin-top-30">
                {{ about.paragraph1 }}
              </p>
              <p class="sub-heading margin-top-30">
                {{ about.paragraph2 }}
              </p>
            </div>
            <div class="themesflat-spacer clearfix" data-desktop="26" data-mobile="35" data-smobile="35" />
            <div class="content-list">
              <div v-for="(item, index) in about.checklist" :key="index" class="themesflat-list has-icon style-1 icon-left clearfix">
                <div class="inner">
                  <span class="item">
                    <span class="icon"><i class="fa fa-check-square" /></span>
                    <span class="text">{{ item }}</span>
                  </span>
                </div>
              </div><!-- /.themeslat-list -->
            </div><!-- /.content-list -->
            <div class="themesflat-spacer clearfix" data-desktop="42" data-mobile="35" data-smobile="35" />
            <div class="elm-button">
              <a href="#" class="themesflat-button bg-white" data-toggle="modal" data-target="#getAQuote">{{ about.buttonText }}</a>
            </div>
          </div><!-- /.themesflat-content-box -->
          <div class="themesflat-spacer clearfix" data-desktop="75" data-mobile="60" data-smobile="60" />
        </div><!-- /.col-md-6 -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
</template>

<script>
import about from '../content/about.json'

export default {
  data() {
    return {
      about: about
    }
  }
}
</script>

<style>
.about-background {
  background-image: url('/img/about-bg.png');
  background-size: cover;
}
.content-list {
  padding-bottom: 10px;
}
.content-list span {
  font-weight: 600;
}
</style>
