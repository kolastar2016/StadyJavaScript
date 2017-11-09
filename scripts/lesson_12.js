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
    if(t<0){
        t*=(-1);
        obj.day=Math.floor(t/(1000*60*60*24));
        t-=obj.day*1000*60*60*24;
        obj.hours=Math.floor(t/(1000*60*60));
        t-=obj.hours*1000*60*60;
        obj.min=Math.floor(t/(1000*60));
        t-=obj.min*1000*60;
        obj.sec=Math.floor(t/(1000));
        t-=obj.sec*1000;
        obj.ms=t;
    }
        return obj;
}
var date1=new Date();
var date2=new Date(2017,5,17,13);
date1=new Date();
date2=new Date(2018,0);
var dif=difDate(date1,date2);
document.getElementById("tny").rows[1].cells[2].innerHTML=dif.day;