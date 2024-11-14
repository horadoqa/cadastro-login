// Usuários e senhas pré-definidos
const validUsers = {
    "usuario@example.com": "1q2w3e4r",
    "usuario2@example.com": "1q2w3e4r"
};

function cadastro(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Verifica se todos os campos estão preenchidos
    if (name === "" || username === "" || password === "") {
        errorMessage.textContent = "Os campos são obrigatórios";
        errorMessage.classList.add("error");
        errorMessage.classList.remove("success");  // Remove a classe de sucesso, se houver
    } else {
        // Caso todos os campos estejam preenchidos
        errorMessage.textContent = "Cadastro realizado com sucesso!";
        errorMessage.classList.remove("error");  // Remove a classe de erro, se houver
        errorMessage.classList.add("success");  // Adiciona a classe de sucesso
    }
}

// Função de login (não alterada)
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "E-mail e senha são obrigatórios!";
        errorMessage.classList.add("error");
        return;
    }

    if (validUsers[username] && validUsers[username] === password) {
        // Redirecionar para index2.html se as credenciais estiverem corretas
        window.location.href = "welcome/index.html";
    } else {
        // Exibir mensagem de erro
        errorMessage.textContent = "E-mail ou senha inválidos!";
        errorMessage.classList.add("error");
    }
}

// Detectar a tecla Enter para enviar o formulário de login
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});

// Se necessário, adicione o evento de submit ao formulário de cadastro
const cadastroForm = document.getElementById("cadastro-form");
if (cadastroForm) {
    cadastroForm.addEventListener("submit", cadastro); // Chama a função cadastro ao enviar o formulário
}
