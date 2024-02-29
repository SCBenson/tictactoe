const cells = document.querySelectorAll(".board-item")
const openPlayerChoice = document.querySelector("#playerMovePrompt")


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
