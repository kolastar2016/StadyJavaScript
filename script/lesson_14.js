/*
var myF1 = new Function("a,b","return a*b"); 
console.log(myF1(3,4));

document.querySelector('#makefunct').onclick=function(){
  var arg="";
  var kod= document.querySelector('#kod').value;
  var nf =new Function(arg,kod);
console.log(nf);
console.log(nf());
};

(function(){
  alert();
})();



(function(){
	alert();
  var win=document.createElement('div');
win.style.cssText="position: absolute; z-index: 3000px;top:200px;left:200px;width:400px;height:300px;background-color:purple;";

  document.body.appendChild(win);
  var head=document.createElement('div');
  head.style.cssText="margin: 0px;\
  text-align: right;\
  height: 20px;\
  width: 100%;\
  background-color:lime;";
  win.appendChild(head);

  var content=document.createElement('div');
  content.style.cssText="margin: 0px;\
  height: 280px;\
  width: 100%;";
  
  win.appendChild(content);
  content.innerHTML="<strong> This is your promotion</strong>"

  var but=document.createElement("button");
  but.innerHTML="x";
  but.style.cssText="background-color:blue;color:yellow;"
  head.appendChild(but);

  function close(){
    win.style.display="nons";

    document.body.removeChild(win);
  }

  setTimeout(function(){
    but.onclick=close;
  },7000);


function proba(){
  if(proba.count!=underfined){
    proba.count++;
  }
    else{
      proba.count=0;
    }
}
proba();
proba();
proba();
proba();

console.log(proba.count);


window.onload= function(){
      var menu=document.getElementById("menu");
	  menu.onclick= function(event){
	    var e=event||window.event;
        var tg=e.target;
        if(tg.id.substr(0,5).toLowerCase()==="btask") {
		  
           changeTask(tg);// вызов функции 
        }		
	    }
	  
	  
function changeTask(tg){
     // задаем свойство currenttask для функции, в котором будут хранится ссылка на div, содержащий выбранную задачу
    //скроем предыдущую задачу, если она есть  
   if(changeTask.currenttask!=undefined){
    changeTask.currenttask.style.display = "none";
	}
	// меняем текущую задачу  
	changeTask.currenttask =document.getElementById(tg.id.substr(1));
		 
	// делаем текущую задачу видимой
	changeTask.currenttask.style.display="block";
	//console.log(changeTask.currenttask);
}
}	

*/