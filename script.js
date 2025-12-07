
const boxes = [
  document.getElementById('color1'),
  document.getElementById('color2'),
  document.getElementById('color3'),
  document.getElementById('color4'),
  document.getElementById('color5')
];

function getRandomColor() {
  
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}

function generatePalette() {
  boxes.forEach(box => {
    const color = getRandomColor();
    box.style.backgroundColor = color;
    box.setAttribute('title', color); 
  });
}


document.getElementById('generatePalette').addEventListener('click', generatePalette);


boxes.forEach(box => {
  box.addEventListener('click', () => {
    const color = box.style.backgroundColor;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = rgbToHex(color);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert(`Copied ${tempInput.value} to clipboard!`);
  });
});


function rgbToHex(rgb) {
  const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
  if (!result) return rgb;
  return "#" + ((1 << 24) + (parseInt(result[1]) <<16) + (parseInt(result[2]) <<8) + parseInt(result[3])).toString(16).slice(1);
}


generatePalette();
