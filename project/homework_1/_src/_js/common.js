const body = document.body;
const btnApply = document.querySelector(".js-btn-apply");
const btnClose = document.querySelector(".js-btn-close");

const pageEvent = {
  // 페이지 보여줌
  open: () => {
    body.classList.add("-event-show");
  },
  // 페이지 숨김
  close: () => {
    body.classList.remove("-event-show");
  }
}

const loadHandler = () => {
  document.body.classList.add("loaded");
  btnApply.addEventListener("click", pageEvent.open);
  btnClose.addEventListener("click", pageEvent.close);
}

window.addEventListener("load", loadHandler);