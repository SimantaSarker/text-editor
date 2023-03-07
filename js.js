const area = document.getElementById("text-input");

document.getElementById("bold").addEventListener("click", function () {
  boldToNormal(area);
});

document.getElementById("italic").addEventListener("click", function () {
  italicToNormal(area);
});

document.getElementById("underline").addEventListener("click", function () {
  underlineToNormal(area);
});

// Text align part

document.getElementById("left").addEventListener("click", function () {
  area.style.textAlign = "left";
});
document.getElementById("center").addEventListener("click", function () {
  area.style.textAlign = "center";
});
document.getElementById("right").addEventListener("click", function () {
  area.style.textAlign = "right";
});

// Color part

document.getElementById("text-color").addEventListener("change", (e) => {
  area.style.color = e.target.value;
});

/*const number1=document.getElementById('font-size').value;
   area.style.fontSize=`${number1}px`;
*/
document.getElementById("number").addEventListener("change", function () {
  const fontSize = document.getElementById("number").value;
  area.style.fontSize = fontSize + "px";
});
