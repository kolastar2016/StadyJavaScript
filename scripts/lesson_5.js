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

month.oninput=function(){
var month = document.getElementById('month');
var labm = document.getElementById('labmonth');
var len = month.value.trim().length;
var mv= parseFloat(month.value);
if (!isNaN(mv) && mv >0 && mv < 13 && len<=2 ){	
if (mv==4 || mv==6 || mv==9 || mv==11) labm.innerHTML="30 days";
else if (mv==2){
	labm.innerHTML="28 or 29 days";
}
else if (mv==8 || mv==7 || mv==5 || mv==3 || mv==1 || mv==10 || mv==12){
	labm.innerHTML="31 days";
}
}
else labm.innerHTML="nothing to month";

if (len==0) labm.innerHTML=" ";
}

var cx = document.getElementById('coordX')
var cy = document.getElementById('coordY')
document.body.onmousemove= function(event){
var e = event||windov.event;
cx.innerHTML=e.clientX;
cy.innerHTML=e.clientY;
}