getText("https://api.adviceslip.com/advice");

async function getText(file) {
  var myObject = await fetch(file);
  var myText = await myObject.json();
  document.getElementById("id").innerHTML = myText["slip"]["id"];
  document.getElementById("quote").innerHTML = myText["slip"]["advice"];
}
