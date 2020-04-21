// 고유 인풋 ID 설정용
let inputID = 0;

// 텍스트 인풋 아이템 생성
class TextInput {
  constructor(param) {

    inputID++;

    const {
      label,
      placeholder = "내용을 입력해주세요",
      value = "",
      state,
      type = "text",
      attribute,
      hasError
    } = param;

    // kp-input-item 생성
    this.elem = document.createElement("div");
    this.elem.classList.add("kp-input-item");

    // 라벨이 있는 경우
    if (label) {
      this.elem.innerHTML += `<label for="test${inputID}">${label}</label>`;
    }

    this.elem.innerHTML += `<input id="test${inputID}" type="${type}" placeholder="${placeholder}" value="${value}" /><div class="explain"></div>
    `;

    // 상태가 설정된 경우
    if (state) {
      this.elem.classList.add(`state-${state}`);
    }

    // 어트리뷰트가 있는 경우
    if (attribute) {
      this.elem.children[1].setAttribute(`${attribute}`, true);
    }

    // 에러인 경우
    if (hasError) {
      this.elem.classList.add(`state-error`);
      this.elem.querySelector(".explain").innerHTML = hasError;
    }

    return this.elem;
  }
}


// 텍스트 인풋 옵션 설정
const textInputOptions = {
  normal: {
    label: "일반 폼"
  },
  noLabel: {
    placeholder: "라벨 없이 인풋 필드만 사용할 수도 있습니다"
  },
  disabled: {
    label: "사용 불가 폼",
    attribute: "disabled",
    placeholder: "disabled 속성이 붙으면 폼을 사용할 수 없습니다"
  },
  readonly: {
    label: "읽기 전용 폼",
    attribute: "readonly",
    value: "readonly 속성이 붙은 읽기 전용 폼입니다"
  },
  required: {
    label: "필수 입력 폼",
    state: "required",
    value: "필수 입력 폼은 라벨 오른쪽에 별이 붙습니다"
  },
  requiredError: {
    label: "필수 입력 + 에러",
    state: "required",
    placeholder: "에러는 어떤 폼에든 쓸 수 있습니다",
    hasError: "에러가 있으면 이렇게 색상이 바뀌어요!"
  },
  noLabel: {
    value: "레이블 없이 사용하는 것도 가능합니다",
    hasError: "이때 에러 메시지도 함께 쓸 수 있습니다."
  }
}