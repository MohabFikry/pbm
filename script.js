const approvedOne = document.querySelector(".main1 .footer .v--1");
const approvedTwo = document.querySelector(".main2 .footer .v--1");
const approvedThree = document.querySelector(".main3 .footer .v--1");

const payerOne = document.querySelector(".main1 .footer .v--2");
const payerTwo = document.querySelector(".main2 .footer .v--2");
const payerThree = document.querySelector(".main3 .footer .v--2");

const ptOne = document.querySelector(".main1 .footer .v--3");
const ptTwo = document.querySelector(".main2 .footer .v--3");
const ptThree = document.querySelector(".main3 .footer .v--3");

const priceOne = document.querySelector(".main1 .footer .vp");
const priceTwo = document.querySelector(".main2 .footer .vp");
const priceThree = document.querySelector(".main3 .footer .vp");

const coOne = document.querySelector(".main1 .footer .vc");
const coTwo = document.querySelector(".main2 .footer .vc");
const coThree = document.querySelector(".main3 .footer .vc");

const qtyOne = document.querySelector(".main1 .approved .a--2");
const qtyTwo = document.querySelector(".main2 .approved .a--2");
const qtyThree = document.querySelector(".main3 .approved .a--2");

const claimedOne = document.querySelector(".main1 .claimed .c--1");
const claimedTwo = document.querySelector(".main2 .claimed .c--1");
const claimedThree = document.querySelector(".main3 .claimed .c--1");

const durationOne = document.querySelector(".main1 .claimed .c--3");
const durationTwo = document.querySelector(".main2 .claimed .c--3");
const durationThree = document.querySelector(".main3 .claimed .c--3");

const approvedInputOne = document.querySelector(".main1 .approved .a--1");
const approvedInputTwo = document.querySelector(".main2 .approved .a--1");
const approvedInputThree = document.querySelector(".main3 .approved .a--1");

const durationInputOne = document.querySelector(".main1 .approved .a--3");
const durationInputTwo = document.querySelector(".main2 .approved .a--3");
const durationInputThree = document.querySelector(".main3 .approved .a--3");

const tabOne = document.querySelector(".main1 .header .tab");
const tabTwo = document.querySelector(".main2 .header .tab");
const tabThree = document.querySelector(".main3 .header .tab");

const radioAppOne = document.querySelector(".main1 .decesion #a");
const radioAppTwo = document.querySelector(".main2 .decesion #a");
const radioAppThree = document.querySelector(".main3 .decesion #a");

const radioRejOne = document.querySelector(".main1 .decesion #r");
const radioRejTwo = document.querySelector(".main2 .decesion #r");
const radioRejThree = document.querySelector(".main3 .decesion #r");

const btnAppAll = document.querySelector(".approve-all");
const btnRejAll = document.querySelector(".reject-all");

