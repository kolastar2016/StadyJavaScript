/* ONE VERSION*/
/*
var pole=document.getElementById("dv1");
var  ball_1=document.getElementById("ball");
console.log(" width pole - " + pole.clientWidth);
console.log(" height pole - " + pole.clientHeight);
console.log(" width ball - " + ball_1.clientWidth);
console.log(" height ball - " + ball_1.clientHeight);

var indmove=0;
var countmove=0;
var clear;
pole.onclick=function(event){
  countmove++;
  console.log(indmove);
    if(indmove===1){
      clearTimeout(moveBall_1.clear);
    }

  var x = event.clientX;
  var y = event.clientY;
  var coordsball = ball_1.getBoundingClientRect();
  var x2 = coordsball.left;
  var y2 = coordsball.top;
  var dx = Math.sign(x-x2);
  var dy = Math.sign(y-y2);
  console.log('dy='+dy);
  var cx=x2;
  var cy=y2;
  var coordspole=pole.getBoundingClientRect();
  var sinf=(y-y2)/Math.sqrt((x-x2)**2+(y-y2)**2);
  var cosf=(x-x2)/Math.sqrt((x-x2)**2+(y-y2)**2);
  var dl=0;

  function moveBall_1(){
    if(clear!=undefined){
      clearTimeout(clear);
    }
       
    dl++;
    cx=x2+dl*cosf;
    cy=y2+dl*sinf;
             
    if (dl<= Math.round(Math.sqrt((x-x2)**2+(y-y2)**2))){
      if(dl==Math.round(Math.sqrt((x-x2)**2+(y-y2)**2))) {
        cx=x;cy=y;
      }
      if(cx>coordspole.right-ball_1.clientWidth) {
        cx=coordspole.right-ball_1.clientWidth; 
        //x=cx+dx;
      }
      if(cy>coordspole.bottom-ball_1.clientHeight) {
        cy=coordspole.bottom-ball_1.clientHeight; 
      }
      //indmove=1;

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      ball_1.style.left=cx + scrollLeft + "px";
      ball_1.style.top=cy + scrollTop + "px";
  
      clear=setTimeout(moveBall_1,20);
    } 
    //moveBall_1.clear=undefined;
  }
  moveBall_1();
}
*/
/*TWO VERSION*/
/*
var pole=document.getElementById("dv1");
var ball_1=document.getElementById("ball");
console.log("ширина поля -" + pole.clientWidth);
console.log("высота поля -" + pole.clientHeight);
console.log("ширина рисунка с мячиком -" + ball_1.clientWidth);
console.log("высота рисунка с мячиком -" + ball_1.clientHeight);
var indmove=0;
var clear;
pole.onclick =  function(event) {
  var x=event.clientX;
  var y=event.clientY;
  var  coordsball=ball_1.getBoundingClientRect();
  var x2=coordsball.left;
  var y2=coordsball.top;
  var dx=Math.sign(x-x2); 
  var dy=Math.sign(y-y2);//console.log("dy="+dy);
  var cx=x2;
  var cy=y2;
  var coordspole=pole.getBoundingClientRect();
  function moveBall_1(){
    if(clear!=undefined){clearTimeout(clear);
      x2=cx; y2=cy;
    }
    cx=cx+dx;
    if(x2!=x){
      cy=(cx-x)*(y2-y)/(x2-x)+y;
    }else {
      cy=cy+dy;
    }
    if((cx<=x && dx>=0 || cx>=x && dx<=0) && (cy<=y && dy>=0 || cy>=y && dy<=0)){
      if(cx>coordspole.right-ball_1.clientWidth) {
        cx=coordspole.right-ball_1.clientWidth;
        x=cx+dx;
      }
      if(cy>coordspole.bottom-ball_1.clientHeight) {
        cy=coordspole.bottom-ball_1.clientHeight;
        y=cy+dy
      }
      // indmove=1;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      ball_1.style.left=cx+scrollLeft+"px";
      ball_1.style.top=cy+scrollTop+"px";
      clear=setTimeout(moveBall_1,20);
    } else {
      indmove=0;
      //countmove--
    }
  }
  //if(indmove!=1) moveBall_1();
  moveBall_1();
  //var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    //ball_1.style.left=x+scrollLeft+"px";
    //ball_1.style.top=y+scrollTop+"px";
}
*/