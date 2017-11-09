var myday=document.getElementById("myday");
myday.onchange=function(){
  console.log(String(myday.value)); 
  var md=new Date(myday.value);
  s="";
  if(!isNaN(md.getMonth())){
	  s+=md.getMonth()+1;
  	s+=md.getFullYear();
    s+=md.getDate();
  }
  else{ 
  	for(var i=0;i<myday.value.length;i++){
    	if(myday.value[i]!='.'){
    		s+=myday.value[i];
 			}
  	}
  }
  alert(s);
}  
setInterval(function(){
	var A=0,B=255;
x=(Math.round((B-A)*Math.random()+A));
y=(Math.round((B-A)*Math.random()+A));
z=(Math.round((B-A)*Math.random()+A));
document.querySelector(".lessonEight").style.backgroundColor="rgb(" + x + "," + y + "," + z + ")";
},1000);
var table=document.getElementsByTagName("table")[0];
var mastd=table.getElementsByTagName("td"); 
mastd[5].innerHTML="6";
var tr=table.getElementsByTagName("tr"); 
function result(){
  for(var i=1,sum=0;i<tr.length;i++){
    var td=tr[i].getElementsByTagName("td");
    sum+=td[1].innerHTML*td[2].innerHTML;
  }
  document.getElementById("res").innerHTML=sum; 
} 

for(i=1;i<tr.length;i++){
	var td=tr[i].getElementsByTagName("td");
	td[1].oninput=result;
	td[2].oninput=result;
} 
document.querySelector("table tr:last-child td:last-child").innerHTML="16"; 
td1=document.querySelector("td");
tdAll=document.querySelectorAll("td");