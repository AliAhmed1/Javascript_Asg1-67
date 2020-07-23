//chap 38 - 42

// function power(a,  b)
// {


//     return Math.pow(a,b);
// }

// var num = +(prompt("Enter value : "))
// var pow = prompt("Enter power : ")

// var Ans = power(num , pow);
// alert(Ans);




// function leap(year) {

//     if (year % 4 == 0) {
//         alert("Leap year")

//     }
//     else {
//         alert("not leap year")
//     }

// }

// var yearvalue = prompt("Enter your year");
// leap(yearvalue);




// function area(a,b,c) {

//     var S = s(a,b,c);

//     return S*(S-a)*(S-b)*(S-c);

// }
// function s(a , b , c) {

//     return +(a+b+c)/2
// }

// var side1 = +(prompt("Enter side 1"))
// var side2 = +(prompt("Enter side 2"))
// var side3 = +(prompt("Enter side 3"))
// var finalArea = area(side1,side2,side3);
// alert("Area is " + finalArea);



// function vowel(val) { 
//     // var i = 0
//     // while (i < val.length) {

//     //     var removeVowel = val.charAt(i);
//     //     switch (removeVowel) {
//     //         case "a":
//     //             removeVowel = val.replace('a', '');
//     //         case "e":
//     //             removeVowel = val.replace('e', '');
//     //         case "i":
//     //             removeVowel = val.replace('i', '');
//     //         case "o":
//     //             removeVowel = val.replace('o', '');
//     //         case "u":
//     //             removeVowel = val.replace('u', '');

//     //     }
//     //     i++;
//     // }
//     return val.replace(/[aeiou]/g , '');
// }
// var val = prompt("Enter words to remove vowels");
// alert(vowel(val));



// function voweloccur(val) {
//     switch (val) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true
//         default:
//             return false

//     }
// }
// var val = prompt("Enter words to count vowels occurs with succession");
// var count=0;
// for(i=0 ; i< val.length ; i++)
// {
//     var firstchar = val[i]
//     var secondchar = val[i+1]

//     if( voweloccur(firstchar) == true && voweloccur(secondchar) == true)
//     {
//         count++;
//     }
// }
// alert(count);




// var cash = prompt("Enter money to withdraw : ")

// var hun = 100;
// var fifty = 50;
// var ten = 10;

// var huncount = 0;
// var fiftycount = 0;
// var tencount = 0;


// while (cash != 0) {
//     if (cash >= 100) {
//         huncount++;
//         cash -= hun;
//     }

//     else if (cash >= 50 && cash < 100) {
//         fiftycount++
//         cash -= fifty;
//     }
//     else{
//         tencount++
//         cash -= ten;
//     }

//     if(cash<10)
//     {
//         cash=0;
//     }
// }

// alert(huncount + " hundred notes \n" + fiftycount + " fifty notes \n" + tencount + " Ten notes" )




//chap 43 - 48

function alertbox() {
    alert("Thanks for buying")
}

function deletebtn1(){
    document.getElementById("myTable").deleteRow(1);

}
function deletebtn2(){
    document.getElementById("myTable").deleteRow(2);

}
function deletebtn3(){
    document.getElementById("myTable").deleteRow(3);

}
function deletebtn4(){
    document.getElementById("myTable").deleteRow(4);

}


var count=0;
function inclick(){
    document.getElementById('num').innerHTML=++count

}

function declick(){
    document.getElementById('num').innerHTML=--count
}