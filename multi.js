const numb1=Math.floor(Math.random()*10);+1
const numb2=Math.floor(Math.random()*10);+1


const score=0;
const formal=document.getElementsByClassName("answer");
const inputE1=document.getElementById("input");
const questionE1=document.getElementById("question");
const submitButton = document.getElementById("submitButton");

questionE1.innerText = `what is ${numb1} multiplay by ${numb2}`;

const correctAnswer=numb1*numb2;
formal.addEventListener("submit",(event)=> {
    event.preventDefault(); 
    const userAnswer=+inputE1.value
    
    if(score===correctAnswer){
        score++

    }
    else{
        score--
    }
   

})
