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