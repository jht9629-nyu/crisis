// Fallback data for local filesystem execution (bypass CORS fetch restrictions)
const FALLBACK_DATA = [
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "December 20, 2017",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 13818",
        "source_links": [
            {
                "text": "Executive Order 13818",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13818"
            }
        ],
        "title": "Blocking the Property of Persons Involved in Serious Human Rights Abuse or Corruption",
        "description": "Imposed sanctions due to the Rohingya conflict in Myanmar, specifically against general Maung Maung Soe; works in tandem with the Global Magnitsky Human Rights Accountability Act."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "September 12, 2018",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 13848",
        "source_links": [
            {
                "text": "Executive Order 13848",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13848"
            }
        ],
        "title": "Imposing Certain Sanctions in the Event of Foreign Interference in a United States Election",
        "description": "Intended to enable automatic sanctions in response to election interference; intelligence agencies are given 45 days after an election to assess any possible interference."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "November 27, 2018",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 13851",
        "source_links": [
            {
                "text": "Executive Order 13851",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13851"
            }
        ],
        "title": "Blocking Property of Certain Persons Contributing to the Situation in Nicaragua",
        "description": "Announces certain sanctions against current and former Daniel Ortega government officials engaging in human rights abuse or corruption."
    },
    {
        "status": "Ended",
        "president": "Trump",
        "start_date": "February 15, 2019",
        "end_date": "January 20, 2021",
        "category": "Military",
        "source": "Proclamation 9844",
        "source_links": [
            {
                "text": "Proclamation 9844",
                "url": "https://en.wikisource.org/wiki/Proclamation_9844"
            }
        ],
        "title": "Declaring a National Emergency Concerning the Southern Border of the United States",
        "description": "Seeks to divert $8 billion of funds, which were previously allocated to other programs, to build a wall on the southern border of the United States. This emergency declaration is the first since the passage of the National Emergencies Act in which the president sought to take funds for which Congress previously denied appropriation. Congress passed a resolution to terminate the emergency, but it was vetoed and failed to override."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "May 15, 2019",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 13873",
        "source_links": [
            {
                "text": "Executive Order 13873",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13873"
            }
        ],
        "title": "Securing the Information and Communications Technology and Services Supply Chain",
        "description": "Bans American companies from using any telecommunications equipment that the secretary of Commerce declares to be a national security risk. Added Huawei Technologies Co. Ltd and its affiliates to the Entity List, restricting technology transfers."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "July 26, 2019",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 13882",
        "source_links": [
            {
                "text": "Executive Order 13882",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13882"
            }
        ],
        "title": "Blocking Property and Suspending Entry of Certain Persons Contributing to the Situation in Mali",
        "description": "Freezes property and suspends entry to the United States of persons who threaten the peace and security of Mali, and prohibits making donations to such persons."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "October 14, 2019",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 13894",
        "source_links": [
            {
                "text": "Executive Order 13894",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13894"
            }
        ],
        "title": "Blocking Property and Suspending Entry of Certain Persons Contributing to the Situation in Syria",
        "description": "Imposes sanctions against persons involved in war-time actions of the Bashar al-Assad government during the Syrian Civil War, or who obstruct postwar stabilization. (Repurposed in 2025 from an emergency that targeted Turkey)."
    },
    {
        "status": "Ended",
        "president": "Trump",
        "start_date": "March 13, 2020",
        "end_date": "April 10, 2023",
        "category": "Public health",
        "source": "Proclamation 9994",
        "source_links": [
            {
                "text": "Proclamation 9994",
                "url": "https://en.wikisource.org/wiki/Proclamation_9994"
            }
        ],
        "title": "Declaring a National Emergency Concerning the Novel Coronavirus Disease (COVID-19) Outbreak",
        "description": "President Trump declared a national emergency to unlock up to $50 billion in federal funding to combat COVID-19 and waive certain licensing/telehealth requirements. Terminated on April 10, 2023, via a Congressional Joint Resolution signed by President Biden."
    },
    {
        "status": "Ended",
        "president": "Trump",
        "start_date": "June 11, 2020",
        "end_date": "April 1, 2021",
        "category": "Sanctions",
        "source": "Executive Order 13928",
        "source_links": [
            {
                "text": "Executive Order 13928",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13928"
            }
        ],
        "title": "Blocking Property of Certain Persons Associated with the International Criminal Court",
        "description": "Froze property and suspended entry of individuals associated with the International Criminal Court (ICC) investigating US or allied personnel in the Afghan War. Revoked by President Biden on April 1, 2021."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "July 14, 2020",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 13936",
        "source_links": [
            {
                "text": "Executive Order 13936",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13936"
            }
        ],
        "title": "The President’s Executive Order on Hong Kong Normalization",
        "description": "Freezes property of persons involved in the implementation of the Hong Kong national security law by the People's Republic of China."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "November 12, 2020",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 13959",
        "source_links": [
            {
                "text": "Executive Order 13959",
                "url": "https://en.wikisource.org/wiki/Executive_Order_13959"
            }
        ],
        "title": "Addressing the Threat From Securities Investments That Finance Communist Chinese Military Companies",
        "description": "Prohibits transactions in securities and derivatives of military companies in the People's Republic of China."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "January 20, 2025",
        "end_date": "Active (or renewed)",
        "category": "Security",
        "source": "Proclamation 10886",
        "source_links": [],
        "title": "Declaring a National Emergency at the Southern Border of the United States",
        "description": "Directs the Secretary of Defense to redirect military units to assist the Secretary of Homeland Security in securing the southern border, preventing illegal migrant entry, and constructing border barriers."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "January 20, 2025",
        "end_date": "Active (or renewed)",
        "category": "Economic",
        "source": "Executive Order 14156",
        "source_links": [
            {
                "text": "Executive Order 14156",
                "url": "https://en.wikisource.org/wiki/Executive_Order_14156"
            }
        ],
        "title": "Declaring a National Energy Emergency",
        "description": "Directs federal agencies to use emergency authorities to facilitate the acquisition, exploration, and exploitation of domestic energy resources (fossil fuels) and orders review of actions to expand national energy supply."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "January 20, 2025",
        "end_date": "Active (or renewed)",
        "category": "Economic",
        "source": "Executive Order 14157",
        "source_links": [
            {
                "text": "Executive Order 14157",
                "url": "https://en.wikisource.org/wiki/Executive_Order_14157"
            }
        ],
        "title": "Designating Cartels and Other Organizations as Foreign Terrorist Organizations and Specially Designated Global Terrorists",
        "description": "Declared a national emergency and uses SDGT authorities to designate cartels as foreign terrorist organizations, initiating severe financial sanctions."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "February 1, 2025",
        "end_date": "Active (or renewed)",
        "category": "Economic",
        "source": "Executive Order 14193",
        "source_links": [
            {
                "text": "Executive Order 14193",
                "url": "https://en.wikisource.org/wiki/Executive_Order_14193"
            }
        ],
        "title": "Imposing Duties to Address the Flow of Illicit Drugs Across Our Northern Border",
        "description": "Declares national emergency to impose tariffs (25%) on Canada imports in response to border and drug smuggling issues."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "February 1, 2025",
        "end_date": "Active (or renewed)",
        "category": "Economic",
        "source": "Executive Order 14194",
        "source_links": [
            {
                "text": "Executive Order 14194",
                "url": "https://en.wikisource.org/wiki/Executive_Order_14194"
            }
        ],
        "title": "Imposing Duties to Address the Situation at Our Southern Border",
        "description": "Declares national emergency to impose tariffs (25%) on imports from Mexico to curb illegal migration and fentanyl flows."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "February 1, 2025",
        "end_date": "Active (or renewed)",
        "category": "Economic",
        "source": "Executive Order 14195",
        "source_links": [
            {
                "text": "Executive Order 14195",
                "url": "https://en.wikisource.org/wiki/Executive_Order_14195"
            }
        ],
        "title": "Imposing Duties to Address the Synthetic Opioid Supply Chain in the People's Republic of China",
        "description": "Declares national emergency to impose an additional 10% tariff on imports from China to address fentanyl precursor shipments."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "February 6, 2025",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 14203",
        "source_links": [
            {
                "text": "Executive Order 14203",
                "url": "https://en.wikisource.org/wiki/Executive_Order_14203"
            }
        ],
        "title": "Imposing Sanctions on the International Criminal Court",
        "description": "Re-established property blocking and travel bans for ICC officials attempting to investigate or prosecute US or allied personnel."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "April 2, 2025",
        "end_date": "Active (or renewed)",
        "category": "Economic",
        "source": "Executive Order 14257",
        "source_links": [
            {
                "text": "Executive Order 14257",
                "url": "https://en.wikisource.org/wiki/Executive_Order_14257"
            }
        ],
        "title": "Regulating Imports with a Reciprocal Tariff to Rectify Trade Practices that Contribute to Goods Trade Deficits",
        "description": "Declared emergency to impose a minimum 10% reciprocal tariff on imports, targeting countries with large trade deficits."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "July 30, 2025",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 14323",
        "source_links": [
            {
                "text": "Executive Order 14323",
                "url": "https://en.wikipedia.org/wiki/Executive_Order_14323"
            }
        ],
        "title": "Addressing Threats to the United States by the Government of Brazil",
        "description": "Declares national emergency to impose a 40% tariff on Brazilian imports to address trade disputes and currency valuation."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "January 9, 2026",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 14373",
        "source_links": [
            {
                "text": "Executive Order 14373",
                "url": "https://en.wikipedia.org/wiki/List_of_executive_orders_in_the_second_Trump_presidency"
            }
        ],
        "title": "Safeguarding Venezuelan oil revenue for the good of the American and Venezuelan people",
        "description": "Declares national emergency to prevent Venezuelan state oil funds held in U.S. treasury accounts from being seized through judicial processes."
    },
    {
        "status": "Current",
        "president": "Trump",
        "start_date": "January 29, 2026",
        "end_date": "Active (or renewed)",
        "category": "Sanctions",
        "source": "Executive Order 14380",
        "source_links": [
            {
                "text": "Executive Order 14380",
                "url": "https://en.wikipedia.org/wiki/List_of_executive_orders_in_the_second_Trump_presidency"
            }
        ],
        "title": "Addressing Threats to the United States by the Government of Cuba",
        "description": "Allows for the imposition of additional tariffs on countries that supply oil to Cuba, expanding embargo enforcement."
    }
];

