let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turno=true;
const winpattern =[[0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7], [2,5,8] , [0,4,5] , [2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
    if(turno){
        box.innerText="O";
        turno=false;}
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled =true;
        checkwinner();
    });
    const showwinner = (winner)=>{
        msg.innerHTML = `Congrats , winner is ${winner}`;
        msgContainer.classList.remove("hide");
    }
    const checkwinner =()=>{
    for (const pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 === pos2 && pos2 === pos3){
            console.log("Winner");
            showwinner(pos1);
        }
    }
    }

});
