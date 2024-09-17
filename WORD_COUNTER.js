const prompt = require('prompt-sync')();
user_input = prompt("Enter a word : ")
j = 0
for(i = 0;i<=user_input.length;i++){
    user_random = user_input[i]
    if(user_random == ' '){
        continue
    }
    else{
        j++
    };
};
console.log(j)