// 고유 레이아웃 ID 설정용
let layoutID = 0;

// 레이아웃 데모 영역
const layoutGuide = document.querySelector("#layout-demos");

// 레이아웃 생성
layout1 = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");

  const input = new TextInput({});
  const btn = new Button(buttonOptions.default);
  const select = new Selectbox(selectboxOptions.normal);
  elem.appendChild(input);
  elem.appendChild(select);
  elem.appendChild(btn);

  return elem;
}

layout2 = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");

  const input = new TextInput({});
  const btn = new Button(buttonOptions.default);
  const select = new Selectbox(selectboxOptions.normal);
  input.classList.add("full-size")
  select.classList.add("full-size");
  elem.appendChild(input);
  elem.appendChild(select);
  elem.appendChild(btn);

  return elem;
}

layout3 = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");
  elem.classList.add("align-center");

  const text = document.createElement("p");
  text.innerHTML = "Ex et enim sint nostrud velit anim laboris nostrud officia.";
  const btn = new Button(buttonOptions.default);
  const toggle = new Switch(switchOptions.default);
  elem.appendChild(text);
  elem.appendChild(toggle);
  elem.appendChild(btn);

  return elem;
}

layout4 = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");
  elem.classList.add("align-center");
  elem.classList.add("space-end");

  const text = document.createElement("p");
  text.innerHTML = "Excepteur veniam";
  const btn = new Button({
    text: "확인 버튼",
    btnType: "primary"
  });
  elem.appendChild(text);
  elem.appendChild(btn);

  return elem;
}
layout5 = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-group");
  elem.innerHTML = `<div class="kp-group-title">타이틀</div>`;

  const line = document.createElement("div");
  line.classList.add("kp-line");

  const input = new TextInput({});
  const btn1 = new Button({
    text: "Dolore nisi",
  });
  const btn2 = new Button({
    text: "Ea cillum consequat ipsum aute tempor",
    btnType: "primary"
  });
  btn2.classList.add("full-size");
  elem.appendChild(line);
  line.appendChild(input);
  line.appendChild(btn1);
  line.appendChild(btn2);

  return elem;
}




// 데모 생성 옵션
const layoutDemo = [{
    id: "lyDemo1",
    title: "한 줄에 정렬",
    desc: "상위 요소에게 <code>.kp-line</code> 클래스를 추가합니다.",
    elem: layout1()
  },
  {
    id: "lyDemo2",
    title: "한 줄에 정렬 + 자동 늘이기",
    desc: "상위 요소에게 <code>.kp-line</code> 클래스를 추가하고, 자동으로 늘이고 싶은 요소에게 <code>.full-size</code> 클래스를 추가합니다.",
    elem: layout2()
  },
  {
    id: "lyDemo3",
    title: "한 줄에 정렬 + 가운데 정렬",
    desc: "상위 요소에게 <code>.kp-line</code> 클래스와 <code>.align-center</code> 클래스를 추가합니다.",
    elem: layout3()
  },
  {
    id: "lyDemo4",
    title: "한 줄에 정렬 + 가운데 정렬 + 양끝 정렬",
    desc: "상위 요소에게 <code>.kp-line</code> 클래스와 <code>.align-center</code> 클래스, <code>.space-end</code> 클래스를 추가합니다.",
    elem: layout4()
  },
  {
    id: "lyDemo5",
    title: "그룹 타이틀",
    desc: "상위 요소에게 <code>.kp-group</code> 클래스를 추가하고, 그 하위에 <code>.kp-group-title</code> 클래스의 요소를 추가합니다.",
    elem: layout5()
  }
]

// 레이아웃 - 데모 컨테이너 생성
for (let i = 0; i < layoutDemo.length; i++) {
  layoutGuide.appendChild(new DemoContainer(layoutDemo[i]));
}


// layoutGuide.appendChild(layout1());
// layoutGuide.appendChild(new DemoContainer(layout1()));
// layoutGuide.appendChild(new DemoContainer(layoutDemo[1]));