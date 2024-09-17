const prompt = require('prompt-sync')();
null_number_one = null
null_number_two = null
user_input_one = parseInt(prompt("Enter a number : "))
while(true){
    symb = prompt("Enter symbol : ")
    user_input_two = parseInt(prompt("Enter a number : "))
    if(symb == "+"){
        null_number_one = user_input_one + user_input_two
        null_number_two = null_number_one
        console.log(null_number_two)
    }
    else if(symb == "-"){
        null_number_one = user_input_one - user_input_two
        null_number_two = null_number_one
        console.log(null_number_two)
    }
    else if(symb == "*"){
        null_number_one = user_input_one * user_input_two
        null_number_two = null_number_one
        console.log(null_number_two)
    }
    else if(symb == "/"){
        null_number_one = user_input_one / user_input_two
        null_number_two = null_number_one
        console.log(null_number_two)
    }
    else{
        console.log("Enter a valid input")
        break
    };
};