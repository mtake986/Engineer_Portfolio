console.log('Is it working??')

var tabs = document.querySelectorAll('.tab-wrapper');
var eachYearClass = document.querySelectorAll('.year');
// console.log(tabs, eachYearClass);

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


