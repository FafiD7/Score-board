let score1 = 12
let score2 = 5

document.getElementById("score1-el").textContent = score1
document.getElementById("score2-el") .textContent= score2
let score1El = document.getElementById("score1-el")
let score2El = document.getElementById("score2-el")

function incrementByOne1() {
   let newScore = score1 + 1
      newScore = newScore + 1
      newScore++
   score1El.textContent = newScore
      
}

function incrementByTwo2() {
   let newScore = score1 + 2
   score1El.textContent = newScore
}
function incrementByThree3() {
   let newScore = score1 + 3
   score1El.textContent = newScore
}

function incrementByOne() {
   let newScore = score2 + 1
   score2El.textContent = newScore
}
function incrementByTwo() {
   let newScore = score2 + 2
   score2El.textContent = newScore
}

function incrementByThree() {
   let newScore = score2 + 3
   score2El.textContent = newScore
}