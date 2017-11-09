var div1=document.getElementById("dv1");
var obj_style=getComputedStyle(div1);
div1.onclick=function(){
  var coords=div1.getBoundingClientRect();
}
var ball_1=document.getElementById("ball");
ball_1.style.position="absolute";
movBall_1.direct=1;
function movBall_1(){
  var  style=getComputedStyle(ball_1);
  var x=parseFloat(style.left); 
  var xr=parseFloat(style.right);
  var coordsbody=document.body.getBoundingClientRect();
  var wbody=coordsbody.right-coordsbody.left;
  if(xr<=-20 && movBall_1.direct==1){
    movBall_1.direct=-1;
  }
  if(x<=-30 && movBall_1.direct==-1){ 
    movBall_1.direct=1;
  }
  x=x+movBall_1.direct*3;
  ball_1.style.left=x+"px";
  setTimeout(movBall_1,50);
}

movBall_1();
