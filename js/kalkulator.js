

//Deklarasi variable
const calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector('.equal-sign');
const clearBtn = document.querySelector('.all-clear');
const decimals = document.querySelector('.decimal');

let prevNumber='';
let calculationOprator='';
let currentNumber = '0';

//function mengubah nilai pada input
const updateScreen =(number) =>{
  calculatorScreen.value = number;
};

//function menentukan nomor pada input
const inputNumber =(number) =>{
  if(currentNumber==='0'){
    currentNumber = number;
  }else{
    currentNumber += number;
  }
};

//function menentukan operator pada input
const inputOperator=(operator) =>{

  if(calculationOprator===''){
    prevNumber = currentNumber;
  }
  calculationOprator = operator;
  currentNumber ='0';

};

//function menghapus data kalkulasi pada input
const clearAll=() => {
  prevNumber='';
  calculationOprator='';
  currentNumber = '0';
};

//function decimal
inputDecimal = (dot) =>{
  if(currentNumber.includes('.')){
    return;
  }
  currentNumber += dot;
}

//function kalkulasi
const calculate = () => {
  let result = '';
  switch (calculationOprator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = prevNumber - currentNumber;
      break;
    case '*':
      result = prevNumber * currentNumber;
      break;
    case '/':
      result = prevNumber / currentNumber;
      break;
  default:
    return;
  }
  currentNumber = result;
  calculationOprator = '';
}

//function saat button di klik
numbers.forEach((number) => {
  number.addEventListener("click",(event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click",(event) => {
    inputOperator(event.target.value);
  });
});

equalSign.addEventListener("click",() => {
  calculate();
  updateScreen(currentNumber);
});

clearBtn.addEventListener("click",() => {
  clearAll();
  updateScreen(currentNumber);
});

decimals.addEventListener("click",() => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});
