const PlayerTxt = document.getElementById('playerTxt');
const PlayerImg = document.getElementById('playerImg');
const bHappy = document.getElementById('btnHappy');
const musica = document.getElementById('audio')
const bSad = document.getElementById('btnSad');
const bNerd = document.getElementById('btnNerd');
const bAura = document.getElementById('btnAura');

function botaoFeliz () {
    document.body.style.backgroundColor = "#F1C40F";
    PlayerImg.src = "https://i.scdn.co/image/ab67616d00001e0274c732f8aa0e0ccbb3d17d96";
    PlayerTxt.style.color = "black";
    PlayerTxt.innerText = "";
    PlayerTxt.innerText = "From the Start";
    musica.src = "SpotiDownloader.com - From The Start - Laufey.mp3";
    
}

function botaoTriste () {
    document.body.style.backgroundColor = "#3498DB";
    PlayerTxt.style.color = "white";
    PlayerImg.src = "https://i.scdn.co/image/ab67616d00001e02f255d26b20b46200b99a6cc1";
    PlayerTxt.innerText = "";
    PlayerTxt.innerText = "Among";
    musica.src = "/MerdasAcontecem.mp3"
}

function botaoNerd () {
    document.body.style.backgroundColor = "#E74C3C";
    PlayerImg.src = "https://i.scdn.co/image/ab67616d00001e021e2f9ae8632b51154580ac8e";
    PlayerTxt.style.color = "white";
    PlayerTxt.innerText = "";
    PlayerTxt.innerText = "Rap do Itachi";
    musica.src = "SpotiDownloader.com - Rap do Itachi_ Essa Dor Que Causei... (NERD HITS) - 7 Minutoz.mp3";
}

function botaoAura () {
    document.body.style.backgroundColor = "#9B59B6";
    PlayerImg.src = "https://i.scdn.co/image/ab67616d00001e02550c08bd67e6d175e2dc463b";
    PlayerTxt.innerText = "";
    PlayerTxt.innerText = "Cute Depressed";
    PlayerTxt.style.color = "white";
    musica.src = "SpotiDownloader.com - CUTE DEPRESSED - Dyan Dxddy.mp3";
}






bHappy.addEventListener('click', botaoFeliz)
bSad.addEventListener('click', botaoTriste)
bNerd.addEventListener('click', botaoNerd)

bAura.addEventListener('click', botaoAura)
