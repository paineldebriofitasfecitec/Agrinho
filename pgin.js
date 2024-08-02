var avatarSelecionado = localStorage.getItem('avatar');
var nomeUsuario = localStorage.getItem('nome');

if (avatarSelecionado) {
    document.getElementById('avatar-img').src = avatarSelecionado;
}
if (nomeUsuario) {
    document.getElementById('nome-usuario').textContent = nomeUsuario;
}
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');
    var playButton = document.getElementById('play-button');

    playButton.addEventListener('click', function() {
        audio.play();
        playButton.style.display = 'none'; 
    });
});
