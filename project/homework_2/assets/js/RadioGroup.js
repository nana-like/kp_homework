// 고유 라디오그룹 ID 설정용
let radioGroupID = 0;

// 라디오그룹 데모 영역
const radioGroupGuide = document.querySelector("#radiogroup-demos");

// 라디오그룹 아이템 생성
class RadioGroup {
  constructor(param) {
    // 고유 네임 지정용
    const radioName = Math.random(1);
    const {
      groupTitle,
      labels,
      checkedIndex,
      disabledIndex
    } = param;

    this.elem = document.createElement("div");
    this.elem.classList.add("kp-radio-group");
    this.labelGroup = document.createElement("div");
    this.labelGroup.classList.add("radio-group-wrap");

    // 타이틀이 있을 경우
    if (groupTitle) {
      this.elem.innerHTML += `
    <div class="radio-group-title">그룹 타이틀</div>
    `;
    }

    for (let i = 0; i < labels.length; i++) {
      radioGroupID++;
      this.labelGroup.innerHTML += `
    <label for="radio${radioGroupID}" class="radio-group-item">
      <input id="radio${radioGroupID}" name="${radioName}" type="radio" value="radio${radioGroupID}"/>
      <span class="radio-label">${labels[i]}</span>
    </label>
    `;
    }
    if (checkedIndex >= 0) {
      this.labelGroup.children[checkedIndex].children[0].checked = true;
    }
    if (disabledIndex >= 0) {
      this.labelGroup.children[disabledIndex].children[0].disabled = true;
    }
    this.elem.appendChild(this.labelGroup);
    return this.elem;
  }
}


// 라디오그룹 옵션 설정
const radioGroupOptions = {
  default: {
    labels: ["Radio 1", "Radio 2", "Radio 3"],
  },
  withTitle: {
    groupTitle: "라디오 그룹 이름",
    labels: ["하나", "둘", "셋"],
  },
  withDisabled: {
    labels: ["라디오 버튼1", "라디오 버튼 2", "사용할 수 없는 라디오 버튼3", "라디오 버튼4"],
    checkedIndex: 1,
    disabledIndex: 2
  }
}


// 데모 생성 옵션
const radioGroupDemo = [{
    id: "radioG1",
    title: "Default",
    elem: new RadioGroup(radioGroupOptions.default)
  },
  {
    id: "radioG2",
    title: "Title",
    desc: "<code>&lt;div class='radio-group-title'>&lt;/div></code>를 추가합니다.",
    elem: new RadioGroup(radioGroupOptions.withTitle)
  },
  {
    id: "radioG3",
    title: "Disabled",
    desc: "input에 <code>disabled</code> 속성을 추가합니다.",
    elem: new RadioGroup(radioGroupOptions.withDisabled)
  }
]

// 라디오그룹 - 데모 컨테이너 생성
for (let i = 0; i < radioGroupDemo.length; i++) {
  radioGroupGuide.appendChild(new DemoContainer(radioGroupDemo[i]));
}