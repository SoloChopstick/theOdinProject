function display(element) {
	answerField.value = element;
}

function add (num1, num2) {
	currentValue = parseInt(num1) + parseInt(num2);
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
		}
}

function clearValues() {
	numero1 = 0;
	numero2 = 0;
	operator = "";
	currentValue = "";
}

//Event listeners
const answerField = document.querySelector("#result");
const reset = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const resultValue = "";
var numero1 = 0;
var numero2 = 0;
var operator = "";
var currentValue = "";

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(currentBtn) {
	currentBtn.addEventListener("click", event => {
		currentValue += currentBtn.id;
		display(currentValue);
	});
});

const operator_buttons = document.querySelectorAll(".operator_btn");
operator_buttons.forEach(function(btn) {
	btn.addEventListener("click", event => {
		if (numero1 == 0) numero1 = answerField.value;
		operator = btn.id;
		currentValue = "";
		display(currentValue);
	});
});

equal.addEventListener('click', event => {
	numero2 = answerField.value;
	operate(operator, numero1, numero2);
	clearValues();
});

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
