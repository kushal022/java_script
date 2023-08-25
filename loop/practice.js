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



/*10
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
for(i=1;i<=num;i++){
    if(i%2===0){
        sum = sum + i;
    }
}
console.log("Total is",sum)
console.log("-----------------------------------------")


/*11
Make a program to print only even number in 1 to given number
Input:
Enter number: 30

Output:
2, 4, 6, 8, 10, 12, 14, 16, 17, 18, 20, 22, 24, 26, 28, 30

*/

num =30;
pattern = "";
for(i=1;i<=num;i++){
    if(i%2===0){
        pattern = pattern+i
        if(i<num){
            pattern = pattern + ","
        }
    }
}console.log(pattern)
console.log("-----------------------------------------")


/*12
Make a following pattern
Input:
Enter Number: 5

Output:
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/

num = 5;

for(i=1;i<=num;i++){
    pattern = "";
    for(j=1;j<=num;j++){
        pattern = pattern +" "+ j;
    }console.log(pattern)
}
console.log("-----------------------------------------")



/*13
Make a following Pattern
Input:
Enter number: 5

Output
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *

*/

num = 5;

for(i=1; i<=num; i++){
    pattern = "";
    for(j=1; j<=num; j++){
        pattern += " *"
        // pattern =+ " *"                   // error: nan (due to: =+)
    }console.log(pattern)
}
console.log("-----------------------------------------")


/*14
Make a following Pattern
Input:
Enter number: 5

Output:
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

num = 5;

    pattern = "";
    for (j=1; j<=num; j++){
        pattern = pattern + j + " " ;
    console.log(pattern)
    }
    console.log("-----------------------------------------")


/*15
Make a following Pattern
Input:
Enter number: 5

Output:
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

n = 5;
for(j=n; j>=1; j--){
    pattern = "";
    for(i=1; i<=j; i++){
        pattern = pattern + i+ " ";
        // console.log(pattern)

    }
    console.log(pattern)
}
console.log("-----------------------------------------")

/*16
Make a following Pattern
Input:
Enter number: 5

Output:
* * * * *
*       *
*       *
*       *
* * * * *

*/

n = 5;
for(i=1; i<=n; i++){
    row = "";
    for(j=1; j<=n; j++){
        if(i==1 || i==n){                                   //i for row
            row = row + "*" + " ";
        }
         else if(j==1 || j==n ){                            //j for column
            row = row + "*" + " ";
        }
        else{
            row = row + " " + " ";
        }
    }
    console.log(row)
}
console.log("-----------------------------------------")

/*17
Make a following Pattern
Input:
Enter number: 5

Output:
        *
      * *
    * * *
  * * * *
* * * * *
*/

n=5;
for(i=1; i<=n; i++){
    row = "";
    for(j=1; j<=n-i; j++){
        row = row + " " + " ";
    }
    for(k=1; k<=i; k++){
        row = row + "*" + " ";
    }
    console.log(row)
}
console.log("-----------------------------------------")

/*18
Make a following Pattern
Input:
Enter number: 5

Output:
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
*/

n=5;
for(i=1; i<=n; i++){
    row = "";
    for(j=1; j<=n-i; j++){
        row = row + " " + " ";
    }
    for(k=1; k<=i*2-1; k++){
        row = row + "*" + " ";
    }
    console.log(row)
}
console.log("-----------------------------------------")

/*19
Make a following Pattern
Input:
Enter number: 5

Output:
     *
   * * *
  * * * *
 * * * * *
*/
// python:
// row = int(input("Enter the number: "))
// for bar in range(1,row+1):
//     for space in range(1,row+2-bar):
//         print("",end=" ")
//     for rowmat in range(1,bar+1):
//         print("*",end=" ")
//     print("")
// """    

n = 5;
for (i=1; i<n; i++){
    row = "";
    for(k=1; k<n-i; k++){
        row = row + " ";
    }

    for(j=1; j<=i+1; j++){
            if(j==k-3){
                row = row + " "
            }else{
            row = row + "* "
            }
        }
        console.log(row)
}
console.log("-----------------------------------------")

/*20
Make a following Pattern
Input:
Enter number: 5

Output:
          * 
        * *
      * * *
    * * * *
  * * * * *

*/

n=5;
// row = "";
for(i=1; i<=n; i++){
    row = " ";

    for(k=1; k<=n-i; k++){
        row += "  "                     //2 space used
    }
    for(j=1; j<i+1; j++){
    row = row + " *";
    }
    console.log(row)
    // }
}
console.log("-----------------------------------------")

/*21
Make a following Pattern
Input:
Enter number: 5

Output:
               1  
            1  2
         1  2  3
      1  2  3  4
   1  2  3  4  5
*/

n=5;
for(i=1; i<=n; i++){
    row = "";
    for(k=1; k<=n-i; k++ ){
        row += "  "                 //2 space used
    }
    for(j=1; j<=i; j++){
        row += " "+j;
    }
    console.log(row)
}
console.log("-----------------------------------------")

/*22
Make a following Pattern
Input:
Enter number: 5

Output:
          * 
        * * *
      * * * * *
    * * * * * * *
  * * * * * * * * *
*/

