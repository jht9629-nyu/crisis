// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCardGlow();
    initLanguageSelector();
    initParticles();
    initActionBtn();
});

/* Theme Toggle Configuration */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme, themeIcon);
    
    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme, themeIcon);
    });
}

function updateThemeIcon(theme, iconElement) {
    if (theme === 'dark') {
        iconElement.className = 'fas fa-sun';
    } else {
        iconElement.className = 'fas fa-moon';
    }
}

/* Mouse Hover Glow Effect */
function initCardGlow() {
    const card = document.getElementById('main-card');
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
}

/* Language Selector Translations */
const translations = {
    en: {
        title: "Hello, World!",
        subtitle: "Welcome to a showcase of modern web aesthetics and smooth interactivity.",
        action: "Explore Magic"
    },
    es: {
        title: "¡Hola, Mundo!",
        subtitle: "Bienvenido a una muestra de estética web moderna e interactividad fluida.",
        action: "Explorar Magia"
    },
    fr: {
        title: "Bonjour, le Monde !",
        subtitle: "Bienvenue dans une vitrine d'esthétique web moderne et d'interactivité fluide.",
        action: "Explorer la Magie"
    },
    ja: {
        title: "こんにちは、世界！",
        subtitle: "モダンなウェブデザインとスムーズな双方向性のショーケースへようこそ。",
        action: "マジックを探る"
    }
};

function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const greetingTitle = document.getElementById('greeting-title');
    const subtitleText = document.getElementById('subtitle-text');
    const actionBtnText = document.querySelector('#action-btn span');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            langButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const lang = btn.getAttribute('data-lang');
            const data = translations[lang];
            
            // Fade out, change text, and fade in
            [greetingTitle, subtitleText].forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(10px)';
            });
            
            setTimeout(() => {
                greetingTitle.textContent = data.title;
                subtitleText.textContent = data.subtitle;
                actionBtnText.textContent = data.action;
                
                [greetingTitle, subtitleText].forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                });
            }, 300);
        });
    });
}

/* Custom Particle Background Animation */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 45;
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > width) this.speedX *= -1;
            if (this.y < 0 || this.y > height) this.speedY *= -1;
        }
        
        draw() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${this.opacity})` : `rgba(99, 102, 241, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        // Draw connections
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const lineColor = isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(99, 102, 241, 0.04)';
        
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.8;
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize Handler
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* Explore Magic Button Interaction */
function initActionBtn() {
    const btn = document.getElementById('action-btn');
    const colors = ['#6366f1', '#a855f7', '#ec4899'];
    
    btn.addEventListener('click', (e) => {
        // Create custom ripple/bubble expansion
        const circle = document.createElement('span');
        circle.style.position = 'absolute';
        circle.style.width = '100px';
        circle.style.height = '100px';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
        circle.style.pointerEvents = 'none';
        circle.style.transform = 'translate(-50%, -50%) scale(0)';
        circle.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
        
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(circle);
        
        // Trigger reflow & scale
        requestAnimationFrame(() => {
            circle.style.transform = 'translate(-50%, -50%) scale(3)';
            circle.style.opacity = '0';
        });
        
        setTimeout(() => {
            circle.remove();
        }, 500);
        
        // Let's create an burst of colors on the screen or card glow
        const card = document.getElementById('main-card');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        card.style.borderColor = randomColor;
        card.style.boxShadow = `0 20px 40px -15px ${randomColor}33, 0 0 50px -10px ${randomColor}22`;
        
        setTimeout(() => {
            card.style.borderColor = 'var(--card-border)';
            card.style.boxShadow = 'var(--card-shadow)';
        }, 1500);
    });
}
