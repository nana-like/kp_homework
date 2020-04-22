const createExamplePage = () => {
  // 예제 영역
  const exampleArea = document.querySelector(".example-form");

  // 예제 아이템 생성 (아이디 인풋)
  const exampleInputID = () => {
    const elem = document.createElement("div");
    const input = new TextInput({
      label: "아이디",
      placeholder: "사용할 아이디를 입력해 주세요"
    });

    elem.classList.add("kp-line");
    elem.classList.add("kp-m-bottom");
    input.classList.add("full-size");

    elem.appendChild(input);
    return elem;
  }

  // 예제 아이템 생성 (비밀번호 인풋)
  const exampleInputPW = () => {
    const elem = document.createElement("div");
    const input = new TextInput({
      label: "비밀번호",
      type: "password",
      placeholder: "사용할 비밀번호를 입력해 주세요",
      value: "hello_world",
      attribute: "autocomplete"
    });

    elem.classList.add("kp-line");
    elem.classList.add("kp-m-bottom");
    input.classList.add("full-size");

    elem.appendChild(input);
    return elem;
  }

  // 예제 아이템 생성 (성별 셀렉트)
  const exampleRadioGender = () => {
    const elem = document.createElement("div");
    const radio = new RadioGroup({
      groupTitle: "성별",
      labels: ["남자", "여자"],
    });

    elem.classList.add("kp-line");
    elem.classList.add("kp-m-bottom");
    radio.classList.add("full-size");

    elem.appendChild(radio);
    return elem;
  }

  // 예제 아이템 생성 (생년월일 셀렉트)
  const exampleSelectBirthday = () => {
    const elem = document.createElement("div");
    const line = document.createElement("div");

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

    elem.classList.add("kp-group");
    elem.classList.add("kp-m-bottom");
    elem.innerHTML += `<div class="kp-group-title">생년월일</div>`;
    line.classList.add("kp-line");
    selectYear.classList.add("full-size");
    selectMonth.classList.add("full-size");
    selectDay.classList.add("full-size");

    line.appendChild(selectYear);
    line.appendChild(selectMonth);
    line.appendChild(selectDay);
    elem.appendChild(line);
    return elem;
  }

  // 예제 아이템 생성 (휴대폰 앞자리 셀렉트)
  const exampleSelectPhone = () => {
    const elem = document.createElement("div");
    const line = document.createElement("div");
    const selectPhone = new Selectbox({
      labels: ["010", "011", "012"]
    });
    const inputPhone = new TextInput({
      placeholder: "전화번호를 입력해 주세요",
      value: "1234-567890",
      hasError: "7~8자리의 숫자를 입력해 주세요"
    });
    const btn = new Button({
      text: "인증"
    })

    line.classList.add("kp-line");
    inputPhone.classList.add("full-size");
    elem.classList.add("kp-group");
    elem.classList.add("kp-m-bottom");
    elem.innerHTML += `<div class="kp-group-title">전화번호</div>`;

    line.appendChild(selectPhone);
    line.appendChild(inputPhone);
    line.appendChild(btn);
    elem.appendChild(line);
    return elem;
  }

  // 예제 아이템 생성 (약관 동의)
  const exampleAgree = () => {
    const elem = document.createElement("div");
    const p = document.createElement("p");
    const agreeSwitch = new Switch({
      ariaLabel: "동의 여부 체크"
    });

    elem.classList.add("kp-line");
    elem.classList.add("align-center");
    elem.classList.add("space-end");
    elem.classList.add("kp-m-bottom-lg");
    p.innerHTML = "모든 약관 내용에 동의합니다";

    elem.appendChild(p);
    elem.appendChild(agreeSwitch);
    return elem;
  }

  // 예제 아이템 생성 (가입하기 버튼)
  const exampleButton = () => {
    const elem = document.createElement("div");
    const btnJoin = new Button({
      btnType: "primary",
      text: "가입하기"
    });

    elem.classList.add("kp-line");
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

}

createExamplePage();