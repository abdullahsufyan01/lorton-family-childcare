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

//  accordians
document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("active");

    if (button.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }

    // Close other open accordion items
    document.querySelectorAll(".accordion-header").forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("active");
        otherButton.nextElementSibling.style.maxHeight = 0;
      }
    });
  });
});



// form submit 
function submitForm(event) {
  var form = document.getElementById('myForm');
  var formData = new FormData(form);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.getAttribute('action'), true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
          document.getElementById('form-messages').innerHTML = xhr.responseText;

          // Clear the form fields only if the submission was successful
          if (xhr.status === 200) {
              form.reset();
          }
      }
  };

  xhr.send(new URLSearchParams(formData).toString());

  // Prevent the default form submission behavior
  event.preventDefault();
}





