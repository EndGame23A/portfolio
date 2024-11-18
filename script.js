// slick slider
$(document).ready(function(){
    $('.carousel').slick({
        accessibility: true,
        centerMode: true,
        centerPadding: '20%',
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        mobileFirst: true,
        dotsClass: "slick-dots",
    });
  });