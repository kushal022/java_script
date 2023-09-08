// string declare:

// const productName = 'laptop'
// const productName = "laptop"
// const productName = 'product "dell" laptop'
// const productName = "product 'dell' laptop"

// const productName = new String('product "dell" laptop')         //[String: 'product "dell" laptop']


// special charactor print: back slash (\char___\char)
// const productName = 'product \*dell\* laptop'
// console.log(productName)

// String Template Literals declare:

// const productDescription = "Lorem lpsum is simply " +
// "dummy text of the printing and typesetting industry."+
// "Lorem lpsum has been the in industry."

// console.log(productDescription)

// back quote:

// const productDescriptionn = `Lorem lpsum is simply dummy text of the printing and typesetting industry. Lorem lpsum has been the in industry.`

// console.log(productDescriptionn)


// String lnterpolation and Variable/Expression Substitutions:

productName = "laptop"
price = 20000

// productDescription = "Lorem is simply name: "+ productName + " ; price: "+price

productDescription = `Lorem is simply name: ${productName}; price:${price}`
console.log(productDescription)

console.log(`Lorem is simply price: ${price - 200}`)

