const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = Math.round(eval(display.value), 4);
        display.scrollLeft = display.scrollWidth;
    }

    catch (error){
        display.value = "Error"
    }
    
}