// QUESTION 01 

document.write("<p>Question 01</p>");

var city = prompt("Enter Your City Name");

if (city == "Karachi") {
  alert("Welcome to the City of Lights")
}
else if (city == "Lahore") {
  alert("Lahore Lahore ay")
}
else if (city == "Islamabad") {
  alert("Welcome to the Capital")
}
else {
  alert("Enter Correct Name")
}


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


// QUESTION 02 

document.write("<p>Question 02</p>");

var gender = prompt("Enter Your Gender");

if (gender == "He") {
  alert("Good Morning Sir")
}
else if (gender == "She") {
  alert("Good Morning Ma'am")
}
else {
  alert("Enter Correct Gender")
}


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


// QUESTION 03

document.write("<p>Question 03</p>");

var color = prompt("Enter Traffic Signal Color");

if (color == "Red") {
  alert("Must Stop")
}
else if (color == "Yellow") {
  alert("Ready to Move")
}
else if (color == "Green") {
  alert("Move Now")
}
else {
  alert("Enter Correct Color")
}


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


// QUESTION 04

document.write("<p>Question 04</p>");

var fuel = +prompt("Enter Remaining Fuel in liters");

if (fuel < "0.25") {
  alert("Please refill the fuel in your car")
}
else {
  alert("Have " + (fuel - 0.25) + " liters Fuel till Reserve")
}


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


// QUESTION 06

document.write("<p>Question 06</p>");


var mark1 = +prompt("Enter First Subject Score");
var mark2 = +prompt("Enter Second Subject Score");
var mark3 = +prompt("Enter Third Subject Score");
var per1 = (mark1 / 100) * 100;
var per2 = (mark2 / 100) * 100;
var per3 = (mark3 / 100) * 100;
var t_perc = (per1 + per2 + per3) / 300 * 100



if (t_perc >= "80") {
  document.write("Marks Sheet");
  document.write("<br>");
  document.write("<br>");
  document.write("Total Marks : 300");
  document.write("<br>");
  document.write("Marks Obtained : " + (mark1 + mark2 + mark3));
  document.write("<br>");
  document.write("Percentage : " + t_perc + "%");
  document.write("<br>");
  document.write("Grade : A-One ");
  document.write("<br>");
  document.write("Remarks: Excellent");
}
else if (t_perc >= "70") {
  document.write("Marks Sheet");
  document.write("<br>");
  document.write("<br>");
  document.write("Total Marks : 300");
  document.write("<br>");
  document.write("Marks Obtained : " + (mark1 + mark2 + mark3));
  document.write("<br>");
  document.write("Percentage : " + t_perc + "%");
  document.write("<br>");
  document.write("Grade : A");
  document.write("<br>");
  document.write("Remarks: Good");
}
else if (t_perc >= "60") {
  document.write("Marks Sheet");
  document.write("<br>");
  document.write("<br>");
  document.write("Total Marks : 300");
  document.write("<br>");
  document.write("Marks Obtained : " + (mark1 + mark2 + mark3));
  document.write("<br>");
  document.write("Percentage : " + t_perc + "%");
  document.write("<br>");
  document.write("Grade : B");
  document.write("<br>");
  document.write("Remarks: You need to improve");
}
else {
  document.write("Marks Sheet");
  document.write("<br>");
  document.write("<br>");
  document.write("Total Marks : 300");
  document.write("<br>");
  document.write("Marks Obtained : " + (mark1 + mark2 + mark3));
  document.write("<br>");
  document.write("Percentage : " + t_perc + "%");
  document.write("<br>");
  document.write("Grade : Fail");
  document.write("<br>");
  document.write("Remarks: Sorry");
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");



// QUESTION 07

document.write("<p>Question 07</p>");

var num1 = 4;
var num2 = +prompt("Guess the Number");

if (num1 == num2) {
  alert("Bingo! Correct answer")
}
else {
  alert("Try Again")
}

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


// QUESTION 08

document.write("<p>Question 08</p>");

var num = +prompt("Check whether the number is divisible by 3");

if ((num % 3) == 0) {
  alert("Yes")
}
else {
  alert("Try Again")
}


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


// QUESTION 09

document.write("<p>Question 09</p>");

var num = +prompt("Check whether the number is ODD or EVEN");

if ((num % 2) == 0) {
  alert("EVEN")
}
else {
  alert("ODD")
}



document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


// QUESTION 10

document.write("<p>Question 10</p>");

var temp = +prompt("Enter todays Temperature");

if (temp > 40) {
  alert("It is too hot outside.")
}
else if (temp > 30) {
  alert("The Weather today is Normal.")
}
else if (temp > 20) {
  alert("Today's Weather is cool.")
}
else {
  alert("OMG! Today's weather is so Cool.")
}


document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


// QUESTION 11

document.write("<p>Question 11</p>");


var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var operator = prompt("Enter Operation ' + , - , * , / , % '")

if (operator == "+") {
  alert(num1 + num2)
}
else if (operator == "-") {
  alert(num1 - num2)
}
else if (operator == "*") {
  alert(num1 * num2)
}
else if (operator == "/") {
  alert(num1 / num2)
}
else {
  alert(num1 % num2)
}