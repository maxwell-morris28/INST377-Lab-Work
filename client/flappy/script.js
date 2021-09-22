document.addEventListener('DOMContentLoaded', () =>{
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let birdLeft = 220
    let birdBottom = 100
    let gravity = 2

    function startGame() {
        birdBottom -= gravity //gravity subtracts 2 from the birdBottom variable
        bird.style.bottom = birdBottom + 'px' //constantly subtracts due to gravity; sets y position of bird
        bird.style.left = birdLeft + 'px'
    }
    let timerId = setInterval(startGame, 20) //interval allows startgame to run every 20 ms

    //clearInterval(timerId) //stops timerId from running

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
        console.log(e.keyCode)
        
    }

    function jump() {
        if (birdBottom < 450) {
        birdBottom += 50
        bird.style.bottom = birdBottom + 'px' 
        console.log(birdBottom)
        }
    }
    document.addEventListener('keyup', control) //Every time your finger leaves the keyboard, jump is invoked
})