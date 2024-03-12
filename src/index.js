const cells = document.querySelectorAll(".board-item")
const openPlayerChoice = document.querySelector("#playerMovePrompt")

const p1Score = document.getElementById("#p1-score")
const p2Score = document.getElementById("#p2-score")


//---Increment the score when a player wins---//
function addScore(score){
    score++;
    score.innerHTML = score;
}
// function createGame(){

// }

// function createPlayer(){

// }


// openPlayerChoice.addEventListener("click", () => {
//     openPlayerChoice.style = "block";
// })

function openPlayerMove(){
    openPlayerChoice.showModal();
}

cells.forEach(function(cell) {
    cell.addEventListener("click", openPlayerMove);
})

// cellChosen.addEventListener("click", openPlayerMove);
