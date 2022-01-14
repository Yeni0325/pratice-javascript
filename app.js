
/*자바스크립트 챌린지 1번 문제.*/ 
/*
const h2 = document.querySelector("h2");

const superEventHandler = {
  handleMouseEnter: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = "#1abc9c";
  },
  handleMouseLeave: function () {
    h2.innerHTML = "The mouse is gone!";
    h2.style.color = "#3498db";
  },
  handleWindowResize: function () {
    h2.innerText = "You just resized!";
    h2.style.color = "#9b59b6";
  },
  handleMouseRightClick: function () {
    h2.innerText = "That was a right click!";
    h2.style.color = "#e74c3c";
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h2.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleMouseRightClick);
*/

/*자바스크립트 챌린지 1번 문제*/
const body = document.body;

function windowResize(){
  let width = window.innerWidth;

  if(width > 1000){
    body.style.backgroundColor = "yellow";
  } else if (width <= 1000 && width > 700){
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "blue";
  }
};

window.addEventListener("resize", windowResize);