// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== MENU MOBILE ==========
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Fecha menu ao clicar em link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // ========== SCROLL SUAVE ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== GALERIA DE TRABALHOS ==========
    const galeriaContainer = document.getElementById('galeria-container');
    
    // Dados dos trabalhos (substitua pelas suas fotos)
    const trabalhos = [
        { id: 1, tipo: 'corte', titulo: 'Corte Social', imagem: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
        { id: 2, tipo: 'degrade', titulo: 'Degradê Americano', imagem: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
        { id: 3, tipo: 'barba', titulo: 'Barba Desenhada', imagem: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
        { id: 4, tipo: 'corte', titulo: 'Corte com Navalha', imagem: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
        { id: 5, tipo: 'degrade', titulo: 'Low Fade', imagem: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' },
        { id: 6, tipo: 'barba', titulo: 'Barba e Bigode', imagem: 'https://images.unsplash.com/photo-1626494881719-6cdfb35127ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' }
    ];

    function carregarGaleria(filtro = 'todos') {
        if (!galeriaContainer) return;
        
        galeriaContainer.innerHTML = '';
        
        const trabalhosFiltrados = filtro === 'todos' 
            ? trabalhos 
            : trabalhos.filter(t => t.tipo === filtro);
        
        trabalhosFiltrados.forEach(trabalho => {
            const item = document.createElement('div');
            item.className = 'galeria-item';
            item.innerHTML = `
                <img src="${trabalho.imagem}" alt="${trabalho.titulo}">
                <div class="galeria-overlay">
                    <h4>${trabalho.titulo}</h4>
                    <p>por Frank Braga</p>
                </div>
            `;
            galeriaContainer