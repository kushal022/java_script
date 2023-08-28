// break loop: stop loop

let prices = [100,200,300,400]

for( let i=0; i< prices.length; i++){
    if (i==2){
        break;
    }
    console.log(i,prices[i])
}
console.log("Finish break statement.")

// continue statement: just skip loop (one iteration)

for( let i=0; i< prices.length; i++){
    if (i==2){
        continue;
    }
    console.log(i,prices[i])
}
console.log("Finish continue statement.")