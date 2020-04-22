// 고유 버튼 ID 설정용
let btnID = 0;


// 버튼 아이템 생성
class Button {
  constructor(param) {
    btnID++;
    const {
      btnType,
      attribute = "",
      text = "버튼"
    } = param;

    this.elem = document.createElement("BUTTON");
    this.elem.classList.add("kp-btn");

    if (btnType) {
      this.elem.classList.add(`btn-${btnType}`);
    }
    if (attribute) {
      this.elem.setAttribute(`${attribute}`, `${attribute}`);
    }
    this.elem.innerHTML = text;

    return this.elem;
  }
}


// 버튼 옵션 설정
const buttonOptions = {
  default: {
    text: "일반 버튼"
  },
  primary: {
    text: "주요 버튼",
    btnType: "primary"
  },
  disabled: {
    text: "사용 불가능한 버튼",
    attribute: "disabled",
    btnType: "primary"
  }
}