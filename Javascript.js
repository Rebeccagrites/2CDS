<script>
    // Função para aplicar o efeito de hover (interação)
    function aplicarEfeitoHover(elemento) {
        // 1. O que acontece quando o mouse entra no elemento
        elemento.addEventListener('mouseenter', function() {
            // Verifica se é a imagem do estudante (que tem o efeito de borda e sombra no CSS)
            if (elemento.classList.contains('estudante-imagem')) {
                // Aplica o transform: translateY(-10px) (eleva a imagem)
                elemento.style.transform = 'translateY(-10px)';
            } else {
                // Para ícones sociais e outros ícones, aplica uma elevação menor e um leve aumento de escala (se desejado)
                elemento.style.transform = 'translateY(-5px) scale(1.1)';
            }
        });

        // 2. O que acontece quando o mouse sai do elemento
        elemento.addEventListener('mouseleave', function() {
            // Remove a transformação para que o elemento volte ao normal
            elemento.style.transform = 'none';
        });
    }

    // --- Seleção dos Elementos e Aplicação do Efeito ---

    // 1. Aplica nas imagens dos estudantes
    const imagensEstudantes = document.querySelectorAll('.estudante-imagem');
    imagensEstudantes.forEach(aplicarEfeitoHover);

    // 2. Aplica nos ícones sociais do cabeçalho
    const iconesSociaisCabecalho = document.querySelectorAll('.sociais img');
    iconesSociaisCabecalho.forEach(aplicarEfeitoHover);

    // 3. Aplica nos ícones das fichas de estudante
    const iconesEstudantes = document.querySelectorAll('.estudante-icone');
    iconesEstudantes.forEach(aplicarEfeitoHover);
</script>