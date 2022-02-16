let objArr = [{name: "overflow", value: "hidden"}, {name: "cursor", value: "pointer"}];

function getObject(arr) {
    return {[arr[0].name] : arr[0].value, [arr[1].name]: arr[1].value};
}

document.getElementById("btn3").onclick = function () {
    document.getElementById("result3").innerHTML = "look it in console";
}

console.log(getObject(objArr));
