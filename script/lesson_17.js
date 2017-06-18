/*
var res=document.querySelector("#result");
var disp=document.querySelector("#disp");
res.onclick=function(){
  var ds=" ";
  //throw("My ERROR");
  try{
    var re1=/\(/g;
    var re2=/\)/g;
    var str=disp.value;
    var n1=(str.match(re1)==null)?0:str.match(re1).length;
    var n2=(str.match(re2)==null)?0:str.match(re2).length;
    if(n1!=n2){
      var objer=new Er_function("Skobka","Number  ( and )  ");
      throw(objer);
    }

    str=str.trim();
    if (str === ''){
     var objer=new Er_function("absent","No text");
      throw(objer); 
    }
    disp.value=eval(disp.value);
    ds="Good";

  }
  catch(er){
  //  alert(er.name +"\n" + er.message + "\n" + er.stack);
  ds=er.stack;
  }
  finally{alert(ds)}
}
var objError = new Er_function("My Error","Messagee for my error");
    throw(objError);

function Er_function(type,mes){
  this.name=type;
  this.message=mes;
  this.stack=type+"\n"+mes;
}
*/
/*

var div1=document.getElementById("dv1");
var obj_style=getComputedStyle(div1);
console.log(obj_style.margin);
console.log(obj_style.color);
console.log(obj_style.left);
console.log(obj_style.top);
console.log(obj_style.right);
console.log(obj_style.bottom);


div1.onclick=function(){
var coords=div1.getBoundingClientRect();
console.log("getBoundingClientRect");
console.log(coords.left + " " + coords.top);
}

var ball_1=document.getElementById('ball');
ball_1.style.position="absolute";

movBall_1.direction=1;

function movBall_1(){
  var style=getComputedStyle(ball_1);
  var x=parseFloat(style.left); console.log(style.left);
  
  //x++;x++;x++;
  var xr=parseFloat(style.right);
  var coordsbody=document.body.getBoundingClientRect();
  var wbody=coordsbody.right-coordsbody.left;
  console.log("wbody"+wbody);

if(xr>=wbody-20&&movBall_1.direction==1)movBall_1.direction=-1;
if (x<=-30 && movBall_1.direction==-1)movBall_1.direction=1;


  x=x+movBall_1.direction*3;

   ball_1.style.left=x+"px";
  setTimeout(movBall_1,50);
}
movBall_1();
*/