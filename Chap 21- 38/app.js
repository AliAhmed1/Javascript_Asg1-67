// chapter 21-25
// var firstName = prompt("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = firstName + " "+ lastName;
// alert("Greeting " + fullName);


// var mobile = prompt("Enter your favourite mobile");
// document.write(mobile + "<br>" + mobile.length);


// var country = "pakistani";
// var indx = country.indexOf("n");
// alert("Index of n is " + indx);


// var greet = "Hello world";
// alert(greet.lastIndexOf("l"));

// var country = "pakistani"
// alert(country.charAt(3));


// var city = "hyderabad"
// var newcity =city.replace("hyderabad","Islamabad");
// alert(newcity);


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g , "&"); 
// alert(newMessage);


// var stringOf = "472";
// var number = parseInt(stringOf);
// console.log(number);


// var number = 34.84;
// alert(number.toString().replace(/\./g , ""));


// var username = prompt("Enter your username");
// if(username.charCodeAt()==33 || username.charCodeAt()==44 || username.charCodeAt()==46 || username.charCodeAt()==64){
//     alert("Not valid");
// }
// else{
//     alert("valid");
// }



// var password = prompt("Enter your password");
// var intvalue = false;
// var charvalue = false;
// for (var i = 0; i < password.length; i++) {
//     if (password.charAt(5) == "") {
//         alert("at least 6 characters required");
//         break;
//     }

//     if (password.toString().charAt(0).charCodeAt() >= 48 && password.toString().charAt(0).charCodeAt() <= 57) {
//         alert("cannot start with numbers");
//         break;

//     }

//     for (var i = 0; i < password.length; i++) {
//         if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90 || password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
//             charvalue = true;
//             break;
//         }
//     }
//     for (i = 0; i < password.length; i++) {
//         if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
//             intvalue = true;
//             break;
//         }
//     }

//     for (i = 0; i < password.length; i++) {
//         if (intvalue == false || charvalue == false) {
//             alert("Must contain numbers and letters")
//             break;
//         }
//     }
//     break;
// }
// if (intvalue == true && charvalue == true) {
//     alert("valid password")
// }


// chapter 26-30

// var number = 3.4556546;
// alert(Math.round(number));
// alert(Math.floor(number));
// alert(Math.ceil(number));


// var number;
// var ran1 = Math.random();
// var ran2 = Math.random();
// var dice1=1;
// var dice2=1;

// for(var i=0 ; i<6 ; i++)
// {
//     dice1=ran1+dice1;
//     dice2=ran2+dice2;
// }

// var ans1 = Math.floor(dice1);
// var ans2 = Math.floor(dice2);
// alert("dice 1 = "+ ans1 + " \n" + "dice 2 =" + ans2);


// var number = Math.random();
// var final = Math.round(number);

// if(final < 1)
// {
//     alert("Heads");
// }
// else{
//     alert("tails");
// }



// var number = Math.random();
// var value=1;
// for(var i=0 ; i<100 ; i++)
// {
//     value = value + number;
// }
// var answer = Math.floor(value);
// alert(answer);



// var number = Math.random();
// var value=1;
// for(var i=0 ; i<10 ; i++)
// {
//     value = value + number;
// }

// var answer = Math.floor(value);
// console.log(answer);
// var userans = prompt("Enter number between 1 to 10");

// if(answer==userans)
// {
//     alert("congratulation ! you win")
// }
// else{
//     alert("loser!");
// }


// chapter 31-34

// var thedate= new Date();
// alert(thedate);

// var themonth= thedate.getMonth();
// // alert(themonth)
// if(themonth==5)
// {
//     alert("June");
// }



// var thedate= new Date();
// var theday;
// theday= thedate.toString().slice(0,3);
// alert("Today is " + theday);


// var theday = new Date().getDay();
// console.log(theday);
// if(theday == 0 || theday == 5)
// {
//     alert("Its funday")
// }
// else{
//     alert("normal day")
// }



// var theday = new Date().getTime();
// var theminute = theday/(1000*60)
// alert(theminute);



// var thetime = new Date().getHours();
// if(thetime >=0 && thetime<12)
// {
//     alert("It's AM")

// }
// else{
//     alert("It's PM")
// }



// var day = new Date("December 31, 2020");
// alert(day);



// var day = new Date("June 18, 2015");
// var thetoday = new Date();
// var sinceday2 = thetoday.getTime();
// // alert(day);
// var sinceday= day.getTime();
// var newday = sinceday2 - sinceday;

// var finalday = newday/(1000 * 60 * 60 * 24);
// alert(parseInt(finalday));



// var thetime = new Date();
// var actualtime = thetime.getHours();
// var thetime2 = new Date();
// var pretime = actualtime - 1;
// thetime.setHours(actualtime);
// thetime2.setHours(pretime)
// alert(thetime + "\n previous one hour time \n"+ thetime2);



// var day = new Date("October 01, 1998");
// var thetoday = new Date();
// var sinceday2 = thetoday.getTime();
// // alert(day);
// var sinceday= day.getTime();
// var newday = sinceday2 - sinceday;
// var finalday = newday/(1000 * 60 * 60 * 24*365);
// alert(parseInt(finalday));


// // chapter 34-38
// function greet(firstname , lastname)
// {
//     return firstname + lastname
// }

// var fname = prompt("Enter firstname");
// var lname = prompt("Enter lastname");

// var fullName = greet(fname , lname);
// alert("Greetings to " + fullName);

// function factorial(num)
// {
//     if (num === 0)
//       { return 1; }
//     else
//       { return num * factorial ( num - 1 ); }
// }

// var num = prompt("Enter Number for factorial");
// var result = factorial(num);
// alert(result)



// function hypotenuse(per , base)
// {

//     return Math.sqrt(square(per) + square(base));
// }

// function square(num)
// {
//     return num * num;
// }

// var pervalue = prompt("Enter perpendicular");
// var basevalue = prompt("Enter Base");

// var finalhypo = hypotenuse(pervalue , basevalue);
// alert("Answer is " + finalhypo);


// function palindrome(word)
// {
//     var j = word.length;
//     var right = false;
//     for(var i=0 ; i<word.length ; i++)
//     {
//         if(word[i] == word[j-1])
//         {
//             right = true;
//         }
//         else{
//             return "Not a palindrome";
//         }
//         j--;  
//     }

//     if(right==true){
//         return "Palindrome";
//     }
// }

// var word = prompt("Enter any palindrome word");
// var result = palindrome(word);
// alert(result);


// function longeststring(str) {
//     for (i = 0; i < str.length; i++)
//      {
//          if(str[i] == " ")
//          {
//              var string = str[i+1] - str[str.length];
//              return string;
//          }
//          else{
//              return "longest it self";
//          }
//     }
// }

// var str = prompt("Enter your string");
// alert(longeststring(str));


// function theLongestWords (phrase) {
//     let arr = phrase.split(" ");
    
//     let longestSize = 0;
//     let longestWords = [];
    
//     for (var i = 0; i < arr.length; i++) {
//     if (arr[i].length === longestSize) {
//     longestWords.push(arr[i]);
//     } else if (arr[i].length > longestSize) {
//     longestSize = arr[i].length;
//     longestWords = [];
//     longestWords.push(arr[i]);
//     }
//     }
    
//     return longestWords;
//     }
    
//     var result = prompt("Enter your string");
//     alert("The longest word(s): " + theLongestWords(result));