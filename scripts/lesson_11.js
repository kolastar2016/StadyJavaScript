document.querySelector("#makefunct").onclick=function(){
  var arg="";
  var kod=document.querySelector("#kod").value;
  var nf=new Function(arg,kod);
console.log(nf);
console.log(nf());
};
