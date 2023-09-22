// Arithmetic operations ----------------------------------------------

    console.log( 2 + 2 )    // 4
    console.log( 2 - 2 )    // 0
    console.log( 2 * 2 )    // 4
    console.log( 2 / 2 )    // 1
    console.log( 2 ** 3 )    // 8


// toString(); return string -----------------------------------------

    // 2.toString(2)  // sytax error; invalid

    const rollNo = 123

    console.log(rollNo.toString(2))     // binary; 1111011
    console.log(rollNo.toString(8))     // octal; 173
    console.log(rollNo.toString(10))    // decimal; 123
    console.log(rollNo.toString(6))     // hexa-decimal; 7b

// Number object ---------------------------------------------------------

    let rollNo1 = new Number(123)        // Don't use it

    console.log( rollNo1 === 123 )    // false

// toFixed() / return string -----------------------------------------------

    const price = 2000.756

    console.log(price.toFixed(0))   // 2001
    console.log(price.toFixed(2))   // 2000.76
    console.log(price.toFixed(4))   // 2000.7560
    console.log(price.toFixed(6))   // 2000.756000
    console.log(price.toFixed(1))   // 2000.8
    console.log(price.toFixed(3))   // 2000.756

    const price2 = 2000.456

    console.log(price2.toFixed(0))   // 2000
    console.log(price2.toFixed(1))   // 2000.5
    console.log(price2.toFixed(2))   // 2000.46
    console.log(price2.toFixed(3))   // 2000.456

// Number.isInteger()   ------------------------------------------------------

    console.log(Number.isInteger(10))           // true
    console.log(Number.isInteger(10.56))        // false



// Math Functions:=============================================================

// Round number:---------------------------------------------------------

    // Math.round(x): round to its nearest integer
        console.log(Math.round(2000.33))    // 2000
        console.log(Math.round(2000.66))    // 2001

    // Math.ceil(x): round up to its nearest integer (increase)
        console.log(Math.ceil(2000.33))    // 2001
        console.log(Math.ceil(2000.66))    // 2001

    // Math.floor(x): round down to its nearest integer (decrease)
        console.log(Math.floor(2000.33))    // 2000
        console.log(Math.floor(2000.66))    // 2000

    // Math.trunc(x): return integer part
        console.log(Math.trunc(2000.33))    // 2000
        console.log(Math.trunc(2000.66))    // 2000

// Math.pow(x, p) -------------------------------------------------

    console.log(Math.pow(6, 2))    // 36
    console.log(Math.pow(4, 2))    // 16
    

// Math.sqrt(x) ; squaroot -----------------------------------------

    console.log(Math.sqrt(4))    // 2
    console.log(Math.sqrt(16))    // 4


// Math.min() ; return minimum value ----------------------------------

    console.log(Math.min(4,2,50,1,77,30))    // 1
    console.log(Math.min(4,2,50,77,30,-3))    // -3

    // Math.min(...var) ; spread operator
        const price3 = [4,50,77,30]

        console.log(Math.min(...price3))        //4

// Math.max() ; return maximum value -------------------------------

    console.log(Math.max(4,2,50,1,77,30))    // 77
    console.log(Math.max(4,2,50,99,30,-3))    // 99

    // Math.min(...var) ; spread operator
        const price4 = [4,50,77,30]

        console.log(Math.max(...price4))        // 77
    
// Math.random() ------------------------------------------------
    
    console.log(1000 + Math.random() * 9000)    
    //return any random value 0.xxxxxx



// NaN : not a number

    const div = 100/ "abc"
    console.log(div)    // NaN

// isNaN()
    console.log(isNaN("abc"))       // true
    console.log(isNaN(100))         // false
    console.log(isNaN("100"))       // false

// infinity

    console.log(100/0)      // infinity