const rejectOneCol = function () {
  approvedInputOne.value = "";
  durationInputOne.value = "";
  qtyOne.value = 1;
  approvedOne.textContent = 0;
  ptOne.textContent = 0;
  payerOne.textContent = 0;
  document.querySelector(".main1 .head").classList.remove("header");
  document.querySelector(".main1 .head").classList.add("rejected");
  document.querySelector(".main1 .contain").classList.remove("container");
  document.querySelector(".main1 .contain").classList.add("container-rejected");
  document.querySelector(".main1 .claimed .gt").classList.remove("g");
  document.querySelector(".main1 .claimed .gt").classList.add("g-rejected");
  document.querySelector(".main1 .approved .gt").classList.remove("g");
  document.querySelector(".main1 .approved .gt").classList.add("g-rejected");
  document.querySelector(".main1 .app").classList.remove("approved");
  document.querySelector(".main1 .app").classList.add("hidden");
  document.querySelector(".main1 .cla").classList.remove("claimed");
  document.querySelector(".main1 .cla").classList.add("move");
  document.querySelector(".main1 .sl").classList.remove("select-list");
  document.querySelector(".main1 .sl").classList.add("show");
  radioRejOne.checked = true;
};
const rejectTwoCol = function () {
  approvedInputTwo.value = "";
  durationInputTwo.value = "";
  qtyTwo.value = 1;
  approvedTwo.textContent = 0;
  ptTwo.textContent = 0;
  payerTwo.textContent = 0;
  document.querySelector(".main2 .head").classList.remove("header");
  document.querySelector(".main2 .head").classList.add("rejected");
  document.querySelector(".main2 .contain").classList.remove("container");
  document.querySelector(".main2 .contain").classList.add("container-rejected");
  document.querySelector(".main2 .claimed .gt").classList.remove("g");
  document.querySelector(".main2 .claimed .gt").classList.add("g-rejected");
  document.querySelector(".main2 .approved .gt").classList.remove("g");
  document.querySelector(".main2 .approved .gt").classList.add("g-rejected");
  document.querySelector(".main2 .app").classList.remove("approved");
  document.querySelector(".main2 .app").classList.add("hidden");
  document.querySelector(".main2 .cla").classList.remove("claimed");
  document.querySelector(".main2 .cla").classList.add("move");
  document.querySelector(".main2 .sl").classList.remove("select-list");
  document.querySelector(".main2 .sl").classList.add("show");
  radioRejTwo.checked = true;
};
const rejectThreeCol = function () {
  approvedInputThree.value = "";
  durationInputThree.value = "";
  qtyThree.value = 1;
  approvedThree.textContent = 0;
  ptThree.textContent = 0;
  payerThree.textContent = 0;
  document.querySelector(".main3 .head").classList.remove("header");
  document.querySelector(".main3 .head").classList.add("rejected");
  document.querySelector(".main3 .contain").classList.remove("container");
  document.querySelector(".main3 .contain").classList.add("container-rejected");
  document.querySelector(".main3 .claimed .gt").classList.remove("g");
  document.querySelector(".main3 .claimed .gt").classList.add("g-rejected");
  document.querySelector(".main3 .approved .gt").classList.remove("g");
  document.querySelector(".main3 .approved .gt").classList.add("g-rejected");
  document.querySelector(".main3 .app").classList.remove("approved");
  document.querySelector(".main3 .app").classList.add("hidden");
  document.querySelector(".main3 .cla").classList.remove("claimed");
  document.querySelector(".main3 .cla").classList.add("move");
  document.querySelector(".main3 .sl").classList.remove("select-list");
  document.querySelector(".main3 .sl").classList.add("show");
  radioRejThree.checked = true;
};

const approveOneCol = function () {
  approvedInputOne.value = claimedOne.value;
  durationInputOne.value = durationOne.value;
  qtyOne.value = approvedInputOne.value / tabOne.textContent;
  priceOne.textContent = qtyOne.value * priceOne.textContent;
  approvedOne.textContent =
    priceOne.textContent * (1 - coOne.textContent / 100);
  ptOne.textContent = priceOne.textContent * (coOne.textContent / 100);
  payerOne.textContent =
    Math.round((approvedOne.textContent - ptOne.textContent) * 100) / 100;

  document.querySelector(".main1 .head").classList.remove("rejected");
  document.querySelector(".main1 .head").classList.add("header");
  document
    .querySelector(".main1 .contain")
    .classList.remove("container-rejected");
  document.querySelector(".main1 .contain").classList.add("container");
  document.querySelector(".main1 .cla .gt").classList.remove("g-rejected");
  document.querySelector(".main1 .cla .gt").classList.add("g");
  document.querySelector(".main1 .sl").classList.remove("show");
  document.querySelector(".main1 .sl").classList.add("select-list");
  document.querySelector(".main1 .app").classList.remove("hidden");
  document.querySelector(".main1 .app").classList.add("approved");
  document.querySelector(".main1 .app .gt").classList.remove("g-rejected");
  document.querySelector(".main1 .app .gt").classList.add("g");
  document.querySelector(".main1 .cla").classList.remove("move");
  document.querySelector(".main1 .cla").classList.add("claimed");
  radioAppOne.checked = true;
};

