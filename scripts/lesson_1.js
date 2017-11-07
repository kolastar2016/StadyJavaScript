//clock
function clock(idelem) {
  var d=new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  document.getElementById(idelem).innerHTML = h + ":" + m + ":" + s;
  setTimeout(clock,1000,idelem);
}
clock("lessonOneClock"); 

// block HELLO
document.getElementById("testLessonOneblock").onmouseover=
  function() {
    this.style.margin= "100px";
  }     
document.getElementById("testLessonOneblock").onmouseout=
  function() {
    this.style.margin= "";
  }   
