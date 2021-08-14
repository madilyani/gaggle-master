const historyBtn = document.querySelectorAll(".historyBtn");
const historyEvent = document.querySelectorAll(".historyEvent");
historyBtn.forEach((e) => {
  onHistoryShow(historyBtn, historyEvent, e);
});
function onHistoryShow(historyBtns, historyEvents, historyItem) {
  historyItem.addEventListener("click", function (e) {
    let currentHistory = historyItem;
    let historyTabId = currentHistory.getAttribute("data-tab");
    let currentEvent = document.querySelector(historyTabId);
    if (e.srcElement.classList.contains("active")) {
      e.srcElement.classList.remove("active");
      e.srcElement.parentElement.parentElement.parentElement.parentElement
        .querySelector(".history__tab-body")
        .classList.remove("active");
    } else if (!currentHistory.classList.contains("active")) {
      historyBtns.forEach(function (historyItem) {
        historyItem.classList.remove("active");
      });
      historyEvents.forEach(function (historyItem) {
        historyItem.classList.remove("active");
      });
      currentHistory.classList.add("active");
      currentEvent.classList.add("active");
    }
    $(".history__tab-body-slider").slick("setPosition");
  });
}
$(".history__tab-body-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1240,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
      },
    },
  ],
});
