// // chapter 1
// // 1
// alert("Hello, how are you");

// // 2
// alert("Error! Please enter a valid password");

// // 3 4
// alert("Welcome to Js land.. \n Happy coding");
// alert("Happy coding");



// // chapter 2
// // 1
// var username;
// // 2
// var myname="aliahmed";
// var fulname=myname;
// // 3
// var message;
// message="hello world";
// alert(message);
// // 4
// var name="john doe";
// var age="15 year old";
// var pro="certified"

// alert(name);
// alert(age);
// alert(pro);

// // 5
// var b="PIZZA";
// alert(b +"\n"+ b.slice(0,4) +"\n"+ b.slice(0,3) +"\n"+ b.slice(0,2) +"\n"+ b.slice(0,1));

// // 6
// var email=  "example@example.com";
// alert("My email address is " + email);

// // 7
// var book="A smarter way to learn JavaScript"
// alert("I am tring to learn from the book" +book);

// // 8
// document.write("YaY I can write through java script");


// // 9
// var z="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" ;
// alert(z);




// // chapter 3
// // 1
// var age=16;
// alert("I am " + age+ " years old");

// // 2
// var n=14;
// alert("You have visited this site " + n + " times");

// // 3
// var birthyear=1998;
// document.write("My birth year is " +birthyear+ "in number");

// // 4
// var visitorname="john";
// var product ="T-shirt";
// var quantity= 4;
// document.write(visitorname + "has ordered"+ quantity + product +"on XYZ clothing store");

// // chapter 4
// // 1
// var a, b, c;

// // 2
// var b1 , hi , $c , myVar , _d;
// // var (T , %5 , *u , !q , -var;

// // 3
// document.writeln("Rules for stating js varables");
// document.writeln("Variable only contain , $ , _ , number");
// document.writeln("variable can start with $ , _ , alphabet");
// document.writeln("variables names are case sensitive");
// document.writeln("should not incude JS keywords");



// // chapter 5
// // 1
// var num1 , num2;
// num1=prompt("Enter number1");
// num2=prompt("Enter number2");
// var sum=(+num1)+(+num2);
// document.writeln("Sum =" +sum);

// // 2

// mul=num1*num2;
// minus=num1-num2;
// div=num1/num2;

// // 3

// var val=5;
// var a =val;
// var b =++val;
// document.writeln("Initial value is " + a );
// document.writeln("after increment  " + b);
// var val2= b + ++b;
// document.writeln("after addition " + val2);
// document.writeln("after decrement " + --val2);
// document.writeln("remainder" + val2%3);

// // 4
// var cost=600;
// var quantity=5;
// var total=cost*quantity;
// document.write("Total cost is "+total);

// 5
// var num=4;
// for(var i =1 ; i<=10 ; i++)
// {

//     document.write("4 *" + i + "=" + num*i + "<br>");
// }


// 6
// var C=25;
// var F;

// F=(C* 9/5) +32;
// document.write(C +" degree C is " + F + " Farenhite <br>" );

// F=70;
// C=(F-32)* 5/9;
// document.write( F +" farenhite is "  + C + " degree C")

// 7
// var priceitem1 = 650;
// var priceitem2 = 100;
// var quantity1=3;
// var quantity2=7;
// var charges=100;

// total= +((priceitem1*quantity1) + (priceitem2*quantity2) +charges);

// document.write("Total cost is " +total);



// 8
// var totalmarks=980;
// var obtainedmarks=804;

// var per= (obtainedmarks/totalmarks) *100;
// document.write("percentage is" +per);


// 9
// var dollar_quan=10;
// var dollar =104.80;
// var riyal_quan=25;
// var riyal =28;

// var pak=+((dollar_quan*dollar)+ riyal_quan*riyal);

// document.write("Total currency in PKR is" + pak);


// 10
// var num=0;
// num=+(((num+5)*10)/2);


// 11
// var currentyear =2016;
// var birthyear= 1992;
// var age=0;
// for(var i =0 ; i<currentyear ; i++)
// {
//     birthyear++;
//     age++;

//     if(birthyear==currentyear)
//     {

//         break;
//     }
// }
// document.write("Your age is "+age);

// 12
// var r=20;
// var pi=3.142;
// var c=2*pi*r;
// var a=pi*(r*r);

// document.write("radius is" +r +"<br>");

// document.write("circumference is" +c +"<br>");

// document.write("ares is" +a);



// // 13
// var favsnack= "chocolate chip";
// var currentage= 15;
// var estimateage=65;
// var snacksperday=3;
// var restoflife= (estimateage-currentage)*snacksperday;
// document.write("You will need "+ restoflife + favsnack+ " to last you until the ripe old age of " + estimateage);

// chapter 6-9


//  var a=10
//  document.write("a is" + a + "<br>");
//  document.write("++a is" + ++a + "<br>");
//  document.write("Now value is " + a+ "<br>");
//  document.write("a++ is" + a++ + "<br>");
//  document.write("Now value is " + a + "<br>");
//  document.write("--a is" + --a + "<br>");
//  document.write("Now value is " + a + "<br>");
//  document.write("a-- is" + a-- + "<br>");
//  document.write("Now value is" + a + "<br>");


