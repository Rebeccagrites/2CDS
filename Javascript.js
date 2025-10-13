// Interação com o botão "Exibir Informações"
const btnSobreTurma = document.getElementById("btnSobreTurma");
const informacoes = document.getElementById("informacoes");

// Função para exibir ou ocultar informações sobre a turma
btnSobreTurma.addEventListener("click", function() {
    if (informacoes.style.display === "none" || informacoes.style.display === "") {
        informacoes.style.display = "block"; // Exibe o texto
        btnSobreTurma.innerHTML = "Ocultar Informações"; // Alterar o texto do botão
    } else {
        informacoes.style.display = "none"; // Oculta o texto
        btnSobreTurma.innerHTML = "Exibir Informações"; // Restaura o texto do botão
    }
});

// Efeito de animação nos ícones sociais
const iconesSociais = document.querySelectorAll('.sociais img');

// Função para adicionar um efeito de hover nos ícones sociais
iconesSociais.forEach(icon => {
    icon.addEventListener("mouseover", () => {
        icon.style.transform = "scale(1.1)";  // Aumenta o ícone ao passar o mouse
        icon.style.transition = "transform 0.3s ease";  // Adiciona uma transição suave
    });

    icon.addEventListener("mouseout", () => {
        icon.style.transform = "scale(1)";  // Restaura o tamanho original
    });
});

// Alteração no texto do título (exemplo de interação)
const tituloSite = document.querySelector('.titulo_site');

tituloSite.addEventListener("click", () => {
    tituloSite.innerHTML = "Bem-vindo à Turma!";  // Alteração do título ao clicar
    tituloSite.style.color = "#40A2E3";  // Mudança de cor do texto
    tituloSite.style.fontSize = "3rem";  // Aumento do tamanho do texto
});
