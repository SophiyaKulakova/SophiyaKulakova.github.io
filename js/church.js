const introSection = document.getElementsByClassName("intro-section")[0];
const body = document.querySelector("header");
const classList = [
  "menu-default-long",
  "menu-default-short",
  "menu-fixed-long",
  "menu-fixed-short",
];

function init() {
  const swiper = new Swiper(".main-swiper", {
    centeredSlides: true,
    loop: true,
    numbered: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    speed: 1000,
    autoplay: {
      delay: 6000,
      disableOnInteractions: false,
    },
  });

  if (window.screen.width >= 1200) {
    introSection.classList.add("menu-default-long");
  } else {
    introSection.classList.add("menu-fixed-short");
  }
}

init();

function changeMenuSize(width, offset) {
  console.log(width);
  introSection.classList.remove(...classList);
  if (width >= 1200) {
    if (offset > 0) {
      introSection.classList.add("menu-fixed-long");
    } else {
      introSection.classList.add("menu-default-long");
    }
  } else {
    if (offset > 0) {
      introSection.classList.add("menu-fixed-short");
    } else {
      introSection.classList.add("menu-default-short");
    }
  }
}

window.addEventListener("resize", () => {
  changeMenuSize(
    window.innerWidth,
    // window.screen.width,
    document.documentElement.scrollTop || document.body.scrollTop
  );
});

window.addEventListener("scroll", (event) => {
  changeMenuSize(
    window.innerWidth,
    // window.screen.width,
    document.documentElement.scrollTop || document.body.scrollTop
  );
});
