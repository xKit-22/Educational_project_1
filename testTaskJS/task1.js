
let numExmpl = 13;
let strExmpl = 'str';
let undefExmpl;
let boolExmpl = true;
let nullExmpl = null;

function type(variable) {
   document.getElementById("p1").innerHTML = typeof(variable);
   document.getElementById("span1").innerHTML = "";
   if(variable === null){ document.getElementById("span1").innerHTML = "It's interesting bug of JavaScript ;)"; }
}

document.getElementById("btn11").onclick = function () {
   type(numExmpl);
}

document.getElementById("btn12").onclick = function () {
   type(strExmpl);
}

document.getElementById("btn13").onclick = function () {
   type(undefExmpl);
}

document.getElementById("btn14").onclick = function () {
   type(boolExmpl);
}

document.getElementById("btn15").onclick = function () {
   type(nullExmpl);
}
