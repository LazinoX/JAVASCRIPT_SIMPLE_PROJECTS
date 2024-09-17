const prompt = require('prompt-sync')();
within = parseInt(prompt("enter the range [starts from 0] : "))
while(true){
    input = parseInt(prompt("Enter : "))
    pc = Math.floor(Math.random()*within)
    if(input>=within){
        console.log("The input",input,"exceed range",within)
        continue
    }
    else{
        if(input == pc){
            console.log("PC CHOOSE : ",pc,"\nYOU CHOOSE : ",input,"\nYOU WIN")
            break
        }
        else{
            console.log("PC CHOOSE : ",pc,"\nYOU CHOOSE : ",input,"\nYOU LOST")
        }
    };
};