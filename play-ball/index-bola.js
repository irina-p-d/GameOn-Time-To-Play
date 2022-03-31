const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let ballRadius = 20;
let posX = canvas.width/2;
let speedX = 10;
let posY = 20;
let speedY = 17;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width-paddleWidth)/2; //definimos el punto en X donde se dibuja la raqueta
let rightPressed = false;
let leftPressed = false;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    if (posY + speedY > canvas.height) {
        speedY = -17;
    }else if (posX + speedX >canvas.width) {
        speedX = -10;
    }else if (posX + speedX <0) {
        speedX = 10;
    }else if (posY + speedY <0) {
        speedY = 17;
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
    drawPaddle();
    
    if(posX + speedX > canvas.width-ballRadius || posX + speedX < ballRadius) {
        speedX = -speedX;
    }
    if(posY + speedY < ballRadius) {
        speedY = -speedY;
    }
    else if(posY + speedY > canvas.height-ballRadius) {
        if(posX > paddleX && posX < paddleX + paddleWidth) {
            speedY = -speedX;
        }
        else {
            alert("GAME OVER!!!!!    Pulsa aceptar para jugar otra vez");
            document.location.reload();
            clearInterval(interval); // Needed for Chrome to end game
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 10;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 10;
    }
    
    posX += speedX;
    posY += speedY;
}
 /* function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    posX += speedX;
    posY += speedY;
    if(rightPressed && paddleX < canvas.width-paddleWidth) { //Если нажата стрелка влево, то ракетка будет двигаться на 7 пикселей влев
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;// а если нажата стрелка вправо то на 7 пикселей вправо
    }


    
 } */

 
 document.addEventListener("keydown", keyDown, false);
 document.addEventListener("keyup", keyUp, false);

function keyDown(e) {   //presionamos la tecla
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUp(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

let interval = setInterval(draw, 50);