// Visual Settings per Category
const CATEGORY_SETTINGS = {
    "Sanctions": { icon: "fa-ban", rgb: "168, 85, 247", gradient: "linear-gradient(135deg, #a855f7, #6366f1)" },
    "Economic": { icon: "fa-money-bill-wave", rgb: "16, 185, 129", gradient: "linear-gradient(135deg, #10b981, #059669)" },
    "Security": { icon: "fa-shield-halved", rgb: "245, 158, 11", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
    "Military": { icon: "fa-crosshairs", rgb: "239, 68, 68", gradient: "linear-gradient(135deg, #ef4444, #dc2626)" },
    "Public health": { icon: "fa-heart-pulse", rgb: "6, 182, 212", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)" }
};

const DEFAULT_CATEGORY_SETTING = { icon: "fa-triangle-exclamation", rgb: "99, 102, 241", gradient: "linear-gradient(135deg, #6366f1, #a855f7)" };

// App State
let emergencies = [];
let currentFilters = {
    search: '',
    category: 'all',
    status: 'all',
    sort: 'newest'
};

// DOM Elements
let container, noResultsPanel, searchInput, sortSelect;
let statsTotal, statsActive, statsEnded;

// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initParticles();
    initAccordion();
    
    // Bind DOM references
    container = document.getElementById('declarations-container');
    noResultsPanel = document.getElementById('no-results-panel');
    searchInput = document.getElementById('search-input');
    sortSelect = document.getElementById('sort-select');
    statsTotal = document.getElementById('stats-total-val');
    statsActive = document.getElementById('stats-active-val');
    statsEnded = document.getElementById('stats-ended-val');
    
    // Bind Filters & Searches
    initFilters();
    
    // Fetch and Load Data
    loadData();
});

