const hometitle = document.querySelector("h1");

function backToHome(){
    location.href="index.html";
}

hometitle.addEventListener("click", backToHome);