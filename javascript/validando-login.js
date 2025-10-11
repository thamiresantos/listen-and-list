const nomeUsuario = document.getElementById('btn-nomeUsuario');
const btnAvancar = document.getElementById('btn-tela-login');

nomeUsuario.addEventListener('input', () => {
    if (nomeUsuario.value.length === 0) {
        btnAvancar.disabled = true;
    } else {
        btnAvancar.disabled = false;
    }
} );

btnAvancar.addEventListener('click', () => {
    localStorage.setItem('nomeUser', nomeUsuario.value)
    window.location.href = 'principal.html'
});