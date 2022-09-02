let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")


let hPoints = 0
function upH(point){
    hPoints += point
    homePoints.textContent = hPoints
}

let gPoints = 0
function upG(point){
    gPoints += point
    guestPoints.textContent = gPoints
}

function reset(){
  hPoints = 0;
  gPoints = 0;
  homePoints.textContent = 0
  guestPoints.textContent = 0
}