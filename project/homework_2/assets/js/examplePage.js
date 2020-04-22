// 예제 영역
const exampleArea = document.querySelector(".example-form");

// 예제 아이템 생성
const exampleInputID = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");
  elem.classList.add("kp-m-bottom");

  const input = new TextInput({
    label: "아이디",
    placeholder: "사용할 아이디를 입력해 주세요"
  });
  input.classList.add("full-size");
  elem.appendChild(input);

  return elem;
}
const exampleInputPW = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");
  elem.classList.add("kp-m-bottom");

  const input = new TextInput({
    label: "비밀번호",
    type: "password",
    placeholder: "사용할 비밀번호를 입력해 주세요",
    value: "hello_world",
    attribute: "autocomplete"
  });
  input.classList.add("full-size");
  elem.appendChild(input);

  return elem;
}

const exampleRadioGender = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");
  elem.classList.add("kp-m-bottom");

  const radio = new RadioGroup({
    groupTitle: "성별",
    labels: ["남자", "여자"],
  });
  radio.classList.add("full-size");
  elem.appendChild(radio);

  return elem;

}

const exampleSelectBirthday = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-group");
  elem.classList.add("kp-m-bottom");
  elem.innerHTML += `<div class="kp-group-title">생년월일</div>`;

  const line = document.createElement("div");
  line.classList.add("kp-line");


  let labelYears = ["년"];
  let labelMonths = ["월"];
  let labelDays = ["일"];

  for (let i = 2020; i >= 1980; i--) {
    labelYears.push(`${i}년`);
  }
  for (let i = 1; i <= 12; i++) {
    labelMonths.push(`${i}월`);
  }
  for (let i = 1; i <= 31; i++) {
    labelDays.push(`${i}일`);
  }

  const selectYear = new Selectbox({
    labels: labelYears
  });
  const selectMonth = new Selectbox({
    labels: labelMonths
  });
  const selectDay = new Selectbox({
    labels: labelDays
  });

  selectYear.classList.add("full-size");
  selectMonth.classList.add("full-size");
  selectDay.classList.add("full-size");
  line.appendChild(selectYear);
  line.appendChild(selectMonth);
  line.appendChild(selectDay);
  elem.appendChild(line);

  return elem;

}

const exampleSelectPhone = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-group");
  elem.classList.add("kp-m-bottom");
  elem.innerHTML += `<div class="kp-group-title">전화번호</div>`;

  const line = document.createElement("div");
  line.classList.add("kp-line");

  const selectPhone = new Selectbox({
    labels: ["010", "011", "012"]
  });

  const inputPhone = new TextInput({
    placeholder: "전화번호를 입력해 주세요",
    value: "1234-567890",
    hasError: "7~8자리의 숫자를 입력해 주세요"
  });
  inputPhone.classList.add("full-size");

  const btn = new Button({
    text: "인증"
  })

  line.appendChild(selectPhone);
  line.appendChild(inputPhone);
  line.appendChild(btn);
  elem.appendChild(line);

  return elem;

}

const exampleAgree = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");
  elem.classList.add("align-center");
  elem.classList.add("space-end");
  elem.classList.add("kp-m-bottom-lg");

  const p = document.createElement("p");
  p.innerHTML = "모든 약관 내용에 동의합니다";

  const agreeSwitch = new Switch({
    ariaLabel: "동의 여부 체크"
  });


  elem.appendChild(p);
  elem.appendChild(agreeSwitch);

  return elem;

}

const exampleButton = () => {
  const elem = document.createElement("div");
  elem.classList.add("kp-line");

  const btnJoin = new Button({
    btnType: "primary",
    text: "가입하기"
  });

  btnJoin.classList.add("full-size");

  elem.appendChild(btnJoin);

  return elem;

}



exampleArea.appendChild(exampleInputID());
exampleArea.appendChild(exampleInputPW());
exampleArea.appendChild(exampleRadioGender());
exampleArea.appendChild(exampleSelectBirthday());
exampleArea.appendChild(exampleSelectPhone());
exampleArea.appendChild(exampleAgree());
exampleArea.appendChild(exampleButton());