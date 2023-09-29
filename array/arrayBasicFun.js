// Array basic functions:

// creat array

    let color = ['red','green']

    colors = new Array('red','green')

    let prices = [55,6,7]

    console.log(prices[0])      // 55
    console.log(prices[1])      // 6


// .toString() ---------------------------------------

    let colors2 = ['red','yellow']
    console.log(colors2.toString())     //red,yellow

// .split(",") : return Array ---------------------------

    console.log('red,blue,yellow'.split(","))       //[ 'red', 'blue', 'yellow' ]

// Change element:---------------------------------------

colors2[1] = 'orange'

console.log(colors2)        //[ 'red', 'orange' ]

// Looping: -----------------------------------------------

    let color3 = ['red','yellow','green','white']

    for(let color of color3){
        console.log(color)
    }                                   //red
                                        //yellow
                                        //green
                                        //white

// length-----------------------------------------------------

    console.log(color3.length)      // 4

// Array.isArray(x)  ? ----------------------------------------

    console.log(Array.isArray(color3))      // true

    // var instanceof Array
    console.log(color3 instanceof Array)    // true

        // var instanceof Number
        console.log(1234 instanceof Number)    // false
        console.log(new Number(1234) instanceof Number)    // true


// add element: .push('element'); var[var.length] = 'x' ---------------------------------

    let color4 = ['red','yellow']
    // 1
    color4.push('white')   
    console.log(color4)                 // [ 'red', 'yellow', 'white' ]
    // 2
    color4[color4.length] = 'black'
    console.log(color4)                 // [ 'red', 'yellow', 'white', 'black' ]


// remove element: .pop(); 

    console.log(color4.pop())       // remove last item

    console.log(color4)             // [ 'red', 'yellow', 'white' ]


// merging:

    let group1 = ['red','yellow']
    let group2 = ['black','white']

    //1 .concat()
    allGroup = group1.concat(group2)        // [ 'red', 'yellow', 'black', 'white' ]
    console.log(allGroup)

    //2 spread operator
    allGroup2 = [...group1,...group2]       // [ 'red', 'yellow', 'black', 'white' ]
    console.log(allGroup2)

// max & min

    const price1 = [100,5,33,66,35]
    // Math.max(x)
    console.log(Math.max(...price1))        // 100
    // Math.min(x)
    console.log(Math.min(...price1))        // 5
    // Math.max.apply(null,x)
    console.log(Math.max.apply(null, price1))        // 100; old mathod
    // Math.min.apply(null,x)
    console.log(Math.min.apply(null, price1))        // 5; old mathod


// sort:

    prod = ['abc','def','efg','bca']

    // .sort()
        prod.sort()    

        console.log(prod)  // [ 'abc', 'bca', 'def', 'efg' ]

    rate = [25,26,75,23,78,34,89]
        //1
        rate.sort()
        console.log(rate)       // [23, 25, 26, 34,75, 78, 89] 
        //2
        console.log(rate.sort(function(a,b){return a - b}))     // [23, 25, 26, 34,75, 78, 89] 


prod1 = [
{name: 'toy1', rateis:123},
{name: 'toy2', rateis:34},
{name: 'toy3', rateis:6},
{name: 'toy4', rateis:46},
{name: 'toy5', rateis:8},
]
console.log(prod1.sort(function(a,b){return a - b})) // not working

/* 
[
  { name: 'toy1', rateis: 123 },
  { name: 'toy2', rateis: 34 },
  { name: 'toy3', rateis: 6 },
  { name: 'toy4', rateis: 46 },
  { name: 'toy5', rateis: 8 }
]
*/

console.log(prod1.sort(function(a,b){return a.rateis - b.rateis})) 

/*
[
  { name: 'toy3', rateis: 6 },
  { name: 'toy5', rateis: 8 },
  { name: 'toy2', rateis: 34 },
  { name: 'toy4', rateis: 46 },
  { name: 'toy1', rateis: 123 }
]
*/


// join:

let light = ['white','blue','red']

let text = light.join('***')

console.log(text)   // white***blue***red