/*console.log("Hello Brother");
console.log("I am Tanka Magar");
console.log("I am learning Java");
{
    let name = "Tanka Magar";
    console.log(name);
    const age = "18";
    console.log(age);
}
x = null;
console.log(x);
y = undefined;
console.log(y);
done = false;
not = true;
console.log(done, not);
const profile = {
    username: "@tanka.exe",
    isFollow: false,
    following: 78,
    followers: 46,
    posts: 1,
};
console.log(profile);
/*Artimetic Operators
let a = 5;
let b = 4;
console.log("a = ", a,"b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);
//Unary 
a++;
console.log("a = ", ++a);
//Assignment Operators
let c = 5;
let d = 5;

c*=4;
d%=4;
console.log("c = ", c);
console.log("d = ", d);*/

// comparison operators
// let a = 5;
// let b = 3;
// console.log("a === b", a === b); //false
// console.log("a != b", a != b);
// console.log("a !== b", a !== b);
// console.log("a == b", a == b);
// console.log("a > b", a > b);
// console.log("a >= b", a >= b);
// console.log("a < b", a < b);
// console.log("a <= b", a <= b);
// //logical operators
// let c = 6;
// let d = 5;
// let cond1 = c > d; //true
// let cond2 = c === 6; //true
// console.log("cond1 && cond2 = ",cond1 && cond2);
// console.log("cond1 || cond2 = ",cond1 || cond2);
// console.log("!(cond1 && cond2) = ",!(cond1 && cond2));
// // Conditional Operators
// let age = 68;
// //if statement
// if (age >= 18){
//     console.log("You Can Drive");
// }
// if (age < 18){
//     console.log("You Can't Drive");
// }
// //if else statement
// age = 16;
// if (age >= 18){
//     console.log("You Can Vote");
// } else {
//     console.log("You Can't Vote");
// }
// let num = 10;
// if(num % 2 === 0){
//     console.log("Is Even");
// } else {
//     console.log("Is Odd");
// }

// //else if statement
// let mode = "dai";
// let color;
// if (mode === "dark"){
//     color = "black"
// } else if (mode === "blue"){
//     color = "blue"
// } else if (mode === "green"){
//     color = "green"
// } else {
//     color = "white"
// }
// console.log(color);
// // ternary operators
// let age = 24;
// age >= 18 ? console.log("adult") : console.log("not adult");

// alert("hello");
// let num = prompt("enter a number:");
// if (num % 5 === 0){
//     console.log(num,"is multiple of 5.");
// } else {
//     console.log(num,"is't multiple of 5.");
// }

// //Q2 JS Simple program
// let score = 78;
// let grade;
// if(score >= 90 && score <= 100) {
//     grade = "A";
// } else if(score >= 70 && score <= 89) {
//     grade = "B";
// } else if(score >= 60 && score <= 69) {
//     grade = "C";
// } else if(score >= 50 && score <= 59) {
//     grade = "D";
// } else if(score >= 0 && score <= 49) {
//     grade = "F";
// }
// console.log("According to your score your grade is : ", grade);

// // For loop calculate sum of 1 to n
//  let sum = 0;
//  let n = prompt("Enter Random Number: ");
//  for(let i=1; i<=n; i++) {
//     sum = sum + i;
//  }
//  console.log("Sum : ", sum);
//  //infinite loop
//  //for(let i=1; i >= 0; i++) {
// //     console.log("i = ", i);
// //  }

// // while loop
// let me = 1;
// while(me <= 100) {
//     console.log("Tanka Dai");
//     me++;
// }
// //dowhile loop
// let mme = 11;
// do {
//     console.log("Tanka Dai");
//     mme++;
// }while (mme <= 10);

// // For of loop
// let str = "TankaDai";
// let size = 0;
// for (let val of str){
//     //iterator -> characters
//     console.log("val = ", val);
//     size++
// }
// console.log("String size= ", size); //8

// // for in loop
// let student = {
//     name: "Tanka Magar",
//     age: 18,
//     cgpa: 7.5,
//     isPass: true,
// };
// for (let key in student) {
//     console.log("key = ", key, "value = ", student[key]);
// }

