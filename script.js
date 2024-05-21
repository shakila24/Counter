let countervalue = document.getElementById("countervalue");

function onIncrement() {
    let previouscounter = countervalue.textContent;
    let updatedcounter = parseInt(previouscounter) + 1;
    countervalue.textContent = updatedcounter;
    if(updatedcounter>0){
        countervalue.style.color="green";
    }
    else if(updatedcounter<0){
        countervalue.style.color="red";
    }
    else{
        countervalue.style.color="black";
    }


}

function onReset() {
    let updatedcountervalue = 0;
    countervalue.textContent = updatedcountervalue;
    countervalue.style.color="black";
}

function onDecrement() {
    let previouscounter = countervalue.textContent;
    let updatedcounter = parseInt(previouscounter) - 1;
    countervalue.textContent = updatedcounter;
    if(updatedcounter>0){
        countervalue.style.color="green";
    }
    else if(updatedcounter<0){
        countervalue.style.color="red";
    }
    else{
        countervalue.style.color="black";
    }

}