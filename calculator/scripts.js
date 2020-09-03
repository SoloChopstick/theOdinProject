//calculator scripts

function add (num1, num2) {
	return num1 + num2;
}

function sustract (num1, num2) {
	return num1 - num2;
}

function multiply (num1, num2) {
	return num1 * num2;
}

function divide (num1, num2) {
	return num1 / num2;
}

function operate(operator, num1, num2) {
	switch (operator) :
		case '+':
			add(operator, num1, num2);
			break;
		case '-':
			substract(operator, num1, num2);
			break;
		case '/':
			divide(operator, num1, num2);
			break;
		case '*':
			multiply(operator, num1, num2);
			break;
}