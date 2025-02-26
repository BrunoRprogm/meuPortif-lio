// Função para verificar se as seções estão visíveis
function checkVisibility() {
    console.log("Função chamada!");
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Pega a posição da seção
        
        // Se a seção está visível na tela
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', checkVisibility);

// Garante que o código seja executado assim que a página carregar
window.addEventListener('load', checkVisibility);

// Chama a função no início para garantir que as seções sejam verificadas
checkVisibility();
