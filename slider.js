var swiper = new Swiper(".slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2600,
      disableOnInteraction: false,
    },
    grabCursor:true,  
    loop:true,
    centeredSlides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });