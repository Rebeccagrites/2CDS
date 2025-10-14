const btnSobreTurma = document.getElementById("btnSobreTurma");
const informacoes = document.getElementById("informacoes");

// Função para exibir ou ocultar informações sobre a turma
btnSobreTurma.addEventListener("click", function() {
    // Alternando a visibilidade usando a classe "ocultar"
    informacoes.classList.toggle("ocultar");

    // Alterando o texto do botão conforme a visibilidade
    if (informacoes.classList.contains("ocultar")) {
        btnSobreTurma.innerHTML = "Exibir Informações"; // Restaura o texto
    } else {
        btnSobreTurma.innerHTML = "Ocultar Informações"; // Texto quando visível
    }
});
// Efeito de animação nos ícones sociais
const iconesSociais = document.querySelectorAll('.sociais img');

// Função para adicionar um efeito de hover nos ícones sociais
iconesSociais.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.1)";  // Aumenta o ícone ao passar o mouse
    });

    icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";  // Restaura o tamanho original
    });
});

// Alteração no texto do título
const tituloSite = document.querySelector('.titulo_site');

// Definindo o comportamento ao clicar no título
tituloSite.addEventListener("click", () => {
    // Verificando se o título já foi alterado, para reverter se necessário
    if (tituloSite.innerHTML === "Bem-vindo à Turma!") {
        tituloSite.innerHTML = "Clique para alterar o título!";  // Restaura o título
        tituloSite.style.color = "#000";  // Restaura a cor original
        tituloSite.style.fontSize = "2.5rem";  // Restaura o tamanho original
    } else {
        tituloSite.innerHTML = "Bem-vindo à Turma!";  // Alteração do título
        tituloSite.style.color = "#40A2E3";  // Mudança de cor
        tituloSite.style.fontSize = "3rem";  // Aumento do tamanho do texto
    }
});