/* Theme Toggle Configuration */
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme, themeIcon);
    
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

/* Accordion Insights Configuration */
function initAccordion() {
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current if it wasn't active
            if (!isActive) {
                currentItem.classList.add('active');
                header.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* Fetch & Bind Data */
async function loadData() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Network response not ok');
        emergencies = await response.json();
    } catch (error) {
        console.warn('Fetch data.json failed. Falling back to local data copy.', error);
        emergencies = FALLBACK_DATA;
    }
    
    // Initialize Stats & Charts (do it once for full dataset)
    calculateGlobalStats();
    renderCategoryDistributionChart();
    
    // Apply filters and render
    filterAndRender();
}

/* Calculate Stats based on Full Dataset */
function calculateGlobalStats() {
    const total = emergencies.length;
    const active = emergencies.filter(e => e.status === 'Current').length;
    const ended = emergencies.filter(e => e.status === 'Ended').length;
    
    // Animate stats numbers
    animateNumber(statsTotal, total);
    animateNumber(statsActive, active);
    animateNumber(statsEnded, ended);
}

function animateNumber(element, targetVal) {
    let startVal = 0;
    const duration = 800; // ms
    const stepTime = 30; // ms
    const steps = duration / stepTime;
    const increment = targetVal / steps;
    
    const timer = setInterval(() => {
        startVal += increment;
        if (startVal >= targetVal) {
            element.textContent = targetVal;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(startVal);
        }
    }, stepTime);
}

