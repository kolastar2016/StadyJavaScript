  
/*
  var myday=document.getElementById("myday");
  myday.onchange=function(){
  	
  	console.log(String(myday.value));
  //	console.log(myday.value);
  
  var md = new Date(myday.value);
s="";

if(!isNaN(md.getMonth())){
s+=	md.getMonth()+1;
s+=	md.getFullYear();
s+=	md.getDate();
*/
/*
  console.log(md.getMonth()+1);
  console.log(md.getFullYear());
  console.log(md.getDate());
  */
/*
}
else{
	for(i=0;i<myday.value.length;i++){
		if(myday.value[i]!="."){
			s+=myday.value[i];
		}
	}
}

alert(s);
}

var x= 23.161516531531;
x=x.toFixed(2);
console.log(x);

x=Math.floor(x);
console.log(x);

console.log(Math.random());

A =100; B = 110;
for(i=0;i<10;i++){
document.write(Math.round((B-A)*Math.random()+A) + "<br>");
}

for(i=0;i<10;i++){
	document.write('<font color="red">' + Math.ceil(B-A)*Math.random()+A + "</font><br>");
}

A =0; B = 50;
for(i=0;i<10;i++){
document.write('<font color="green">' + (Math.round((B-A)*Math.random()+A)-25) + "</font><br>");
}


setInterval(function(){
	var A = 0,B= 255;
x=(Math.round((B-A)*Math.random()+A));
y =(Math.round((B-A)*Math.random()+A));
z = (Math.round((B-A)*Math.random()+A));
console.log(x+","+y+","+z);
document.body.style.backgroundColor='rgb(' + x + ',' + y + ',' + z + ')';;
},1000);
*/
/*
A =0; B = 250;

x=( (Math.round((B-A)*Math.random()+A)) );
y =((Math.round((B-A)*Math.random()+A)) );
z = ((Math.round((B-A)*Math.random()+A)) );
console.log(x);
console.log(y);
console.log(z);
document.body.style.color= x+y+z;


var mas1 =[]; 
var mas2 = new Array();
var mas3 = new Array(3);
var mas4 = [4,2,3,"ten",true];
var mas5 = new Array(5,6,7,45,"Hello");

console.log(mas4[0] + mas5[4]);

mas1[4] = "five elemnt";

var mas6 = new Array(0);
console.log(mas6);
console.log(mas3);
console.log(mas5);
//alert(mas5);
*/
/*
var table = document.getElementsByTagName('table')[0];
var mastd = table.getElementsByTagName('td');
console.log(mastd);

  // mastd[5].innerHTML= "10";

var tr = table.getElementsByTagName('tr');

function result(){
	for (var i =1, sum=0; i<tr.length;i++){
		var td = tr[i].getElementsByTagName('td');
		sum += td.innerHTML[1] * td.innerHTML[2];
	}
	document.getElementById("res").innerHTML=sum;
}

	for (var i =1,sum=0; i<tr.length;i++){
		var td = tr[i].getElementsByTagName('td');
		td[1].oninput=result;
		td[2].oninput=result;
	}

document.querySelector('table tr:last-child td:last-child').innerHTML="1717";
td1 = document.querySelector('td');
tdALL = document.querySelectorAll('td');
console.log(td1);
console.log(tdALL[0]);

function rnd (A,B,n){
	return mas
}
*/