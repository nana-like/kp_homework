let radioGroupID = 0;

function RadioGroup(param) {
  const radioName = new Date().getMilliseconds();
  const {
    groupTitle,
    labels,
    checkedIndex,
    disabledIndex
  } = param;

  this.elem = document.createElement("div");
  this.elem.classList.add(`kp-radio-group`);
  this.labelGroup = document.createElement("div");
  this.labelGroup.classList.add(`radio-group-wrap`);

  if (groupTitle) {
    this.elem.innerHTML += `
    <div class="radio-group-title">그룹 타이틀</div>
    `
  }

  for (let i = 0; i < labels.length; i++) {
    radioGroupID++;
    this.labelGroup.innerHTML += `
    <label for="test${radioGroupID}" class="radio-group-item">
      <input id="test${radioGroupID}" name="${radioName}" type="radio" value="test${radioGroupID}"/>
      <span class="radio-label">${labels[i]}</span>
    </label>
    `;
  }

  if (checkedIndex >= 0) {
    this.labelGroup.children[checkedIndex].children[0].checked = true;
  }

  if (disabledIndex >= 0) {
    this.labelGroup.children[disabledIndex].children[0].disabled = true;
  }
  this.elem.appendChild(this.labelGroup);
  document.body.appendChild(this.elem);
}


const showCode2 = (target) => {
  const html = target.elem.outerHTML;
  var a = html.replace(/</gi, "&lt;");
  console.dir(a);
  const codeElem =
    this.elem = document.createElement("pre");

  codeElem.innerHTML = html.toString();
  var b = `<code>${a}</code>`
  // console.dir(b);
  document.body.appendChild(codeElem);
  codeElem.innerHTML = b;
}


const radioGroupItem = {
  groupTitle: "라디오 그룹 이름",
  labels: ["하나", "둘", "셋"],
}
const radioGroupItem2 = {
  labels: ["사용할 수 없는 라디오 버튼", "선택된 라디오 버튼", "라디오 버튼"],
  checkedIndex: 1,
  disabledIndex: 0
}

var ra1 = new RadioGroup(radioGroupItem);
showCode2(ra1);

var ra2 = new RadioGroup(radioGroupItem2);
showCode2(ra2);