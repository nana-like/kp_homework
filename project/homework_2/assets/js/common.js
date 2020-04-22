// ** common.js

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