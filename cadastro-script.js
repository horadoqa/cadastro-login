// Simulação de um banco de dados de usuários
let validUsers = JSON.parse(localStorage.getItem("validUsers")) || {};

function cadastrar() {
    const email = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const cadastroMessage = document.getElementById("cadastro-message");

    if (email === "" || password === "" || confirmPassword === "") {
        cadastroMessage.textContent = "Todos os campos são obrigatórios!";
        cadastroMessage.classList.add("error");
        return;
    }

    if (password !== confirmPassword) {
        cadastroMessage.textContent = "As senhas não coincidem!";
        cadastroMessage.classList.add("error");
        return;
    }

    if (validUsers[email]) {
        cadastroMessage.textContent = "E-mail já registrado!";
        cadastroMessage.classList.add("error");
        return;
    }

    // Adiciona o novo usuário ao "banco de dados" (localStorage)
    validUsers[email] = password;
    localStorage.setItem("validUsers", JSON.stringify(validUsers));

    cadastroMessage.textContent = "Cadastro realizado com sucesso!";
    cadastroMessage.style.color = "green";
    cadastroMessage.classList.remove("error");

    // Redireciona para a página de login após cadastro
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}
