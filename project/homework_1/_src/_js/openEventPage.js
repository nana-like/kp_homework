(function () {
  console.log("OPEN EVENT PAGE");
  const body = document.body;
  const btnApply = document.querySelector(".btn-apply");
  const btnTransfer = document.querySelector(".btn-transfer");
  const btnClose = document.querySelector(".event__btn-close");


  const openPageEvent = () => {
    body.classList.add("-event-show");
  }

  const closePageEvent = () => {
    body.classList.remove("-event-show");
  }

  // btnTransfer.addEventListener("click", applyEvent);
  // document.body.addEventListener("click", closeEvent);


  btnApply.addEventListener("click", openPageEvent);
  btnClose.addEventListener("click", closePageEvent);


})()