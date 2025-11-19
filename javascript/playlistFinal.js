// PEGAR DADOS DO LOCALSTORAGE
const nomeUsuario = localStorage.getItem("nomeUser");
const playlist = JSON.parse(localStorage.getItem("playlistFinal")) || [];

// VARIAVEIS
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("sub-titulo");
const listaFinal = document.getElementById("playlist-final");

// MOSTRAR O NOME DO USUÁRIO NO TÍTULO
if (nomeUsuario) {
    titulo.textContent = `Playlist de ${nomeUsuario} Finalizada!`;
}

//  MOSTRAR QUANTAS MÚSICAS ELE ADICIONOU
subtitulo.textContent = `Você selecionou ${playlist.length} músicas incríveis para a sua coleção pessoal!`;

// MOSTRAR PLAYLIST NA TELA
playlist.forEach(musica => {
    const item = document.createElement("div");
    item.classList.add("item-final");

    item.innerHTML = `
        <p><strong>${musica.titulo}</strong></p>
        <span> ${musica.artista} • ${musica.tempo} </span>
    `;

    listaFinal.appendChild(item);
});

