(function () {
  console.log("SCROLL ANIMATION");

  // 패럴렉스 스크롤 아이템
  const parallaxItems = document.querySelectorAll(".js-parallax");

  // 패럴렉스 스크롤 이벤트
  const parllaxEvent = function () {
    //스크롤 값
    let scrollY = window.scrollY;

    //시차 값 (값이 클수록 더 많이 이동합니다)
    let parallax = [0.2, 0.3, 0.15]

    //요소의 스타일 속성 변경
    parallaxItems.forEach((item, idx) => {
      item.style.top = `-${scrollY * parallax[idx]}px`;
    })
  };

  // 스크롤 애니메이션 핸들러
  const scrollHandler = function () {
    parllaxEvent();
  };

  window.addEventListener("scroll", scrollHandler);


})()