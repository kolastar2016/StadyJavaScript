var thisNumber=document.querySelector("#lessonSevenNumber");

var one = 1;
while(one<=10) {
	document.write("i = " + one +"<br>")
	one++;
}

var two = 1;
do { 
	document.write("j = " + two +"<br>")
	two++;
	}
while(two<=10);

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
		nod.innerHTML="NOD = "+ A + "&nbsp&nbsp&nbsp In console you can see result";
	}
	else nod.innerHTML="";
}

var three = 1; 
var counter = 9;
var str = "*";
while (str.length<=10){
	document.write(str);
	//thisNumber.innerHTML=str;
	document.write("<br />");
	str+="*";
}
while(three<= 9){
	j = 1;
	while(j<= counter){
		document.write("*");
		j++;
	}
	counter--;
	document.write("<br>");
	three++;
}

var four = 1 ,count = 9;
while(four<= 9){
	j = 1;
	while(j<= count){
		document.write("*");
		j++;
	}
	count--;
	document.write("<br>");
	four++;
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
	document.write(s.substr(0,count) + "<br>");
	count--;
	i++;
}

var text = "";
for(var i = 1; i<=10;i++ ){
	text += "Number" + i+ "<br>";
}
thisNumber.innerHTML=text;
