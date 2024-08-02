document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const senha = document.getElementById('senha').value;

            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            if (usuarios.some(usuario => usuario.email === email)) {
                alert('Email já cadastrado.');
                return;
            }

            if (usuarios.some(usuario => usuario.nome === nome)) {
                alert('Nome já cadastrado.');
                return;
            }

            const senhaForte = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/;
            if (!senha.match(senhaForte)) {
                alert('A senha deve ter no mínimo 5 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.');
                return;
            }

            usuarios.push({ nome: nome, email: email, senha: senha });
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            alert('Conta criada com sucesso!');
            window.location.href = 'login.html'; 
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const senha = document.getElementById('loginSenha').value;

            let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            const usuario = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

            if (usuario) {
                alert('Login bem-sucedido!');
                window.location.href = 'welcome.html'; 
            } else {
                alert('Email ou senha inválidos.');
            }
        });
    }
});

function redirecionarParaPerfil() {
    window.location.href = 'pgin.html'; 
}
