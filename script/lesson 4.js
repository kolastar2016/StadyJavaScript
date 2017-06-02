/*
var mem=null;

function add(x){
  calc.src.value = calc.src.value+x;
}

 calc.eq.onclick=function(){
  calc.src.value=eval(calc.src.value);
}
 
calc.clean.onclick=function(){
  calc.src.value="";
}

 calc.pm.onclick = function(){
      calc.src.value=(-1)*calc.src.value
    }
 
 calc.bs.onclick = function(){
   var s = calc.src.value;
   calc.src.value = s.substr(0,s.length-1);
 }
 
 calc.mplus.onclick=function(){
   mem=parseFloat(calc.src.value)+mem;
 }
 
 calc.mmin.onclick=function(){
   mem=mem-eval(calc.src.value);
 }
 
 calc.memread.onclick= function(){
   if (mem != null){
   if(mem<0){
     calc.src.value= calc.src.value+ "("+mem+")";
   }
   else{
   calc.src.value= calc.src.value+ mem;
 }
}
 }
  calc.memclean.onclick= function(){
   mem=null;
 }
  function clock(idelem){
          var d=new Date();
          
            console.log(d);
     var h= d.getHours();
      var m = d.getMinutes();
      var s = d.getSeconds();
    if(h<10){
          h = "0" + h;
        }  
        if(m<10){
          m = "0" + m;
        } 
        if(s<10){
          s = "0" + s;
        } 
      document.getElementById(idelem).innerHTML=
        h + ":" + m + ":" + s;
      setTimeout(clock,1000,idelem);
          }
        clock("blok3");
       /* h=h<10?"0"+h:h;
  m=m<10?"0"+m:m;
  s=s<10?"0"+s:s;*/

     /*   
    var bl1 = document.getElementById("blok1");
    var bl2 = document.getElementById("blok2");
    bl2.onmouseover = function(){
      bl1.style.display="inline";
    }
    bl2.onmouseout = function(){
      bl1.style.display="none";
    }
    
      
    var x = prompt("input number","2");
    x = parseFloat(x);
    console.log(typeof  x);
    if (x==3){
      alert("You input 3 ");
    }else{
      alert("is not 3")
    }
      */