const bigSquare = document.querySelector("#bigsquare");
const playerGo = document.querySelector("#player");
const reset = document.querySelector("#new_game");



let chance = 0;
const width = 3;

thexx = '<i class="fa-solid fa-o"></i>'

let pieces = [theo,thex]

let start = [
    2,2,2,
    2,2,2,
    2,2,2
]

const square = document.createElement('div');

function createSquares(){
    start.forEach((start, i)=>{
        const esquare = document.createElement('div');
        esquare.classList.add('smallsquare');
        esquare.setAttribute('sid',i);
        bigSquare.append(esquare);
    });
} 

createSquares();

const allSquare = document.querySelectorAll(".smallsquare");

reset.addEventListener('click', respawn)

function respawn(e){
    window.location.reload();
}

allSquare.forEach(square => {
    square.addEventListener('click', move);
})

function move(e){
    console.log(e.target)
    let dap = e.target.getAttribute("sid");
    console.log(dap);
    if(chance===0 && !document.querySelector(`[sid = "${dap}"]`).firstchild){
        e.target.innerHTML= pieces[chance];
        start[dap]= 0; 
        checkWin(chance,dap);
        chance=1;
        playerGo.innerHTML = "X's"
    }else if(chance===1 && !document.querySelector(`[sid = "${dap}"]`).firstchild){
        e.target.innerHTML= pieces[chance];
        start[dap]= 1;
        checkWin(chance,dap);
        chance=0;
        playerGo.innerHTML = "O's"
    }else{
        return null;
    }
}

function checkWin(chance,dop){
    let num = Number(dop)
    console.log(num)
    console.log(chance);
    if(
        (start[num+1]===chance&&
       start[num+2]===chance)||
       (start[num-1]===chance&&
        start[num-2]===chance)||
        (start[num+1]===chance&&
        start[num-1]===chance)
        ){
            if(chance===0){
                alert("Player O has won")
            }else{
                alert("PLayer X has won")
            }
        }
    else if(
        (start[num+1*width]===chance&&
            start[num+2*width]===chance)||
            (start[num-1*width]===chance&&
             start[num-2*width]===chance)||
             (start[num+1*width]===chance&&
             start[num-1*width]===chance)
    ){
        if(chance===0){
            alert("Player O has won")
        }else{
            alert("PLayer X has won")
        }
    }else if(
            (start[num+(1*width)+1]===chance&&
             start[num+(2*width)+2]===chance)||
            (start[num-(1*width)-1]===chance&&
             start[num-(2*width)-2]===chance)||
            (start[num+(1*width)+1]===chance&&
             start[num-(1*width)-1]===chance)||
            (start[num+(1*width)-1]===chance&&
             start[num+(2*width)-2]===chance)||
            (start[num-(1*width)+1]===chance&&
             start[num-(2*width)+2]===chance)||
            (start[num+(1*width)-1]===chance&&
             start[num-(1*width)+1]===chance)
    ){
        if(chance===0){
            alert("Player O has won")
        }else{
            alert("PLayer X has won")
        }
    }
}