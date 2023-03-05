$('.swiper').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '32px',
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  prevArrow: $('.arrow-left'),
  nextArrow: $('.arrow-right'),
  responsive: [
    {
      breakpoint: 1135,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
