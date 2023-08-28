// mobile menu
let hamIcon=document.getElementById('hamIcon');
let li=Array.from(document.querySelectorAll('li.dropdownMenu'));

hamIcon.addEventListener('click',function () {
  document.querySelector('header nav').classList.add('open');
  document.getElementById('overlay').classList.add('active');
  document.getElementById('overlay').addEventListener('click',function () {
    document.getElementById('overlay').classList.remove('active');
    document.querySelector('header nav').classList.remove('open');
  })
})

li.forEach((item)=>{
  item.addEventListener('click',function () {
    item.querySelector('ul').classList.toggle('active');
    item.querySelector('svg').classList.toggle('active');
    item.querySelector('a').classList.toggle('mobileactive');
  })
})

// menu dropdown

let tab=Array.from(document.getElementsByClassName('tab'));
let tabContent=Array.from(document.getElementsByClassName('tabContent'));

tab.forEach((item) => {
  item.addEventListener('mouseover', function() {
    tab.forEach((items) => {items.classList.remove('active')});
    item.classList.add('active')
      let tabId = item.dataset.id;
      tabContent.forEach((content) => {
          let contentId = content.dataset.id;
          if (tabId === contentId) {
              content.style.display = 'flex';
          } else {
              content.style.display = 'none';
          }
      })
  })
})
// loading
window.addEventListener('load',function () {
  setTimeout(() => {
    this.document.querySelectorAll('*').forEach((item)=>{
      item.classList.remove('loading')
    })
  }, 3000);
})
// fancybox

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// swiper
var menuSwiper = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
},
});
var product = new Swiper(".product", {
  loop: true,
  autoplay: true,
  slidesPerView: 3,
  spaceBetween:40,
  breakpoints:{
    768:{
      slidesPerView:1
    },
    992:{
      slidesPerView:2
    },
    1200:{
      slidesPerView:3
    }
  }
});
var blog = new Swiper(".blog", {
  loop: true,
  autoplay: true,
  slidesPerView: 4,
  spaceBetween:40,
  breakpoints:{
    768:{
      slidesPerView:1
    },
    992:{
      slidesPerView:2
    },
    1200:{
      slidesPerView:4
    }
  }
});
var productdetails = new Swiper(".product-details", {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 3,
  breakpoints: {
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  freeMode: true,
  watchSlidesProgress: true,
});
var productdetails2 = new Swiper(".product-details2", {
  loop: true,
  spaceBetween: 40,
  slidesPerView: 1,
  thumbs: {
    swiper: Swiper,
  },
});