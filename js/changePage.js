const hometitle = document.querySelector("h1");
const jjivBtn = document.querySelector(".menubar #jjiv");
const jjidoBtn = document.querySelector(".menubar #jjido");
const picBtn = document.querySelector(".submenu #pics");
const travBtn = document.querySelector(".submenu #travel");

function backToHome(){
    location.href="index.html";
}
function goTojjiv(){
    location.href="jjiv.html"
}
function goTojjido(){
    location.href="jjido.html"
}
function goToPic(){
    location.href="pic.html"
}
function goToTrav(){
    location.href="trav.html"
}

hometitle.addEventListener("click", backToHome);
jjivBtn.addEventListener("click", goTojjiv);
jjidoBtn.addEventListener("click", goTojjido);
picBtn.addEventListener("click", goToPic);
travBtn.addEventListener("click", goToTrav);
