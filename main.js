
let displayNumber = '';
let operandItem = '';
let operands = [];
let numberStr = '';
let numberParsed;

let operator = '';
let conditional = false;


function storeNum(btnNum) {
    numberStr += btnNum;
    console.log(numberStr)
}

function push(op) {
    //store the operator for later use only if it is not the equal sign
    if (op != '='){
        operator = op;
    }

    //parse the string
    numberParsed = parseFloat(numberStr);
    
    //if the we have previously done and want to keep using the answer for the next operation use this condition
    if (conditional === true && (operator === ('+') || ('-') || ('*') || ('/'))) {
        if (numberStr != '') {
            operands.push(numberParsed)
            switch(operator) {
                case '+':
                    add();
                    break;
                case '-':
                    subtract();
                    break;
                case '*':
                    multiply();
                    break;
                case '/':
                    divide();
                    break;
            }
        }
        return;
    }
    //else push the parsed number into the array
    else {
        operands.push(numberParsed);
        numberStr = '';
    }

    if (operands.length === 2 && (op === ('+') || ('-') || ('*') || ('/') || ('=')) ) {
        switch(operator) {
            case '+':
                add();
                break;
            case '-':
                subtract();
                break;
            case '*':
                multiply();
                break;
            case '/':
                divide();
                break;
        }   
    }
}


//Operation functions
function add () {
    const answer = operands[0] + operands[1];
    update(answer);
}

function subtract () {
    const answer = operands[0] - operands[1];
    update(answer);
 }

 function multiply () {
    const answer = operands[0] * operands[1];
    update(answer);
 }

 function divide () {
    if (operands[0] > 0 && operands[1] === 0){
        document.querySelector('#displayCurrent').innerText = 'don\'t do that';
        operands.length = 0;
        return;
    }
    const answer = operands[0] / operands[1];
    update(answer);
 }

 //Once the answer has been calculated it is passed to this function to update and prepare for the next operation
 function update(answer) {
    if (answer % 2 != 0) {
         answer = parseFloat(answer.toFixed(2));
         
    }
    operands[0] = answer;
    numberStr = '';
    operator = '';
    operands.length = 1;
    conditional = true;
    displayNumber = '';
    document.querySelector('#displayCurrent').innerText = answer;
    console.log(operands, conditional)
 }

 //RESET EVERYTHING WHEN THE USER PRESSES C
 function clearDisplay() {
    document.querySelector("#displayCurrent").innerText = '';
    operandItem = '';
    displayNumber = '';
    operator = '';
    conditional = false;
    numberStr = '';
    operands.length = 0;
 }

 //Display the operations being performed
function display(x) {
    displayNumber += x;
    document.querySelector('#displayCurrent').innerText = displayNumber;
}
