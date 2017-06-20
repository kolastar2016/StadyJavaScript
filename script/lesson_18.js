/*
var pole=document.getElementById("dv1");
var  ball_1=document.getElementById("ball");
console.log(" width pole - " + pole.clientWidth);
console.log(" height pole - " + pole.clientHeight);
console.log(" width ball - " + ball_1.clientWidth);
console.log(" height ball - " + ball_1.clientHeight);

var indmove=0;
var countmove=0;
pole.onclick =function(event){
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

var cx=x2;
var cy=y2;

function moveBall_1(){

 // console.log(moveBall_1.clear)

 // if(moveBall_1.clear != undefined){
 //   clearTimeout(moveBall_1.clear);
  //  x2=cx;y2=cy;
  //}
cx=cx+dx;
cy=(cx-x)*(y2-y)/(x2-x)+y;

  if((cx<=(x-ball_1.clientWidth) && dx>0 || cx >= x && dx < 0) && cy+18<=200){
  //cy=(cx-x)*(y2-y)/(x2-x)+y;
  
  indmove = 1;

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  ball_1.style.left=cx + scrollLeft + "px";
  ball_1.style.top = cy + scrollTop + "px";
  
  moveBall_1.clear=setTimeout(moveBall_1,50);
}
else {indmove=0; countmove--;}
//moveBall_1.clear=undefined;
}
if(indmove!=1) moveBall_1();
}

function Snow(src,x,y, size){
  var max = 100;
  console.log(size);
  this.src=src;
  this.x=x;
  this.y=y;
  this.size=size;
  //this.size.w=size.w;
  //this.size.h=size.h;

  this.put=function(){
    var sn=document.createElement("img");
    sn.style.position="absolut";
    sn.style.zIndex="1000";
    sn.style.left=this.x+"px";
    sn.style.top=this.y+"px";
    sn.src=this.src;
    sn.style.width=this.size.w+"px";
    sn.style.height=this.size.h+"px";
    document.body.appendChild(sn);
    return sn;
  }
*/
/*
}

var snow1 = new Snow("img/img.gif",200,200,{w: 200,h:200});
var mas=[];
mas[0]=snow1.put();

for (var i=0;i<10;i++){
  var x = rnd(0,document.body.clientWidth,1)[0];
  x=rnd(0,document.body.clientWidth,1)[0];
  var y = rnd(0,document.body.clientHeight,1)[0];
  y=rnd(0,document.body.clientHeight,1)[0];
  mas[i]=new Snow("img/img.gif",x,y,{w: 50,h:50});
  mas[i] = mas[i].put();
}

Snow.prototype.move= function(){
  }
*/

/* CHANGE IN CLASS BY PREPOD NOT FINISH. WAITING NEW CODE*/

/*

var pole=document.getElementById("dv1");
var ball_1=document.getElementById("ball");
console.log("ширина поля -" + pole.clientWidth);
console.log("высота поля -" + pole.clientHeight);
console.log("ширина рисунка с мячиком -" + ball_1.clientWidth);
console.log("высота рисунка с мячиком -" + ball_1.clientHeight);

var indmove=0;// индикатор движения 0- мяч не движется, 1 - мяч движется;
//var countmove=0;// количество заданных одновременно движений

var clear;
pole.onclick =  function(event) {
   countmove++;
   console.log(indmove);
   if (indmove===1){  
    // останавливаем старое движение
  
  clearTimeout(moveBall_1.clear);
   }    
   
   // куда двигаться
   var x=event.clientX;//  координата x относительно текущей рабочей области, без учета полос прокрутки 
   var y=event.clientY;
   
   // откуда  двигаться 
      
   var  coordsball=ball_1.getBoundingClientRect();
   var x2=coordsball.left;
   var y2=coordsball.top;
   
   var dx=Math.sign(x-x2);
   var dy=Math.sign(y-y2);  
   
   // текущее положение мячика
   var cx=x2;
   var cy=y2;
   
   var coordspole=pole.getBoundingClientRect();

   var sinf=(y-y2)/Math.sqrt(())


   function moveBall_1(){
       
       //console.log(moveBall_1.clear);
       /*if (moveBall_1.clear!=undefined){
           clearTimeout(moveBall_1.clear);
       x2=cx; y2=cy;
     }*/
     
/*
if(clear!=undefined){
  clearTimeout(clear);

dl++;
cx=x2+dl*cosf;
cy= y2+dl*sinf;

//if (dl<=Math.round(Math.sqrt((x-x2)**2+(y-y2)**2))){
if(dl==Math.round(Math.sqrt((x-x2)**2+(y-y2)**2))){
  cx=x;
  cy=y;
}
//}

if(x2!=x) cy=(cx-x)*(y2-y)/(x2-x)+y;else {
  cy=cy+dy;
}

if((cx<=x && dx>=0 || cx>=x &&dx<=0) && (cy<=y && dy>=0 || cy>=y &&dy<=0)){
  if(cx>coordspole.right-ball_1.clientWidth){
    cx=coordspole.right-ball_1.clientWidth;
   // x=cx+dx;
  }
  if(cy>coordspole.bottom-ball_1.clientHeight){
    cy=coordspole.bottom-ball_1.clientHeight;
   // y=cy+dy;
  }

  indmove = 1;

   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

   ball_1.style.left=cx+scrollLeft+"px";
  ball_1.style.top=cy+scrollTop+"px";


     clear =setTimeout(moveBall_1,50)
}
else {indmove=0; countmove--;}

    //   cx=cx+dx;
    // cy=(cx-x)*(y2-y)/(x2-x)+y;
    /* 
       if((cx<=(x-ball_1.clientWidth) && dx>0  || cx>=x && dx<0) && cy+18<=200){
          //cy=(cx-x)*(y2-y)/(x2-x)+y;
      indmove=1;
          // получить прокрутку страницы
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
     
          ball_1.style.left=cx+scrollLeft+"px";
          ball_1.style.top=cy+scrollTop+"px";
      
          moveBall_1.clear=setTimeout(moveBall_1,50);
       }
     /*else moveBall_1.clear=undefined;*/
    /* else {indmove=0;counmove--}
     
   }
   
   if(indmove!=1) moveBall_1();
   */
   
   
   /*
   // получить прокрутку страницы
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
   
   
   
   ball_1.style.left=x+scrollLeft+"px";
   ball_1.style.top=y+scrollTop+"px";
   */
   
/*
}

moveBall_1();
*/