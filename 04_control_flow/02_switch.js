//If we have multiple conditions of similar type

let age = Number(prompt(" Enter your age"));
switch(age){
    case 18: "You can drive bike";
    break;
    case 50: "You can also drive car"
    break
    default: "You cannot drive anything";
    break;
}

// Note: If we dont put break then all code below it will get executed -----"except default" ------