function sum3(x,y,z){
	if (x===undefined) x=0;
	if (y===undefined) y=0;
	if (z===undefined) z=0;
	var s = x+y+z;
	return s;
}

function znak(x){
	if(x<0) return"minus";
 		if(x==0) return"noli";
 			return"pluses";
}
function nalog(s){
	var global = 7;
 	s= s-s*kf;
 	kf= -0.01;
 	return s;
}
var i = 1;
while(i<=10){
	document.write("i = " + i +"<br>")
	i++;
}
var i = 1;
do{ document.write("i = " + i +"<br>")
	i++;
	}
while(i<=10);
document.write('<input id ="A" type="text" placeholder="A">');
document.write('<input id = "B" type="text" placeholder="B">');
document.write('<input id="butnod" type = "button" value="NOD">');
document.write('<p id = "nod"></p>');

var nod = document.querySelector("#nod");
var butnod = document.querySelector("#butnod");
butnod.onclick=function(){
	var A =Number(document.querySelector("#A").value);
	var B = Number(document.querySelector("#B").value);
	console.log("A = " + A +"  B = " + B );
	if((!isNaN(A)) &&(!isNaN(B)) && (A > 0) && (B > 0)){
		console.log("Start");
		while(A!=B){
			if(A>B) A-=B;
			else B-=A;
			console.log("A = " + A +"  B = " + B );
		}
		nod.innerHTML="NOD = "+ A;
	}
	else nod.innerHTML="";
}
var i = 1; 
var counter = 9;
var str = "*";
while (str.length<=10){
	document.write(str);
	document.write("<br />");
	str+="*";
}
while(i<= 9){
	j = 1;
	while(j<= counter){
		document.write("*");
		j++;
	}
	counter--;
	document.write("<br>");
	i++;
}
var i = 1 ,count = 9;
while(i<= 9){
	j = 1;
	while(j<= count){
		document.write("*");
		j++;
	}
	count--;
	document.write("<br>");
	i++;
}
var s ="";
i = 1;
while(i<=10){
	s+="*";
	document.write(s + "<br>");
	i++;
}
i = 1 ; count=9;
while(i<10){

	document.write (s.substr(0,count) + "<br>");
	count--;
	i++;
}
var text = "";
for(var i = 1; i<=10;i++ ){
	text += "Number" + i+ "<br>";
}
document .write(text);
for(var i = 1, s = 0; i < 10; i++){
	s = s+i;
}
document.write(s + "<br>");
for (var i = 1,p = 1; i<6;i++){
	p*=i;
}
document.write(p);
