function display(element) {
	answerField.value = element;
}

function add (num1, num2) {
	currentValue = parseFloat(num1) + parseFloat(num2);
	display(currentValue);
}

function substract (num1, num2) {
	currentValue = num1 - num2;
	display(currentValue);
}

function multiply (num1, num2) {
	currentValue = num1 * num2;
	display(currentValue);
}

function divide (num1, num2) {
	currentValue = num1 / num2;
	display(currentValue);
}

function mod (num1, num2) {
	currentValue = num1 % num2;
	display(currentValue);
}
function clear () {
	clearValues();
	display(currentValue);
}

function operate(operator, num1, num2) {
	switch (operator) {
		case "+":
			add(num1, num2);
			break;
		case "-":
			substract(num1, num2);
			break;
		case "/":
			divide(num1, num2);
			break;
		case "*":
			multiply(num1, num2);
			break;
		case "%":
			mod(num1, num2);
			break;
		}
}

function clearValues() {
	numero1 = 0;
	numero2 = 0;
	operator = "";
	currentValue = 0;
}

//Event listeners
const answerField = document.querySelector("#result");
var numero1 = 0;
var numero2 = 0;
var operator = "";
var currentValue = 0;

const signChange = document.querySelector("#signChange");
signChange.addEventListener("click", event => {
		currentValue = answerField.value;
		currentValue *= -1;
		display(currentValue);
});

const num_Buttons = document.querySelectorAll(".btn");
num_Buttons.forEach(function(currentBtn) {
	currentBtn.addEventListener("click", event => {
		if (currentValue == 0) currentValue = currentBtn.id;
		else currentValue += currentBtn.id;
		display(currentValue);
	});
});

const operator_buttons = document.querySelectorAll(".operator_btn");
operator_buttons.forEach(function(btn) {
	btn.addEventListener("click", event => {
		if (numero1 == 0) numero1 = answerField.value;
		operator = btn.id;
		currentValue = 0;
		display(currentValue);
	});
});

const equal = document.querySelector("#equal");
equal.addEventListener('click', event => {
	numero2 = answerField.value;
	operate(operator, numero1, numero2);
	clearValues();
});

const reset = document.querySelector("#clear");
reset.addEventListener('click', clear);

/*
//Single button event listener
const click1 = document.getElementById("1");
click1.addEventListener('click', function() {
	display("1")
});

//multi button event listener not working
//const keys = document.querySelector("#calculator_keys");
keys.addEventListener('click', event => {
	if (event.target.tagName == "BUTTON") {
		alert("we did it");
		const keyContent = event.target.textContent;
		alert(keyContent);
		display(keyContent);
	}
	else return;
});
*/
