/*1
Make a Program to print 1 to given number
Input:
Enter number: 10

Output:
1
2
3
4
5
6
7
8
9
10
*/

num = 10;

for (i=1; i<=num; i++) {
    console.log(i)
}
console.log("Finish!!")
console.log("-------------------------------------------")


/*2
Make a Program to print given number to 1
Input:
Enter number: 10

Output:
10
9
8
7
6
5
4
3
2
1
*/

num = 10;

for (i=num; i>=1; i--){
    console.log(i)
}
console.log("-------------------------------------------")

/*3
Make a Program to print “Hello” as given number of times
Input: 
Enter number: 5

Output:
hello
hello
hello
hello
hello
*/

num = 5;
for (i=1; i<=num; i++){
    console.log(i,"Hello")
}
console.log("-------------------------------------------")


/*4
Make a Program to print 2’s multiplication table
Output:

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
*/

num = 2;

for (i=1; i<=10; i++){
    console.log(num,"x",i,"=",num*i)
}
console.log("-------------------------------------------")


/*5
Make a Program to print multiplication table of given number
Input:
Enter number: 4

Output:
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40

*/

input= 4;
for(i=1; i<=10; i++){
    console.log(input,"x",i,"=",input*i)
}
console.log("-------------------------------------------")


/*6
Make a Program to print total sum of 1 to given number
Input:
Enter number: 5

Output:
Total is 15
Logic:
1 + 2 + 3 + 4 + 5 = 15
*/

num = 5;
sum = 0
for (i=1; i<=num; i++){
    sum = sum + i;
}
console.log("Total is",sum)
console.log("-------------------------------------------")

/*7
Make a Program to print total sum of only even number in 1 to given number
Input:
Enter number: 10

Output:
Total is 30
Logic:
2 + 4 + 6 + 8 + 10 = 30
*/

num = 10;
sum = 0;
for (i=1; i<=num; i++){
    if(i%2==0){
        sum = sum + i;
        console.log(i)
    }
}
console.log("Total of even no. is",sum)
console.log("-----------------------------------------")



/*8
Make a program to print only even number in 1 to given number
Input:
Enter number: 30

Output:
2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 20, 22, 24, 26, 28, 30
*/

num = 30;
sum = 0;
for (i=1; i<=num; i++){
    if(i%2==0){
        sum = sum + i;
        console.log(i)
    }
}
console.log("-----------------------------------------")
/* 9.
Make a Program to print total sum of 1 to given number and print exact output
Input:
Enter number: 5

Output:
1 + 2 + 3 + 4 + 5 = 15
 */

num = 5;
let strNum = "";
sum = 0;
for (i=1; i<=num; i++){
    // sum += i
    sum = sum + i;
    // strNum += i;
    strNum = strNum + i;
    if (i<num){
        strNum = strNum + "+";
    }
    // console.log(strNum,typeof strNum)
}
console.log(strNum,"=",sum)

console.log("-----------------------------------------")
