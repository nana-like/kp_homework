(function () {
  console.log("OPEN EVENT PAGE");
  const body = document.body;
  const btnApply = document.querySelector(".btn-apply");


  const applyHandler = () => {
    console.log("click!");
    body.classList.add("-event-show");
  }

  btnApply.addEventListener("click", applyHandler);


})()