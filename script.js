getText("https://api.adviceslip.com/advice");

async function getText(file) {
  var myObject = await fetch(file);
  var myText = await myObject.text();
  document.getElementById("quote").innerHTML = myText;
}
