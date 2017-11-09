var re_nameuser=/^[A-ZА-ЯЁ\'\`]{2,100}$/i;
var re_email=/^[A-Z0-9_$\.!\-]+@[A-Z0-9\.]+\.[A-ZА-ЯЁ]{2}$/i;
var re_tel=/^(\+380)[0-9]{9}$/;
var re_dat=/^([0]?[1-9]|[12][0-9]|[3][01])([\.\/])([0]?[1-9]|[1][0-2])(\2)([1][9]\d{2}|[2][0][01]\d)$/;
var re_pas_posible=/^[\w*.\\\/#$%^&!]{8,}$/;
var re_pas_digit=/\d/;
var re_pas_upper=/[A-Z]/;
regform.subm.onclick=function(){
   var flag=0;
  if(!re_nameuser.test(regform.nameuser.value)){
    message("Not corect name","lnameuser");
    flag=1;
  }
  if(!re_email.test(regform.email.value)){
    message("Not corect email","lemail");
    flag=2;
  }
  if(!re_tel.test(regform.tel.value)){
    message("Not corect email","ltel");
    flag=3;
  }
  if(!re_dat.test(regform.dat.value)){
    message("Not corect data","ldat");
    flag=4;
  }
  if(!re_pas_posible.test(regform.pas1.value)){
    message("Not corect pas1 input simbol","lpas1");
    flag=5;
  }
  else if(!re_pas_digit.test(regform.pas1.value)){
    message("Not corect data input number","lpas1");
    flag=6;
  }
   else if(!re_pas_upper.test(regform.pas1.value)){
    message("Not corect data input upper Register","lpas1");
    flag=7;
  }
  if(regform.pas1.value!=regform.pas2.value){
    message("Frirst nad second Password not equals","lpas2");
    flag=8;
  }
  if(flag===0){
    regform.submit();
    regform.reset();
    alert("Congratulation your text is send");
  }
}
function message(mes,str_id){
  document.getElementById(str_id).innerHTML=mes;
}
var inpregf=regform.getElementsByTagName("input");
for(i=0;i<inpregf.length;i++){
  if (inpregf[i].type.toLowerCase()==="text" || inpregf[i].type.toLowerCase()==="password"){
    inpregf[i].onfocus=function(){
      message("","l"+this.id);
    }  
  }
}
function clearMes(){
  message("","l"+this.id);
}
regform.nameuser.onfocuse=clearMes;
regform.email.onfocuse=clearMes;
regform.tel.onfocuse=clearMes;
regform.dat.onfocuse=clearMes;
regform.pas1.onfocuse=clearMes;
regform.pas2.onfocuse=clearMes;