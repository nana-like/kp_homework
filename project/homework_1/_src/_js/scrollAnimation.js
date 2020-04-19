(function () {
  const parallaxItems = document.querySelectorAll(".js-parallax");
  const signOnItem = document.querySelector(".js-sign")
  const fixedBtn = document.querySelector(".btn-apply")
  const parallax = [0.2, 0.3, 0.15]
  let scrollY = 0;

  // 패럴렉스 스크롤 이벤트
  const parllaxEvent = function () {
    scrollY = window.scrollY;

    //요소의 스타일 속성 변경
    parallaxItems.forEach((item, idx) => {
      item.style.top = `-${scrollY * parallax[idx]}px`;
    })
  };

  // 네온사인 켜지는 이벤트
  const signOnEvent = function () {
    scrollY = window.scrollY;

    // 값 체크
    var windowHeight = window.innerHeight;
    var itemPosition = signOnItem.getBoundingClientRect().top;
    console.log("windowHeight", windowHeight);
    console.log("itemPosition", itemPosition);

    var a = windowHeight;
    var b = fixedBtn.getBoundingClientRect().height;
    console.log(b);


    if (itemPosition < a - (b * 2.3)) {
      console.log("!");
      signOnItem.classList.add("-ani-show");
    }


  };

  // 스크롤 애니메이션 핸들러
  const scrollHandler = function () {
    parllaxEvent();
    signOnEvent();
  };

  window.addEventListener("scroll", scrollHandler);


})()