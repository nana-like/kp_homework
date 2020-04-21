// 고유 스위치 ID 설정용
let switchID = 0;

// 스위치 데모 영역
const switchGuide = document.querySelector("#switch-demos");

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
    <input id="switch${switchID}" type="checkbox" aria-label="${ariaLabel}" ${attribute}="${attribute}">`;

    this.elem.innerHTML += `
    <label for="switch${switchID}" class="switch-wrap"></label>
    `;

    return this.elem;
  }
}


// 라디오그룹 옵션 설정
const switchOptions = {
  default: {
    ariaLabel: "동의 여부 체크"
  },
  disabled: {
    ariaLabel: "스크린 리더기에게 보여줄 내용",
    attribute: "disabled"
  }
}


// 데모 생성 옵션
const switchDemo = [{
    id: "swDemo1",
    title: "Default",
    stopTidy: "yes",
    elem: new Switch(switchOptions.default)
  },
  {
    id: "swDemo2",
    title: "Disabled",
    stopTidy: "yes",
    desc: "input에 <code>disabled</code> 속성을 추가합니다.",
    elem: new Switch(switchOptions.disabled)
  }
]

// 스위치 - 데모 컨테이너 생성
for (let i = 0; i < switchDemo.length; i++) {
  switchGuide.appendChild(new DemoContainer(switchDemo[i]));

}