// //Q1. print all even numbers 0 - 100
// for (let num = 0; num <= 100; num++){
//     if (num % 2 === 0){
//         //even numbers
//         console.log("num = ", num);
//     }
// }
// //Q2. print all odd numbers 0 - 100
// for (let num = 0; num <= 100; num++){
//     if (num % 2 !== 0){
//         //odd numbers
//         console.log("num = ", num);
//     }
// }
// //Q3 guss nbr game
// let gamenum = 47;
// let usernum = prompt("Guess the game number: ");

// while (usernum != gamenum){
//     usernum = prompt("You entered wrong number. Guess again: ");
// }
// console.log("Congratulations, You Entered the right number.");

// //strings
// let str = "TankaDai";
// console.log(str[3]);

// //template literals
// let str2 = `My fav movie is .....`
// console.log(str2);

// let obj = {
//     item: "Pen",
//     price: 20,
//  };
//  let output = `the cost of ${obj.item} is ${obj.price} rupees`
//  console.log(output);

//  console.log("the cost of ", obj.item, "is", obj.price, "rupees");

// //scape characters
// console.log("Tanka \nMagar");
// console.log("Tanka \tMagar");

// //string methods in JS
//  let str = "Tanka Dai";
//  str = str.toLocaleUpperCase();
//  console.log(str);
//  str = str.toLocaleLowerCase();
//  console.log(str);

//  let school = "      TU  Np     ";
//  console.log(school.trim());
// //slice
// let str = "01234567";
// console.log(str.slice(1,6));
// let name = "TankaDai";
// console.log(name.slice(0,5));
// //concat
// let str1 = "Tanka";
// let str2 = " Magar";
// let res = str1.concat(str2);
// console.log(res);
// console.log(str1+str2);
// //replace
// let str3 = "Tanka Magar";
// console.log(str3.replace("Magar", "Budha Magar"));
// //charAt
// let str4 = "IHaveSomething";
// console.log(str4.charAt(4))//e
// str4 = str4.replace("Something", "Nothing");
// console.log(str4)

// //practice Q1
// let fullname = prompt("enter your FullName without space");
// let username = "@" + fullname + fullname.length;
// console.log(username);


// //Array in JS
// let makrks = [90, 34, 89, 32, 98, 78, 23];
// console.log(makrks);
// console.log(makrks.length);
// let heros = ["Thor", "Hulk", "Batman", "IronMan", "SpiderMan", "Flash", "CaptainAmerica", "Superman"];
// console.log(heros);
// //Array indics
// console.log(heros[3]); console.log(heros[2]);
// //Looping Over an Array
// for(let idx = 0; idx<heros.length; idx++){
//     console.log(heros[idx]);
// }
// //for of
// let Universes = ["Earth808", "Moon545", "Earth67", "Earth090", "Mars567"];
// for (let universe of Universes){
//     console.log(universe.toUpperCase());
// }
// //Practice Q1
// let marks = [67, 78, 98, 60, 56, 80, 89, 57, 73];
// let sum = 0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);
// //Practice Q2
// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value ofter offer = ${items[i]}`);
//     i++;
// }
// //Accessing Array Elements
// const fruits = ['Apple', 'Banana', 'Orange'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// // array methods
// //push 
// let  mynames = ['Tanka', 'NotTanka'];
// mynames.push('TankaDai');
// console.log(mynames);

// //pop
// personalities = ['Tyler', 'Thomas', 'Stark'];
// removedpersons = personalities.pop();
// console.log(removedpersons);
// console.log(personalities);

// //toString
// let nbrs = [12, 23, 34, 45, 56, 67, 78, 89, 90];

// //concat
// let mrvlheros = ["Thor", "Hulk","IronMan", "SpiderMan", "CaptainAmerica",];
// let dcheros = [ "Flash", "Superman",  "Batman"];
// let heroos = mrvlheros.concat(dcheros);
// console.log(heroos);
// //unShift
// mrvlheros.unshift("Antman");
// console.log(mrvlheros);
// //shift
// mrvlheros.shift("Antman");
// console.log("deleted Antman", mrvlheros);
// //slice
// console.log(mrvlheros.slice(2, 4));
// //splice
// let nbbr = [0, 9, 8, 7, 6, 5, 4]
// nbbr.splice(2, 2, 90, 78);
// //add
// nbbr.splice(2, 0, 90, 78);
// //replace
// nbbr.splice(2, 1, 77,);
// //practice Q1
// let companies = ["Microsoft", "Apple", "Google", "IBM", "Netflix", "Daraz"] ;
// companies.shift();
// companies.splice(5, 1, "Amazon");
// companies.push("Meta");


