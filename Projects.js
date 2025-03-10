const content = "웹-프론트엔드 개발자 신동수 입니다.";
const text = document.querySelector(".self-box");
let i = 0;
function typingself(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
    }
}
setTimeout(function(){setInterval(typingself,100);}, 3000);

const wrap = document.getElementsByClassName('scroll')[0];
const container = document.getElementsByClassName('scrollc');
let page = 0;
const lastPage = container.length - 1;
window.addEventListener('wheel', (event) => {
  event.preventDefault();
  if(event.deltaY > 0){
    page++;
  }
  if(event.deltaY < 0){
    page--;
  }
  if(page < 0){
    page = 0;
  }
  if(page > lastPage){
    page = lastPage;
  }
  console.log(event.deltaY);
  wrap.style.top = page * -100 + 'vh';
}, {passive: false});

const slidewrap = document.querySelector(".slidewrap");
const slidescnt = document.querySelectorAll(".slide").length;
const slideContainer = document.getElementsByClassName("slides");
const slideWidth = slidewrap.offsetWidth;
let currentSlide = 0;
function goToSlide(index){
    currentSlide = index;
    slideContainer[0].style.transition = 'transform 0.5s ease';
    slideContainer[0].style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}
function AddStyle(style){
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
}
function Createbtn(){
    slidewrap.innerHTML += `<div class="leftbtn btn">Prev</div>`;
    slidewrap.innerHTML += `<div class="rightbtn btn">Next</div>`;
    const BtnStyle = `
        .btn {
            display : flex;
            position : absolute;
            bottom : calc(50% - 60px);
            width: 15%;
            height : 30%px;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 40px;
            border: 1px solid white;
            border-radius: 20px;
        }
        .leftbtn{
            left : 3rem;
        }
        .rightbtn{
            right : 3rem;
        }
    `
    AddStyle(BtnStyle);
    const BtnL = document.querySelector(".leftbtn");
    BtnL.addEventListener('click',(event)=>{
        event.preventDefault();
        const index = (currentSlide-1) >=0 ? currentSlide-1 : slidescnt-1;
        goToSlide(index);
    })
    const BtnR = document.querySelector(".rightbtn");
    BtnR.addEventListener('click',(event)=>{
        event.preventDefault();
        const index = (currentSlide+1) < slidescnt ? currentSlide+1 : 0;
        goToSlide(index);
    })    
}
Createbtn();

let images = [
  "이미지/html.png",
  "이미지/css.png",
  "이미지/js.png",
  "이미지/Figma.png",
  "이미지/github.png"
]
function imageSlider(parent, images){
  let currentIndex = 0;
  let slider = {
      parent : parent,
      images : parent.querySelector(".slider__img"),
      thumnails : parent.querySelector(".slider__thumb"),
      prevBtn : parent.querySelector(".slider__btn .prev"),
      nextBtn : parent.querySelector(".slider__btn .next")
  };
  slider.images.innerHTML = images.map((image, index) => {
      return `<img src="${image}" alt="이미지${index}">`
  }).join("");
  let imageNodes = slider.images.querySelectorAll("img");
  imageNodes[currentIndex].classList.add("active");
  slider.thumnails.innerHTML = slider.images.innerHTML
  let thumnailNodes = slider.thumnails.querySelectorAll("img");
  thumnailNodes[currentIndex].classList.add("active");
  thumnailNodes.forEach((e, i) => {
      e.addEventListener("click", () => {
          slider.thumnails.querySelector("img.active").classList.remove("active");
          thumnailNodes[i].classList.add("active");

          imageNodes[currentIndex].classList.remove("active");
          currentIndex = i;
          imageNodes[i].classList.add("active");
      });
  });
};

imageSlider(document.querySelector(".slider__wrap"), images)

$(document).ready(function($) {
  $(".scroll_move").click(function(event){
      console.log(".scroll_move");         
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  });
});