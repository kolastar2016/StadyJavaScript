/*
var x0=-10;
var xk= -610;
var dx=30;
var fright= document.querySelector('#fright');
var fleft= document.querySelector('#fleft');
var fon= document.querySelector('#fon');
var currentx = -10;
fright.onclick= function(){
  
  if (currentx<=(xk)) currentx-=x0;
  else  currentx -=dx; 
  fon.style.backgroundPositionX=currentx + "px";
console.log(currentx);
}

fleft.onclick=function(){
   if (currentx>=(x0)) currentx =xk;
  else  currentx +=dx; 
  fon.style.backgroundPositionX=currentx + "px";
console.log(currentx);
 //console.log(currentx); 
  //console.log(currentx+"px"+" "+"-11px");  
}

var currenty=y0;

var fup=document.querySelector("#fup");
fup.onclick=function(){
fon.style.backgroundPositionY=currenty+"px";
if (currenty>=y0) currenty=yk;
else currenty+=dy;
}
var fdown=document.querySelector("#fdown");
fdown.onclick=function(){
fon.style.backgroundPositionY=currenty+"px";
if (currenty>=y0) currenty=yk;
else currenty-=dy;
}


fleft.onclick= function(){
  
  if (currentx>=x0) currentx=xk; else currentx+=dx;
  fon.style.backgroundPositionX=currentx+"px";
  
  //console.log(currentx); 
  //console.log(currentx+"px"+" "+"-11px");  
}

var mas=[[2,3,4,5,6,7,8,9],
         [4,5,6,7,88,99],
	     [3,4,5,6,7,9]
		]
// mas.length - количество строк в массиве mas	 
// mas[2].length - количество элементов в строке с номером 2
document.write('<br>');	 
for(var i=0;i<mas.length;i++){
 for(var j=0;j<mas[i].length;j++){
    mas[i][j]*=2;
	document.write(mas[i][j]+" ");
 }
 document.write("<br>");
}

document.write(mas[1].join("###"));

mas1=[23,4,42,11,1];
document.write("<br>Сортировка по кодам символов<br>");
document.write("<br>перед сортировкой:"+ mas1.join(" "));
mas1.sort();
document.write("<br>после сортировки:"+ mas1.join(" ")+"<br>");


document.write("<br>Сортировка чисел  по возрастанию<br>");
document.write("<br>перед сортировкой:"+ mas1.join(" "));

mas1.sort(function(a,b){return (a-b)});
document.write("<br>после сортировки:"+ mas1.join(" ")+"<br>");

document.write("<br>Сортировка чисел  по убыванию<br>");
document.write("<br>перед сортировкой:"+ mas1.join(" "));

mas1.sort(sortReduce);
document.write("<br>после сортировки:"+ mas1.join(" ")+"<br>");

function sortReduce(a,b){return (b-a)}

var d=mas1.pop();//d=1;

document.write("<br>после pop:"+ mas1.join(" ")+"<br>");

var len=mas1.push(12,34,56,78);

document.write("<br>после push:"+ mas1.join(" ")+"<br>");


var mas2=mas1.slice(2,5);

document.write("<br>mas2:"+ mas2.join(" ")+"<br>");

mas1.splice(2,3,"один","два","три");
document.write("<br>mas1:"+ mas1.join(" ")+"<br>");

mas1.splice(2,3);

document.write("<br>mas1:"+ mas1.join(" ")+"<br>");
*/