// PEGAR DADOS DO LOCALSTORAGE
const nomeUsuario = localStorage.getItem("nomeUser");
const playlist = JSON.parse(localStorage.getItem("playlistFinal")) || [];

// VARIAVEIS
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("sub-titulo");
const listaFinal = document.getElementById("playlist-final");

