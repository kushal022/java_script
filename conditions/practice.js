/*1.
Make a program to calculate monthly salary by yearly salary

Input:
Enter yearly salary: 12000

Output
The monthly salary is 1000
*/

let salary = 12000

monthalySalary = salary/12

console.log(monthalySalary)

/*2.
Make a program to calculate yearly Profit based on monthly profit

Input:
Enter per month profit: 1000 

Output
Yearly Profit is 12000
*/

let profit = 1000

console.log(profit*12)


/*3.
Make a program to calculate student percentage based on marks in 5 subjects.

Input:
Enter Marks
Maths: 55
Science: 65
Hindi: 65
English: 60
Social Science: 55

Output:
Total Marks: 300
Percentage: 60%
*/

math = 55
sci = 65
hindi = 65
eng = 60
ss = 55

totalMarks = math+sci+hindi+eng+ss

console.log("Total Marks:",totalMarks)
console.log("Percentage:",totalMarks*100/500,"%")

/*4.
Calculate average run of batsman of last 5 matches
Input:
Enter 1st match run: 55 
Enter 2nd match run: 65 
Enter 3rd match run: 75 
Enter 4th match run: 67 
Enter 5th match run: 45 

Output:
The avarage run is 61.4
*/

m1 = 55
m2 = 65
m3 = 75
m4 = 67
m5 = 45

totalrun = m1+m2+m3+m4+m5
console.log("The avarage run is",totalrun/5)

/*5.
Calculate strike rate of a batsman
Input:
Enter runs: 100
Enter balls: 50

Output:
The strike rate of the batsman is 200
*/

runs = 100
balls = 50

console.log("The strike rate of the bastsman is",runs*100/balls)

/*6.
Calculate 3 months average profit of the company
Input:
Enter 1st month profit: 1000 
Enter 2nd month profit: 3000 
Enter 3rd month profit: 2000 

Output:
Average Profit is 2000
*/

p1 = 1000
p2 = 3000
p3 = 2000

months = 3
total = p1+p2+p3

console.log("Average Profit is",total/months)

/*7.
Convert KG to G
Input:
Enter KG : 2

Output:
2000 G
*/

kg = 2

console.log("Grams:", kg*1000)

/*8.
Check number is divided by 2 or not
Input:
Enter number: 10

Modulus is 0 so 10 is divided by 2
*/

const numm = 12

if (numm%2==0){
    console.log("Modulus is 0 so",numm,"is divided by 2")
} else{
    console.log("Number is not divisible by 2")
}

// or

const result = (numm%2 == 0) ? "Modulus is 0 so numberis divided by 2":"Number is not divisible by 2"
console.log(result)

/*9.
Check number is divided by 4 or not
Input:
Enter number: 20

Modulus is 0 so 20 is divided by 4
*/

const num = 12

if (num%4==0){
    console.log("Modulus is 0 so",num,"is divided by 4")
} else{
    console.log("Number is not divisible by 4")
}

// or

const resultt = (num%4 == 0) ? "Modulus is 0 so numberis divided by 4":"Number is not divisible by 4"
console.log(resultt)

/*10.
Find number is positive or negative
Input:
Enter Number: -200

-200 is a negative number
*/

let n = 9

if (n<0){
    console.log(n,"is a megative number.")
}
else {
    console.log(n,"is positive number.")
}

// OR

res = (n<0) ? "Number is negative":"Number is positive"
console.log(res)

/*11.
Find a small number in 2 numbers
Input:
Enter 1st number: 45
Enter 2nd number: 55

Output:
1st number 45 is small
*/

a = 45
b = 99

if (a>b){
    console.log(b,"is small number.")
}else{
    console.log(a,"is small number")
}

/*12
Find a big number in 2 numbers
Input:
Enter 1st number: 45
Enter 2nd number: 55

Output:
2nd number 55 is big
*/

a = 49
b = 8

if (a>b){
    console.log(a,"is biger number.")
}else{
    console.log(b,"is biger number")
}

/*13.
Convert G to KG and KG to G
Input:
1. G to KG
2. KG to G

Enter Choice (1 / 2): 1
Enter Gram: 1000

Output:
1 KG
*/

gram = 100
kg = 5
let choice = 2

switch(choice){
    case 1:
        gTk = gram/1000
        console.log(gram,"gm =",gTk,"kg")
        break;

    case 2:
        kTg = kg*1000
        console.log(kg,"Kg =",kTg,"gm")
        break;

    default:
        console.log("Invalid choice!!")
}


