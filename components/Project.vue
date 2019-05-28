<template>
  <div id="project" class="row-project parallax parallax-1 parallax-overlay">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="themesflat-spacer clearfix" data-desktop="60" data-mobile="60" data-smobile="60" />
          <div class="themesflat-headings style-1 text-center clearfix">
            <h2 class="heading text-white">
              {{ projects.titleHome }}
            </h2>
          </div>
          <div class="themesflat-spacer clearfix" data-desktop="30" data-mobile="35" data-smobile="35" />
          <div
            class="themesflat-carousel-box clearfix container"
            data-gap="30"
            data-column="4"
            data-column2="2"
            data-column3="1"
            data-auto="false"
          >
            <div class="desktop-medium-only owl-carousel owl-theme">
              <div v-for="(item, index) in projects.projects" :key="index" class="themesflat-project style-1 data-effect clearfix">
                <div class="project-item">
                  <div class="inner">
                    <div class="thumb data-effect-item has-effect-icon w40 offset-v-43 offset-h-46">
                      <img :src="item.img" :alt="item.title">
                      <div class="text-wrap text-center">
                        <h5 class="heading">
                          <a>{{ item.name }}</a>
                        </h5>
                      </div>
                      <div class="overlay-effect bg-color-3" />
                    </div>
                  </div>
                </div>
              </div><!-- /.themesflat-project -->
            </div>
            <div class="mobile-only projects-carousel">
              <div v-for="(item, index) in projects.projects" :key="index" class="themesflat-project style-1 data-effect clearfix">
                <div class="project-item">
                  <div class="inner">
                    <div class="thumb data-effect-item has-effect-icon w40 offset-v-43 offset-h-46">
                      <img :src="item.img" :alt="item.title" data-toggle="modal" :data-target="'#project-detail-home-mobile-' + index">
                      <div class="text-wrap text-center">
                        <h5 class="heading">
                          <a>{{ item.name }}</a>
                        </h5>
                      </div>
                      <div class="overlay-effect bg-color-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- /.themesflat-carousel-box -->
          <div class="themesflat-spacer clearfix" data-desktop="41" data-mobile="35" data-smobile="35" />
          <div class="elm-button text-center">
            <a href="/projects" class="themesflat-button bg-accent">{{ projects.buttonText }}</a>
          </div>
          <div class="themesflat-spacer clearfix" data-desktop="73" data-mobile="60" data-smobile="60" />
        </div><!-- /.col-md-12 -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
    <div class="bg-parallax-overlay overlay-black" />
  </div>
</template>

<script>
import projects from '../content/projects.json'

export default {
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style>
  .projects-carousel {
    flex-direction: column;
  }
  .projects-carousel .style-1 {
    margin-bottom: 30px;
  }
  .projects-carousel img {
    width: 100%;
  }
  .projects-carousel .overlay-effect,
  #project .owl-carousel .overlay-effect {
    bottom: 0;
    top: auto;
    height: 30%;
    opacity: 0.6;
    visibility: visible;
    transform: none;
  }
  .themesflat-project.style-1 .text-wrap {
    top: 75%;
    left: 0;
    opacity: 1;
    visibility: visible;
    transform: none;
    transition: none;
  }
  #project .owl-carousel {
    flex-direction: row;
    justify-content: space-around;
  }
  .mobile-carousel-item img {
    height: 90%;
  }
  .carousel-mobile-only .mobile-carousel-item.active,
  .carousel-mobile-only .carousel-item.active,
  .mobile-carousel-item {
    width: 100%;
    height: 215px;
  }
  .carousel-mobile-only .carousel-caption {
    left: 0;
    bottom: -44px;
    right: auto;
  }
  .project-home-modal-content {
    background: transparent;
    border: none;
    height: 100%;
  }
  .project-home-modal-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #projects .carousel-inner {
  margin-bottom: 10px;
  }
  .project-home-modal-mobile-header {
    border: none;
  }
  .project-home-modal-mobile-header button {
    color: #fff;
    text-align: right;
  }
</style>
