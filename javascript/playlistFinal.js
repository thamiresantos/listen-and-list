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

//  BOTÃO CRIAR NOVA LISTA
const btnNovaLista = document.getElementById("btn-nova");
btnNovaLista.addEventListener("click", () => {
    window.location.href = "principal.html";
});


//  BOTÃO FINALIZAR
const btnFinal = document.getElementById("btn-fim");
btnFinal.addEventListener("click", () => {
    window.location.href = "index.html";
});

// EFEITO DAS NOTAS 
const container = document.getElementById("conteudo");
const notas = ["🎵", "🎶", "🎤"];

function criarNota() {
  const nota = document.createElement("div");
  nota.classList.add("nota");
  nota.textContent = notas[Math.floor(Math.random() * notas.length)];

  nota.style.left = Math.random() * 100 + "vw";
  nota.style.fontSize = Math.random() * 0.8 + 0.8 + "rem";
  nota.style.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
  nota.style.opacity = Math.random() * 0.4 + 0.3;

  container.appendChild(nota);

  setTimeout(() => nota.remove(), 7000);
}

setInterval(criarNota, 600);