/*14.
Find a big number in 3 numbers
Input:
Enter 1st number: 45
Enter 2nd number: 55
Enter 3rd number: 85

Output:
3rd number 85 is big
*/

a = 400
b = 9
c = 55

if (b<a && c<a){
    console.log(a,"is biger number.")
}else if (a<b && c<b){
    console.log(b,"is biger number")
}else{
    console.log(c,"is biger number")
}

/*15
Find a small number in 3 numbers
Input:
Enter 1st number: 55
Enter 2nd number: 45
Enter 3rd number: 85

Output:
2nd number 45 is small
*/

a = 4
b = 9
c = 2

if (a<b && a<c){
    console.log(a,"is smaller number.")
}else if (b<a && b<c){
    console.log(b,"is smaller number")
}else{
    console.log(c,"is smaller number")
}

/*16
Find topper of the class from 5 students

Input:
Enter 1st student percentage: 45
Enter 2nd student percentage: 95
Enter 3rd student percentage: 66
Enter 4th student percentage: 96
Enter 5th student percentage: 87

Output:
4th student is a topper with 96 % 
*/

a = 99
b = 94
c = 9
d = 9
e = 9

if (a>b && a>c && a>d && a>e){
    console.log("1st student is a toppre with",a,"%")
}else if (b>a && b>c && b>d && b>e){
    console.log("2nd student is a toppre with",b,"%")
}else if (c>a && c>b && c>d && c>e){
  console.log("3rd student is a toppre with",c,"%")
}else if (d>a && d>c && d>b && d>e){
    console.log("4th student is a toppre with",d,"%")
}else{
  console.log("5th student is a toppre with",e,"%")
}

/*17
Find a player who has given the lowest performance
Input:
Enter 1st player runs: 46
Enter 2nd player runs: 55
Enter 3rd player runs: 98
Enter 4th player runs: 45
Enter 5th player runs: 89

Output:
4th player has given low performance with 45 run 
*/


a = 99
b = 94
c = 92
d = 90
e = 97

if (a<b && a<c && a<d && a<e){
    console.log("1st player has performance with",a,"%")

}else if (b<a && b<c && b<d && b<e){
    console.log("2nd player has performance with",b,"%")

}else if (c<a && c<b && c<d && c<e){
    console.log("3rd player has performance with",c,"%")

}else if (d<a && d<c && d<b && d<e){
    console.log("4th player has performance with",d,"%")

}else{
    console.log("5th player has performance with",e,"%")

}

/*18
Check you are allowed to drive a car on an even day
Input:
Enter Vehicle No.: 1220

Output:
Vehicle No. 1220 is allowed to drive on even day

*/

v = 1220

day = 27

if (day%2==0){
    console.log("Vehicle No.",v,"is allowed to drive on even day.")
}else{
    console.log("Vehicle No.",v,"is not allowed to drive on even day.")
}

/*19
Check you are allowed to drive a car on an odd day
Input:
Enter Vehicle No.: 1220

Output:
Vehicle No. 1220 is not allowed to drive on an odd day
*/

v = 1220
day = 22

if (day%2!=0){
    console.log("Vehicle No.",v,"is allowed to drive on odd day.")
}else{
    console.log("Vehicle No.",v,"is not allowed to drive on odd day.")
}

/*20
Check you are allowed to drive a car as per day
Input:
Enter date: 12
Enter Vehicle No: 1220

Vehicle No. 1220 is allowed to drive on date 12.

*/

date = 12
vehicleNo = 1220

if(date%2==0){
    console.log ("Vehicle No.",vehicleNo,"is allowed to drive on even day.")
}else{
    console.log("Vehicle no.",vehicleNo,"is allowed to drive on odd day.")
}

/*21
check character is small or capital letter or not
Input:
Enter a character: z

z is a small letter
*/

char = "A"

if (char >= "a" && "z" >= char){
    console.log(char,"is a small letter.")
}else if(char>="A" && char <= "Z"){
    console.log(char,"is a capital letter.")
}else{
    console.log ("Invalid input!!")
}


/*22
check character is vowel or not
Input:
Enter a character: a

a is vowel
Logic

a, e, i, o, u are vowels
*/

char = "y";

vowel = ['a','e','i','o','u'];

if (vowel.includes(char)){
    console.log(char,"is vowel.");
}else{
    console.log(char,' is not vowel.');
}