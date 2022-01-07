const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let ballRadius = 20;
let posX = 20;
let speedX = 5;
let posY = 20;
let speedY = 7;


function drawBall() {
    if (posY + speedY > canvas.height) {
        speedY = -7;
    }else if (posX + speedX >canvas.width) {
        speedX = -5;
    }else if (posX + speedX <0) {
        speedX = 5;
    }else if (posY + speedY <0) {
        speedY = 7;
    }
    
    
    ctx.beginPath();
    ctx.arc(posX, posY, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
 function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    posX += speedX;
    posY += speedY;
 }
setInterval(draw, 1000/30);