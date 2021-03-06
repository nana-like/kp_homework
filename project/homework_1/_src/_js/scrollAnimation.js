const parallaxItems = document.querySelectorAll(".js-parallax");
const signOnItem = document.querySelector(".js-sign")
const mainBtnApply = document.querySelector(".btn-apply")
const parallax = [0.2, 0.3, 0.15]
let scrollY = 0;

// 패럴렉스 스크롤 이벤트
const parllaxEvent = () => {
  scrollY = window.pageYOffset;

  //요소 별로 차이값 적용
  parallaxItems.forEach((item, idx) => {
    const pos = scrollY * parallax[idx];
    item.style.top = `-${pos}px`;
  })
};

// 네온사인 켜지는 이벤트
const signOnEvent = () => {
  scrollY = window.scrollY;

  // 값 체크
  var windowH = window.innerHeight;
  var itemPosition = signOnItem.getBoundingClientRect().top;
  var underneathH = mainBtnApply.getBoundingClientRect().height; // 참여하기 버튼에 가려지는 높이 계산

  if (itemPosition < windowH - (underneathH * 2.3)) {
    signOnItem.classList.add("-ani-show");
  }

};


// 스크롤 애니메이션 핸들러
const scrollHandler = () => {
  parllaxEvent();
  signOnEvent();
};

window.addEventListener("load", signOnEvent);
window.addEventListener("resize", signOnEvent);
window.addEventListener("scroll", scrollHandler);