n=5;
// row = "";
for(i=1; i<=n; i++){
    row = "";
    for(l=1; l<=n-i; l++){
        row += "  "
    }
    for(k=1; k<i; k++){
        row += " *"
    }
    for(j=1; j<=i; j++){
        row += " *";
    }
    console.log(row)
}
console.log("-----------------------------------------")


/*23
Make a following Pattern
Input:
Enter number: 5

Output:
     1  
    1  2
   1  2  3
  1  2  3  4
 1  2  3  4  5
*/

n=5;
for(i=1; i<=n; i++){
    row = "";
    for(k=1; k<=n-i; k++){
        row += " "
    }
    for(j=1; j<=i; j++){
        row += "  " + j;
    }console.log(row)
}
console.log("-----------------------------------------")


/*24
Make a following Pattern
Input:
Enter number: 5

Output:
               1  
            1  2  1
         1  2  3  1  2
      1  2  3  4  1  2  3
   1  2  3  4  5  1  2  3  4
*/

n=5;
for(i=1; i<=n; i++){
    row = "";
    for(l=1; l<=n-i; l++){
        row += "   ";
    }
    for(k=1; k<=i; k++){
        row += "  "+ k;
    }
    for(j=1; j<=i-1; j++){
        row += "  " +j;
    }console.log(row)
}
console.log("-----------------------------------------")


/*25
Reversed Pyramid Star Pattern
n=5

*********
 *******
  *****
   ***
    *
*/

n=5
for(i=n; i>=1; i--){
    row = "";
    for(k=1; k<=n-i; k++){
        row += " "
    }
    for(j=1; j<=i*2-1; j++){
        row += "*";
    }console.log(row)
}
console.log("-----------------------------------------")

/*26
Hollow square Star Pattern
n=5

 * * * * *
 *       *
 *       *
 *       *
 * * * * *
*/

n=5;
for(j=1; j<=n; j++){
    row = "";
    for(i=1; i<=n; i++){
        if(j==1 || j==5 || i==1 || i==5){
        row += " *";
        }
        else{
            row += "  "
        }
    }
    console.log(row)
}
console.log("-----------------------------------------")

/*27
 Hollow Right angle triangle pattern:

 *
 * *
 *   *
 *     *
 * * * * *
*/

n=5; 
for(j=1; j<=n; j++){
    row = "";
    for(i=1; i<=j; i++){
        if(i==1 || i==j || j==n){
        row += " *";
        }else{
            row += "  ";
        }
    }
    console.log(row)
}
console.log("-----------------------------------------")

/*28
Hollow Pyramid Star Pattern:

         *
       *   *
     *       *
   *           *
 * * * * * * * * *
 
*/
n=5;
for(i=1; i<=n; i++){
    row = "";
    for(k=1; k<=n-i; k++){
        row += "  ";
    }
    for(j=1; j<=i*2-1; j++){
        if(j==1 || j==i*2-1 || i==n){
        row += " *";
        }else{
            row +="  "
        }
    }
    console.log(row)
}
console.log("-----------------------------------------")

/*29

        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
*/

n=5;
for(i=1; i<=n-1; i++){
    row = "";
    for(k=1; k<=n-i; k++){
        row += "  "
    }
    for(j=1; j<=i*2-1; j++){
        row += "* ";
    }
    console.log(row)
}
for(l=n; l>=1; l--){
    d_row = "";
    for(m=1; m<=n-l; m++){
        d_row += "  "
    }
    for(p=1; p<=l*2-1; p++){
        d_row += "* "
    }    
    console.log(d_row)
}
console.log("-----------------------------------------")


/*30

        *
      *   * 
    *       *
  *           *
*               *
  *           *
    *       *
      *   *
        *
        
*/

n=5;
for(i=1; i<=n-1; i++){
    row = "";
    for(k=1; k<=n-i; k++){
        row += "  "
    }
    for(j=1; j<=i*2-1; j++){
        if(j==1 || j==i*2-1){
        row += "* ";
        }else{
            row += "  "
        }
    }
    console.log(row)
}
for(l=n; l>=1; l--){
    d_row = "";
    for(m=1; m<=n-l; m++){
        d_row += "  "
    }
    for(p=1; p<=l*2-1; p++){
        if(p==1 || p==l*2-1){
        d_row += "* "
        }else{
            d_row += "  "
        }
    }    
    console.log(d_row)
}
console.log("-----------------------------------------")

/*31

        *
      * * *
    *   *   *
  *     *     *
* * * * * * * * *
  *     *     *
    *   *   *
      * * *
        *

*/
n=5;
for(i=1; i<=n-1; i++){
    row = "";
    for(k=1; k<=n-i; k++){
        row += "  "
    }
    for(j=1; j<=i*2-1; j++){
        if(j==1 || j==i*2-1 || j==i){
        row += "* ";
        }else{
            row += "  "
        }
    }
    console.log(row)
}
for(l=n; l>=1; l--){
    d_row = "";
    for(m=1; m<=n-l; m++){
        d_row += "  "
    }
    for(p=1; p<=l*2-1; p++){
        if(p==1 || p==l*2-1 || p==l || l==n){
        d_row += "* "
        }else{
            d_row += "  "
        }
    }    
    console.log(d_row)
}
console.log("-----------------------------------------")


