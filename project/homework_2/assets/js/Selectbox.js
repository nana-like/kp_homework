var testbox1 = document.querySelector(".testbox");

var boxes = document.querySelectorAll(".kp-selectbox");

function testclick(box) {

  var testbox = box.children[0] || testbox1;
  var txt = testbox.options[testbox.selectedIndex].text;

  // testbox.nextElementSibling.innerText = txt;
  testbox.nextElementSibling.dataset.text = txt;

  console.dir(txt);
}


boxes.forEach((item) => {
  item.addEventListener("change", function () {
    testclick(item);
    console.log("!");
  });
})

window.addEventListener("load", function () {
  for (let i = 0; i < boxes.length; i++) {
    testclick(boxes[i]);
  }
});
// window.addEventListener("load", testclick);
// testbox.addEventListener("change", testclick);