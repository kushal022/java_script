// length() 

const name = "The english man"
console.log(name.length)            // 15 (includ spaces)

// upper and lower case:---------------------------------------------

const product = "Laptop"
// toUpperCase()
console.log(product.toUpperCase())      // LAPTOP
// toLowerCase()
console.log(product.toLowerCase())      // laptop
console.log(product)                    // Laptop

// immutable: not change/ sring are immutable

const prod = "laptop"
const newProdName = prod.toUpperCase()

console.log(prod)                       // laptop
console.log(newProdName)                // LAPTOP

// indexing-------------------------------------------------------

const produ = "laptop"
//[]
console.log(produ[2])       // p
console.log(produ[4])       // o
console.log(produ[3])       // t

console.log(produ[7])       // undefined

// charAt()
console.log(produ.charAt(5))    // p
console.log(produ.charAt(6))    // 

// charCodeAt()
console.log(produ.charCodeAt(5))        // 112
console.log(produ.charCodeAt(6))        // NaN (not a number)

// charCodeAt()
console.log("home".charCodeAt(3))          // 101 (numeric number of m is 101; n-1 return)

// fromCharCode()
console.log(String.fromCharCode(65))        // A (return charactor start from 65 )



// sub string:-----------------------------------------------------------
/*
1. substring(starIndex, endIndex)       // endIndex: return n-1
2. slice(starIndex, endIndex)
3. substr(starIndex, length)
*/

const prod1 = "laptop"

//substring()
console.log(prod1.substring(2,5))    // pto
//slice()
console.log(prod1.slice(2,5))        // pto
//substr()
console.log(prod1.substr(2,3))       // pto


// only one positive argument:

const prod2 = "laptop"

console.log(prod2.slice(3))            // top

console.log(prod2.substring(3))        // top

console.log(prod2.substr(3))            // top


// only one negative argument:

console.log(prod2.slice(-2))            // op

console.log(prod2.substring(-2))        // "laptop" , it just ignore negative index

console.log(prod2.substr(-2))           // op


// replace()

const prodDescription = "Laptop is fast. Laptop has good process. laptop is great device."

console.log(prodDescription)
console.log(prodDescription.replace('Laptop', 'Tablet'))

console.log(prodDescription.replace(/Laptop/g, 'Tablet'))       // g: globle

console.log(prodDescription.replace(/Laptop/gi, 'Tablet'))      // gi, case sensitive


// concat()

const firstName = "jay"
const lastName = "singh"
const fullName = firstName.concat(lastName)     // jaysingh

console.log(fullName)

const fullNamee = firstName + lastName          // jaysingh

console.log(fullNamee)

// split()

const prodDescription1 = "Laptop is fast."

const arrayDesc = prodDescription1.split(" ")

console.log(arrayDesc)      // [ 'Laptop', 'is', 'fast.' ] 


// search:------------------------------------------------------------

const prodDescription2 = "Laptop is fast."

//search()
console.log(prodDescription2.search('fast'))           // 10

//indexOf()
console.log(prodDescription2.indexOf('fast'))          // 10

console.log(prodDescription2.search('t', 4))           // 3 , not support second parameter
console.log(prodDescription2.indexOf('t', 4))          // 13

const prodDescription3 = "oyye Laptop is fast"

console.log(prodDescription3.search(/laptop/i))     // 5 ; support Reguler expression; must not starting word
console.log(prodDescription3.indexOf('laptop'))     // -1 ; not found; case sensitive

//lastIndexOf()
console.log(prodDescription3.indexOf('a'))     // 6 ; search from start
console.log(prodDescription3.lastIndexOf('a'))     // 16 ; search from end

//starsWith()
console.log(prodDescription3.startsWith('laptop'))     // false
console.log(prodDescription3.startsWith('oyye'))     // true

//endsWith()
console.log(prodDescription3.endsWith('fast'))     // true
console.log(prodDescription3.endsWith('laptop'))     // false

// includes()
console.log(prodDescription3.includes('laptop'))     // false
console.log(prodDescription3.includes('Laptop'))     // true
