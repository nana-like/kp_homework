// 고유 인풋 ID 설정용
let inputID = 0;

// 텍스트 인풋 데모 영역
const textInputGuide = document.querySelector("#textinput-demos");

// 마크업 코드 생성
const generateCode = (target, stopTidy) => {

  const html = target.outerHTML;
  let code = "";

  if (!stopTidy) {
    result = tidy_html5(html, tidyOptions);
    code = result.replace(/</gi, "&lt;");
  } else {
    code = html.replace(/</gi, "&lt;");
  }
  return code;
}

// 데모 아이템 생성
class DemoContainer {
  constructor(param) {
    const {
      id,
      title,
      elem,
      desc,
      stopTidy,
    } = param;
    let code = null;
    if (stopTidy) {
      code = generateCode(elem, "noTidy");
    } else {
      code = generateCode(elem);
    }
    const demoCodeTemplate = `
    <div class="demo__code">
    <div class="code-toggle">
    <label for="${id}">
    마크업 확인
    </label>
    <input id="${id}" type="checkbox" />
    <div class="code-contents">
    <pre><code>${code}</code></pre>
    </div>
    </div>
    </div>
    `;
    this.demo = document.createElement("div");
    this.demo.classList.add("demo");
    this.demo.innerHTML += `<h3>${title}</h3>`;
    if (desc) {
      this.demo.innerHTML += `<p class="desc">${desc}</p>`;
    }
    this.demoUI = document.createElement("div");
    this.demoUI.classList.add("demo__ui");
    this.demoUI.appendChild(elem);
    this.demo.appendChild(this.demoUI);
    this.demo.innerHTML += demoCodeTemplate;
    return this.demo;
  }
}


// 텍스트 인풋 아이템 생성
class TextInput {
  constructor(param) {

    inputID++;

    const {
      label,
      placeholder = "내용을 입력해주세요",
      value = "",
      state,
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

    this.elem.innerHTML += `<input id="test${inputID}" type="text" placeholder="${placeholder}" value="${value}" /><div class="explain"></div>
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

// 데모 생성 옵션
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
]

// 텍스트 인풋 - 데모 컨테이너 생성
for (let i = 0; i < textInputDemo.length; i++) {
  textInputGuide.appendChild(new DemoContainer(textInputDemo[i]));
}