var colors = document.querySelectorAll(".round");
var selectColor = document.getElementById("selectColor");
var buttonSelectColor = document.getElementById("buttonSelectColor");
var h, s, l;
var colorName;

function hexToHSL(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  r = parseInt(result[1], 16);
  g = parseInt(result[2], 16);
  b = parseInt(result[3], 16);
  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  h, s, l = (max + min) / 2;
  if(max == min){
    h = s = 0; // achromatic
  }else{
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  var HSL = new Object();
  HSL['h']=h;
  HSL['s']=s;
  HSL['l']=l;
  return HSL;
}

function colorNameDefinition(h) {
  if(h < 0.04 || h > 0.94) {
    colorName = "Красный"
  }
  else if(h > 0.04 && h < 0.1) {
    colorName = "Оранжевый"
  }
  else if(h > 0.1 && h < 0.18) {
    colorName = "Желтый"
  }
  else if(h > 0.18 && h < 0.44) {
    colorName = "Зелёный"
  }
  else if(h > 0.44 && h < 0.55) {
    colorName = "Голубой"
  }
  else if(h > 0.55 && h < 0.72) {
    colorName = "Синий"
  }
  else if(h > 0.72 && h < 0.94) {
    colorName = "Фиолетовый"
  }
  return colorName;
}


buttonSelectColor.addEventListener("click", function() {
  colors.forEach(function(roundColor) {
    var hex = roundColor.dataset.color;
    hexToHSL(hex);
    colorNameDefinition(h);
    
    if(selectColor.value == colorName) {
      roundColor.classList.add("rotate");
    }
    else {
      roundColor.classList.remove("rotate");
    }
    console.log(h, colorName);
  });
});