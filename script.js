console.log('Is it working??')

var tabs = document.querySelectorAll('.tab-wrapper');
var eachYearClass = document.querySelectorAll('.year');

for (var i = 0; i < tabs.length; i++)  {
  tabs[i].addEventListener('click', function(){
    for (var i = 0; i < eachYearClass.length; i++)  {
      eachYearClass[i].className = 'year'
    }
    document.getElementById(this.dataset.id).className = 'year active';
    for (var i = 0; i < tabs.length; i++)  {
      tabs[i].className = 'tab-wrapper'
    }
    this.className = 'tab-wrapper active';
  })
};

var mobileTabs = document.querySelectorAll('.mobile-tab-wrapper');
var mobileEachYearClass = document.querySelectorAll('.mobile-class-year');

for (var i = 0; i < mobileTabs.length; i++)  {
  mobileTabs[i].addEventListener('click', function(){
    for (var i = 0; i < mobileEachYearClass.length; i++)  {
      mobileEachYearClass[i].className = 'mobile-class-year'
    }
    document.getElementById(this.dataset.id).className = 'mobile-class-year active';
    for (var i = 0; i < mobileTabs.length; i++)  {
      mobileTabs[i].className = 'mobile-tab-wrapper'
    }
    this.className = 'mobile-tab-wrapper active';
  })
};


var emailAddress = document.getElementById('emailAddress')
var emailIcons = document.getElementsByClassName('fa-paper-plane')
var calendly = document.getElementById('calendly')
var calendlyIcons = document.getElementsByClassName('fa-calendar-alt')
console.log({emailAddress, emailIcons, calendly, calendlyIcons})

// emailAddress.addEventListener('mouseover', function(){
//   for (let i = 0; i < emailIcons.length; i++)  {
//     if (emailIcons[i].classList.contains('active')){
//       emailIcons[i].className = 'fa-paper-plane'
//       emailIcons[i+1].className = 'fa-paper-plane active'
//       console.log(emailIcons)
//     }
//   }
// })

// var sideHeader = document.getElementById('side-header')

// sideHeader.addEventListener('mouseover', function(){
//   sideHeader.classList.toggle('mouseover');
// })

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