// //functions in JS
// function myFunction(){   //parameter
//     console.log("This is my function1.");
//     console.log("This is my function1 too.");
// }
// myFunction();
// function myFunction2(msg){
//     console.log(msg);
// }
// myFunction2("Hey");
// //function for sum
// function sum(x, y){
//     //local variables -> scope
//     console.log(x + y);
// }
// function summ(x, y){
//     s = x + y;
//     return s;
// }
// let val = summ(4, 6);
// console.log(val);
// // arrow function
// function suum(a, b){ //sum fnx
//     return a + b;
// }
// summ = (a, b) =>{ //sum fnx
//     return a + b;

// // }

// function mul(a, b){ //sum mlty
//     return a * b;

// }
// const printy = () => console.log("Hello");
//  //forEach loop in arays
// let arr = [ 1, 12, 23, 34];
// arr.forEach((val) => {
//     console.log(val);
// });
// let arr2 = ["Someone", "Noone", "Somewhere", "Nowere", "Nobody"];
// arr2.forEach((val, idx, arr2) => {
//     console.log(val.toUpperCase(), idx, arr2);
// });
// //find squae of array numbers using forEach loop
// let nbrs = [6767, 9898];
// nbrs.forEach((nbrs) => {
//     console.log(nbrs * nbrs);
// });
// let num = [455, 768];
// let calSq = (num) => {
//     console.log(num * num);
// }
// num.forEach(calSq);

// //Map array method
// let nums = [23, 55, 49, 12, 43, 33, 28];
// let neArr = nums.map((val) => {
//     return val;
// });
// console.log(neArr);

// //filter array method
// //for even
// let numbs = [20, 55, 48, 23, 49, 12, 43, 33, 28];
// let newnum = numbs.filter((val) =>{
//     return val % 2 === 0;
// });
// console.log(newnum);
// //for odd
// let new1num = numbs.filter((val) =>{
//     return val % 2 !== 0;
// });
// console.log(new1num);
// //grater than 40
// let new2num = numbs.filter((val) =>{
//     return val > 40;
// });
// console.log(new2num);

// // reduce method
// const array1 = [1, 2, 3, 4];
// const initialvalue = 0;
// const sumofinitial =array1.reduce(
//     (accumlator, currentValue) => accumlator + currentValue ,
//     initialvalue,

// );
// console.log(sumofinitial);//10 ans

// let arr = [2, 5, 7, 9, 5, 3]
// const output = arr.reduce((prev, curr) =>{
//     return prev + curr;
// });
// console.log(output);
// const outputt = arr.reduce((prev, curr) =>{
//     return prev > curr ? prev : curr;
// });
// console.log(outputt);
// //practice q1
// let marks = [98, 76, 54, 76, 99, 9, 55];
// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers);
// //practice q2
// let n = prompt("enter number:");
// let arr2 = [];
// for(let i = 1; i<=n; i++) {
//     arr2[i - 1] = i;
// }
// console.log(arr2);
// let summ = arr2.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(summ);
// let factorial = arr2.reduce((res, curr) => {
//     return res * curr;
// });
// console.log(factorial);
// //window 
// console.log(window);
// window.console.log("Hello");
// /*-DOM (Document objet model) method to access obj in 
// JS tree like structure to dynamic -manipulation*/
// window.console.log(document.body.childNodes[1]);
// console.dir(window);
// //access element of html
// //get element by id
// let header = document.getElementById("id1");
// console.dir(header);
// let headerr = document.getElementById("ir1");
// console.dir(headerr);

// //get element by using class name
// let div12 = document.getElementsByClassName("ddd");
// console.dir(div12);
// //get element by tag mame
// let boody = document.getElementsByTagName("button");
// console.dir(boody);

