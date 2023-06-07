function add(a,b) {
   r = a + b;
   document.getElementById("screen").innerHTML = a + " + " + b + " = " + r;
}
function sub(a,b) {
   r = a - b;
   document.getElementById("screen").innerHTML = a + " - " + b + " = " + r;
}
function mul(a,b) {
   r = a * b;
   document.getElementById("screen").innerHTML = a + " * " + b + " = " + r;
}
function div(a,b) {
   r = a / b;
   document.getElementById("screen").innerHTML = a + " / " + b + " = " + r;
}