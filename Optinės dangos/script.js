//const suskleist = document.getElementsByClass("suskleis");
//suskleist.addEventListener("click", function () {
//  this.classList.toggle("toggle");
//});

function show(ele) {
  var srcElement = document.getElementById(ele);
  srcElement.classList.toggle("active");
}

function toggleRotation(ele) {
  var svgElement = document.getElementById(ele);
  svgElement.classList.toggle("dvigubaRodyklyte-90");
}

/*function show(ele) {
  var srcElement = document.getElementById(ele);
  srcElement.style.maxHeight = "none";
  var height = srcElement.offsetHeight;
  srcElement.style.maxHeight = "0";
  const elements = document.querySelectorAll(srcElement.style + ".active");
  elements.forEach((element) => {
    element.style.maxHeight = height + "px";
  });
}*/

/*var myDiv = document.getElementsByClassName("tekstas");
for (let i = 0; i < myDiv.length; i++) {
  const currentWidth = myDiv[i].width;
  const newWidth = currentWidth - 64;
  myDiv[i].style.width = newWidth + "px";
}*/

/*// Get the screen width
var screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

// Calculate the new width
var newWidth = screenWidth - 64;

// Get the div elements
var divs = document.getElementsByClassName("tekstas");

// Set the new width for each div
for (var i = 0; i < divs.length; i++) {
  divs[i].style.width = newWidth + "px";
}*/
