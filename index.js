// Your code here

let dodger = document.getElementById("dodger"); 
dodger.style.backgroundColor = "#660066"; // making it purple because purple is awesome

console.log(dodger.style.left);  
console.log(dodger.style.bottom); 


document.addEventListener("keydown", function(e) {
    console.log(e.key);
}); 


document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
}); 

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
} 
function moveDodgerRight() {
    let lefttNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(lefttNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
}