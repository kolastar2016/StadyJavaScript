/*
var can1 = document.getElementById('can1');
var contextcan1=can1.getContext('2d');

contextcan1.fillRect(10,10,40,50);
contextcan1.strokeRect(70,70,40,50);
contextcan1.clearRect(20,20,20,20);

contextcan1.fillStyle='red';
contextcan1.strokeStyle='green';
contextcan1.lineWidth=7;
contextcan1.fillRect(150,10,40,50);
contextcan1.strokeRect(130,70,40,50);

var can2 = document.getElementById('can2');
var contextcan2=can2.getContext('2d');

can2.width='250';
can2.height='250';

contextcan2.beginPath();
contextcan2.moveTo(10,10);
contextcan2.lineTo(30,30);
contextcan2.lineTo(30,10);
contextcan2.lineTo(10,10);
contextcan2.closePath();
contextcan2.fill();

contextcan2.strokeStyle='red';
contextcan2.stroke();

contextcan2.beginPath();
contextcan2.arc(125,100,50,0,Math.PI*2);
contextcan2.moveTo(155,100);
contextcan2.arc(125,100,30,0,Math.PI,false);
contextcan2.stroke();
contextcan2.closePath();

contextcan2.beginPath();
contextcan2.strokeStyle='white'
contextcan2.arc(125,100,30,0,Math.PI/2,true);
contextcan2.stroke();
contextcan2.closePath();

contextcan2.beginPath();
contextcan2.moveTo(0,200);
contextcan2.quadraticCurveTo(10,10,250,0);
contextcan2.quadraticCurveTo(240,190,0,200);
contextcan2.stroke();
contextcan2.closePath();

contextcan2.beginPath();
contextcan2.moveTo(0,0);
contextcan2.bezierCurveTo(250,0,0,200,250,200);
contextcan2.moveTo(0,0);
contextcan2.bezierCurveTo(0,200,250,0,250,200);
contextcan2.moveTo(0,0);
contextcan2.bezierCurveTo(0,200,100,200,250,0);
contextcan2.stroke();
contextcan2.closePath();

var can3=document.getElementById('can3');
var contextcan3=can3.getContext('2d');
var wcan=hcan=300;
var xc=wcan/2, yc=hcan/2;
var rad=Math.min(wcan,hcan)/2-5;
can3.width=String(wcan*2);
can3.height=String(hcan);
masdata=[40,30,0,25,5,0,30];
mascolor=['red','orange','yellow','green','cyan','blue','violet'];
  
for (var i=0,sum=0,j=0; i<masdata.length; i++) {
  sum+=masdata[i];
}

var one = Math.PI*2/sum;
var angle0=0;
var angleEnd;

for(var i=0;i<masdata.length;i++){
  angleEnd=angle0+one*masdata[i];

  contextcan3.beginPath();
  contextcan3.moveTo(xc,yc);
  contextcan3.arc(xc,yc,rad,angle0,angleEnd,false);
  contextcan3.lineTo(xc,yc);

    if(masdata[i]>0){
      contextcan3.fillStyle=mascolor[j];
      j++;

      contextcan3.fillRect(wcan+10,hcan/masdata.length*(j-1)+10,4,4);
      contextcan3.fillText('-'+masdata[i],wcan+20,hcan/masdata.length*(j-1)+15);
    }

  contextcan3.fill();
  contextcan3.closePath();

  //moveTo();
  angle0=angleEnd;
}

var can4=document.getElementById('can4');
var contextcan4=can4.getContext('2d');
var img = new Image();

//img.src='img/imgg.gif';
//img.onload=function(){
//  contextcan4.drawImage(img,30,30);
 // contextcan4.drawImage(img,5,5,4,2);
//}

var imgSprite=new Image();
imgSprite.src='img/imggg.png';

function Sprite(img,coords,size){
  this.img=img;
  this.coords=coords;
  this.size=size;
  this.frame=0;
}

Sprite.prototype.puts=function(can,dx,dy){
  var context=can.getContext('2d');
 // context.clearRect(dx,dy,70,70);
  context.drawImage(this.img,this.frame*this.size.sw,this.coords.sy,this.size.sw,this.size.sh,dx,dy,70,70); 
}

var bux=[];
imgSprite.onload=function(){
  bux[0]=new Sprite(this,{sx:0,sy:118},{sw:39,sh:39});
  bux[1]=new Sprite(this,{sx:0,sy:118},{sw:39,sh:39});
  bux[1].frame=8;
 // bux.puts(can4,50,50);
  changeSprite();
}

function changeSprite(){
  contextcan4.clearRect(0,0,can4.width,can4.height);
  console.log(bux.frame);
  bux[0].puts(can4,50,50);
    if (bux[0].frame>12){
      bux[0].frame=0;
    } else{
      bux[0].frame++;
    }
  bux[1].puts(can4,90,90);
    if (bux[1].frame>12){
      bux[1].frame=0;
    } else{
      bux[1].frame++;
    }
  setTimeout(changeSprite,500);
}
*/