const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let curr = 0;
let next = 1;
let prev = slides.length - 1;
console.log(prev, curr, next)

button[0].addEventListener('click', () =>{
  goPrev();
})

button[1].addEventListener('click', () =>{
  goNext();
})

function goNext() {

  prev === slides.length - 1 ? prev = 0 : prev = prev + 1 ;
  curr === slides.length - 1 ? curr = 0 : curr = curr + 1 ;
  next === slides.length - 1 ? next = 0 : next = next + 1 ;

  render();

  console.log(prev, curr, next)
}


function goPrev() {
  prev !== 0 ? prev -= 1 : prev = slides.length - 1;
  curr !== 0 ? curr -= 1 : curr = slides.length - 1;
  next !== 0 ? next -= 1 : next = slides.length - 1;

  render();
}

function render(){

  slides.forEach(slide => {
    slide.classList = 'item';
  })


  slides[prev].classList.add('prev');
  slides[curr].classList.add('active');
  slides[next].classList.add('next');


  
  
}