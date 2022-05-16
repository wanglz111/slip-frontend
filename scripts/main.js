let quote = document.getElementById("quote");
let button = document.getElementById("button");
const url = "https://api.quotable.io/random";

var password=document.getElementById("password");


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
function random_generator(){
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
for (var i = 0; i <= passwordLength; i++) {
 var randomNumber = Math.floor(Math.random() * chars.length);
 password += chars.substring(randomNumber, randomNumber +1);
}
      document.getElementById("password").value = password
      document.getElementById("confirmPassword").value = password


}