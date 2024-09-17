const prompt = require('prompt-sync')();
list = ["Rock","Paper","Scissor"]
user_input = prompt("Enter r for Rock, p for Paper, s for Scissor : ")
pc = list[Math.floor(Math.random()*3)]
if(user_input == "r"){
    user_input = list[0]
}
else if(user_input == "p"){
    user_input = list[1]
}
else if(user_input == "s"){
    user_input = list[2]
}
else{
    console.log("Enter a valid input")
    process.exit()
};
if( (pc == list[0] && user_input == list[2]) || 
    (pc == list[1] && user_input == list[0]) || 
    (pc == list[2] && user_input == list[1])){
    console.log("pc choose : ",pc,"\nyou choose : ",user_input,"\nPC WINS")
}
else if(pc == user_input){
    console.log("pc choose : ",pc,"\nyou choose : ",user_input,"\nDRAW")
}
else{
    console.log("pc choose : ",pc,"\nyou choose : ",user_input,"\nYOU WIN")
}