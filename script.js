const dice = document.getElementById("circle");
const quote = document.getElementById("quote");
const id = document.getElementById("id");
//populates on load
getData();
// gets data from API and sets the content of #quote and #id p tag
async function getData() {
  quote.innerText = "Loading....";
  try {
    const res = await fetch(
      "https://api.adviceslip.com/advice?t=" + Math.random()
    );
    var myText = await res.json();
    quote.innerHTML = myText["slip"]["advice"];
    id.innerHTML = myText["slip"]["id"];
  } catch (error) {
    console.log(error);
  }
}
// add event listener for #circle div
dice.addEventListener("click", getData);
