const navbarToggleBtn = document.getElementById('navbarToggleBtn');
  const navbarList = document.getElementById('nav_menu');
  const mainHeader = document.getElementById('mainHeader');

  navbarToggleBtn.addEventListener('click', () => {
    navbarList.classList.toggle('show');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      mainHeader.classList.add('scrolled');
    } else {
      mainHeader.classList.remove('scrolled');
    }
  });


  /*============ Swiper ============*/


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  direction: 'horizontal',
  loop: true,
  reverseDirection: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});