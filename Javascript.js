// Função para adicionar e remover o efeito de escala (hover)
function aplicarEfeitoHover(elemento) {
    // Adiciona o evento para quando o mouse entra no elemento
    elemento.addEventListener('mouseenter', function() {
        elemento.classList.add('hover-scale');
    });

    // Adiciona o evento para quando o mouse sai do elemento
    elemento.addEventListener('mouseleave', function() {
        elemento.classList.remove('hover-scale');
    });
}

// 1. Aplicar em todas as imagens de estudantes
const imagensEstudantes = document.querySelectorAll('.estudante-imagem');
imagensEstudantes.forEach(aplicarEfeitoHover);

// 2. Aplicar em todos os ícones sociais do cabeçalho
const iconesSociaisCabecalho = document.querySelectorAll('.sociais-icone');
iconesSociaisCabecalho.forEach(aplicarEfeitoHover);

// 3. Aplicar em todos os ícones sociais das fichas de estudante
const iconesEstudantes = document.querySelectorAll('.estudante-icone');
iconesEstudantes.forEach(aplicarEfeitoHover);