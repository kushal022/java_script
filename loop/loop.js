// loops: for, for....in, for....of, forEach():- its method not loop.

// for loop:

// const price = [100,200,300,400]
//1.
// for (let i = 0 ; i< price.length ; i++){
//     // console.log(price)
//     console.log(price[i])
//     // console.log(price.length)
// }

//2.
// let i = 0 
// for (; i< price.length ; i++){
//     // console.log(price)
//     console.log(price[i])
//     // console.log(price.length)
// }

//3.
// let i = 0 
// for ( ; i< price.length ; ){
//     console.log(price[i])
//     i++
// }

//4.
// let i = 0 
// for ( ; ; ){
//     console.log(price[i])
//     i++
// }                       // error: undefined, conditon must have in loop.



// for....of loop: returns value of array.

const price = [100,200,300,400]

for (let x of price){
    console.log(x)
}

// with string:
 const name = "salman"

 for(let char of name){
    console.log(char)
 }

 // for.....in loop: returns index of array and also value.

 let pricee = [100,300,400,4000]

 for(let x in pricee){
    console.log(x , ' ', pricee[x])
 }

// forEach():  its a method not loop for array only. returns value, index & array.

let prices  = [ 100, 200, 300, 400]

prices.forEach(
    function(price,index,array){
        console.log(price,index, array)
    }
)