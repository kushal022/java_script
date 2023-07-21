// Operators: arithmetic, logical, comparison, assignment and more....
// Arithmetic Operators:

const add =  10 + 5
console.log(add)

const sub =  10 + 5
console.log(sub)

const mul =  10 * 5
console.log(mul)

const exp =  10 ** 5
console.log(exp)

const mod =  10 % 5
console.log(mod)

// increment

var inc = 10
 inc = inc + 1      // inc++
console.log(inc)

// i++ : return initial value after that increment.
// ++i : return both at a time (increment + assign)

// decrement

var dec = 10
dec = dec - 1       // dec--
console.log(dec)

// i-- : return initial value  after that increment.
// --i : return both at a time (increment + assign)

// concate string:

console.log("abc"+"xyz")   //abcxyz
console.log(2+"2")          //22
console.log("2"+2)          //22
console.log(2 + parseInt("2"))      //4
console.log(2+2+"2")                //42 : before "2", 2+2 considered as integer
console.log("2"+2+2)                //222 : after "2", 2+2 considered as string

console.log(2-"2")                  //0 : "2" considered as integer but in case of + operator cosidered as string.


// Assignment Operator:

var cal = 10
cal+= 10
console.log(cal)