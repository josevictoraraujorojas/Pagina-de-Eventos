// Obtém o botão hamburguer usando o id 'hamburguer'
const hamburguer = document.getElementById('hamburguer');

// Inicializa uma variável booleana para controlar o estado do menu
let boolean = false;

// Adiciona um evento de clique ao botão hamburguer
hamburguer.addEventListener('click', function() {
    // Obtém o menu hamburguer usando o id 'menu-hamburguer'
    const menu = document.getElementById('menu-hamburguer');
    
    // Verifica se o menu está atualmente fechado (boolean == false)
    if (boolean == false) {
        // Se o menu estiver fechado, exibe-o e ajusta a direção dos itens
        menu.style.display = 'flex'; // Torna o menu visível
        menu.children[0].style.display = 'flex'; // Exibe o primeiro elemento filho (geralmente a lista de links)
        menu.children[0].style.flexDirection = 'column'; // Ajusta a direção dos itens para coluna

        // Muda o estado booleano para verdadeiro, indicando que o menu foi aberto
        boolean = true;

        // Altera o ícone do hamburguer para um "X" (indicando que o menu está aberto)
        hamburguer.children[0].classList.remove('fa-solid'); // Remove a classe do ícone atual
        hamburguer.children[0].classList.remove('fa-bars'); // Remove o ícone de barras (hamburguer)
        hamburguer.children[0].classList.add('fa-solid'); // Adiciona a classe "fa-solid" (necessário para ícones do Font Awesome)
        hamburguer.children[0].classList.add('fa-x'); // Adiciona o ícone de "X"
    } else {
        // Se o menu estiver aberto, oculta-o e reseta as classes do ícone
        menu.style.display = 'none'; // Esconde o menu
        boolean = false; // Muda o estado booleano para falso, indicando que o menu foi fechado

        // Altera o ícone de volta para o estilo de hamburguer
        hamburguer.children[0].classList.remove('fa-solid'); // Remove a classe "fa-solid"
        hamburguer.children[0].classList.remove('fa-x'); // Remove o ícone de "X"
        hamburguer.children[0].classList.add('fa-solid'); // Adiciona a classe "fa-solid" novamente
        hamburguer.children[0].classList.add('fa-bars'); // Adiciona o ícone de barras (hamburguer)
    }

    // Apenas imprime "teste" no console para testar o clique
    console.log('teste');
});