const prompt = require('prompt-sync')();
capital = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
symbol = ["!","@","#","$","%","^","&","*","(",")","_","+","-","+","/","*",":","<",">"]
number = ["1","2","3","4","5","6","7","8","9"]
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