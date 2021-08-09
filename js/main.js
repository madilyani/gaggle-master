var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
var search = document.getElementById("search");
var searchBtn = document.getElementById("searchBtn");
searchBtn.onclick = function () {
  search.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
const tabsBtn = document.querySelectorAll(".tabBtn");
const tabsItems = document.querySelectorAll(".tabEvent");
tabsBtn.forEach((e) => {
  onTabClick(tabsBtn, tabsItems, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
const $$card = document.querySelector('.cardRe')
const $$remove = document.querySelector('.remove')
$($$remove).each((e) => {
  onRemove($$remove, $$card, e);
});
function onRemove() {
  $$remove.addEventListener("click", function (e) {
    $$card.classList.add('removed')
  });
  document.querySelector('.remove').addEventListener('click', (e) => {
    $$card.addEventListener('animationend', () => {
      $$card.classList.add('hide')
    })
  })
}
  