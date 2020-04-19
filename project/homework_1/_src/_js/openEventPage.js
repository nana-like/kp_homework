(function () {
  console.log("OPEN EVENT PAGE");
  const body = document.body;
  const btnApply = document.querySelector(".btn-apply");


  const applyHandler = () => {
    console.log("click!");
    if (body.classList.contains("-event-show")) {
      body.classList.remove("-event-show");
    } else {
      body.classList.add("-event-show");
    }
  }

  document.body.addEventListener("click", applyHandler);


})()