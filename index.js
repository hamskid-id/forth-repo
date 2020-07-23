const slides=document.querySelector(".sect4-d").children;
console.log(slides);
const prev = document.querySelector(".prev-arr");
const next = document.querySelector(".next-arr");
let index=0;

function moveLeft(){
	left();
}
function moveRight(){
	right();
}
function left(){
 	if(index==slides.length-1){
 		index=0;
 	}
 	else{
 		index--;
 	}
 	move();
 }

function right(){
 	if(index==slides.length-1){
 		index=0;
 	}
 	else{
 		index++;
 	}
 	move();
 }
 function move(){
 	for(let i=0; i<slides.length; i++){
 		slides[i].classList.remove("active");
 	}
 	slides[index].classList.add("active");
 }
 const auto=setInterval(moveRight,3000);