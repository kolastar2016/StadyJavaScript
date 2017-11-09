document.write(window.navigator.userAgent);
document.write("<br>"+screen.width+"*"+ screen.height); 
setTimeout(function(){
  var b1=window.document.createElement("input");
  document.body.appendChild(b1);
  b1.type="button";
  b1.value="Google";
  b1.onclick=function(){
    location.assign("https://www.google.com.ua");
  }
},4000);
setTimeout(function(){
  var b2=window.document.createElement("input");
  document.body.appendChild(b2);
  b2.type="button";
  b2.value="obnovit";
  b2.onclick=function(){
    location.reload()
  }
},2000);
function getChildNodes(obj){
  var coll=obj.childNodes;
  var str="";
  for(var i=0;i<coll.length;i++){
    if(coll[i].nodeType==3){
      str=coll[i].data+"<br>";
    }
    else if(coll[i].nodeType==1){
      str=coll[i].textContent;
    }
  } 
}
getChildNodes(document.body);
getChildNodes(document.head);
getChildNodes(document.documentElement);
function getChildren(obj){
  var coll=obj.children;
  for(var i=0;i<coll.length;i++) { 
    // win.document.write(coll[i].tagName+'<br>');
  } 
}
getChildren(document.head);
getChildren(document.documentElement);