// //query selector
// let firstEl = document.querySelector("a"); //first element
// console.dir(firstEl);
// let allEl = document.querySelectorAll("a"); //first element
// console.dir(allEl);
// let fiirstEl = document.querySelectorAll(".logo");//for class
// console.dir(fiirstEl);
// let fiiirstEl = document.querySelector("#id1"); //for id
// console.dir(fiiirstEl);
// //properties of DOM Manupulation
// //parent child siblings imp for dom tree
// let nav = document.querySelector("div");
// console.dir(nav);

// // practice questions 1
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "By Tanka Magar";
// // practice questions 2
// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for (div of divs) {
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }
// //Attributes in DOM Manipulation
// //get attribute
// let h33 = document.querySelector("h3");
// let idd = h33.getAttribute("h33");
// console.log(idd);
// //set attribute
// console.log(h33.setAttribute("id", "noh3"));

// //style
// let div = document.querySelector("#boxx");
// div.style.backgroundColor = "green";
// div.style.fontSize = "26px";
// div.style.height = "120px";
// div.style.width = "120px";
// div.innerText = "Hello!";
// //incert element 
// let newbtn = document.createElement("button");
// let newbtn2 = document.createElement("button");
// let newbtn3 = document.createElement("button");
// let newbtn4 = document.createElement("button");
// let newh1 = document.createElement("h1");
// newbtn.innerText= "click me!";
// newbtn2.innerText= "click me!";
// newbtn3.innerText= "click me!";
// newbtn4.innerText= "click me!";
// newh1.innerHTML= "<i>Hi everyone!</i>";
// console.log(newbtn);
// let body = document.querySelector("body").prepend(newh1);
// div.append(newbtn);
// div.prepend(newbtn2);
// div.before(newbtn3);
// div.after(newbtn4);
// //delete
// let para = document.querySelector("p");
// para.remove();


// // Event in Js 
// /*Mouse Events
// Keybord Events
// Form Events
// Print event & More*/

// //Event Handeling in JS
// let btn1 = document.querySelector(".btn1");
// btn1.onclick = () => {
//     console.log("button 1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }
// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("You Are inside Div");
// }
// //event object in JS
// let btn2 = document.querySelector(".btn2");
// btn2.ondblclick = (evt) => {
//     console.log("button 2 was clicked");
//     console.log(evt);
//     console.log(evt.clientX, evt.clientY);
//     console.log(evt.type);
//     console.log(evt.target);
// }

// //Event Listeners
// //the callback reference should be same to remove
// let btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked Handler 1");
// });
// btn1.addEventListener("click", (evt) => {
//     console.log("btn1 was clicked Handlerr 2");
//     console.log(evt.type)
//     console.log(evt)
// });
// const handler3 = () => {
//     console.log("btn1 was clicked Handler 3");
// }
// btn1.addEventListener("click", handler3);
// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked Handler 4");
// });
// btn1.addEventListener("click", () => {
//     console.log("btn1 was clicked Handler 4");
// });
// btn1.removeEventListener("click", handler3);

// //practice toggle btn for dark mode
// // toggle is switch
// let modebtn = document.querySelector(".mode");
// let currmode = "light"; 
// modebtn.addEventListener("click", () => {
//     if(currmode === "light") {
//         currmode = "dark" ;
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {currmode = "light" ;
//     document.querySelector("body").style.backgroundColor = "white";}

// console.log(currmode);
// });

//guess number game
const buttons = document.querySelectorAll('.btn');
const message = document.getElementById('message');
let secretNumber = Math.floor(Math.random() * 3) + 1;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
buttons.forEach(button => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    button.textContent = numbers[randomIndex];
    numbers.splice(randomIndex, 1);
    button.addEventListener('click', function () {
        const selectedNumber = parseInt(button.textContent);
        if (selectedNumber === secretNumber) {
            button.style.backgroundColor = 'green';
            message.textContent = 'You chose the right number!';
        } else {
            button.style.backgroundColor = 'red';
            message.textContent = 'Wrong number chosen!';
        }
    });
});