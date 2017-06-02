
// 1 однострочный комментарий
/* МНОГОстрочный
   ком-
   мен-
   та-
   рий
*/
/*var x=6,y,z='текст';
t=x+y;//нежелательно без var 

//по новому стандарту y
let k=7;// переменная   
const T=10;// константа
x=y+4;
y=45;

// типы данных 
/*1) числовой тип (number):
   числа(целые и дробные)
   NaN - не число 
   Infinity
   -Infiniy
*/
/*x=x*"два";
document.write("x="+x+"<br>");
 
document.write("324/0 = "+324/0+"<br>");  

y=-324/0;
document.write("-324/0 = "+y+"<br>");  
// арифметические операции
// -,+,/,*
//++  инкремент- увеличение на 1 
// --  декремент - уменьшение на 1

x=3;
x++;x++ // x=5
++x;++x //x=7

x=4
y=x++;
document.write('y='+y+"&nbsp;&nbsp;&nbsp;x="+x+"<br>");
x=4;
y=++x;
document.write('y='+y+"&nbsp;&nbsp;&nbsp;x="+x+"<br>");
// % - остаток от деления
console.log(23%3);//2
//** - возведение в степень
console.log(3**4);//81

// 2) тип данных - строка(string)
var str1="Строка1";
var str2='Строка2';
var str3=new String('Строка3');

var str4=`Много
стр
очны
е тек
сты`;
alert(str4);
alert(str4[4]);//обращение к символу под номером 4, нумерация символов начинается с 0
//изменить символ в строке нельзя - можно только полностью перезаписать строку
str4[4]="r";
alert(str4);// строка не изменилось
//Длина строки

x=x*"two";
document.write("x="+x+"<br>");
document.write("324/0 = "+324/0+"<br>");
y=-324/0;
document.write("324/0 = "+y+"<br>");

x=3
x++ ; x++;
++x; ++x;
x=4;
y=++x;
document.write('y= '+y+'x='+x)
console.log(23%3);
console.log(3**4);

// 2)string

var str1="string1";
var str2='string2';
var str3=new String('String3');
var str4=`many
stri
ngs`;
alert(str4);
alert(str4[4]);






// назначение обработчиков
var but1=document.getElementById("but1");
var chc=document.getElementById("chcol");
but1.onclick=function() {
  document.body.style.backgroundColor="#cc0";//"#cccc00";
  this.style.color="rgb(204,204,0)";
  
}

chc.onchange=changeColor;

function changeColor() {
 //alert(chc.value);
 document.body.style.backgroundColor=chc.value;
}

chc.onchange=function(){
// предыдущий обработчик пропадет
 but1.style.backgroundColor=chc.value; 

}

var dv1=document.getElementById('dv1');

dv1.style.width="100px";
dv1.style.height="100px";
dv1.style.backgroundColor="red";
var x=3;

dv1.style.marginLeft=x+"px";
//метод addEventListener

dv1.addEventListener("click",function(){
  console.log("Okey");
})

dv1.addEventListener("click",chMargin);

function chMargin(){
   x++;
   dv1.style.marginLeft=x+"px";

}

// удаление обработчиков

var delE=document.getElementById('delEvent')

delE.onclick=function(){
  but1.onchange=null;
  chc.onchange=null;
  dv1.removeEventListener("click",chMargin);
  
  but1.style.width="300px";
}

// transitionend - событие по завершению изменения свойства, указанного в transition

but1.ontransitionend= function(){
// не сработает -  на это событие нельзя назначить обработчик таким способом 
alert("Готово");
}  


but1.addEventListener(
'transitionend',function(){
alert('Ура сработало');
});
 
 */