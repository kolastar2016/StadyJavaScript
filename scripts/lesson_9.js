/*function rnd(A,B,n) {
  A= Math.abs(A);
  B= Math.abs(B);
  if (A>B){
    var x = A;
    A=B;
    B=x;
  }
  var mas=[];
  for(var i=0;i<n;i++){
    mas[i]=Math.round((B-A)*Math.random()+A);
  }
  console.log(mas);
  return mas;
}
rnd(4,19,10);

var dim = document.querySelector("#dimantion");
var numdim = parseInt(dim.value);
var matrixs = document.querySelector("#matrixs");
var divbutmatr = document.createElement('div');
divbutmatr.id="divbutmatr";
divbutmatr.style.display="inline-block";
divbutmatr.style.textAlign = "center";
divbutmatr.style.margin="0px 5px";

var mplus=document.createElement('button');
divbutmatr.appendChild(mplus);
mplus.id="mplus";
mplus.innerHTML="+";
divbutmatr.innerHTML+="<br>";

var mmin=document.createElement('button');
divbutmatr.appendChild(mmin);
mmin.id="mmin";
mmin.innerHTML="-";
divbutmatr.innerHTML+="<br>";

var mmul=document.createElement('button');
divbutmatr.appendChild(mmul);
mmul.id="mmul";
mmul.innerHTML="*";
divbutmatr.innerHTML+="<br>";

var mrnd=document.createElement('button');
divbutmatr.appendChild(mrnd);
mrnd.id="mrnd";
mrnd.innerHTML="rnd";


console.log(mrnd);
function rndMatr12(){
  

  var matr1=document.getElementById('matr1');
  var matr2=document.getElementById('matr2');

  var inpm1 = matr1.getElementsByTagName('input');
  var inpm2 = matr2.getElementsByTagName('input');
  var n = numdim*numdim;
  var mas =rnd(0,100,2*n);

  for (var i=0;i<n;i++){
  inpm1[i].value=mas[i];
  inpm2[i].value=mas[i+n];
  }
}

dim.onchange=function(){

  
  numdim = parseInt(dim.value);
     matrixs.innerHTML="";
     console.log(numdim);
  var matr1 = document.createElement('div');
  
  matrixs.appendChild(matr1);
  
  matr1.id = "matr1";
  matr1.style.padding="1px";
  matr1.style.margin="8px";
  matr1.style.display="inline-block";
  matr1.style.backgroundColor="blue";
  
  for(i=0;i<numdim;i++){
    for(j=0;j<numdim;j++){
  
      var inp=matr1.appendChild(document.createElement('input'));
      inp.size="4";
    inp.style.width="40px";
		inp.style.height="40px";
		inp.style.margin="4px";
      matr1.appendChild(inp);
    }
    matr1.innerHTML+="<br>";
  }
  
  divbutmatr = matrixs.appendChild(divbutmatr);
  
  var matr2= matr1.cloneNode(true);
 var matr3= matr1.cloneNode(true);
matrixs.appendChild(matr2);
  matr2.id="matr2";
 matr2.style.backgroundColor="yellow"; 
  matrixs.innerHTML+="<hr>";
  
  matrixs.appendChild(matr3);
  matr3.id="matr3";
  matr3.style.backgroundColor="red";

  mrnd=document.getElementById('mrnd');
  mrnd.onclick=rndMatr12;
  
  mplus=document.getElementById('mplus');
  mplus.onclick=plusMatr12;
  
  mmul=document.getElementById("mmul");
mmul.onclick=multMatr12;

mmin=document.getElementById("mmin");
mmin.onclick=minMatr12;
}

function plusMatr12(){
  var matr1=document.getElementById('matr1');
  var matr2=document.getElementById('matr2');
  var matr3=document.getElementById('matr3');
  
  var inpm1 = matr1.getElementsByTagName('input');
  var inpm2 = matr2.getElementsByTagName('input');
  var inpm3 = matr3.getElementsByTagName('input');
  var n = numdim*numdim;
  
  for(var i=0;i<n;i++){
    inpm3[i].value=Number(inpm1[i].value)+Number(inpm2[i].value);
  
  }
}

function minMatr12(){
	var matr1=document.getElementById("matr1");
	var matr2=document.getElementById("matr2");
	var matr3=document.getElementById("matr3");

	var inpm1=matr1.getElementsByTagName("input");
	var inpm2=matr2.getElementsByTagName("input");
	var inpm3=matr3.getElementsByTagName("input");
	var n=numdim*numdim;
		for(i=0; i<n; i++){
		inpm3[i].value=Number(inpm1[i].value)-Number(inpm2[i].value)
		}
}

function multMatr12(){
	var matr1=document.getElementById("matr1");
	var matr2=document.getElementById("matr2");
	var matr3=document.getElementById("matr3");
	var inpm1=matr1.getElementsByTagName("input");
	var inpm2=matr2.getElementsByTagName("input");
	var inpm3=matr3.getElementsByTagName("input");
	var mas1=[];
	var mas2=[];

		for(var i=0; i<numdim; i++){

		mas1[i]=[];
		mas2[i]=[];

			for(var j=0; j<numdim; j++){

			mas1[i][j]=inpm1[j+numdim*i].value;
			mas2[i][j]=inpm2[j+numdim*i].value;			
			}			

		}
		for(var i=0; i<numdim; i++){
			for(var j=0, s=0; j<numdim; j++){
				for(var k=0; k<numdim; k++){
				s+=mas1[i][k]*mas2[k][j];
				}

				inpm3[j+numdim*i].value=s;
			}

		}
*/