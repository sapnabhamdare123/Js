// 1) Given length and breadth of a rectangle, return the area of the rectangle.

// function printArea(length,breadth) {
//     return length * breadth;
// }
// const area = printArea(10,20);
// console.log("area of rectange ", area);



// 2) Take a number and print the square of the number.

// let printSquare = (a) => {
//     return a * a ;
// } 
// console.log(printSquare(7));



// 3) Take two numbers and only print the integer part when a is divided by b.

// function myfuncion(a,b) {
//     console.log(Math.floor(a/b));
// }
// myfuncion(15,4)



// 4)  Take a number and print out the last digit of the number.

// let printNumber = (a) => {
//     return a % 10;
// }
// console.log(printNumber(123984));




// 5)  Take a number and find the cube of that number.

// let printNumber = (a) => {
//     return a ** 3;
// }
// console.log(printNumber(5));



// 6) Take a 3 digit number and print the reverse of that number. Ex - 235 = 532

// let n = 789;
// let y=0,s;
// while(n>0) {
//     s = n % 10;
//     y = y * 10 + s;
//     n = Math.floor(n/10)
// }
// console.log(y);



// 7) Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7

// function myfuncion(n) {
//     while(n>10) {
//         n = Math.floor(n/10)
//     }
//     console.log(n);
// }
// myfuncion(6537)



// 8) Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7

// let n = 452,sum,a = n;
// while(n>=10) {   
//     n = Math.floor(n/10)  

// }
// a = a % 10;
// sum = a + n;
// console.log(sum);



// 9) Take salary of five employees and print the average salary of all the employees.

// function myfuncion(a,b,c,d,e) {
//     let sum  = a+b+c+d+e;
//     return sum / 5;
// }
// console.log(myfuncion(10,20,30,40,50));



// 10) Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;

// function myfuncion(a,b) {
//            a = a + b;
//            b = a - b;
//            a = a - b;
//            console.log(a,b);
// }
// myfuncion(5,15);






// if Else questions

// 1. Write a program that checks if a given number is even or odd.

//  let printSquare = (n) => {
//         if(n%2==0) 
//         {
//             console.log("even")
//         }
//         else {
//             console.log("odd")
//         }
//  } 
//  printSquare(8);


//2. Create a function that takes two numbers as parameters and returns the larger one.

// let printNumber = (a,b) => {
//     if(a>b) {
//         console.log(`a is larger one  ${a}`);
//     }
//     else {
//         console.log(`b is larger one ${b}` )
//     }

// }
// printNumber(4,7)



// 3. Write a function that determines if a given year is a leap year.

// let myfuncion = (n) => {
//     if(n%4==0 && n % 400) {
//         console.log("this is a leap year");
//     }
//     else{
//         console.log("this is not leap year");
//     }
// }
// myfuncion(2023)



// 4. Implement a program that checks whether a given character is a vowel or consonant.


// function myFunction(str) {
//     if(str=='a' || str =='e' || str =='i' || str =="o" || str =='u')
//     {
//         console.log(`this is vowel ${str}`);
//     }
//     else {
//         console.log(`${str} is consonant`)
//     }
// } 
// myFunction('b');



// 5. Create a function that takes three numbers as input and returns the largest among them.


// let max = 0;
// let min = 0;
// function myFunction(a,b,c) {
//     if(a>b) {
//         max = a;
//         min = b;
//     }
//     else {
//         max = b;
//         min = a;
//     }
//     if(c>max){
//         max = c;
//     }
//     return max;
//  }
//  console.log(myFunction(8,3,5));



// 6. Write a program that checks if a given number is positive, negative, or zero.

// let myFunction = (n) => {
//     if(n>0) {
//         console.log("positive");
//     }
//     else if (n<0) {
//         console.log("negative")
//     }
//     else {
//         console.log("Zero")
//     }
// }
// myFunction(0)



// 7. Implement a function that calculates the grade of a student based on their score.

// function myFunction(score) {
//     if(score>90) {
//         console.log("A");
//     }
//     else if(score > 70 && score<90)
//     {
//         console.log("b")
//     }
//     else {
//         console.log("c")
//     }
// }




//  9 .Write a function that checks whether a person is eligible to vote based on their age.

// function myFunction(age) {
//     if(age>=18) {
//         console.log("you are eligible for vote");
//     }
//     else {
//         console.log("you are not eligible for vote")
//     }
// }
// myFunction(15)




//10. Implement a program that determines the type of a triangle based on the lengths of its sides.

// function myFunction(a,b,c) {
//     if(a==b && b ==c) {
//         console.log("Equliaterl");
//     }
//     else  if(a==b ||  b==c || a ==b) {
//         console.log("Isosceles");
//     }
//     else {
//         console.log("scalen");
//     }
// }
// myFunction(70,70,70);
