// the purpose of the handler
var lessonTwoButton=document.getElementById("lessonTwoButton");
var lessonTwoColor=document.getElementById("lessonTwoColor");
lessonTwoButton.onclick=function() {
	document.body.style.backgroundColor="#cccc00";//"#cccc00";
  	this.style.color="rgb(204,204,0)"; 
}
lessonTwoColor.onchange=changeColor;
function changeColor() {
	document.body.style.backgroundColor=lessonTwoColor.value;
}
lessonTwoButton.onchange=function(){
// previous handler will be lost
	lessonTwoButton.style.backgroundColor=lessonTwoColor.value; 
}
var lessonTwoDiv=document.getElementById('lessonTwoDiv');
lessonTwoDiv.style.width="100px";
lessonTwoDiv.style.height="100px";
lessonTwoDiv.style.backgroundColor="red";
var x=20;
lessonTwoDiv.style.marginLeft = x + "px";
//mettod addEventListener
lessonTwoDiv.addEventListener("click",function() {
 	console.log("Okey");
})
lessonTwoDiv.addEventListener("click",chMargin);
function chMargin(){
  	x++;
	lessonTwoDiv.style.marginLeft = x + "px";
}