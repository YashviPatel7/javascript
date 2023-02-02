// date object

var now = new Date();
document.write(now+ "<br>");

// 15/12/2022 

const pastdate = new Date('12/15/2022');
document.write(pastdate+ "<br>");

// 3rd program

let todaydate = new Date();
document.write(todaydate.toDateString()+ "<br>");

let str = todaydate.toDateString();
let str1 = str.split(" ");

document.write(str1[0]+ "<br>");

let hours = now.getHours();
let minites = now.getMinutes();
let second = now.getSeconds();

if(hours> 12)
{
    hours=hours-12;
    document.write(hours +":PM "+ minites +" "+second+ "<br>");
}
else{
    document.write(hours +":AM "+ minites +" "+second+ "<br>");
}

// write a program to find squre root
let result = Math.sqrt(144);

document.write(result+ "<br>");
 
// write a program to find the maximum number to given number
let maxnum = Math.max(81,76,9,48,93)
document.write(maxnum);

//const array1 = [1, 3, 2];
//console.log(Math.max(...array1));

//random number

let randomnum = Math.random();
document.write(randomnum+ "<br>");


// write a program that checks if the given number is greater than 100 and less than 500

let num = 600;

if(num > 100 && num < 500 )
{
    document.write("number is between 100 and 500"+ "<br>")
}
else{
    document.write("number is not between 100 and 500"+ "<br>")
}

// write a function 
function equal(x,y)
{
    if(x===y)
    {
     document.write("true"+ "<br>");
    }
    else
    {
    document.write("false"+ "<br>");
    }
}
// return value 
equal(1,1);
equal(1,"1");