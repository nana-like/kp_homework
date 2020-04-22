// 고유 셀렉트박스 ID 설정용
let selectID = 0;

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

    // 어트리뷰트가 있는 경우
    if (attribute) {
      this.elem.children[0].setAttribute(`${attribute}`, `${attribute}`);
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
    labels: ["선택할 수 없는 셀렉트 박스", "두 번째 옵션", "세 번째 옵션"],
    values: ["opt1", "opt2", "opt3"],
    attribute: "disabled",
  },
}