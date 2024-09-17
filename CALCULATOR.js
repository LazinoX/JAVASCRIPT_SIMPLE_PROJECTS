const { symbolName } = require('typescript');

const prompt = require('prompt-sync')();
number_one = parseInt(prompt("Enter a number : "))
symbol = prompt("symb : ")
number_two = parseInt(prompt("Enter a number : "))
if(symbol == "+"){
    console.log(number_one + number_two)
}
else if(symbol == "-"){
    console.log(number_one - number_two)
}
else if(symbol == "*"){
    console.log(number_one * number_two)
}
else if(symbol == "/"){
    console.log(number_one / number_two)
}
else{
    console.log("Enter a valid symbol!")
};