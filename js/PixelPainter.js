var pixelPainter = (function(){

  var pixelPaint = document.getElementById("pixelPainter");

  var gridDiv = document.createElement("div");
  var colorDiv = document.createElement("div");
  var eraseButton = document.createElement("button");
  var clearButton = document.createElement("button");

  gridDiv.id = "grid";
  colorDiv.id = "colorGrid";
  eraseButton.id = "erase";
  clearButton.id = "clear";

  eraseButton.innerHTML = "Erase";
  clearButton.innerHTML = "Clear";
})