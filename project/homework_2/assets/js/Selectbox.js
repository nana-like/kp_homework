// 고유 셀렉트박스 ID 설정용
let selectID = 0;

// 셀렉트박스 데모 영역
const selectboxGuide = document.querySelector("#selectbox-demos");

// 셀렉트박스 아이템 생성
class Selectbox {
  constructor(param) {

    selectID++;

    const {
      labels,
      values = labels,
      attribute
    } = param;

    // kp-selectbox 생성
    this.elem = document.createElement("div");
    this.elem.classList.add("kp-selectbox");

    this.elem.innerHTML += `<select class="kp-select-wrap" name="select${selectID}" id="select${selectID}">
    </select>`;
    for (let i = 0; i < values.length; i++) {
      this.option = document.createElement("OPTION");
      this.option.value = values[i];
      this.option.text = labels[i];
      // console.log(this.option);
      this.elem.children[0].appendChild(this.option);
    }
    this.elem.innerHTML += `<div class="kp-selected" data-text=""></div>`;


    // 어트리뷰트가 있는 경우
    if (attribute) {
      this.elem.children[0].setAttribute(`${attribute}`, true);
    }

    return this.elem;
  }
}

// 셀렉트박스 옵션 설정
const selectboxOptions = {
  normal: {
    labels: ["Option 1", "Option 2", "Option 3"],
    values: ["opt1", "opt2", "opt3"]
  },
  disabled: {
    labels: ["선택할 수 없는 옵션", "두 번째 옵션", "세 번째 옵션"],
    values: ["opt1", "opt2", "opt3"],
    attribute: "disabled",
  },
}

// 데모 생성 옵션
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
]

// 셀렉트박스의 라벨을 보여줌 (말줄임표 처리를 위해 data-text에 값을 넣어줌)
const showLabel = (selectbox) => {
  var box = selectbox.childNodes[0];
  var txt = box.options[box.selectedIndex].text;
  box.nextElementSibling.dataset.text = txt;
}

// 셀렉트 박스 - 데모 컨테이너 생성
for (let i = 0; i < selectboxDemo.length; i++) {
  selectboxGuide.appendChild(new DemoContainer(selectboxDemo[i]));
}

const getBoxLabels = () => {
  // 모든 셀렉트 박스 선택
  const boxes = document.querySelectorAll(".kp-selectbox");

  // 라벨 삽입
  boxes.forEach((item) => {
    item.addEventListener("change", function () {
      showLabel(item);
    });
  })

  for (let i = 0; i < boxes.length; i++) {
    showLabel(boxes[i]);
  }
}

getBoxLabels();