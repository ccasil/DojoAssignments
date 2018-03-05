// Setting and Swapping
var myNumber = 42;
var myName = "Kyle";
var temp = 0;
temp = myNumber;
myNumber = myName;
myName = temp;
var arr = [myNumber, myName]
console.log (arr);

//Print -52 to 1066
for (var i=-52; i<=1066; i++){
    console.log (i);
}

//Don't Worry, Be Happy
function beCheerful(){
    for (var i=0; i<=98; i++){
        console.log ("good morning!");
    }
}

//Multiples of Three -- but Not All
for (var i=-300; i<=0; i++){
    if (i == -6 || i ==-3){
        continue;
    }
    if (i%3 ==0){
        console.log (i);
    }
}

//Printing Integers with While
var num = 2000;
while (num <=5280){
    console.log(num);
    num +=1;
}

//You Say It's Your Birthday *****
function birthday (birth1,birth2)
if (birth1 == 9 || birth1 == 29 || birth2 == 9 || birth2 == 29){
    console.log ("How did you know?")
}else{
    console.log ("Just another day....")
}

//Leap Year *****
function leapYear(){
    var year = 1;
    while (year>0){
        if ( year%4==0 || year%400==0){
            console.log (year + " is a leap year");
            year++;
        }
        else if (year%100==0){
            continue;
        }
    }
}

//Print and Count
var count = 0;
for (var i = 512; i<=4096; i++){
    if (i%5==0){
        console.log (i);
        count++;
    }
}
console.log(count);

//Multiples of Six
var multiple = 6;
while (multiple<= 60000){
    if (multiple%6==0){
        console.log (multiple);
        multiple++;
    }
}

//Counting, the Dojo Way
for (var i=1; i<=100; i++){
    if (i%10==0){
        console.log ("Coding Dojo");
    }
    else if (i%5==0){
        console.log ("Coding");
    }
    else{
        console.log(i);
    }
}

//What Do You Know? *****
function know (incoming){
    console.log (incoming);
}

//Whoa, That Sucker's Huge...
var sum = 0;
for (var i=-300000; i>=300000; i++){
    if (i%2==1){
        sum = sum + i;
    }
}
console.log (sum);

//Countdown by Fours
count = 2016
while(count > 0){
    console.log (count);
    count= count - 4;
}

//Flexible Countdown
/*count = highNum
while (count > lowNum){
    console.log (count);
    count= count - mult;
}
*/
for (var i = highNum; i >= lowNum; i= i - mult){
    console.log (i);
}

//The Final Countdown *****
/*param1= multiples
param2= high number
param3= low number
param4= skip*/
function finalCountdown(param1, param2, param3, param4){
    count = param2; //count = 5
    while (count < param3){ //5<17
        if (param4){ //skip 9
            continue;
        }
        if (count%param1 == 0){ //if count%3 ==0
            console.log (count);
        }
    count++;
    }
}

//Countdown
function countdown (num){
    var arr = [];
    for (var i = 10; i>=0; i--){
        arr.push(i);
    }
    console.log(arr);
    console.log(arr.length);
}

//Print and Return
function print (first,second){
    console.log (first);
    return second;
}

//First Plus Length
function plus (arr){
    return arr[0]+arr.length;
}

//Values Greater than Second 00
var arr = [1,3,5,7,9,13];
var count = 0;
for (var i=0; i<=arr.length-1; i++){
    if (arr[1]<arr[i]){
    console.log (arr[i]);
    count++;
    }
}
console.log (count);

//Values Greater than Second, Generalized
function greater (arr){
var count = 0;
var newArr = [];
if(arr.length>0){
    for (var i=0; i<=arr.length; i++){
        if (arr[1]<arr[i]){
            console.log (arr[i]);
            count++;
            newArr.push(arr[i]);
        }
        console.log (count);
        return newArr;
    }    
}else{
    console.log ("array is only one element long.")
}
}

//This Length, That Value
function lengthValue (num1.num2){
    var arr = [];
    for(i = 0; i <= num1; i++){
        arr[i] = num2;
    }
}

//Fit the First Value
function first (arr){
    if (arr[0] > arr.length){
        console.log ("Too big!");
    }
    if (arr[0] < arr.length){
        console.log ("Too small!");
    }
    else{
        console.log ("Just right!");
    }
}

//Farenheit to Celsius
function fahrenheitToCelsius (fDegrees){
    var celsius = (5/9)(fDegrees)-32
    return celsius;
}

//Celsius to Farenheit
function celsiusToFahrenheit (cDegrees){
    var fahrenheit = (9/5)(cDegrees)+32
    return celsius;
}

//Biggie Size
function makeItBig (arr){
    for (var i=0; i<= arr.length; i++){
        if (arr[i]>0){
            arr[i] = "big";
        }
    }
}

//Print Low, Return High
function printLowReturnHigh(arr){
    var min = arr[0];
    var max = arr[0];
    for(var i= 0; i < arr.length; i++){
        if (min>arr[i]){
            min = arr[i];
            console.log(min);
        }
        if (max<arr[i]){
            max = arr[i];
            return max;
        }
    }
}

//Print One, Return Another
function oneAnother(arr){
    console.log (arr[arr.length-2])
    for (var i = 0; i < arr.length;){
        if (arr[i]%2 == 1){
            return arr[i];
        }
    }
}

//Double Vision
function double(arr){
    var newarr = [];
    var temp = 0;
    for (var i = 0; i < arr.length; i++){
        temp = arr[i] * 2;
        newarr.push(temp);
    }
    console.log (newarr);
}

//Count Positives
function countPositives (arr){
    var count = 0;
    for (i=0; i <arr.length; i++){
        if (arr[i]>0){
            count++;
        }
    }
    arr[arr.length-1] = count;
}
return arr;

//Even and Odds
function evenOdd(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i]%2==1 && arr [i+1]%2==1 && arr[i+2]%2==1){
            console.log ("That's odd!");
        }
        if (arr[i]%2==0 && arr [i+1]%2==0 && arr[i+2]%2==0){
            console.log ("Even more so!");
        }
    }
}

//Increment the Seconds
for (var i = 0; i < arr.length; i++){
    if (arr[i%2 == 1]){
        arr[i] = arr[i] + 1;
        console.log(arr[i]);
    }
    return arr;
}

//Previous Lengths
function previousLengths(arr){
    var previouslength = 0;
    for (var i = 0; i < arr.length; i++){
        previouslength = string.length(arr[i-1]);
        arr[i] = previouslength;
    }
    return arr;
}

//Add Seven to Most
function seven(arr){

}

//Reverse Array

//Outlook:Negative

//Always Hungry
function hungry(arr){
    for (var i = 0; i <arr.length; i++){
        if (arr[i]=="food"){
            console.log ("yummy");
        }
        else{
            console.log ("I'm hungry");
            break;
        }
    }
}

//Swap Toward the Center

//Scale the Array
function scaletheArray(arr,num){
    for(var i =0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}