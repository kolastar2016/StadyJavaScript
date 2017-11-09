var x0=-10;
var xk=-610;
var dx=30;
var fright=document.querySelector("#fright");
var fleft=document.querySelector("#fleft");
var fon=document.querySelector("#fon");
var currentx=-10;
fright.onclick=function(){
  if(currentx<=(xk)){
    currentx-=x0;
  }
  else{
    currentx-=dx;
  } 
  fon.style.backgroundPositionX=currentx+"px";
}
fleft.onclick=function(){
  if(currentx>=(x0)){
    currentx=xk;
  }
  else{
    currentx+=dx;
  } 
  fon.style.backgroundPositionX=currentx+"px";
}
var mas=[[2,3,4,5,6,7,8,9],
        [4,5,6,7,88,99],
	      [3,4,5,6,7,9]
]
document.write("<br>");	 
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
document.write("<br>перед сортировкой:"+mas1.join(" "));
mas1.sort();
document.write("<br>после сортировки:"+mas1.join(" ")+"<br>");
document.write("<br>Сортировка чисел по возрастанию<br>");
document.write("<br>перед сортировкой:"+mas1.join(" "));
mas1.sort(function(a,b){
  return (a-b)
});
document.write("<br>после сортировки:"+mas1.join(" ")+"<br>");
document.write("<br>Сортировка чисел  по убыванию<br>");
document.write("<br>перед сортировкой:"+mas1.join(" "));
mas1.sort(sortReduce);
document.write("<br>после сортировки:"+mas1.join(" ")+"<br>");
function sortReduce(a,b){
  return (b-a)
}
var d=mas1.pop();
document.write("<br>после pop:"+mas1.join(" ")+"<br>");
var len=mas1.push(12,34,56,78);
document.write("<br>после push:"+mas1.join(" ")+"<br>");
var mas2=mas1.slice(2,5);
document.write("<br>mas2:"+mas2.join(" ")+"<br>");
mas1.splice(2,3,"один","два","три");
document.write("<br>mas1:"+mas1.join(" ")+"<br>");
mas1.splice(2,3);
document.write("<br>mas1:"+mas1.join(" ")+"<br>");
var mas=[2,3,,4,6,8,9,7];
mas.forEach(myF);
var s=0;
function myF(elem,i,mas){
  s*=elem;
  elem*=2;
  mas[i]=elem;
  document.write("mas=[ "+i+" ]= "+elem+"<br>");
}
document.write(mas+"<br>");
document.write("s= "+s+"<br>");
var summas=mas.reduce(myF1,0);
function myF1(s1,elem,i,mas){
  s1+=elem;
  document.write("s= "+s1+"<br>");
  return s1;
}
document.write("s= "+summas+"<br>");
Array.prototype.totalAverage=function(){
  var mas=this;
  for(var i=0,s=0; i<mas.length;i++){
    s+=mas[i];
  }
  return(s/mas.length);
}
var sr=mas.totalAverage();
document.write("sr= "+sr+"<br>");
Array.prototype.devideByN=function(n){
  var res=[] ,mas=this;
  for (var i=0,k=-1; i<mas.length;i++){
    if(mas[i]%n===0) {
      k++;
      res[k]=mas[i];
    }
    return res;
  }
  console.log(mas.devideByN(4));
}