// var sub1= prompt("Enter subject 1");

// var sub2= prompt("Enter subject 2");

// var sub3= prompt("Enter subject 3");

// var marks=100;

// var obtsub1=prompt("Enter obtained for 1");

// var obtsub2=prompt("Enter obtained for 2");

// var obtsub3=prompt("Enter obtained for 3");

// var per1= (obtsub1/marks) *100;

// var per2= (obtsub2/marks) *100;

// var per3= (obtsub3/marks) *100;

// var totalmarks = 300;

// var totalobt= +(obtsub1) + +(obtsub2) +  +(obtsub3);

// var totalper = (+(per1)+ +(per2) +  +(per3))/3;


// document.writeln("Subjects" + "   " + "Total marks" + "   "+ "obtained marks" + "    " + "percentage" + "<br>");

// document.writeln(sub1 + "   " + marks + "   "+ obtsub1 + "    " + per1 + "<br>");

// document.writeln(sub2 + "   " + marks + "   "+ obtsub2 + "    " + per2 + "<br>");

// document.writeln(sub3 + "   " + marks + "   "+ obtsub3 + "    " + per3 + "<br>");

// document.writeln("          " + totalmarks + "   "+ totalobt + "    " +  totalper + "<br>");


// chapter9-11

// var a = 4; 

// if (++a === 5){ alert("given condition for variable a is true"); } 


// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 

// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 

// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 

// if (true){ alert("True"); } if (false){ alert("False"); } 


// if("car" < "cat"){ alert("car is smaller than cat"); } 




// var x=prompt("Enter any number");

// if(x%3==0)
// {
//     document.writeln("Divisible by 3");
// }

// else{

//     document.writeln("not Divisible by 3");
// }



// var firstnum = prompt("Enter first number");

// var optr = prompt("Enter operator");


// var Secondnum = prompt("Enter Second number");

// if(optr == '+')
// {
//     alert(+(firstnum) + +(Secondnum));

// }

// else if(optr == '-')
// {
//     alert(firstnum - Secondnum);

// }
// else if(optr == '*')
// {
//     alert(firstnum * Secondnum);

// }
// else if(optr == '/')
// {
//     alert(firstnum / Secondnum);

// }

// else{
//     alert("Error");
// }



// chapter 12-13

// var x = prompt(" Enter any word or number ");


//     var a = x.charCodeAt();

//     if(a >=65 && a<=90)
//     {

//         alert("Upper case");  
//     }
//     else if(a >=97 && a<=122)
//     {

//         alert("Lower case");

//     }

//     else if(a >=31 && a<=47 || a>=58 && a<=64 || a>=123 && a<=127)
//     {
//         alert("special character");

//     }

//     else if(a>=48 && a<=57)
//     {
//         alert("number");

//     }

//     else{
//         alert("other words");
//     }



// var num=prompt("Enter any number positive or negative");

// var numbers1 = /^[+]?[0-9]+$/;

// var numbers2 = /^[-]?[0-9]+$/;

// if(num.match(numbers1))
// {
//     alert("Positive");
// }

// else if (num.match(numbers2))
// {
//     alert("Negative");
// }

// else{
//     alert("Error");
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }


// chapter 14-16
// var arr = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.phil" , "Phd"];


// for(var i = 0 ; i < 8 ; i++)
// {
//     document.write(i + ") " + arr[i] + "<br>");

// }






// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Pesahawar"];
// var selected_cities = [cities[2] , cities[3]];

// document.write(cities + "<br>"+ selected_cities);


// var arr = ["This" ,  "is" , "my"  , "cat"]; 
// document.write(arr.join());

// for(i=0 ; i<arr.length ; i++)
// {
//     document.write(arr[i] + " ");
// }


// var devices = ["Keyboard" ,"mouse" ,"printer","monitor"]

// for(i=0 ; i<devices.length ; i++)
// {
// document.write(devices[i]+ "<br>");
// }

// document.write("<br>");

// for(i=devices.length-1 ; i>=0 ; i--)
// {
// document.write(devices[i] + "<br>");
// }


// var score = [320 , 240 ,123 , 456 , 500]
// document.write(score.sort());



// chapter 17-20

// var arr = [[0 , 1 , 2 , 3] , [1,0,1,2] , [2,1,0,1]]

// for(var i=0 ; i<arr.length ; i++)
// {
// document.write(arr[i] + "<br>");
// }



// for(var i = 1 ; i <=10 ; i++ )
// {
//     var x = 2;
//     document.write(i*x + "K" + " ,");
// }


var a = [24, 53, 78, 91, 12]

var small = a[0];
var large = a[0];

for(var i = 0 ; i< a.length ; i++)
{
    if(a[i]< small)
    {
        small = a[i];
    }

   else
   {
       large =a[i];
   }
}

document.write("large = " + large)

document.write("small = " + small)