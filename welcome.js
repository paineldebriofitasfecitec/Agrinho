document.addEventListener("DOMContentLoaded", function() {
    const avatares = document.querySelectorAll('input[name="avatar"]');
    const btnProsseguir = document.getElementById('btnProsseguir');
    const perfilUsuario = document.getElementById('perfilUsuario');
    const avatarSelecionado = document.getElementById('avatarSelecionado');
    const nomeUsuario = document.getElementById('nomeUsuario');

    avatares.forEach(function(avatar) {
        avatar.addEventListener('change', function() {
            if (this.checked) {
                btnProsseguir.style.display = 'block';
                const avatarImgSrc = document.querySelector(`label[for="${this.id}"] img`).src;
                avatarSelecionado.src = avatarImgSrc;
                perfilUsuario.style.display = 'block';
                nomeUsuario.textContent = localStorage.getItem('nome');
                localStorage.setItem('avatar', avatarImgSrc);
                localStorage.setItem('nome', nomeUsuario.textContent);
            }
        });
    });

    btnProsseguir.addEventListener('click', function() {
        window.location.href = "pgin.html";
    });
});
