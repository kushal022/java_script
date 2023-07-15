// java script: Variables- let,const,var.

//**************** Var ********************* */

// ustin 'var'- old method
// with 'var'
/*
var color = "red"
console.log(color)

var color = "yellow"
console.log(color)

// without 'var'
color = "blue"
console.log(color)
*/

//*********** let ************

//using 'let'- introduce in ES6,ECMA Script 2015.

/*
let color = "red"
console.log(color)          //red

// update value:
color = "yellow"
console.log(color)          //yellow

//not allow to declare again:
let color = "blue"
console.log(color)        //Error
*/

//***************** Const ***************************** */

//using 'const': introduce in ES6,Ecma script 2015.

/*
const color = "red"
console.log(color)              //red
*/

/*
// not allow to update value
const color = "red"
color = "black"                 //TypeError: Assignment to constant variable.
console.log(color)
*/

/*
//not allow to declare again: 
const color = "red"
const color = "yellow"
console.log (color)     //SyntaxError: Identifier 'color' has already been declared
*/

/*
//assignment later not allowed
const name 
name = "kushal"
console.log (name)
*/

//**************** Block Scope ************************* */
// let and const feature

const price = 200           //global variable
{
    const price = 100       // scop variable
    console.log(price)
}
console.log(price)      

// not work with 'var'

const rate = 200
var discount = 20
{
    const rate = 100
    var discount = 20
    console.log(discount)
    console.log(rate)
}
console.log(rate)
console.log(discount)
