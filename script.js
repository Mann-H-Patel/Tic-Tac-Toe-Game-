let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let newGameBtn = document.getElementById("new-game");
let msgBox = document.querySelector(".msg-box");
let msg = document.getElementById("#msg");

let turnX = true;
let count = 0;

let winningPossibilty = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
    turnX = true;
    count = 0;
    enablebox();
    msgBox.classList.add("hide");
};

const disablebox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgBox.classList.remove("hide");
    disablebox();
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgBox.classList.remove("hide");
    disablebox();
};

boxes.forEach((val) => {
    val.addEventListener("click", () => {
        if(turnX){
            val.innerText = "X";
            turnX = false;
        }
        else{
            val.innerText = "O";
            turnX = true;
        }
        val.disabled = true;
        count++;

        let winner = checkWinner();

        if(count == 9 && !winner){
            gameDraw();
        }
    });
});


  
const checkWinner = () => {
    for (let pattern of winningPossibilty) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);