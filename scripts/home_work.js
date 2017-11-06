/*
function func(phrase) {
  document.write( phrase );
}
*/
//setInterval(func, 2000, "Привет"); // Привет, Вася
//setInterval(func, 1000, "Вася"); // Привет, Вася

/*
function recursion(phrase){
    document.write(phrase);
  recursion(phrase);
    };
setInterval(recursion,100,"Привет")
recursion();
*/
/*
var txt = "Hello teacher. this is my site";
var i = 0;

setInterval(function(){ 
	if (i < txt.length)  }, 1000);

function printSymbol() { 
	(".container").text((".container").text() + txt[i]);
  i++;
}
*/
/*
setTimeout(function() {
                      document.getElementById("image1").setAttribute("src", "img/image2.jpg");
                  }, 4000);

function clock(idelem){
          var d=new Date();         
     var h= d.getHours();
      var m = d.getMinutes();
      var s = d.getSeconds();

document.getElementById(idelem).innerHTML= 
(h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);
      setTimeout(clock,1000,idelem);
          }
          clock('clocks');
          */