// while loop:

let prices = [100,200,150,400]

console.log("while loop:")

let index = 0;

while(index < prices.length){
    console.log(index, prices[index])
    index++
}
console.log("Finish")


// do.....while loop:
console.log("do.....while loop:")
index =0;

do{
    console.log(index, prices[index])
    index++
}while(index < prices.length )

console.log("Finish")


// difference:

rate = []

while(index < rate.length ){
    console.log(index, rate[index])
    index++
}
console.log("Finish while loop")



rate = []

index = 0;

do{
    console.log(index, rate[index])
    index++
}while(index < rate.length )

console.log("Finish do......while loop")


/**

* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/


n = 5;
j=1;
while(j<=n){
    i=1;
    row = ""
    while(i<=n){
        row = row + "* ";
        i++
    }
console.log(row)
j++
}
console.log("--------------------------")


n = 5;
j=1;
while(j<=n){
    i=1;
    row = ""
    while(i<=j){
        row = row + "* ";
        i++
    }
console.log(row)
j++
}
