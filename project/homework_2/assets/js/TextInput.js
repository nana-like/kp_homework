let inputID = 0;

function TextInput(param) {

  inputID++;
  const {
    label,
    placeholder = "내용을 입력해주세요",
    value = "",
    state,
    type,
    hasError
  } = param;

  this.elem = document.createElement("div");
  this.elem.classList.add("kp-input-item");

  if (label) {
    this.elem.innerHTML += `<label for="test${inputID}">${label}</label>`;
  }

  this.elem.innerHTML += `<input id="test${inputID}" type="text" placeholder="${placeholder}" value="${value}" /><div class="explain"></div>
    `;

  if (state) {
    this.elem.classList.add(`state-${state}`);
  }
  if (type) {
    this.elem.children[1].setAttribute(`${type}`, true);
  }
  if (hasError) {
    this.elem.classList.add(`state-error`);
    this.elem.children[2].innerHTML = hasError;
  }

  return this.elem;
}

var normal = {
  label: "일반 폼"
}

var noLabel = {
  placeholder: "라벨 없이 인풋 필드만 사용할 수도 있습니다"
}

var disabled = {
  label: "사용 불가 폼",
  type: "disabled",
  placeholder: "disabled 속성이 붙으면 폼을 사용할 수 없습니다"
}

var readonly = {
  label: "읽기 전용 폼",
  type: "readonly",
  value: "readonly 속성이 붙은 읽기 전용 폼입니다"
}

var required = {
  label: "필수 입력 폼",
  state: "required",
  value: "필수 입력 폼은 라벨 오른쪽에 별이 붙습니다"
}

var requiredError = {
  label: "필수 입력 + 에러",
  state: "required",
  placeholder: "에러는 어떤 폼에든 쓸 수 있습니다",
  hasError: "에러가 있으면 이렇게 색상이 바뀌어요!"
}


const showCode = (target) => {
  const html = target.elem.outerHTML;
  var a = html.replace(/</gi, "&lt;");
  console.dir(a);
  const codeElem =
    this.elem = document.createElement("pre");

  codeElem.innerHTML = html.toString();
  var b = `<code>${a}</code>`
  console.dir(b);
  document.body.appendChild(codeElem);
  codeElem.innerHTML = b;
}


// new TextInput(normal);
// new TextInput(disabled);
// new TextInput(readonly);
// var r = new TextInput(required);
// showCode(r);
// var a = new TextInput(requiredError);
// showCode(a);
// var z = new TextInput(noLabel);
// showCode(z);



const textInputGuide = document.querySelector("#textinput-demos");

const generateCode = (target) => {
  const html = target.outerHTML;
  console.log(html)
  const result = tidy_html5(html, options);
  console.log(result)
  const code = result.replace(/</gi, "&lt;");

  return code;
}


var options = {
  // "indent": "auto",
  "indent": true,
  "indent-spaces": 2,
  "indent-attributes": true,
  "wrap": 80,
  "markup": true,
  "output-xml": false,
  // "numeric-entities": true,
  // "quote-marks": true,
  // "quote-nbsp": false,
  "show-body-only": true,
  // "quote-ampersand": false,
  // "break-before-br": false,
  // "uppercase-tags": false,
  // "uppercase-attributes": false,
  // "drop-font-tags": true,
  // "tidy-mark": false
}

function DemoContainer(param) {

  const {
    id,
    title,
    elem
  } = param;


  const code = generateCode(elem);

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

  this.demoUI = document.createElement("div");
  this.demoUI.classList.add("demo__ui");
  this.demoUI.appendChild(elem);


  this.demo.appendChild(this.demoUI);
  this.demo.innerHTML += demoCodeTemplate;


  return this.demo;

}

const obj = {
  id: "demo123",
  title: "Default",
  elem: new TextInput(normal)
}


const obj2 = {
  id: "demo999",
  title: "Reqruied",
  elem: new TextInput(required)
}




textInputGuide.appendChild(new DemoContainer(obj));
textInputGuide.appendChild(new DemoContainer(obj2));