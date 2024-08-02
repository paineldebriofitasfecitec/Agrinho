document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    
        const emailExistente = usuarios.some(usuario => usuario.email === email);
        const nomeExistente = usuarios.some(usuario => usuario.nome === nome);

        if (emailExistente) {
            alert('O email já está cadastrado.');
            return;
        }

        if (nomeExistente) {
            alert('O nome de usuário já está cadastrado.');
            return;
        }

        if (!verificarSenha(senha)) {
            alert('A senha deve ter no mínimo 5 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.');
            return;
        }

        usuarios.push({ nome, email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        localStorage.setItem('nome', nome);

      
        window.location.href = 'welcome.html';
    });

    function verificarSenha(senha) {
        const minLength = 5;
        const hasUpperCase = /[A-Z]/.test(senha);
        const hasLowerCase = /[a-z]/.test(senha);
        const hasNumber = /[0-9]/.test(senha);

        return senha.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
    }
});
