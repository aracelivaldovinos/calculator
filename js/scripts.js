function add(number1, number2){
	return number1 + number2;
}
function sub(number1, number2){
	return number1 - number2;
}
function mul(number1, number2){
	return number1 * number2;
}
function div(number1, number2){
	return number1 / number2;
}
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"))
const result = div(number1, number2)
alert(result);