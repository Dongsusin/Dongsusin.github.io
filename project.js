/*텍스트 스크롤*/
const articles = document.querySelectorAll(".article");
const articleObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.3 });
articles.forEach(article => {
  articleObserver.observe(article);
});
/*텍스트 스크롤 딜레이*/
const delays = document.querySelectorAll('.delay');
delays.forEach((delay) => {
  const delayTime = delay.getAttribute("data-delay");
  delay.style.animationDelay = `${delayTime}s`
})
/*main 타이핑*/
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
setTimeout(function(){setInterval(typingself,100);}, 4500);
/*skill 스크랩*/
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
    slidewrap.innerHTML += `<button class="leftbtn btn">이전</button>`;
    slidewrap.innerHTML += `<button class="rightbtn btn">다음</button>`;
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
            font-size: 3rem;
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
/*project 이미지 선택*/
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