// Data Typed:

//1. number:

const dell = 3000
console.log(typeof dell)        //number

const price = 33.33
console.log(typeof price)       //number

//2. boolean type:

const isYouHappy = true
console.log(typeof isYouHappy)      //boolean

const isAllow = false
console.log(typeof isAllow)         //boolean

//3. String type:

const name = "Jay singh"
console.log(typeof name)         //string

//4. Object type:

// json-type in js, and it's dictionary in python and Java.
const product = {name:"tomato",price:200}
console.log(typeof product)         //object

// Array:
const colors = ["red","green","blue"]
console.log(typeof colors)         //object

// date:
const today = new Date()
console.log(typeof today)         //object

// null:
const money = null
console.log(typeof money)         //object

// class or function:
class employee{
}
const Jay = new employee
console.log(typeof Jay)         //object

//function type:

const mobNo = parseInt("9057565656")
console.log(mobNo)              //9057565656
console.log(typeof mobNo)       //number
console.log(typeof parseInt)    //function [parseInt(): converts string into integer]

// user def function:

function add(x,y){
    return x + y
}
console.log(add(3,4))       // 7
console.log(typeof add)     // function

// class: ( 'class' consider as 'function' in javascript)

class Employee{

}
console.log(typeof Employee)        // function

/*********************** Symbol() type *********************************/

// its unique value. it has two types 'primitive types' & 'complex types - pass reference'.

console.log(typeof Symbol())      // symbol

// Primitive type: string, number, boolean, undefined, symbol.

const Rate = 100
let updateRate = Rate

updateRate = 200

console.log(Rate,updateRate)        // 100 200

// complex types: pass reference: object, array, function.

const Rs = ["five","six"]
const updateRs = Rs

updateRs[0] = "seven"

console.log(updateRs)       // ['seven','six']

console.log(Rs)             // ['seven','six']

