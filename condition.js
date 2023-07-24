// condition statement in java script: if, if_else, if_else if, switch.

// if statement:
    //1. good approch

const age = 18

if (age>= 18){
    console.log("Allow")
}
console.log("Finish 1 !!")

    //2. (not good method)

const agee = 20
if (agee >= 18)
console.log("allow")
console.log("finish 2 !!")

    //3. (not good method)

const ageee = 15

if (ageee>= 18)             //false
console.log("Allow")            
console.log("Finish 3 !!")

    //4. (not good method)
    const ageeee = 15

    if (ageeee>= 18)console.log("Allow")            
    console.log("Finish 4 !!")

// if_else statement:

const agge = 18

if (agge>= 18){
    console.log("Allow")
} else {
    console.log("Deny")
}
console.log("Finish 1 !!")

    // shortern with Ternary operator:

    const aggge = 15

    const result = (aggge>= 18) ? "Allow":"Deny"        // false condition
    console.log(result)

// if.....else if.....else statement
const aage = 15

if (aage<=25){
    console.log("Young")
}
 else if (aage<=55){
    console.log("Adult")
 }
 else{
    console.log("old")
 }
console.log("Finish 1 !!")

// switch statement: it's check the value and type of data type.

const operation = "add"

switch (operation){
    case "add":
        console.log(2+4)
        break;
    case "sub":
        console.log(9-4)
        break;
    case "mul":
        console.log(2*4)
        break;
    case "div":
        console.log(8/4)
        break;
    default:
        console.log("invalid choice!! try again")
}


        //or

a = 55
switch (true){
    case a<= 25:
        console.log("Young")
        break;
    case a<=55:
        console.log("Adult")
        break;

    default:
        console.log("old")
}
