let button = document.getElementById('convert')
let redInput = document.getElementById('red')
let greenInput = document.getElementById('green')
let blueInput = document.getElementById('blue')
let hexInput = document.querySelector('#hexInput')



function rgbToHex(red,green,blue){
    if((red < 0||red > 255 || green < 0 || green > 255|| blue < 0 || blue > 255)){
        return "Invalid RGB values!!! DO ME AGAIN!!!"
    }

    let redHex = red.toString(16).padStart(2,'0');
    let greenHex = green.toString(16).padStart(2,'0');
    let blueHex = blue.toString(16).padStart(2,'0');

    return '#'+ redHex + greenHex + blueHex
}

button.addEventListener('click', function() {
    const redValue = parseInt(redInput.value);
    const greenValue = parseInt(greenInput.value);
    const blueValue = parseInt(blueInput.value);
    const hexColor = rgbToHex(redValue, greenValue, blueValue);
    const hexResult = document.getElementById('result');
    hexResult.textContent = hexColor.toUpperCase();
  });

  