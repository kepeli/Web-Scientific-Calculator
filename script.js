// const input = document.getElementById("calculation");
// const display = document.querySelector('.numberButtons')

//This function displays values on the screen
function show(value) {
    document.getElementById("calculation").value += value;
}


//This function clears all from the screen
function clearScreen() {
    document.getElementById("calculation").value = "";
    document.getElementById("result").value = "";
}

//This function evaluates the expression and returns answer
function calculate () {
    let answer = document.getElementById("calculation").value;
    let calculate = eval(answer);
    document.getElementById("result").value = calculate;
}

//This functions clears single digits from the screen
function backSpace () {
    document.getElementById("calculation").value = calculation.value.substring(0, calculation.value.length - 1);
}
//This function in for sin()
function sin() {
    document.getElementById("calculation").value = Math.sin(calculation.value);
}

//This function in for in()
function In() {
    document.getElementById("calculation").value = Math.log(calculation.value);
}

//This function in for Rad()
function radian() {
    document.getElementById("calculation").value = calculation.value * (Math.PI / 180); 
}

//This function in for cos()
function cos() {
    document.getElementById("calculation").value = Math.cos(calculation.value);
}

//This function in for Log()
function Log() {
    document.getElementById("calculation").value = Math.log10(calculation.value);
}

//This function in for Inv()
function inverse() {
    document.getElementById("calculation").value = 1/calculation.value;
} //Not yet working

//This function is for the open and close brackets
function openBracket(value) {
    document.getElementById("calculation").value += value;
    flag+=1; 
}
function closeBracket(value) {
    document.getElementById("calculation").value += value;
    flag-=1; 
}

//This function in for tan()
function tan() {
    document.getElementById("calculation").value = Math.tan(calculation.value);
}

//This function in for pi()
function pi() {
    document.getElementById("result").value += calculation.value * Math.PI;
}

//This function is for x²
function square() {
    document.getElementById("calculation").value = eval(calculation.value * calculation.value);
}

//This function is for square root
function squareRoot() {
    document.getElementById("calculation").value = Math.sqrt(calculation.value);
}

//ths function is for cube root
function cubeRoot() {
    document.getElementById("calculation").value = Math.cbrt(calculation.value);
}

//This function is for exp()
function exp() {
    document.getElementById("calculation").value = Math.exp(calculation.value);
}

//This function is for x^
function exponent() {
    document.getElementById("calculation").value += "**";
}

//This function is for x!
function factorial() {
    var i, num, f;
    f = 1
    num = calculation.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    calculation.value = f;
}




