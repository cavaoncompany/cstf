/**
  * flatSpacer
  * flatOwl
  * flatGallery
  * inViewport
  * flatEqualizeHeight
  * flatContentBox
  * searchIcon
  * flatTabs
  * flatAccordions
  * flatProgressBar
  * googleMap
  * flatCounter
  * flatIsotope
  * swClick
  * Parallax
*/

;(function ($) {
  'use strict'

  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
    }
  }

  const flatSpacer = function () {
    $(window).on('load resize', function () {
      let mode = 'desktop'
      if (matchMedia('only screen and (max-width: 991px)').matches) { mode = 'mobile' }
      if (matchMedia('only screen and (max-width: 767px)').matches) { mode = 'smobile' }
      $('.themesflat-spacer').each(function () {
        if (mode === 'desktop') {
          $(this).attr('style', 'height:' + $(this).data('desktop') + 'px')
        } else if (mode == 'mobile') {
          $(this).attr('style', 'height:' + $(this).data('mobile') + 'px')
        } else {
          $(this).attr('style', 'height:' + $(this).data('smobile') + 'px')
        }
      })
    })
  }

  const Parallax = function () {
    if ($().parallax && isMobile.any() == null) {
      $('.parallax-1').parallax('50%', 0.1)
      $('.parallax-3').parallax('50%', 0.1)
      $('.parallax-4').parallax('50%', 0.1)
    }
  }

  const flatOwl = function () {
    if ($().owlCarousel) {
      $('.themesflat-carousel-box').each(function () {
        const
          $this = $(this)
        const auto = $this.data('auto')
        const item = $this.data('column')
        const item2 = $this.data('column2')
        const item3 = $this.data('column3')
        const gap = Number($this.data('gap'))

        $this.find('.owl-carousel').owlCarousel({
          margin: gap,
          nav: true,
          navigation: true,
          pagination: true,
          autoplay: auto,
          autoplayTimeout: 5000,
          responsive: {
            0: {
              items: item3
            },
            600: {
              items: item2
            },
            1000: {
              items: item
            }
          }
        })
      })
    }
  }

  const flatGallery = function () {
    if ($().owlCarousel) {
      $('.themesflat-gallery').each(function () {
        const
          $this = $(this)
        const auto = $this.data('auto')
        const item = $this.data('column')
        const item2 = $this.data('column2')
        const item3 = $this.data('column3')
        const gap = Number($this.data('gap'))

        $this.find('.owl-carousel').owlCarousel({
          margin: gap,
          nav: true,
          thumb: true,
          thumbImage: true,
          navigation: true,
          pagination: true,
          autoplay: auto,
          autoplayTimeout: 5000,
          responsive: {
            0: {
              items: item3
            },
            600: {
              items: item2
            },
            1000: {
              items: item
            }
          }
        })
      })
    }
  }

  const inViewport = function () {
    $('[data-inviewport="yes"]').waypoint(function () {
      $(this).trigger('on-appear')
    }, { offset: '90%', triggerOnce: true })

    $(window).on('load', function () {
      setTimeout(function () {
        $.waypoints('refresh')
      }, 100)
    })
  }

  const flatEqualizeHeight = function () {
    $(window).on('load resize', function () {
      setTimeout(function () {
        $(document).imagesLoaded(function () {
          if (matchMedia('only screen and (max-width: 767px)').matches) {
            $('.equalize').equalize({ equalize: 'outerHeight', reset: true })
            $('.equalize.sm-equalize-auto').children().css('height', '')
            return false
          } else if (matchMedia('only screen and (max-width: 991px)').matches) {
            $('.equalize').equalize({ equalize: 'outerHeight', reset: true })
            $('.equalize.sm-equalize-auto').children().css('height', '')
            return false
          } else if (matchMedia('only screen and (max-width: 1199px)').matches) {
            $('.equalize').equalize({ equalize: 'outerHeight', reset: true })
            return false
          } else {
            $('.equalize').equalize({ equalize: 'outerHeight', reset: true })
          }
        })
      }, 500)
    })
  }

  const flatContentBox = function () {
    $(window).on('load resize', function () {
      let mode = 'desktop'
      if (matchMedia('only screen and (max-width: 1199px)').matches) { mode = 'mobile' }
      $('.themesflat-content-box').each(function () {
        const margin = $(this).data('margin')
        if (margin) {
          if (mode === 'desktop') {
            $(this).attr('style', 'margin:' + $(this).data('margin'))
          } else if (mode === 'mobile') {
            $(this).attr('style', 'margin:' + $(this).data('mobilemargin'))
          }
        }
      })
    })
  }

  const searchIcon = function () {
    $(document).on('click', function (e) {
      const clickID = e.target.id
      if ((clickID !== 'input-search')) {
        $('.header-search-form').removeClass('show')
      }
    })

    $('.header-search-icon').on('click', function (event) {
      event.stopPropagation()
    })

    $('.header-search-form').on('click', function (event) {
      event.stopPropagation()
    })

    $('.header-search-icon').on('click', function (event) {
      if (!$('.header-search-form').hasClass('show')) {
        $('.header-search-form').addClass('show')
        event.preventDefault()
      } else { $('.header-search-form').removeClass('show') }
      event.preventDefault()
    })
  }

  const flatTabs = function () {
    const vW = $(window).width()
    if (vW < 479) {
      $('.themesflat-tabs').each(function () {
        let
          list = ''
        const title = $(this).find('.item-title')
        const titleWrap = $(this).children('.tab-title')

        title.each(function () {
          list = list + '<li>' + $(this).html() + '</li>'
        }).appendTo(titleWrap)

        $(this).find('.tab-title li').filter(':first').addClass('active')
        $(this).find('.tab-content-wrap').children().hide().filter(':first').show()

        $(this).find('.tab-title li').on('click', function (e) {
          const
            idx = $(this).index()
          const content = $(this).closest('.themesflat-tabs').find('.tab-content-wrap').children().eq(idx)

          $(this).addClass('active').siblings().removeClass('active')
          content.fadeIn('slow').siblings().hide()

          e.preventDefault()
        })
      })
    }
  }

  const flatAccordions = function () {
    const args = { easing: 'easeOutExpo', duration: 500 }

    $('.accordion-item.active').find('.accordion-content').show()
    $('.accordion-heading').on('click', function () {
      if (!$(this).parent().is('.active')) {
        $(this).parent().toggleClass('active')
          .children('.accordion-content').slideToggle(args)
          .parent().siblings('.active').removeClass('active')
          .children('.accordion-content').slideToggle(args)
      } else {
        $(this).parent().toggleClass('active')
        $(this).next().slideToggle(args)
      }
    })
  }

  const flatProgressBar = function () {
    if ($().waypoint) {
      $('.progress-bg').on('on-appear', function () {
        $(this).each(function () {
          const percent = parseInt($(this).data('percent'))

          $(this).find('.progress-animate').animate({
            'width': percent + '%'
          }, 1000, 'easeInCirc')

          $(this).parent('.themesflat-progress').find('.perc').addClass('show').animate({
            'width': percent + '%'
          }, 1000, 'easeInCirc')
        })
      })
    }
  }

  const googleMap = function () {
    // gmap default
    if ($().gmap3) {
      const data = JSON.parse('[{"address":"Westwell Leacon, Ashford, Vương Quốc Anh","content":""}]')
      $('.themesflat-map')
        .gmap3({
          map: {
            options: {
              zoom: 10,
              center: [51.1946026, 0.8140602, 14.5],
              mapTypeId: 'Autora',
              mapTypeControlOptions: {
                mapTypeIds: ['Autora', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
              },
              scrollwheel: true
            }
          }
        })
    }
    // json loop
    $.each(data, function (key, val) {
      $('.themesflat-map').gmap3({
        marker: {
          values: [{
            address: val.address,
            options: {
              icon: './assets/img/map/icon-map.png'
            }

          }]
        },
        styledmaptype: {
          id: 'Autora',
          options: {
            name: 'Autora'
          },
          styles: [
            {
              'featureType': 'administrative',
              'elementType': 'all',
              'stylers': [
                {
                  'saturation': '-100'
                }
              ]
            },
            {
              'featureType': 'administrative.province',
              'elementType': 'all',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'landscape',
              'elementType': 'all',
              'stylers': [
                {
                  'saturation': -100
                },
                {
                  'lightness': 65
                },
                {
                  'visibility': 'on'
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'all',
              'stylers': [
                {
                  'saturation': -100
                },
                {
                  'lightness': '50'
                },
                {
                  'visibility': 'simplified'
                }
              ]
            },
            {
              'featureType': 'road',
              'elementType': 'all',
              'stylers': [
                {
                  'saturation': '-100'
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'all',
              'stylers': [
                {
                  'visibility': 'simplified'
                }
              ]
            },
            {
              'featureType': 'road.arterial',
              'elementType': 'all',
              'stylers': [
                {
                  'lightness': '30'
                }
              ]
            },
            {
              'featureType': 'road.local',
              'elementType': 'all',
              'stylers': [
                {
                  'lightness': '40'
                }
              ]
            },
            {
              'featureType': 'transit',
              'elementType': 'all',
              'stylers': [
                {
                  'saturation': -100
                },
                {
                  'visibility': 'simplified'
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'geometry',
              'stylers': [
                {
                  'hue': '#ffff00'
                },
                {
                  'lightness': -25
                },
                {
                  'saturation': -97
                }
              ]
            },
            {
              'featureType': 'water',
              'elementType': 'labels',
              'stylers': [
                {
                  'lightness': -25
                },
                {
                  'saturation': -100
                }
              ]
            }
          ]
        }
      })
    })
  }

  const flatCounter = function () {
    if ($().countTo) {
      $('.themesflat-counter').on('on-appear', function () {
        $(this).find('.number').each(function () {
          const to = $(this).data('to')
          const speed = $(this).data('speed')

          $(this).countTo({
            to: to,
            speed: speed
          })
        })
      })
    }
  }

  const flatIsotope = function () {
    if ($().isotope) {
      const $container = $('.isotope-project')
      $container.imagesLoaded(function () {
        $container.isotope({
          itemSelector: '.project-item',
          transitionDuration: '1s',
          layoutMode: 'fitRows'
        })
      })

      $('.themesflat-filter li').on('click', function () {
        const selector = $(this).find('a').attr('data-filter')
        $('.themesflat-filter li').removeClass('active')
        $(this).addClass('active')
        $container.isotope({ filter: selector })
        return false
      })
    };
  }

  const swClick = function () {
    function activeLayout() {
      $('.switcher-container').on('click', 'a.sw-light', function () {
        $(this).toggleClass('active')
        $('body').addClass('home-boxed')
        $('body').css({ 'background': '#f6f6f6' })
        $('.sw-pattern.pattern').css({ 'top': '100%', 'opacity': 1, 'z-index': '10' })
      }).on('click', 'a.sw-dark', function () {
        $('.sw-pattern.pattern').css({ 'top': '98%', 'opacity': 0, 'z-index': '-1' })
        $(this).removeClass('active').addClass('active')
        $('body').removeClass('home-boxed')
        $('body').css({ 'background': '#fff' })
        return false
      })
    }

    function activePattern() {
      $('.sw-pattern').on('click', function () {
        $('.sw-pattern.pattern a').removeClass('current')
        $(this).addClass('current')
        $('body').css({ 'background': 'url("' + $(this).data('image') + '")', 'background-size': '30px 30px', 'background-repeat': 'repeat' })
        return false
      })
    }

    activeLayout()
    activePattern()
  }
  // Dom Ready
  $(function () {
    flatSpacer()
    flatContentBox()
    flatEqualizeHeight()
    flatGallery()
    searchIcon()
    // flatTabs();
    flatAccordions()
    flatProgressBar()
    googleMap()
    flatCounter()
    flatIsotope()
    swClick()
    $(window).load(function () {
      flatOwl()
      Parallax()
      inViewport()
    })
  })
})(jQuery)
