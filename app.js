//search for everything with a class of square in the html and assign squares
const squares = document.querySelectorAll('.square')

const mole = document.querySelector('.mole')
//search for id
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')


let result = 0
let hitPosition
let currentTime = 60
let timerId = null


function randomSquare() {
  //grabbing all squares
  squares.forEach(square => {
    //removing the class of mole from each square that might have it.
    //in html, the square might have more than one class
    // such as class "square mole" two classes, each separate by a space
    square.classList.remove('mole')
  })
  //passing a random number from 0 to 8
  //for example randomSquare will be squares[2], and then you are adding the class of mole to it
  //and the square will turn into "square mole"
  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  //by assiging the id of the random generate, you can use
  //and then making it a global var
  hitPosition = randomSquare.id
}

//now you are grabbing each square, outside of any function
squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    //for example if 1 eauqls 1 once mousedown then
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

//function to generate a random square which in turn will generate a mole
function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

//display the time left
function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

