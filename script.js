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

var classImgs = document.querySelectorAll('.works-img')
var madeOf = document.querySelectorAll('.made-of')
console.log(classImgs, madeOf)
for (let i = 0; i < classImgs.length; i++)  {
  classImgs[i].addEventListener('toggle', function(){
    for (var i = 0; i < madeOf.length; i++)  {
      eachYearClass[i].className = 'year'
    }
    document.getElementById(this.dataset.id).className = 'year active';
    for (var i = 0; i < tabs.length; i++)  {
      tabs[i].className = 'tab-wrapper'
    }
    this.className = 'tab-wrapper active';
  })
};






