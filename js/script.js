$('.main_slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-left-long prevArrow"></i>',
    nextArrow:'<i class="fa-solid fa-right-long nextArrow"></i>',
    autoplay: true,
    autoplaySpeed: 1500, 
    responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        }
      
      ]
});



$('.main_slide').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-left-long prevArrow"></i>',
    nextArrow:'<i class="fa-solid fa-right-long nextArrow"></i>',
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
          }
        }
      
      ]
  
});
new WOW().init();