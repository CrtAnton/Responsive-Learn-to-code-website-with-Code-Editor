var htmlCodeArea = document.getElementById("htmlCode")
var cssCodeArea = document.getElementById("cssCode")
var jsCodeArea = document.getElementById("jsCode")
var outputArea = document.getElementById("output")
var htmlPage = document.getElementById("htmlPage")
var cssPage = document.getElementById("cssPage")
var jsPage = document.getElementById("jsPage")
var outputPage = document.getElementById("outputPage")

function run(){
    var htmlCode = htmlCodeArea.value
    var cssCode = "<style>" + cssCodeArea.value + "</style>"
    var jsCode = jsCodeArea.value
    outputArea.contentDocument.body.innerHTML = htmlCode+cssCode
    outputArea.contentWindow.eval(jsCode)
    outputSwitch()

}
function htmlSwitch(){
    htmlPage.style.color="#c1a167";
    cssPage.style.color="black";
    jsPage.style.color="black";
    outputPage.style.color="black";
    htmlCodeArea.style.width = "100%";
    htmlCodeArea.style.height= "80vh";
    htmlCodeArea.style.display = "block";
    cssCodeArea.style.display = "none";
    jsCodeArea.style.display = "none";
    outputArea.style.display = "none";

}
function cssSwitch(){
    cssPage.style.color="#c1a167";
    htmlPage.style.color="black";
    jsPage.style.color="black";
    outputPage.style.color="black";
    cssCodeArea.style.width = "100%";
    cssCodeArea.style.height= "80vh";
    cssCodeArea.style.display = "block";
    htmlCodeArea.style.display = "none";
    jsCodeArea.style.display = "none";
    outputArea.style.display = "none";

}
function jsSwitch(){
    jsPage.style.color="#c1a167";
    cssPage.style.color="black";
    htmlPage.style.color="black";
    outputPage.style.color="black";
    jsCodeArea.style.width = "100%";
    jsCodeArea.style.height= "80vh";
    jsCodeArea.style.display = "block";
    htmlCodeArea.style.display = "none";
    cssCodeArea.style.display = "none";
    outputArea.style.display = "none";

}
function outputSwitch(){
    outputPage.style.color="#c1a167";
    cssPage.style.color="black";
    jsPage.style.color="black";
    htmlPage.style.color="black";
    outputArea.style.width = "100%";
    outputArea.style.height= "80vh";
    outputArea.style.display = "inline-block";
    htmlCodeArea.style.display = "none";
    cssCodeArea.style.display = "none";
    jsCodeArea.style.display = "none";
    


}
document.getElementById("runBtn").onclick = run
document.getElementById("htmlPage").addEventListener("click", htmlSwitch)
document.getElementById("cssPage").addEventListener("click", cssSwitch)
document.getElementById("jsPage").addEventListener("click", jsSwitch)
document.getElementById("outputPage").addEventListener("click", outputSwitch)