/* Render Distribution Chart */
function renderCategoryDistributionChart() {
    const counts = {};
    emergencies.forEach(e => {
        const cat = e.category;
        counts[cat] = (counts[cat] || 0) + 1;
    });
    
    const chartContainer = document.getElementById('category-bars-container');
    chartContainer.innerHTML = '';
    
    // Sort categories by count descending
    const sortedCategories = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    const maxCount = Math.max(...Object.values(counts));
    
    sortedCategories.forEach(([catName, count]) => {
        const settings = CATEGORY_SETTINGS[catName] || DEFAULT_CATEGORY_SETTING;
        const pct = (count / maxCount) * 100;
        
        const row = document.createElement('div');
        row.className = 'category-bar-row';
        row.innerHTML = `
            <div class="category-bar-info">
                <span class="category-bar-name">
                    <i class="fas ${settings.icon}" style="color: rgb(${settings.rgb})"></i>
                    ${catName}
                </span>
                <span class="category-bar-count">${count} declaration${count > 1 ? 's' : ''}</span>
            </div>
            <div class="category-bar-outer">
                <div class="category-bar-inner" style="width: 0%; background: ${settings.gradient}"></div>
            </div>
        `;
        chartContainer.appendChild(row);
        
        // Trigger CSS transition animation after rendering
        setTimeout(() => {
            row.querySelector('.category-bar-inner').style.width = `${pct}%`;
        }, 100);
    });
}

/* Bind Filters Events */
function initFilters() {
    // Search input handler
    searchInput.addEventListener('input', (e) => {
        currentFilters.search = e.target.value.toLowerCase().trim();
        filterAndRender();
    });
    
    // Category selection filter buttons
    const catButtons = document.querySelectorAll('#category-filters .filter-btn');
    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilters.category = btn.getAttribute('data-category');
            filterAndRender();
        });
    });
    
    // Status selection filter buttons
    const statusButtons = document.querySelectorAll('#status-filters .filter-btn');
    statusButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            statusButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilters.status = btn.getAttribute('data-status');
            filterAndRender();
        });
    });
    
    // Sort select handler
    sortSelect.addEventListener('change', (e) => {
        currentFilters.sort = e.target.value;
        filterAndRender();
    });
}

