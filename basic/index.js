const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio =  document.querySelector("audio");

const data = {
  title: "Acorda Pedrinho",
    artist: "Jovem Dionisio",
    cover: "files/Jovem-Dionisio-Acorda-Pedrinho-mp3-image-768x768.jpg",
    file: "files/Jovem Dionisio - ACORDA PEDRINHO.mp3"
}

cover.style.background = `url('${player.data.cover}') no-repeat center center / cover`
title.innerText = player.data.title;
artist.innerText = player.data.artist;
audio.src = player.data.file;