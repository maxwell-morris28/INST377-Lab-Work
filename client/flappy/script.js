/* eslint-disable no-mixed-operators */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
document.addEventListener('DOMContentLoaded', () => {
  const bird = document.querySelector('.bird');
  const gameDisplay = document.querySelector('.game-container');
  const ground = document.querySelector('.ground');

  const birdLeft = 220;
  let birdBottom = 100;
  const gravity = 2;
  let isGameOver = false;
  const gap = 400;

  function startGame() {
    birdBottom -= gravity; // gravity subtracts 2 from the birdBottom variable
    bird.style.bottom = `${birdBottom}px`; // constantly subtracts due to gravity; sets y position of bird
    bird.style.left = `${birdLeft}px`;
  }
  const gameTimerId = setInterval(startGame, 20); // interval allows startgame to run every 20 ms

  // clearInterval(timerId) //stops timerId from running

  function control(e) {
    if (e.keyCode === 32) {
      jump();
    }
    console.log(e.keyCode);
  }

  function jump() {
    if (birdBottom < 450) {
      birdBottom += 50;
      bird.style.bottom = `${birdBottom}px`;
      console.log(birdBottom);
    }
  }
  document.addEventListener('keyup', control); // Every time your finger leaves the keyboard, jump is invoked

  function generateObstacle() {
    let obstacleLeft = 500;
    const randomHeight = Math.random() * 60;
    const obstacleBottom = randomHeight;
    const obstacle = document.createElement('div');
    const topObstacle = document.createElement('div');

    if (!isGameOver) {
      obstacle.classList.add('obstacle');
      topObstacle.classList.add('topObstacle');
    }
    gameDisplay.appendChild(obstacle);
    gameDisplay.appendChild(topObstacle);
    obstacle.style.left = `${obstacleLeft}px`;
    topObstacle.style.left = `${obstacleLeft}px`;
    obstacle.style.bottom = `${obstacleBottom}px`;
    topObstacle.style.bottom = `${obstacleBottom + gap}px`;

    function moveObstacle() {
      obstacleLeft -= 2;
      obstacle.style.left = `${obstacleLeft}px`;
      topObstacle.style.left = `${obstacleLeft}px`;

      if (obstacleLeft === -50) {
        clearInterval(timerId);
        gameDisplay.removeChild(obstacle);
        gameDisplay.removeChild(topObstacle);
      }
      if (
        obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220
                && (birdBottom < obstacleBottom + 70 || birdBottom > obstacleBottom + gap - 250)
                || birdBottom === 0
      ) {
        gameOver();
        clearInterval(timerId);
      }
    }
    let timerId = setInterval(moveObstacle, 20);
    if (!isGameOver) setTimeout(generateObstacle, 3000); // Execute function after 3000ms
  }
  generateObstacle();

  function gameOver() {
    clearInterval(gameTimerId);
    isGameOver = true;
    document.removeEventListener('keyup', control);
  }
});