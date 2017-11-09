var mem=null;
function add(x){
  calc.scr.value=calc.scr.value+x;
}
function eqv(){
  calc.scr.value=eval(calc.scr.value);
}
function clean(){
  calc.scr.value="";
}
function pm(){
  calc.scr.value=(-1)*eval(calc.scr.value);
}
function bs(){
  var s=calc.scr.value;
  calc.scr.value=s.substr(0,s.length-1);
} 
function mplus(){
  mem=parseFloat(eval(calc.scr.value))+mem; 
} 
function mmin(){
  mem=mem-eval(calc.scr.value); 
}
function memread(){
  if(mem!=null){ 
    if (mem<0){
      calc.scr.value=calc.scr.value+"("+mem+")";
    }else{
      calc.scr.value=calc.scr.value+mem;
    }
  }
}
function memclean(){
  mem=null;
}
var dvbut=document.getElementById("dvbut");
dvbut.onclick=function(event){
  event = event || window.event;
  var tg=event.target;    
  var atr=tg.getAttribute("data-v");
  if(atr!=null){
    add(atr);
  }else{
    switch(tg.name){
      case "eq": eqv();
      break;
      case "bs": bs();
      break;
      case "mmin": mmin();
      break;
      case "mplus": mplus();
      break;
      case "pm":pm();
      break;
      case "memclean":memclean();
      break;
      case "memread": memread();
      break;
      case "clean": clean();
      break;
    } 
  } 
}
calc.scr.onkeydown=function(event){
  event=event || window.event;
  event.preventDefault();
  var ch=event.charCode || event.keyCode;
  if(ch>47 && ch<58){
    calc.scr.value+=String.fromCharCode(ch); 
  }
  if(ch==8){ 
    bs();
  }
}
calc.memread.onkeydown=function(event){
  event.preventDefault();
}
dvbut.onkeydown=function(event){
  event=event||window.event;
  event.preventDefault();
}  