let countValue = document.querySelector(".count");
// countValue.innerText = 3;

function increment(){
    let val = parseInt(countValue.innerText) +1 ;
    countValue.innerText = val;

}

function decrement(){
    let val = parseInt(countValue.innerText) - 1 ;
    countValue.innerText = val;
}

function reset(){
    
    countValue.innerText = 0;
}



