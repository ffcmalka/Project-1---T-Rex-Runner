//storing variables
const allo = document.querySelector(".allo");
const obstacle = document.querySelector(".obstacle");

let score = 0;
document.querySelector("#score").innerHTML = score;
//funtionality for when the dino jumps
// first creating a function of what to do when clicking space bar "32"
// second creating the actual functionality for allos jump with time intervals so the animation isnt as direct
function jump() {
   if(allo.classList != "jump"){
   allo.classList.add("jump");{
    score += 1;
    document.querySelector("#score").innerHTML = score;
   setTimeout(function() {
   allo.classList.remove("jump");
 }, 300)
}}}

 let isAlive = setInterval(() => {
     let alloTop = parseInt(
  window.getComputedStyle(allo).getPropertyValue("top") 
  )
//     console.log("check")
 let obstacleLeft= parseInt(
  window.getComputedStyle(obstacle).getPropertyValue("left")
 )});
 
document.addEventListener("keydown", function(event){
  jump();


//console.log("jump") 
// function(event) {
//   // if(event.keyCode === 32) {
//       jump();
//     })
//checking for the collision
if(obstacleLeft > 0 && obstacleLeft < 70 && alloTop >= 150) {
  allo.style.animationPlayState = "paused";
  obstacle.style.animationPlayState = "paused";
   alert("You let Allo get caught! Dinosaurs are once again extinct. Game Over.");
       window.location.reload();
 }
},10)

// document.addEventListener("keydown", (e) => {
// if (e.keyCode === 32) {
//     jump()
//   }
// })


//the score
 //  function drawScore() {
// //   score += 1;
// //   scoreDisplay.innerHTML = "Score: " + scoreSpan;
//  }