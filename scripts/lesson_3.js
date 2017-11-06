/*
car1 = {mark:"opel",color:"red",show:function(){
        console.log(car1.mark+car1.color)
       }
  
}
car2={  
}
car1.show();
car1.mark="mazad";
car1.show();

function Cars(m,c,s){
  this.mark = m;
  this.color = c;
  this.speed = s;
  
  this.incSpeed = function(ds){
    this.speed=this.speed+ds;
  }


this.show = function(){
  console.log("Marka :" + this.mark + "\n"+ "COlor :" + this.color +"\n"+ "SPeed :" + this.speed);
}
}

var opell = new Cars("opel","green",120);
var myCar = new Cars("ZAZ","Blue",110);

opell.incSpeed(100);
opell.show();
myCar.show();

myCar.color = "red";
myCar.show();
myCar["color"]="black";
myCar.show();



var pl=document.getElementById("plus");
var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var res=document.getElementById("result");
pl.onclick = function(){
  res.value = Number(t1.value) + Number(t2.value)
}

console.log(parseFloat("2e10"));
console.log(parseFloat("2.56km"));
console.log(parseFloat("vb2.56"));
console.log(parseInt("2e8"));
console.log(parseInt("2.56km"));
console.log(parseInt("ff",16));
console.log(parseInt("101",2));

x = "3.78";
console.log(+x+5);
console.log(5+(+x));

x = String(35);
console.log(x+40);

var num = 255;
console.log(num.toString(16));

console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(-20));

console.log (typeof num);
console.log (typeof x);

//eval
str = "alert(45);document.body.style.backgroundColor = 'red';";
eval(str);
*/
