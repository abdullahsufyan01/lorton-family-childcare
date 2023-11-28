document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");

  window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          navbar.style.backgroundColor = "#3D2B69"; // Change to your desired background color
          navbar.style.padding = "10px 0"
      } else {
          navbar.style.backgroundColor = "transparent";
          navbar.style.padding = "25px 0"

      }
  };
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,              // Enable loop mode
    centeredSlides: true,    // Center the slides
    initialSlide: 0,    
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

 


