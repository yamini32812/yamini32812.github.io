const carousalImage = document.querySelector(".carousalImage");
const imageArray = ["img/pen.jpeg","img/code.jpg","img/code2.jpeg","img/writing.jpg"]
let index = 1;

function nextSlide(){
  if(index < imageArray.length){
  index++;
   carousalImage.setAttribute('src',imageArray[index-1]);
 }
}

function prevSlide(){
  if(index < imageArray.length+1 && index > 1){
   index--;
   carousalImage.setAttribute('src',imageArray[index-1]);
 }
}
