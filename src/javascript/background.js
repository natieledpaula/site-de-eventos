document.addEventListener("DOMContentLoaded", function() {
    const gradient = document.getElementById("gradient");
    const orb1 = document.getElementById("orb1");
    const orb2 = document.getElementById("orb2");
    const orb3 = document.getElementById("orb3");
    const particlesContainer = document.getElementById("particles");
    const pulseBtn = document.getElementById("pulse-btn");
    const interactiveBg = document.getElementById("interactive-bg");

    // Atualizar a posição do gradiente baseado no cursor
    document.addEventListener("mousemove", function(e) {
        document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px');
        document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px');
        
        // Movimento suave dos orbes ao mover o mouse
        const moveX1 = (e.clientX - window.innerWidth / 2) / 30;
        const moveY1 = (e.clientY - window.innerHeight / 2) / 30;
        orb1.style.transform = `translate(${moveX1}px, ${moveY1}px)`;
        
        const moveX2 = (e.clientX - window.innerWidth / 2) / -40;
        const moveY2 = (e.clientY - window.innerHeight / 2) / -40;
        orb2.style.transform = `translate(${moveX2}px, ${moveY2}px)`;
        
        const moveX3 = (e.clientX - window.innerWidth / 2) / 50;
        const moveY3 = (e.clientY - window.innerHeight / 2) / 50;
        orb3.style.transform = `translate(${moveX3}px, ${moveY3}px)`;
    });

    // Criar partículas
    function createParticles() {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            
            // Tamanho aleatório
            const size = Math.random() * 3 + 1;
            particle.style.width = size + "px";
            particle.style.height = size + "px";
            
            // Posição inicial aleatória
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            particle.style.left = x + "%";
            particle.style.top = y + "%";
            
            // Opacidade aleatória
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            // Adicionar animação
            particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = Math.random() * 5 + "s";
            
            // Adicionar ao contêiner
            particlesContainer.appendChild(particle);
            
            // Criar animação de flutuação específica
            const style = document.createElement("style");
            const floatDistance = Math.random() * 30 + 10;
            const direction = Math.random() > 0.5 ? 1 : -1;
            
            style.textContent = `
                @keyframes float {
                    0% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(${direction * floatDistance}px, ${-floatDistance}px);
                    }
                    100% {
                        transform: translate(0, 0);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    // Efeito de clique
    document.addEventListener("click", function(e) {
        const clickEffect = document.createElement("div");
        clickEffect.className = "click-effect";
        clickEffect.style.left = e.clientX + "px";
        clickEffect.style.top = e.clientY + "px";
        document.body.appendChild(clickEffect);
        
        // Remover após a animação
        setTimeout(() => {
            clickEffect.remove();
        }, 1000);
    });

    // Botão de pulso
    pulseBtn.addEventListener("click", function() {
        // Criar efeito de pulso nos orbes
        orb1.style.transform = "scale(1.3)";
        orb2.style.transform = "scale(1.3)";
        orb3.style.transform = "scale(1.3)";
        
        setTimeout(() => {
            orb1.style.transform = "";
            orb2.style.transform = "";
            orb3.style.transform = "";
        }, 800);
        
        // Criar vários efeitos de clique
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const randomX = Math.random() * window.innerWidth;
                const randomY = Math.random() * window.innerHeight;
                
                const clickEffect = document.createElement("div");
                clickEffect.className = "click-effect";
                clickEffect.style.left = randomX + "px";
                clickEffect.style.top = randomY + "px";
                document.body.appendChild(clickEffect);
                
                setTimeout(() => {
                    clickEffect.remove();
                }, 1000);
            }, i * 100);
        }
    });

    // Iniciar animações
    createParticles();
    
    // Função para animar elementos com base no scroll
    function animateOnScroll() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Mover a grade com o scroll
        document.querySelector('.grid').style.transform = `perspective(500px) rotateX(60deg) translateY(${scrollY * 0.1}px)`;
        
        // Mover ondas com o scroll
        document.querySelector('.waves').style.bottom = `-${scrollY * 0.1}px`;
    }
    
    // Adicionar evento de scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Adicionar suporte para toque em dispositivos móveis
    interactiveBg.addEventListener('touchmove', function(e) {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            document.documentElement.style.setProperty('--mouse-x', touch.clientX + 'px');
            document.documentElement.style.setProperty('--mouse-y', touch.clientY + 'px');
        }
    });
});

// Adicionar animações para as partículas
document.addEventListener("DOMContentLoaded", function() {
    const particlesContainer = document.getElementById("particles");
    let styleSheet = document.createElement("style");
    document.head.appendChild(styleSheet);
    
    for (let i = 0; i < 50; i++) {
        const y1 = Math.random() * 100;
        const y2 = Math.random() * 100;
        const x1 = Math.random() * 100;
        const x2 = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        
        styleSheet.sheet.insertRule(`
            .particle:nth-child(${i+1}) {
                animation: float${i} ${duration}s ease-in-out infinite;
            }
        `, 0);
        
        styleSheet.sheet.insertRule(`
            @keyframes float${i} {
                0%, 100% {
                    transform: translate(0, 0);
                }
                50% {
                    transform: translate(${x2-x1}px, ${y2-y1}px);
                }
            }
        `, 0);
    }
});