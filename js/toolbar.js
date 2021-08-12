const closeBtns = document.querySelectorAll(".windowClose").forEach((e) => {
  e.addEventListener("click", function (x) {
    // console.log(x.target.dataset.modal);
    var ModalId = x.target.dataset.modal;
    document.querySelector("#" + ModalId).classList.remove("active");
    body.classList.remove("active");
  });
});
var body = document.body;
const modalBtn = document.querySelectorAll(".windowBtn");
const modal = document.querySelectorAll(".window");
modalBtn.forEach((e) => {
  onTabClick(modalBtn, modal, e);
});
function onTabClick(modalBtns, modals, modalItem) {
  modalItem.addEventListener("click", function (e) {
    let currentModalBtn = modalItem;
    let tabIdModal = currentModalBtn.getAttribute("data-modal");
    let currentModal = document.querySelector(tabIdModal);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
      body.classList.remove("active");
    } else if (!currentModalBtn.classList.contains("active")) {
      modalBtns.forEach(function (modalItem) {
        modalItem.classList.remove("active");
        body.classList.remove("active");
      });
      modals.forEach(function (modalItem) {
        modalItem.classList.remove("active");
      });
      // currentBtnModal.classList.add("active");
      currentModal.classList.add("active");
      body.classList.add("active");
    }
    $(".gallery").slick("setPosition");
    $(".video__slider").slick("setPosition");
  });
}
$(".gallery").slick({
  dots: false,
  infinite: false,
  prevArrow: $(".prevGallery"),
  nextArrow: $(".nextGallery"),
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".video__slider").slick({
  dots: true,
  infinite: true,
  prevArrow: $(".prevVideo"),
  nextArrow: $(".nextVideo"),
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
});
const video = document.querySelectorAll(".video");
const videoPlay = document.querySelectorAll(".videoPlay");
videoPlay.forEach((playBtn) => {
  onPlay(playBtn);
});
function onPlay(playBtn) {
  playBtn.addEventListener("click", function (e) {
    videoItem = e.target.parentElement.lastElementChild;
    if (videoItem.paused) {
      playBtn.classList.add("paused");
      videoItem.play();
    } else {
      playBtn.classList.remove("paused");
      videoItem.pause();
    }
    // console.log(videoItem);
  });
}
