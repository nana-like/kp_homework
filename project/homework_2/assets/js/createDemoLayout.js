const createDemoLayout = () => {

  // 레이아웃 데모 영역
  const layoutGuide = document.querySelector("#layout-demos");

  // 레이아웃 생성
  const layout1 = () => {
    const elem = document.createElement("div");
    const input = new TextInput({});
    const btn = new Button(buttonOptions.default);
    const select = new Selectbox(selectboxOptions.normal);

    elem.classList.add("kp-line");

    elem.appendChild(input);
    elem.appendChild(select);
    elem.appendChild(btn);

    return elem;
  }

  const layout2 = () => {
    const elem = document.createElement("div");
    const input = new TextInput({});
    const btn = new Button(buttonOptions.default);
    const select = new Selectbox(selectboxOptions.normal);

    elem.classList.add("kp-line");
    input.classList.add("full-size")
    select.classList.add("full-size");

    elem.appendChild(input);
    elem.appendChild(select);
    elem.appendChild(btn);

    return elem;
  }

  const layout3 = () => {
    const elem = document.createElement("div");
    const text = document.createElement("p");
    const btn = new Button(buttonOptions.default);
    const toggle = new Switch(switchOptions.default);

    elem.classList.add("kp-line");
    elem.classList.add("align-center");
    text.innerHTML = "Ex et enim sint nostrud velit anim laboris nostrud officia.";

    elem.appendChild(text);
    elem.appendChild(toggle);
    elem.appendChild(btn);

    return elem;
  }

  const layout4 = () => {
    const elem = document.createElement("div");
    const text = document.createElement("p");
    const btn = new Button({
      text: "확인 버튼",
      btnType: "primary"
    });

    elem.classList.add("kp-line");
    elem.classList.add("align-center");
    elem.classList.add("space-end");
    text.innerHTML = "Excepteur veniam";

    elem.appendChild(text);
    elem.appendChild(btn);

    return elem;
  }

  const layout5 = () => {
    const elem = document.createElement("div");
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

    elem.classList.add("kp-group");
    elem.innerHTML = `<div class="kp-group-title">타이틀</div>`;
    btn2.classList.add("full-size");

    elem.appendChild(line);
    line.appendChild(input);
    line.appendChild(btn1);
    line.appendChild(btn2);

    return elem;
  }

  const layout6 = () => {
    const elem = document.createElement("div");
    const line1 = document.createElement("div");
    const line2 = document.createElement("div");
    const line3 = document.createElement("div");
    const input = new TextInput({});
    const btn1 = new Button({
      text: "I have margin values!",
      btnType: "primary"
    });
    const btn2 = new Button({
      text: "Button"
    });

    elem.classList.add("kp-group");
    elem.innerHTML = `<div class="kp-group-title">.kp-m-top & .kp-m-bottom-md</div>`;
    line1.classList.add("kp-line");
    line2.classList.add("kp-line");
    line2.classList.add("kp-m-top");
    line2.classList.add("kp-m-bottom-md");
    line3.classList.add("kp-line");
    input.classList.add("full-size");
    btn1.classList.add("full-size");
    btn2.classList.add("full-size");

    line1.appendChild(input);
    line2.appendChild(btn1);
    line3.appendChild(btn2);
    elem.appendChild(line1);
    elem.appendChild(line2);
    elem.appendChild(line3);

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
      desc: "상위 요소에게 <code>.kp-group</code> 클래스를 추가하고, 그 바로 하위에 <code>.kp-group-title</code> 클래스를 갖는 요소를 추가합니다.",
      elem: layout5()
    },
    {
      id: "lyDemo6",
      title: "Margin",
      desc: "요소의 위나 아래에 여백을 주려면 <code>.kp-m-{top 또는 bottom}</code> 클래스를 사용합니다. 해당 클래스 뒤에 <code>-{md/lg}</code> 를 붙이면 그 값이 더 커집니다.",
      elem: layout6()
    }
  ]

  // 레이아웃 - 데모 컨테이너 생성
  for (let i = 0; i < layoutDemo.length; i++) {
    layoutGuide.appendChild(new DemoContainer(layoutDemo[i]));
  }
}

createDemoLayout();