let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgCon=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");

let turn0 = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


boxes.forEach((box) => {  //here box is each button in the game
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText= "O";
            turn0=false;
        }
        else{
            box.innerText= "X";
            turn0=true;
        }
        box.disabled=true;//So that we don't click a button twice.

        checkWinner();
    })
});

const resetGame=()=>{
    turn0=true;
    enableBoxs();
    msgCon.classList.add("hide");
}

const disableBoxs=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxs=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner =(Winner)=>{
    msg.innerText = `Congratulation , Winner is ${Winner}`;
    msgCon.classList.remove("hide");
    disableBoxs();
}

const checkWinner=()=>{
    for(let patten of winPatterns){
        let pos1Val=boxes[patten[0]].innerText;
        let pos2Val=boxes[patten[1]].innerText;
        let pos3Val=boxes[patten[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner !!",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGamebtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);