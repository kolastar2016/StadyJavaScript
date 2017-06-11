/*

var x = NaN;
  if (x=NaN){
  	console.log("NaN");
  }
  else{
  	console.log(" not NaN");
  }
  if (isNaN(x)){
  	console.log('NaN');
  }
  else{
  	console.log(" not NaN");
  }
  console.log(isFinite(324/0));
  	x=8;
  console.log(isFinite(x));
  var m=2,h=12,s=4;
  res = (h<10?'0'+h:h)+':'+(m<10?'0'+m:m)+':'+(s<10?'0'+s:s);
  console.log(res)

  isNaN(x)?console.log(" Not Number"):console.log("  Number");

var d =new Date(), greeting="";
time = d.getHours();
//time = 20;
  if (time >= 5 && time <= 10) {
    greeting = "Good morning";
} else if (time >10 && time < 19) {
    greeting = "Good day";
} else if (time >=19 && time < 22) {
    greeting = "Good evening";
} else {
    greeting = "good nite";
}
document.write('<b style="text-decoration:underline;">' + greeting + '</b><hr color="blue"></hr>')

condition = (x >0 && x < 10) || (x>30 && x<40) ||(x>90 && x<100);

if(condition){
	console.log('yes')
}
else{
	console.log('No')
}

document.write('<input type="text" id="month" placeholder="input number of month" >');
document.write('<lable id = "labmonth"> </lable>');

month.oninput=function(){
var month = document.getElementById('month');
var labm = document.getElementById('labmonth');
var len = month.value.trim().length;
var mv= parseFloat(month.value);
if (!isNaN(mv) && mv >0 && mv < 13 && len<2 ){	
if (mv==4 || mv==6 || mv==9 || mv==11) labm.innerHTML="30 days";
else if (mv==2){
	labm.innerHTML="28 or 29 days";
}
else	labm.innerHTML="31 days";
}
else labm.innerHTML="nothing to month";

if (len==0) labm.innerHTML=" ";
}


var z,f,x1,time1;
y = z || f || x || time1;
console.log(y);


document.write('<br><br><div style = "width:200px; height:100px; border:solid 1px gray"> <div style= "float:left" id="coordX"></div> <div style= "float:right" id="coordY"></div></div>')
var cx = document.getElementById('coordX')
var cy = document.getElementById('coordY')

document.body.onmousemove= function(event){
var e = event||windov.event;
cx.innerHTML=e.clientX;
cy.innerHTML=e.clientY;
}
//x+=6;
//x/=6;
//x=7;
x%=2;		//	x = 1;

var d=f=g=h=x+=111;
console.log (d+"." + f+ "."+ g+"." +h+ "."+x);


console.log(4&2);
console.log(4|2);
console.log(~~24.235);
console.log(~~(-14.235));
console.log(4<<3);
console.log(48>>3);
*/