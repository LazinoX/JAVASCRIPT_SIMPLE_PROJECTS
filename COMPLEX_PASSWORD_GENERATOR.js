capital = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
symbol = ["!","@","#","$","%","^","&","*","(",")","_","+","-","+","/","*",":","<",">"]
number = ["1","2","3","4","5","6","7","8","9"]
const prompt = require('prompt-sync')();
total_string = ""
count_capital = parseInt(prompt("Enter a number of capial alphabet in the password : "))
count_small = parseInt(prompt("Enter the number of small alphabets in the password : "))
count_symbol = parseInt(prompt("Enter the number of symbols in the password : "))
count_number = parseInt(prompt("Enter the number of numbers in the password : "))
for(i=0;i<count_capital;i++){
    rand_capital = Math.floor(Math.random()*capital.length)
    total_string+= capital[rand_capital]
};
for(i=0;i<count_small;i++){
    rand_small = Math.floor(Math.random()*small.length)
    total_string+= small[rand_small]
};
for(i=0;i<count_symbol;i++){
    rand_symbol = Math.floor(Math.random()*symbol.length)
    total_string+= symbol[rand_symbol]
};
for(i=0;i<count_number;i++){
    rand_number = Math.floor(Math.random()*number.length)
    total_string+= number[rand_number]
};
console.log(total_string)
ask_complex = prompt("Want the password to be complex [y/n] : ")
total_string_two = ""
if(ask_complex == "y"){
    element = total_string[Math.floor(Math.random()*total_string)]
    total_string.forEach(element => {
        if(total_string[Math.floor(Math.random()*total_string)] == element){
            
        }
        else{
            total_string_two+=element
        }
    });
}
else if(ask_complex == "n"){
    ask_complex = false
    process.exit();
}
else{
    console.log("Enter a valid input")
    process.exit();
}
console.log(total_string_two)