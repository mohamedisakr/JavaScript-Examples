const ImageList = [
  "0276001.jpg",
  "0326801.jpg",
  "0366101.jpg",
  "03944l.jpg",
  "03945L.jpg",
  "0510801.jpg",
  "0521201.jpg",
  "0522101.jpg",
  "0611401.jpg",
  "0661701.jpg",
  "0704901.jpg",
  "0707401.jpg",
  "114103P.jpg",
  "114118p.jpg",
  "114208p.jpg",
  "115343P.jpg",
  "1368601.jpg",
  "16110p.jpg",
  "16118p.jpg",
  "16148p.jpg",
  "16151p.jpg",
  "16162p.jpg",
  "16363p.jpg",
  "16558p.jpg",
  "16744p.jpg",
  "16756p.jpg",
  "16772p.jpg",
  "16809p.jpg",
  "16862p.jpg",
  "16864p.jpg",
  "16967p.jpg",
  "16973p.jpg",
  "16974p.jpg",
  "16980p.jpg",
  "16988p.jpg",
  "214006p.jpg",
  "214041p.jpg",
  "214046p.jpg",
  "214154p.jpg",
  "214168p.jpg",
  "215017p.jpg",
  "215302p.jpg",
  "215402p.jpg",
  "21825b.jpg",
  "22849b.jpg",
  "26013.jpg",
  "28734.jpg",
  "35732.jpg",
  "38196.jpg",
  "38199.jpg",
  "38202.jpg",
  "42014.jpg",
  "42080.jpg",
  "42139.jpg",
  "45093.jpg",
  "68841b.jpg",
  "7004801.jpg",
  "7008501.jpg",
  "81947pl.jpg",
  "83947.jpg",
  "83951.jpg",
  "a1180401.jpg",
  "a308_thumb.jpg",
  "t0276001.jpg",
  "t0326801.jpg",
  "t0366101.jpg",
  "t03944l.jpg",
  "t03945L.jpg",
  "t0510801.jpg",
  "t0521201.jpg",
  "t0522101.jpg",
  "t0611401.jpg",
  "t0661701.jpg",
  "t0704901.jpg",
  "t0707401.jpg",
  "t114103p.jpg",
  "t114118p.jpg",
  "t114208p.jpg",
  "t115343p.jpg",
  "t1368601.jpg",
  "t16110p.jpg",
  "t16118p.jpg",
  "t16148p.jpg",
  "t16151p.jpg",
  "t16162p.jpg",
  "t16363p.jpg",
  "t16558p.jpg",
  "t16744p.jpg",
  "t16756p.jpg",
  "t16772p.jpg",
  "t16809p.jpg",
  "t16862p.jpg",
  "t16864p.jpg",
  "t16967p.jpg",
  "t16973p.jpg",
  "t16974p.jpg",
  "t16980p.jpg",
  "t16988p.jpg",
  "t214006p.jpg",
  "t214041p.jpg",
  "t214046p.jpg",
  "t214154p.jpg",
  "t214168p.jpg",
  "t215017p.jpg",
  "t215302p.jpg",
  "t215402p.jpg",
  "t21825b.jpg",
  "t22849b.jpg",
  "t26013.jpg",
  "t28734.jpg",
  "t35732.jpg",
  "t38196.jpg",
  "t38199.jpg",
  "t38202.jpg",
  "t42014.jpg",
  "t42080.jpg",
  "t42139.jpg",
  "t45093.jpg",
  "t68841b.jpg",
  "t7004801.jpg",
  "t7008501.jpg",
  "t81947pl.jpg",
  "t83947.jpg",
  "t83951.jpg",
  "ta1180401.jpg"
];

const promoImage = document.querySelector("#promoImage");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const screen = document.querySelector("#screen");
const folder = "./images/";

let first = 0;
let last = ImageList.length - 1;
let current = 0;

screen.innerHTML = `current = ${current}`;

// set image to the first image in the list
promoImage.setAttribute("src", folder + ImageList[current++]);

// ============= Previous and Next buttons handlers ====================

function handlePrevious() {
  if (current <= first) return;
  promoImage.setAttribute("src", folder + ImageList[--current]);
  screen.innerHTML = `current = ${current}`;
}

function handleNext() {
  if (current >= last) return;
  promoImage.setAttribute("src", folder + ImageList[++current]);
  screen.innerHTML = `current = ${current}`;
}

// ==================================================

// ============= Attach Event to handlers ====================

prevButton.addEventListener("click", handlePrevious);
nextButton.addEventListener("click", handleNext);

// ==================================================

// ===================== slide show ===================================
let i = 0;
function showSlide() {
  promoImage.setAttribute("src", folder + ImageList[i++]);
  if (i >= ImageList.length) {
    i = 0;
  }
}

// stop to use previous and next buttons
// setInterval(showSlide, 4000);
// ==================================================
