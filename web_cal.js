const display = document.getElementById("display");


function appendToDisplay(input){

function appendToDisplay(input) {
    display.value += input;
}


function clearDisplay(){


function clearDisplay() {
    display.value = "";
}


function calculate(){
function calculate() {
    try {
        let result = eval(display.value);

        result = Math.round(result * 1000) / 1000; 

        display.value = result;

        display.value = eval(display.value);


function calculate() {
    try {
        let result = eval(display.value);
        
        result = Math.round(result * 1000) / 1000; 
        
        display.value = result;
        
        display.value = Math.round(eval(display.value), 3);
      

        display.scrollLeft = display.scrollWidth;
    } catch (error) {
        display.value = "Error";
    }


    catch (error){
        display.value = "Error"
    }

}
}
Footer
}
