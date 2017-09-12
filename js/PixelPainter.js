var pixelPaint = document.getElementById("pixelPainter");
var colorArray = ["FAEBD7", "00FFFF", "7FFFD4", "000000", "0000FF", "8A2BE2", "A52A2A", "FF7F50", "DC143C", "006400", "FFD700", "DAA520", "ADFF2F", "FF0000", "FF8C00", "FFB6C1", "FFFF00", "40E0D0", "4169E1", "6A5ACD"];
var myColor = "";
var gridDiv = document.createElement("div");
var colorDiv = document.createElement("div");
var eraseButton = document.createElement("button");
var clearButton = document.createElement("button");
var createButton = document.createElement("button");
var heightBox = document.createElement("input");
var widthBox = document.createElement("input");

gridDiv.id = "grid";
colorDiv.id = "colorGrid";
eraseButton.id = "erase";
clearButton.id = "clear";
createButton.id = "create";
heightBox.id = "theHeight";
widthBox.id = "theWidth";

pixelPainter.appendChild(gridDiv);
pixelPainter.appendChild(colorDiv);
pixelPainter.appendChild(eraseButton);
pixelPainter.appendChild(clearButton);
pixelPainter.appendChild(createButton);
pixelPainter.appendChild(heightBox);
pixelPainter.appendChild(widthBox);

eraseButton.innerHTML = "Erase";
clearButton.innerHTML = "Clear";
createButton.innerHTML = "Create";

function createGrid(length, width){
  for(var i = 0; i < length; i++){
    var pixelLine = document.createElement("div");
    pixelLine.className = "pixelLine";
    gridDiv.appendChild(pixelLine);
    for(var j = 0; j < width; j++){
      var gridPixel = document.createElement("div");
      gridPixel.className = "gridPixel";
      gridPixel.style.width = "20px";
      gridPixel.style.height = "20px";
      gridPixel.addEventListener("click", addColor);
      pixelLine.appendChild(gridPixel);
    }
  }
  for(var i = 0; i < colorArray.length; i++){
    var palette = document.createElement("div");
    palette.style.backgroundColor = colorArray[i];
    palette.className = "palette";
    palette.addEventListener("click", pickColor);
    colorDiv.appendChild(palette);
  }
  var pix = document.getElementsByClassName("gridPixel");
  var test = (parseInt(pix[0].style.width)*width) + ((width/10)*20);
  var test1 = test.toString() + "px";
  gridDiv.style.width = test1;
  // console.log(test1);
  // console.log(gridDiv.style.width);
}

function pickColor(){
  myColor = this.style.backgroundColor;
  console.log(myColor);
}

function addColor(){
  this.style.backgroundColor = myColor;
}

eraseButton.addEventListener("click", erase);
function erase(){
  myColor = "FFFFFF"
  this.style.backgroundColor = myColor;
}

clearButton.addEventListener("click", clear);
function clear(){
  var test = document.getElementsByClassName("gridPixel");
  for(var i = 0; i < test.length; i++){
    test[i].style.backgroundColor = "FFFFFF";
  }
}

createGrid(10, 40);

// gridDiv.style.width = "600px";
console.log(document.getElementById("grid").style.width);
var pix = document.getElementsByClassName("gridPixel");
console.log(document.getElementsByClassName("gridPixel"));
// for (var i = 0; i < pix.length; i++) {
//   pix[i].style.width = "20px";
//   pix[i].style.height = "20px";
// }
// console.log(pix[0].style.width);

// var test  = parseInt(pix[0].style.width);
// var test1 = Math.sqrt(pix.length)

// console.log(test, test1);


