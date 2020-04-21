// 고유 버튼 ID 설정용
let btnID = 0;

// 버튼 데모 영역
const buttonGuide = document.querySelector("#btn-demos");

// 버튼 아이템 생성
class Button {
  constructor(param) {
    btnID++;
    const {
      btnType,
      attribute = "",
      text = "버튼"
      //size
    } = param;

    this.elem = document.createElement("BUTTON");
    this.elem.classList.add("kp-btn");

    if (btnType) {
      this.elem.classList.add(`btn-${btnType}`);
    }
    if (attribute) {
      this.elem.setAttribute(`${attribute}`, true);
    }
    this.elem.innerHTML = text;

    return this.elem;
  }
}


// 라디오그룹 옵션 설정
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


// 데모 생성 옵션
const buttonDemo = [{
    id: "btnDemo1",
    title: "Default",
    elem: new Button(buttonOptions.default)
  },
  {
    id: "btnDemo2",
    title: "Primary",
    desc: "<code>.btn-primary</code> 클래스를 추가합니다.",
    elem: new Button(buttonOptions.primary)
  },
  {
    id: "btnDemo3",
    title: "Disabled",
    desc: "button에 <code>disabled</code> 속성을 추가합니다.",
    elem: new Button(buttonOptions.disabled)
  }
]

// 버튼 - 데모 컨테이너 생성
for (let i = 0; i < buttonDemo.length; i++) {
  buttonGuide.appendChild(new DemoContainer(buttonDemo[i]));

}