

/* NOT FINISH BECAUSE ABSENT BUTTOM*/
/*// объекты
//конструктор объектов(конструктор класса)
function  Snow (src,x,y,size){
   //принято функцию конструктор называть с большой буквы
   var max=100;// внутреннее свойство
  // console.log(size);
   // свойства внешние
   this.src=src; // путь к рисунку
   // координаты левого верхнего угла рисунка
   this.x=x;//left
   this.y=y;//top
   // size - объект типа {w:100,h:300}
   this.size=size;
  
   // методыt
   this.put=function(){
       // помещаем тег img в документ и возвращаем ссылку на этот тег
       var sn=document.createElement('img');
	   sn.style.position="absolute";
       sn.style.zIndex="1000";
	   sn.style.left=this.x+"px";
	   sn.style.top=this.y+"px";
	   sn.src=this.src;
	   sn.style.width=this.size.w+"px";
	   sn.style.height=this.size.h+"px";
	   document.body.appendChild(sn);
	   return sn;
   }    	   
  	  
} 

var snow1 = new Snow("img/img.gif",200,200,{w:200,h:200}); 
var mas=[];
mas[0]=snow1;
var mastag=[];
//mastag[0]=snow1.put();

for(var i=1;i<=10;i++){
   var x=rnd(0,document.body.clientWidth,1)[0];
   x=rnd(0,document.body.clientWidth,1)[0];
   var y=rnd(0,document.body.clientHeight,1)[0];
   y=rnd(0,document.body.clientHeight,1)[0];
   
   mas[i]=new Snow("img/img.gif",x,y,{w:50,h:50});
  // mastag[i]=mas[i].put();
}

// добавление метода через прототайп
 Snow.prototype.move= function(){
    console.log(this.x+"  "+this.y+"  PLANE")
 }
//mas[0].move();

Snow.prototype.const=15.3;
console.log(mas[1].const+"  "+mas[2].const);

function SuperSnow(){
  Snow.apply(this,arguments);
  this.square=this.size.w*this.size.h;
  this.tag=this.put();
  this.A=40;
  this.w=0.01;
  this.f=0.5;
  this.x0=this.x;

}
SuperSnow.prototype=Object.create(Snow.prototype)

var sups1 = new SuperSnow("img/img.gif",0,0,{w:300,h:300});
//sups1.put();
//console.log(sups1.square);

//sups1.move();
//console.log(sups1.tag);

SuperSnow.prototype.move1=function m(obj){
  this.y++;
  this.x = this.A*Math.sin(this.w*this.y+this.f)+this.x0;

  obj.style.left=this.x+"px";
  obj.style.top=this.y+"px";
  var obj1=this;
  if (this.y>=document.body.clientHeight-obj.clientHeight);
  {this.y = rnd(0,100,1)[0]-100;
    this.x0 = rnd(0.document.body.clientWidth,1)[0];
}
  setTimeout(function(){
    m.call(obj1,obj);
  },50);
}

var ssnow_array=[];
for(var i=0;i<20;i++){
  var x=rnd(0,document.body.clientWidth,1)[0];
   x=rnd(0,document.body.clientWidth,1)[0];
   var y=rnd(0,100,1)[0];
   y=rnd(0,100,1)[0]-100;
  ssnow_array[i]= new SuperSnow("img/img.gif",x,y,{w:10,h:10});

   ssnow_array[i].A=rnd(100,150,1)[0];
   ssnow_array[i].w=rnd(1,9,1)[0]/100;
   ssnow_array[i].f=rnd(0,500,1)[0];
   
   
  ssnow_array[i].move1(ssnow_array[i].tag);
}


//function snow1  САМОЗАПУСКАЮЩАЯ
/*
(function(){

})
*/
