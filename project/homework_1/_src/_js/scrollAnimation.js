(function () {
  const parallaxItems = document.querySelectorAll(".js-parallax");
  const signOnItem = document.querySelector(".js-sign")
  const fixedBtnApply = document.querySelector(".btn-apply")
  const parallax = [0.2, 0.3, 0.15]
  let scrollY = 0;
  // var temp = document.querySelector(".page-event");

  // 패럴렉스 스크롤 이벤트
  const parllaxEvent = () => {
    scrollY = window.scrollY;

    //요소의 스타일 속성 변경
    parallaxItems.forEach((item, idx) => {
      item.style.top = `-${scrollY * parallax[idx]}px`;
    })
  };

  // 네온사인 켜지는 이벤트
  const signOnEvent = () => {
    scrollY = window.scrollY;

    // 값 체크
    var windowH = window.innerHeight;
    var itemPosition = signOnItem.getBoundingClientRect().top;
    var underneathH = fixedBtnApply.getBoundingClientRect().height; // 참여하기 버튼에 가려지는 높이 계산

    if (itemPosition < windowH - (underneathH * 2.3)) {
      signOnItem.classList.add("-ani-show");
    }

  };

  // const tempEvt = () => {
  //   scrollY = window.scrollY;

  //   temp.style.top = scrollY + "px";
  //   console.log(scrollY);

  // }

  // 스크롤 애니메이션 핸들러
  const scrollHandler = function () {
    parllaxEvent();
    signOnEvent();
  };

  window.addEventListener("scroll", scrollHandler);


})()