const approveTwoCol = function () {
  approvedInputTwo.value = claimedTwo.value;
  durationInputTwo.value = durationTwo.value;
  qtyTwo.value = approvedInputTwo.value / tabTwo.textContent;
  priceTwo.textContent = qtyTwo.value * priceTwo.textContent;
  approvedTwo.textContent =
    priceTwo.textContent * (1 - coTwo.textContent / 100);
  ptTwo.textContent = priceTwo.textContent * (coTwo.textContent / 100);
  payerTwo.textContent =
    Math.round((approvedTwo.textContent - ptTwo.textContent) * 100) / 100;
  document.querySelector(".main2 .head").classList.remove("rejected");
  document.querySelector(".main2 .head").classList.add("header");
  document
    .querySelector(".main2 .contain")
    .classList.remove("container-rejected");
  document.querySelector(".main2 .contain").classList.add("container");
  document.querySelector(".main2 .cla .gt").classList.remove("g-rejected");
  document.querySelector(".main2 .cla .gt").classList.add("g");
  document.querySelector(".main2 .sl").classList.remove("show");
  document.querySelector(".main2 .sl").classList.add("select-list");
  document.querySelector(".main2 .app").classList.remove("hidden");
  document.querySelector(".main2 .app").classList.add("approved");
  document.querySelector(".main2 .app .gt").classList.remove("g-rejected");
  document.querySelector(".main2 .app .gt").classList.add("g");
  document.querySelector(".main2 .cla").classList.remove("move");
  document.querySelector(".main2 .cla").classList.add("claimed");
  radioAppTwo.checked = true;
};

const approveThreeCol = function () {
  approvedInputThree.value = claimedThree.value;
  durationInputThree.value = durationThree.value;
  qtyThree.value = approvedInputThree.value / tabThree.textContent;
  priceThree.textContent = qtyThree.value * priceThree.textContent;
  approvedThree.textContent =
    priceThree.textContent * (1 - coThree.textContent / 100);
  ptThree.textContent = priceThree.textContent * (coThree.textContent / 100);
  payerThree.textContent =
    Math.round((approvedThree.textContent - ptThree.textContent) * 100) / 100;
  document.querySelector(".main3 .head").classList.remove("rejected");
  document.querySelector(".main3 .head").classList.add("header");
  document
    .querySelector(".main3 .contain")
    .classList.remove("container-rejected");
  document.querySelector(".main3 .contain").classList.add("container");
  document.querySelector(".main3 .cla .gt").classList.remove("g-rejected");
  document.querySelector(".main3 .cla .gt").classList.add("g");
  document.querySelector(".main3 .sl").classList.remove("show");
  document.querySelector(".main3 .sl").classList.add("select-list");
  document.querySelector(".main3 .app").classList.remove("hidden");
  document.querySelector(".main3 .app").classList.add("approved");
  document.querySelector(".main3 .app .gt").classList.remove("g-rejected");
  document.querySelector(".main3 .app .gt").classList.add("g");
  document.querySelector(".main3 .cla").classList.remove("move");
  document.querySelector(".main3 .cla").classList.add("claimed");
  radioAppThree.checked = true;
};
approveOneCol();
approveTwoCol();
approveThreeCol();

radioRejOne.addEventListener("click", rejectOneCol);
radioRejTwo.addEventListener("click", rejectTwoCol);
radioRejThree.addEventListener("click", rejectThreeCol);

radioAppOne.addEventListener("click", approveOneCol);
radioAppTwo.addEventListener("click", approveTwoCol);
radioAppThree.addEventListener("click", approveThreeCol);

const appAll = function () {
  approveOneCol();
  approveTwoCol();
  approveThreeCol();
};

// select select
const selectOne = document.querySelector(".main1 select");
const selectTwo = document.querySelector(".main2 select");
const selectThree = document.querySelector(".main3 select");
const msg = document.querySelector(".msg");
const msgSelect = document.querySelector(".msg select");

const lay = document.querySelector(".lay");
const x = document.querySelector(".msg-line span");
const cancel = document.querySelector(".btns .cancel");
const save = document.querySelector(".btns .save");

const showRejAll = function () {
  msg.classList.remove("hidden");
  msg.classList.add("msg-reject-all");
  lay.classList.remove("hidden");
  lay.classList.add("layout");
};

const hideRejAll = function () {
  msg.classList.remove("msg-reject-all");
  msg.classList.add("hidden");
  lay.classList.remove("layout");
  lay.classList.add("hidden");
};

const rejAll = function () {
  rejectOneCol();
  selectOne.value = msgSelect.value;
  rejectTwoCol();
  selectTwo.value = msgSelect.value;
  rejectThreeCol();
  selectThree.value = msgSelect.value;
  hideRejAll();
};

btnAppAll.addEventListener("click", appAll);
btnRejAll.addEventListener("click", showRejAll);
x.addEventListener("click", hideRejAll);
lay.addEventListener("click", hideRejAll);
cancel.addEventListener("click", hideRejAll);
save.addEventListener("click", rejAll);
