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

// add element: .push('element'); var[var.length] = 'x' ---------------------------------

    let color4 = ['red','yellow']

    color4.push('white')   
    console.log(color4)                 // [ 'red', 'yellow', 'white' ]

    color4[color4.length] = 'black'
    console.log(color4)                 // [ 'red', 'yellow', 'white', 'black' ]

