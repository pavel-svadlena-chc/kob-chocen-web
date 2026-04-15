// Náhodná hero fotka
const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg",
    "images/hero4.jpg"
    // přidej další cesty k fotkám
];

function setRandomHero() {
    const randomIndex = Math.floor(Math.random() * heroImages.length);
    document.querySelector('.hero').style.backgroundImage = `url('${heroImages[randomIndex]}')`;
}

// Ukázkové novinky pro hlavní stránku (nahraď reálnými daty)
const sampleNews = [
    {
        date: "13. 4. 2026",
        title: "MČR KO sprint 2026",
        image: "images/galerie/mcr-ko-26.jpg",
        link: "news.html#n1"
    },
    {
        date: "13. 4. 2026",
        title: "3. kolo VčP 2026",
        image: "images/novinky/n260413.jpg",
        link: "news.html#n2"
    },
    {
        date: "9. 4. 2026",
        title: "TC Velikonoce 2026",
        image: "images/galerie/tc-vel-26.jpg",
        link: "news.html#n3"
    }
];

function renderHomeNews() {
    const container = document.getElementById('home-news-grid');
    if (!container) return;
    
    container.innerHTML = sampleNews.map(news => `
        <div class="news-card">
            <img src="${news.image}" alt="${news.title}">
            <div class="content">
                <p class="date">${news.date}</p>
                <h3>${news.title}</h3>
                <a href="${news.link}" class="btn-small">Číst více</a>
            </div>
        </div>
    `).join('');
}

// Spuštění při načtení stránky
window.onload = function() {
    setRandomHero();
    renderHomeNews();
};
