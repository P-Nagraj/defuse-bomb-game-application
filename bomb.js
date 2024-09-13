let defuseElement=document.getElementById("defuser");
let timerElement=document.getElementById("timer");

let string_to_integer=(timerElement.textContent);
let stringConvert_integer=parseInt(string_to_integer);
let intervalId=setInterval(function(){
    stringConvert_integer=stringConvert_integer-1;
    timerElement.textContent=stringConvert_integer;
    if(stringConvert_integer === 0){
        timerElement.textContent="Boom Time Exit";
        clearInterval(intervalId);
    }

},1000);

function defusebomb(event){
    let input_value=defuseElement.value;
    if(input_value==="defuse" && event.key==="Enter" && stringConvert_integer!==0){
        timerElement.textContent="You Did It...!";
        clearInterval(intervalId);
    }
}

defuseElement.addEventListener("keydown",defusebomb);
