function mydrag(e) {
e.dataTransfer.setData("text/plain", e.target.id);
e.dropEffect = "move";
}
function dropover(e) {
//console.log(e);
e.preventDefault();
}
function dropme(e) {
e.preventDefault();
var myInfo = e.dataTransfer.getData("text");
console.log(e);
var pickupdata = document.getElementById(myInfo);
var ncontent = '';
if (pickupdata.tagName == "DIV") {
ncontent = pickupdata.innerHTML;
} else {
ncontent = "<img src='" + pickupdata.src + "' />";
}
document.getElementById('dropoff').innerHTML = ncontent;
}
