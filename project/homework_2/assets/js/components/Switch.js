// 고유 스위치 ID 설정용
let switchID = 0;

// 스위치 아이템 생성
class Switch {
  constructor(param) {
    switchID++;
    const {
      ariaLabel,
      attribute = "",
      //size
    } = param;

    this.elem = document.createElement("div");
    this.elem.classList.add("kp-switch");
    this.elem.innerHTML = `
    <input id="switch${switchID}" type="checkbox" aria-label="${ariaLabel}">`;

    // 어트리뷰트가 있는 경우
    if (attribute) {
      this.elem.children[0].setAttribute(`${attribute}`, true);
    }

    this.elem.innerHTML += `
    <label for="switch${switchID}" class="switch-wrap"></label>
    `;

    return this.elem;
  }
}


// 스위치 옵션 설정
const switchOptions = {
  default: {
    ariaLabel: "동의 여부 체크"
  },
  disabled: {
    ariaLabel: "스크린 리더기에게 보여줄 내용",
    attribute: "disabled"
  }
}