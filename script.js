// Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Carrossel de Tecnologias
document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    const prevBtn = document.querySelector('.carrossel-btn-prev');
    const nextBtn = document.querySelector('.carrossel-btn-next');
    
    let currentIndex = 0;
    const itemsToShow = 4; // Número de itens visíveis por vez
    
    // Ajustar itens visíveis com base no tamanho da tela
    function updateItemsToShow() {
        if (window.innerWidth < 768) {
            return 2;
        } else if (window.innerWidth < 1024) {
            return 3;
        }
        return 4;
    }
    
    // Atualizar a posição do carrossel
    function updateCarrossel() {
        const itemsVisible = updateItemsToShow();
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight) * 2;
        const translateX = -currentIndex * itemWidth;
        carrossel.style.transform = `translateX(${translateX}px)`;
        
        // Esconder/mostrar botões conforme a posição
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex >= items.length - itemsVisible ? 'none' : 'block';
    }
    
    // Event listeners para os botões
    prevBtn.addEventListener('click', function() {
        const itemsVisible = updateItemsToShow();
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrossel();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        const itemsVisible = updateItemsToShow();
        if (currentIndex < items.length - itemsVisible) {
            currentIndex++;
            updateCarrossel();
        }
    });
    
    // Inicializar o carrossel
    updateCarrossel();
    
    // Atualizar quando a janela for redimensionada
    window.addEventListener('resize', function() {
        currentIndex = 0; // Reset para o início
        updateCarrossel();
    });
    
    // Adicionar navegação por keyboard
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
});