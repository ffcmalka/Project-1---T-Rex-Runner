//storing variables
const allo = document.querySelector("allo");
const obstacle = document.querySelector("obstacle");

//funtionality for when the dino jumps
//first creating a function of what to do when clicking space bar "32"
function controls(e) {
  if (e.keyCode === 32) {
    jump()
  }
}
//adding eventlisteners - we need the 2 parameters "keyup" and jump
document.addEventListener('keyup', controls)

//second creating the actual functionality for allos jump with time intervals so the animation isnt as direct
function jump() {
let position = 0
let timerId = setInterval(function () {

  //Allo jumping down
 if(position === 150) {
  clearInterval(timerId)
    console.log("jumped down")
    let downTimerId = setInterval(function () {
      if (position === 0) {
        clearInterval(downTimerId)
      }
    position -= 30
    allo.style.bottom = position + 'px'
}, 20)
 }
// //Allo jumping up  
  console.log("jumped up")
  position += 30
  allo.style.bottom = position + 'px'
  }, 20)
 }