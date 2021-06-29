$(function(){ 

// navbar toggle 
$('.navbar-toggler i').on('click',function(){
  $('.fa-close').toggleClass('fa-bars')
});

// scroll spy 
$(window).on('scroll', function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 300){
    $('.navbar').addClass('navbg');
  }
  else{
    $('.navbar').removeClass('navbg');
  }
});

// animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        html_body.animate({
        scrollTop: target.offset().top - 95
        }, 1500);
        return false;
        }
      }
  });

// back to top 
$(window).on('scroll', function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 100){
    $('.back-to-top').fadeIn(500);
 }
  else{
    $('.back-to-top').fadeOut(500);
  }
});

 // services slider
 $('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 2500,
  arrows:true,
  prevArrow:'.up',
  nextArrow:'.down',
  vertical:true,
  verticalSwiping:true,
  centerMode:true,
  centerPadding:false,
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        autoplay:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        autoplay:false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay:false,
      }
    }
  ]
});

// counter
  $('.counter').counterUp({
      delay: 5,
      time: 1000
  });

// venobox
$('.venobox').venobox(); 

// team wow js
new WOW().init();

// testimonial slider 
$('.testimonials').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows:false,
  speed:2500,
  dots:true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

 // marketplace slider 
 $('.market-slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows:false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      }
    }
  ]
});
});
