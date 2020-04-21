// 고유 레이아웃 ID 설정용
let layoutID = 0;

// 레이아웃 데모 영역
const layoutGuide = document.querySelector("#layout-demos");

// 레이아웃 아이템 생성
class Layout {
  constructor(param) {
    btnID++;
    const {
      btnType,
      attribute = "",
      text = "레이아웃"
      //size
    } = param;

    this.elem = document.createElement("div");


    this.elem.classList.add("kp-line");

    var a = new TextInput({});
    a.classList.add("full-size")
    this.elem.appendChild(a);
    this.elem.appendChild(new Selectbox(selectboxOptions.normal));
    this.elem.appendChild(new Button(buttonOptions.default));
    // this.elem.appendChild(new Button(buttonOptions.default));
    // getBoxLabels();

    return this.elem;
  }
}


// 라디오그룹 옵션 설정
const layoutOptions = {
  oneline: {

  },
  lineFull: {},
  disabled: {
    text: "사용 불가능한 레이아웃",
    attribute: "disabled",
    btnType: "primary"
  }
}


// 데모 생성 옵션
const layoutDemo = [{
    id: "lyDemo1",
    title: "한 줄에 정렬",
    desc: "상위 요소에게 <code>.kp-line</code> 클래스를 추가합니다.",
    elem: new Layout(layoutOptions.oneline)
  },
  {
    id: "lyDemo2",
    title: "한 줄에 정렬 + 자동 늘이기",
    desc: "상위 요소에게 <code>.kp-line</code> 클래스를 추가하고, 자동으로 늘이고 싶은 요소에게 <code>.full-size</code> 클래스를 추가합니다.",
    elem: new Layout(layoutOptions.lineFull)
  }
]

// 레이아웃 - 데모 컨테이너 생성
for (let i = 0; i < layoutDemo.length; i++) {
  layoutGuide.appendChild(new DemoContainer(layoutDemo[i]));

}