/* Filter and Render cards */
function filterAndRender() {
    let filtered = [...emergencies];
    
    // 1. Search Filter
    if (currentFilters.search) {
        const query = currentFilters.search;
        filtered = filtered.filter(item => {
            const title = (item.title || '').toLowerCase();
            const source = (item.source || '').toLowerCase();
            const desc = (item.description || '').toLowerCase();
            const category = (item.category || '').toLowerCase();
            return title.includes(query) || source.includes(query) || desc.includes(query) || category.includes(query);
        });
    }
    
    // 2. Category Filter
    if (currentFilters.category !== 'all') {
        filtered = filtered.filter(item => item.category.toLowerCase() === currentFilters.category.toLowerCase());
    }
    
    // 3. Status Filter
    if (currentFilters.status !== 'all') {
        filtered = filtered.filter(item => item.status === currentFilters.status);
    }
    
    // 4. Sort
    filtered.sort((a, b) => {
        const dateA = new Date(a.start_date);
        const dateB = new Date(b.start_date);
        return currentFilters.sort === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    // 5. Render
    renderCards(filtered);
}

/* Render Cards into Grid */
function renderCards(data) {
    container.innerHTML = '';
    
    if (data.length === 0) {
        noResultsPanel.style.display = 'flex';
        container.style.display = 'none';
        return;
    }
    
    noResultsPanel.style.display = 'none';
    container.style.display = 'grid';
    
    data.forEach(item => {
        const settings = CATEGORY_SETTINGS[item.category] || DEFAULT_CATEGORY_SETTING;
        const isCurrent = item.status === 'Current';
        
        // Find main source link
        const primaryLink = item.source_links && item.source_links.length > 0 
            ? item.source_links[0] 
            : null;
            
        const card = document.createElement('article');
        card.className = 'glass-card declaration-card';
        card.style.setProperty('--accent-rgb', settings.rgb);
        
        // Build card HTML structure
        card.innerHTML = `
            <div class="card-glow-overlay"></div>
            <div class="card-badges">
                <span class="category-badge">
                    <i class="fas ${settings.icon}"></i>
                    <span>${item.category}</span>
                </span>
                <span class="status-badge ${isCurrent ? 'active-status' : 'ended-status'}">
                    <span class="status-indicator-dot"></span>
                    <span>${isCurrent ? 'Active' : 'Ended'}</span>
                </span>
            </div>
            
            <div class="card-main">
                <h3 class="card-title">${item.title || 'Untitled Emergency Declaration'}</h3>
                <span class="card-source-tag">${item.source}</span>
                
                <div class="card-dates-box">
                    <div class="date-item">
                        <i class="far fa-calendar-plus" style="margin-right: 0.25rem;"></i>
                        <strong>Declared:</strong> ${item.start_date}
                    </div>
                    <div class="date-item">
                        <i class="far fa-calendar-minus" style="margin-right: 0.25rem;"></i>
                        <strong>Ended:</strong> ${isCurrent ? 'Active (or renewed)' : item.end_date}
                    </div>
                </div>
                
                <p class="card-desc">${item.description || 'No description available.'}</p>
            </div>
            
            ${primaryLink ? `
                <div class="card-footer">
                    <a href="${primaryLink.url}" target="_blank" rel="noopener noreferrer" class="source-link-btn">
                        <span>Read Authority</span>
                        <i class="fas fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            ` : ''}
        `;
        
        container.appendChild(card);
        
        // Bind dynamic mouse coordinate glow on the card
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

/* Custom Particle Background Animation */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 40;
    
    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.35;
            this.speedY = (Math.random() - 0.5) * 0.35;
            this.opacity = Math.random() * 0.4 + 0.1;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > width) this.speedX *= -1;
            if (this.y < 0 || this.y > height) this.speedY *= -1;
        }
        
        draw() {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${this.opacity})` : `rgba(99, 102, 241, ${this.opacity * 0.8})`;
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
        
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const lineColor = isDark ? 'rgba(255, 255, 255, 0.025)' : 'rgba(99, 102, 241, 0.035)';
        
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.8;
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 130) {
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
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}
