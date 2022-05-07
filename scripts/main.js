

function time(){
    var timestamp = Date.now();     
    var tmp = new Date(timestamp);
    document.getElementById("time").innerHTML = tmp;

}