
// copy button function
var copyBtn = document.getElementById("copyBtn")
copyBtn.onclick = function(){
    var copyCode = document.getElementById("code")
    navigator.clipboard.writeText(copyCode.innerHTML);
    copyBtn.innerHTML = "Copied"
}

var exampleBtn = document.getElementById("example-button")
exampleBtn.onclick = function(){
    exampleBtn.innerHTML = "Never click the red button"
}