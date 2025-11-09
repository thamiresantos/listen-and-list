document.addEventListener('DOMContentLoaded', () => {
    const musicas = [
        {id: 1, artista: "BTS", titulo: "Mic Drop", album: "Love Yourself: Her", tempo: "3:57"},
        {id:2, artista: "Sabrina Carpenter", titulo: "Busy Woman", album: "Short n'Sweet", tempo: "3:07"},
        {id:3, artista: "ENHYPEN", titulo: "No Doubt", album: "ROMANCE: UNTOLD-daydrem-", tempo: "2:47"},
        {id:4, artista:"TABLO X RM", titulo: "Stop the Rain", album:"Single", tempo:"3:10"},
        {id:5, artista:"Jin", titulo: "Don't Say You Love Me", album:"Echo", tempo:"3:00"},
        {id:6, artista:"KATSEYE", titulo: "Gabriela", album:"Beautiful Chaos", tempo:"3:17"},
        {id:7, artista: "BTS", titulo:"Run BTS", album: "Proof", tempo:"3:24"},
        {id:8, artista: "Shawn Mendes", titulo: "Lost in Japan", album:"Shawn Mendes", tempo:"3:21"},
        {id:9, artista: "BOYNEXTDOOR", titulo:"123-78", album:"No Genre", tempo:"2:40"},
        {id:10, artista:"Harry Styles", titulo:"Little freak", album:"Harry's House", tempo:"3:22"},
        {id:11, artista:"Jimin", titulo:"Who", album:"MUSE", tempo:"2:50"},
        {id:12, artista:"Sabrina Carpenter", titulo: "Good Graces", album: "Short n'Sweet", tempo: "3:05"},
        {id:13, artista:"V", titulo:"Slow Dancing", album:"Layover", tempo:"3:07"},
        {id:14, artista:"Corbyn besson, TZUYU", titulo:"Blink", album:"Single", tempo:"2:42"},
        {id:15, artista:"JungKook", titulo:"Yes or No", album:"GOLDEN", tempo:"2:27"},
        {id:16, artista:"RAYE", titulo:"Where Is My Husband!", album:"Single", tempo:"3:16"},
        {id:17, artista:"Agust D", titulo:"AMYGDALA", album:"D-DAY", tempo:"4:11"},
        {id:18, artista:"Colo de Deus", titulo:"Casa de Maria", album:"Ad10", tempo:"10:02"},
        {id:19, artista:"J-hope", titulo:"Killin'it Girl", album:"Single", tempo:"2:18"},
        {id:20, artista:"BTS", titulo:"Crystal Snow", album:"FACE YOURSELF", tempo:"5:23"},
        {id:21, artista:"Jin, Wendy", titulo:"Heart on the Window", album:"HAPPY", tempo: "2:57"},
        {id:22, artista:"Coldplay", titulo:"Fix You", album:"X&Y", tempo:"4:55"},
        {id:23, artista:"RM", titulo:"Come back to me", album:"Right Place, Wrong Person", tempo:"6:28"},
        {id:24, artista:"Seventeen", titulo:"God of Music", album:"Seventeen Heaven", tempo:"3:25"},
        {id:25, artista: "ENHYPEN", titulo: "Bad Desire(English Ver.)", album: "DESIRE:UNLEASH", tempo: "2:21"},
        {id:26, artista:"Alex Warren", titulo:"Ordinary", album:"You'll Be Alright, Kid", tempo:"3:06"},
        {id:27, artista: "Olivia Rodrigo", titulo:"Can't Catch Me Now", album:"The Hunger Games", tempo:"3:25"},
        {id:28, artista:"Jimin", titulo:"Rebirth", album:"MUSE", tempo:"2:24"},
        {id:29, artista:"Ariana Grande", titulo:"POV", album:"Positions", tempo:"3:21"},
        {id:30, artista:"ATEEZ", titulo:"BOUNCY", album:"The World EP.2:Outlaw", tempo:"3:07"}
    ]

 //função para embaralhar usando a lógica do algoritimo fisher-yates
    function embaralhar (musica){
        for (let i = musica.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [musica[i], musica[j]] = [musica[j], musica[i]];
        }
    }

    embaralhar(musicas); //chamando função

    //VARIAVEIS
    const tituloMusica = document.getElementById('musica-titulo');
    const artista = document.getElementById('musica-artista');
    const infoMusica =document.getElementById("musica-info");

    let musicaAtual = 0 ; //posição da música que esta na tela
    let listaSelecionadas = []; //array com as musicas que o usuario adicionou

    //função animação do card
    function animarCard (callback) {
        const card = document.getElementById('container-musicas')
        card.classList.add('animar');

        //Espera a animação terminar para trocar o conteúdo
        setTimeout(() => {
            card.classList.remove('animar');
            callback(); // executa a função qur troca a música
        }, 700); // tempo igual ao da animação
    }

    
    //função mostrar música na tela
    function mostrarMusica () {
    
        if (musicaAtual >= musicas.length) {
            localStorage.setItem('playlistFinal', JSON.stringify(listaSelecionadas)); //salvando a lista
            window.location.href = "playlist.html"; //sendo redirecionado para a próxima página

        } else {
            tituloMusica.textContent = musicas[musicaAtual].titulo
            artista.textContent = musicas[musicaAtual].artista
            infoMusica.textContent = musicas[musicaAtual].album + " • " + musicas[musicaAtual].tempo
        }
    }
    
    mostrarMusica() // Exibe a música atual na tela

    //VARIAVEIS
    const btnPular = document.getElementById ('btn-pular');
    const btnAdicionar = document.getElementById('btn-adicionar');
    const btnFinalizar = document.getElementById('btn-finalizar');
    const sectionPlaylist = document.getElementById ('section-playlist');
    const containerMusica = document.getElementById('container-musicas');
    const novaAlturaContainer = 350;
    const textoContainer = document.getElementById('playlist-texto-inicial');
    const contadorPlaylist = document.getElementById("quantidadeMusicaPlaylist");
    let totalMusicas = 0;
    const totalMusicasPossiveis = musicas.length; //total de opção de músicas
    const barraProgresso = document.getElementById("fill-area-progresso");
    const textoQuantidade = document.getElementById("quantidade-musicas-selecionadas");

    
    //função para atualizar a barra
    function atualizarProgresso() {
        const progresso = ((musicaAtual + 1) / totalMusicasPossiveis) * 100;
        barraProgresso.style.width = progresso + "%";
        textoQuantidade.textContent = `Música ${musicaAtual + 1} de ${totalMusicasPossiveis}`;
    }

    //botão de PULAR
    btnPular.addEventListener ('click', () => {
        musicaAtual++, //vai para a próxima música
        animarCard(mostrarMusica) //mostra ela na tela

        atualizarProgresso();

    })

    // botão ADICIONAR MÚSICA
    btnAdicionar.addEventListener ('click', () => {
        const musica = musicas[musicaAtual];
        listaSelecionadas.push(musica); // guardar a musica na lista


        containerMusica.style.height = novaAlturaContainer + 'px'; //alterando a altura do container para o botão apararecer
        textoContainer.style.display = 'none'
        const itemLista = document.createElement('p'); //criando elemento p
        itemLista.textContent = `${musica.titulo} - ${musica.artista}`; 
        itemLista.classList.add('texto-playlist')

        //icon para remover musica
        const btnRemover = document.createElement('span');
        btnRemover.classList.add ('material-symbols-outlined', 'btn-remover');
        btnRemover.textContent = 'close_small';
      
        btnRemover.addEventListener('click', () => {   // remover música
            sectionPlaylist.removeChild(itemLista);
            listaSelecionadas = listaSelecionadas.filter( m => m.id !== musica.id); // mantém só as músicas com id diferente da clicada
            totalMusicas--;
            contadorPlaylist.textContent = totalMusicas;
        });

        itemLista.appendChild(btnRemover); //adiciona o icone dentro do p

        sectionPlaylist.appendChild(itemLista); // adicionando o p dentro da div

        btnFinalizar.style.visibility = 'visible';      

        totalMusicas++; 
        contadorPlaylist.textContent = totalMusicas; //quantidade de músicas na playlist

        musicaAtual++, //vai para a próxima música
        animarCard(mostrarMusica) //mostra ela na tela

        atualizarProgresso();

    })

    // botão FINALIZAR PLAYLIST
    btnFinalizar.addEventListener ('click', () => {
        localStorage.setItem('playlistFinal', JSON.stringify(listaSelecionadas)); //salvando a música na playlist
        window.location.href = "playlist.html"; //sendo redirecionado para a próxima página

    })

   

})