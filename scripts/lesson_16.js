/*
function context(){
alert(this);
}

var obj={
  name:"sharik",
  show: context,
  go: showName,
  gocall: showName1
}

//context();
//obj.show();

function showName(){
  alert(this.name);
  setTimeout(showName,3000);
}
//obj.go();

function showName1(){
  alert(this.name);
  var x=this;
  setTimeout(function(){
  showName1.call(x);
},3000);
}
//obj.gocall();

function changeColor(c,bg){
  this.style.color=c;
  this.style.backgroundColor=bg;
}
changeColor.call(document.body,"red","yellow");
changeColor.call(document.querySelector('#proba1'),"white","blue");

function changeColor1(){
  console.log(arguments[0]);
  console.log(arguments[1]);
  //console.log(arguments[0]);
 // console.log(mas[1]);
 // this.style.color=mas[1]; //mas=arguments;
 // this.style.backgroundColor=mas[1];  //mas=arguments;
	this.style.color=arguments[0];
	this.style.backgroundColor=arguments[1];
}

changeColor1.apply(document.body,["red","yellow"]);
changeColor1.apply(document.querySelector("#proba1"),["white","green"]);

var colbody=changeColor.bind(document.body);

setTimeout(function(){
  colbody("gold","black");
},1000)

setTimeout(function(){
  colbody("gold","white");
},2000)
*/
//console.log(sumAll(2,354,8,43,543,51,35,153));
//console.log(sumAll(8,4,5,5,3,1));
//console.log(sumAll(651,0xf,"px"))
/*
function sumAll(){
  var len=arguments.length;
 // arguments.toString=[].toString;   
 // alert(arguments.toString());
  arguments.join=[].join;   
  alert(arguments.join(":"));
  arguments.reverse=[].reverse;
  // arguments.reverse();

  if(len<1){
    alert("Error,little arguments");
    return NaN;
  }
  for (var i=0,s=0;i<len;i++){
    s+=arguments[i];
  }
return s;
}

sumAll2(2,5,82,4,5,8,5,)
function sumAll2(x,...mas){
}

function sumAll3(...mas){
mas.sort(function(a,b){
  return a-b;
});
alert("mas:\n"+mas);
for (var i = 0,s=0;i< mas.length ; s+=mas[i], i++) {
}
return s;
}
console.log(sumAll3(45,65,1,5,4));
*/
/*
 function difDate(d1,d2){
       var obj={
       day:0,
      hours:0,
     min: 0,
     sec:0,
  ms:0,
    actuall:0
     }
     var t=d2.getTime()-d1.getTime();
     //switch(Math.sign(t)){}
     odj.actuall=Math.sign(t);
     if(t<0) t*=(-1);
     obj.day=Math.floor(t/(1000*60*60*24));
    t-=obj.day*1000*60*60*24;
    obj.hours=Math.floor(t/(1000*60*60));
   t-=obj.hours*1000*60*60;
    obj.min=Math.floor(t/(1000*60));
  t-=obj.min*1000*60;
     obj.sec=Math.floor(t/(1000));
     t-=obj.sec*1000;
    obj.ms=t;
    return obj;
  }
   var date1= new Date();
     var date2 = new Date(2017,5,17,13);
    console.log(difDate(date1,date2));
   date1 =new Date();
   date2=new Date(2018,0);
  var dif=difDate(date1,date2);
  document.detElementById("tny").rows[1].cells[2].innerHTML=dif.day;
  */