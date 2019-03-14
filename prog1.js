/************
progrom 1
*********/
function onSubmit1()
{
console.log('i am inside the function');

//document.getElementById("myform1").submit();

var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var time = document.getElementById("time").value;

document.getElementById("output1").innerHTML = principal * rate * time / 100;
}


/************
progrom 2
*********/

function onSubmit2()
{
console.log('i am inside the function2');

//document.getElementById("myform1").submit();

var basic = document.getElementById("basicsal2").value/1;
var hra = document.getElementById("hra2").value * basic / 100;
var da = document.getElementById("da2").value* basic / 100;
var pf = document.getElementById("pf2").value* basic / 100;
var grossSal = basic + hra + da + pf;
document.getElementById("output2").innerHTML = grossSal;
}


/************
progrom 3
*********/


function onSubmit3()
{
console.log('i am inside the function3');
var evenodd = document.getElementById("evenodd").value/1;
evenodd % 2 ? document.getElementById("output3").innerHTML = 'Its Odd Number' : document.getElementById("output2").innerHTML = 'Its Even Number' ;
}


/************
progrom 4
*********/

function onSubmit4()
{
console.log('i am inside the function4');

//document.getElementById("myform1").submit();

var n1 = document.getElementById("num1").value/1;
var n2 = document.getElementById("num2").value * 1;
var n3 = document.getElementById("num3").value/1;

if(n1 <= n2 && n1 <= n3) document.getElementById("output4").innerHTML = 'Number 1 is Smallest  ' + n1;
else if(n2 <= n1 && n2 <= n3) document.getElementById("output4").innerHTML = 'Number 2 is Smallest ' + n2;
else document.getElementById("output4").innerHTML = 'Number 3 is Smallest ' + n3;



}

/************
progrom 5
*********/

function onSubmit5()
{
console.log('i am inside the function5');

//document.getElementById("myform1").submit();

var house = document.getElementById("house").value/1;

switch(house)
{
  case 1:
    document.getElementById("output5").innerHTML = 'Amaltas ';
    break;

  case 2:
    document.getElementById("output5").innerHTML = 'Gulmarg';
    break;

    case 3:
      document.getElementById("output5").innerHTML = 'Sonmarg';
      break;

    default:
      document.getElementById("output5").innerHTML = 'Apna Indore';
}
}

/************
progrom 6
*********/

function onSubmit6()
{
  var a = [];
  var b=[];
console.log('i am inside the function5');
for (var i=1900 ; i<2001 ; i++)
{
  if (i%4 == 0 || i%100 ==0 || i%400 == 0)
    a.push(i);
}
document.getElementById("output6").innerHTML = a;

for (i=15; i<=30; i++)
{
  var temp = i*i*i;
  b.push(temp);
}

document.getElementById("output62").innerHTML = b;
}
