const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let result = eval(display.value);
        
        result = Math.round(result * 1000) / 1000; 
        
        display.value = result;
        
        display.value = eval(display.value);
      

        display.scrollLeft = display.scrollWidth;
    } catch (error) {
        display.value = "Error";
    }

}
