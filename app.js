// Language texts
const texts = {
    ar: {
        navTitle: "الأنظمة",
        pageTitle: "أنظمة جنات",
        sectionTitle: "الأنظمة المتاحة",
        sys1: "نظام الإدارة",
        sys2: "نظام العملاء",
        sys3: "الإيصالات",
        tab1: "الأنظمة",
        tab2: "المفضلة",
        tab3: "الأخيرة",
        tab4: "الإعدادات",
        dir: "rtl",
        lang: "ar"
    },
    en: {
        navTitle: "Systems",
        pageTitle: "Jannat Systems",
        sectionTitle: "Available Systems",
        sys1: "Management System",
        sys2: "Clients System",
        sys3: "Receipts System",
        tab1: "Systems",
        tab2: "Favorites",
        tab3: "Recent",
        tab4: "Settings",
        dir: "ltr",
        lang: "en"
    },
    fr: {
        navTitle: "Systèmes",
        pageTitle: "Systèmes Jannat",
        sectionTitle: "Systèmes disponibles",
        sys1: "Système de gestion",
        sys2: "Système des clients",
        sys3: "Système des reçus",
        tab1: "Systèmes",
        tab2: "Favoris",
        tab3: "Récent",
        tab4: "Paramètres",
        dir: "ltr",
        lang: "fr"
    }
};

// Set language
function setLang(lang) {
    const t = texts[lang];

    // Update text content
    document.getElementById("nav-title").textContent = t.navTitle;
    document.getElementById("page-title").textContent = t.pageTitle;
    document.getElementById("section-title").textContent = t.sectionTitle;
    document.getElementById("sys1").textContent = t.sys1;
    document.getElementById("sys2").textContent = t.sys2;
    document.getElementById("sys3").textContent = t.sys3;
    document.getElementById("tab1").textContent = t.tab1;
    document.getElementById("tab2").textContent = t.tab2;
    document.getElementById("tab3").textContent = t.tab3;
    document.getElementById("tab4").textContent = t.tab4;

    // Update direction
    document.documentElement.dir = t.dir;
    document.documentElement.lang = t.lang;

    // Update segmented control
    const segments = document.querySelectorAll('.segment');
    segments.forEach((segment, index) => {
        segment.classList.remove('active');
        segment.setAttribute('aria-selected', 'false');
    });

    const langMap = { ar: 0, en: 1, fr: 2 };
    const activeSegment = segments[langMap[lang]];
    if (activeSegment) {
        activeSegment.classList.add('active');
        activeSegment.setAttribute('aria-selected', 'true');
    }
}

// Open link
function openLink(url) {
    // Add loading state
    event.currentTarget.classList.add('loading');

    // Small delay for visual feedback
    setTimeout(() => {
        window.open(url, '_blank');
        event.currentTarget.classList.remove('loading');
    }, 150);
}

// Tab bar interaction
const tabItems = document.querySelectorAll('.tab-item');
tabItems.forEach((tab, index) => {
    tab.addEventListener('click', function () {
        // Remove active state from all tabs
        tabItems.forEach(t => {
            t.classList.remove('active');
            t.removeAttribute('aria-current');
        });

        // Add active state to clicked tab
        this.classList.add('active');
        this.setAttribute('aria-current', 'page');

        // Haptic feedback simulation (if supported)
        if (navigator.vibrate) {
            navigator.vibrate(10);
        }
    });
});

// Keyboard navigation for system cards
const systemCards = document.querySelectorAll('.system-card');
systemCards.forEach(card => {
    card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

// Prevent zoom on double tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    setLang('ar');
});
