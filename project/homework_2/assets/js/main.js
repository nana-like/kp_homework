// 텍스트 인풋 데모 영역
const textInputGuide = document.querySelector("#textinput-demos");

// 라디오그룹 데모 영역
const radioGroupGuide = document.querySelector("#radiogroup-demos");

// 셀렉트박스 데모 영역
const selectboxGuide = document.querySelector("#selectbox-demos");

// 버튼 데모 영역
const buttonGuide = document.querySelector("#btn-demos");

// 스위치 데모 영역
const switchGuide = document.querySelector("#switch-demos");


// 텍스트 인풋 - 데모 생성 옵션
const textInputDemo = [{
    id: "demo1",
    title: "Default",
    elem: new TextInput(textInputOptions.normal)
  },
  {
    id: "demo2",
    title: "Required",
    desc: "<code>state-required</code> 클래스를 추가합니다.",
    elem: new TextInput(textInputOptions.required)
  },
  {
    id: "demo4",
    title: "Error & Required",
    desc: "<code>state-error</code> 클래스와 <code>state-required</code> 클래스를 추가합니다.",
    elem: new TextInput(textInputOptions.requiredError)
  },
  {
    id: "demo3",
    title: "Disabled",
    desc: "input에 <code>disabled</code> 속성을 추가합니다.",
    elem: new TextInput(textInputOptions.disabled)
  },
  {
    id: "demo5",
    title: "Readonly",
    desc: "input에 <code>readonly</code> 속성을 추가합니다.",
    elem: new TextInput(textInputOptions.readonly)
  },
  {
    id: "demo6",
    title: "No Label",
    desc: "인풋 필드만 단독으로 사용할 수도 있습니다.",
    elem: new TextInput(textInputOptions.noLabel)
  }
];


// 라디오그룹 - 데모 생성 옵션
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
];



// 셀렉트 박스 - 데모 생성 옵션
const selectboxDemo = [{
    id: "selectDemo1",
    title: "Default",
    elem: new Selectbox(selectboxOptions.normal)
  },
  {
    id: "selectDemo2",
    title: "Disabled",
    desc: "select에 <code>disabled</code> 속성을 추가합니다.",
    elem: new Selectbox(selectboxOptions.disabled)
  }
];


// 버튼 - 데모 생성 옵션
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
];



// 스위치 - 데모 생성 옵션
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
];


// 텍스트 인풋 - 데모 컨테이너 생성
for (let i = 0; i < textInputDemo.length; i++) {
  textInputGuide.appendChild(new DemoContainer(textInputDemo[i]));
}


// 라디오그룹 - 데모 컨테이너 생성
for (let i = 0; i < radioGroupDemo.length; i++) {
  radioGroupGuide.appendChild(new DemoContainer(radioGroupDemo[i]));
}



// 셀렉트 박스 - 데모 컨테이너 생성
for (let i = 0; i < selectboxDemo.length; i++) {
  selectboxGuide.appendChild(new DemoContainer(selectboxDemo[i]));
}


// 버튼 - 데모 컨테이너 생성
for (let i = 0; i < buttonDemo.length; i++) {
  buttonGuide.appendChild(new DemoContainer(buttonDemo[i]));

}

// 스위치 - 데모 컨테이너 생성
for (let i = 0; i < switchDemo.length; i++) {
  switchGuide.appendChild(new DemoContainer(switchDemo[i]));

}