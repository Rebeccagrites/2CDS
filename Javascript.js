const btnSobreTurma = document.getElementById("btnSobreTurma");
const informacoes = document.getElementById("informacoes");

// 1. Funcionalidade Exibir/Ocultar
btnSobreTurma.addEventListener("click", function() {
    // Alternando a visibilidade usando a classe "ocultar" (mantido, pois é a melhor prática)
    informacoes.classList.toggle("ocultar");

    // Alterando o texto do botão conforme a visibilidade
    if (informacoes.classList.contains("ocultar")) {
        // Se a classe 'ocultar' está presente (informações escondidas)
        btnSobreTurma.innerHTML = "Exibir Informações";
    } else {
        // Se a classe 'ocultar' não está presente (informações visíveis)
        btnSobreTurma.innerHTML = "Ocultar Informações";
    }
});

// 2. Efeito de animação nos ícones sociais
const iconesSociais = document.querySelectorAll('.sociais img');

// **REMOVIDA a manipulação direta do style (mouseover/mouseout)**.
// É melhor fazer o efeito de hover *diretamente no CSS* usando a pseudo-classe :hover.
// Se você *quisesse* usar JS, faria a mesma coisa com classes.
// O código para os ícones sociais pode ser REMOVIDO do JS se você usar CSS :hover.


// 3. Alteração no texto do título
const tituloSite = document.querySelector('.titulo_site');

// Definindo o comportamento ao clicar no título
tituloSite.addEventListener("click", () => {
    // Alterna a classe que define o estilo e texto alternativo
    tituloSite.classList.toggle("titulo_alterado");

    // **Melhoria**: Alterna o texto do título
    if (tituloSite.classList.contains("titulo_alterado")) {
        tituloSite.innerHTML = "Bem-vindo à Turma!";
    } else {
        tituloSite.innerHTML = "Clique para alterar o título!";
    }
});