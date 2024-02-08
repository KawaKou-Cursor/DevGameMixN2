const ball = document.getElementById('ball');
const paddle = document.getElementById('paddle');

let ballX = 200;
let ballY = 200;
let ballSpeedX = 2;
let ballSpeedY = 2;

function update() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX >= 380 || ballX <= 0) {
        ballSpeedX *= -1;
    }

    if (ballY <= 0) {
        ballSpeedY *= -1;
    }

    if (ballY >= 280) {
        alert('Game Over');
        clearInterval(gameLoop);
    }

    if (ballY + 20 >= 280 && ballX >= paddle.offsetLeft && ballX <= paddle.offsetLeft + 80) {
        ballSpeedY *= -1;
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && paddle.offsetLeft > 0) {
        paddle.style.left = paddle.offsetLeft - 10 + 'px';
    } else if (event.key === 'ArrowRight' && paddle.offsetLeft < 320) {
        paddle.style.left = paddle.offsetLeft + 10 + 'px';
    }
});

const gameLoop = setInterval(update, 1000 / 60);
