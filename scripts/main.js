let quote = document.getElementById("quote");
let button = document.getElementById("button");
const url = "https://api.quotable.io/random";
let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
    });
};
window.addEventListener("load", getQuote);
button.addEventListener("click", getQuote);

function time(){
    var timestamp = Date.now();     
    var tmp = new Date(timestamp);
    document.getElementById("time").innerHTML = tmp;

}