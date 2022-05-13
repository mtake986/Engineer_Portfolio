console.log('Is it working??')


var emailAddress = document.getElementById('emailAddress')
var emailIcons = document.getElementsByClassName('fa-paper-plane')
var calendly = document.getElementById('calendly')
var calendlyIcons = document.getElementsByClassName('fa-calendar-alt')
console.log({emailAddress, emailIcons, calendly, calendlyIcons})

//////////////////////
// change theme
//////////////////////
let themeDots = document.getElementsByClassName("theme-dot")
var whiteModeDot = document.getElementById('white-mode')
var darkModeDot = document.getElementById('dark-mode')
// let blackCover = document.getElementsByClassName('black-cover')
for (let i = 0; i < themeDots.length; i++)  {
  themeDots[i].addEventListener("click", function(){
    let mode = this.dataset.mode
    console.log("Option cliked", mode);
    setTheme(mode);
    // console.log(blackCover);
    // blackCover.classList.add("active");
  })
}
function setTheme(mode){
  if (mode == "light"){
    document.getElementById('theme-style').href = './styles/style.css'
    whiteModeDot.classList.toggle('active')
    darkModeDot.classList.toggle('active')
  }
  if (mode == "dark"){
    document.getElementById('theme-style').href = './styles/theme-dark.css'
    whiteModeDot.classList.toggle('active')
    darkModeDot.classList.toggle('active')
  }
}

//////////////////////
// side-header, onclick action
//////////////////////
var toggle = document.getElementById('toggle');
var header = document.getElementById('side-header')

// document.onclick = function(e){
//   if (e.target.id !== "side-sidebar" && e.target.id !== "toggle"){
//     toggle.classList.remove('active');
//     header.classList.remove('active');
//   }
// }
toggle.onclick = function(){
  toggle.classList.toggle('active');
  header.classList.toggle('active');
}
console.log(toggle)
//////////////////////
// ripple effect
//////////////////////
document.onclick = function applyCursorRippleEffect(e) {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`; 

  ripple.style.animation = "ripple-effect .4s  linear";
  ripple.onanimationend = () => document.body.removeChild(ripple);

  if (e.target.id !== "side-sidebar" && e.target.id !== "toggle"){
    toggle.classList.remove('active');
    header.classList.remove('active');
  }
}
//////////////////////
// ripple effect button, not implemented, reference link
//////////////////////
// https://www.youtube.com/watch?v=WOSaNbpHNqU&t=25s

// Reseume btn
const resumeBtn = document.getElementById('resume-btn');

resumeBtn.onmousemove = function(e){
  const x = e.pageX - resumeBtn.offsetLeft;
  const y = e.pageY - resumeBtn.offsetTop;

  resumeBtn.style.setProperty('--x', x + 'px');
  resumeBtn.style.setProperty('--y', y + 'px');
}


var showContent;

function loadFunction() {
  showContent = setTimeout(showPage, 1);
}
const loader = document.getElementById("loader")
const afterLoadContent = document.getElementById("after-load")
function showPage() {
  loader.style.display = "none";
  afterLoadContent.style.display = "block";
}


// classes section
let selectYears = document.getElementById("selectYears")
let years = document.querySelectorAll("option")
let allYears = document.querySelectorAll(".year")
selectYears.onchange = (e) => {
  e.preventDefault();

  // remove class "active"
  const exYear = document.querySelector(".year.active")
  exYear.classList.remove("active")

  // add class "active"
  const selectedYear = allYears[selectYears.selectedIndex]
  selectedYear.classList.add("active")
  console.log(selectedYear);
}