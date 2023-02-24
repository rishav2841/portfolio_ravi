// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}


//circle js code
const block = document.querySelectorAll('.block');
window.addEventListener('load', function(){
  block.forEach(item => {
    let numElement = item.querySelector('.num');
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector('.circle');
    setInterval(() => {
      if(count == num){
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count;
      }
    }, time)
    circle.style.strokeDashoffset 
      = 503 - ( 503 * ( num / 100 ));
    let dots = item.querySelector('.dots');
    dots.style.transform = 
      `rotate(${360 * (num / 100)}deg)`;
    if(num == 100){
      dots.style.opacity = 0;
    }
  })
});