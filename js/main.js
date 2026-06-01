// Initialize AOS animations
AOS.init({
    once: true,
    offset: 50,
});

// Inject Config Values and Dynamic Images
document.addEventListener("DOMContentLoaded", () => {
    if (typeof APP_CONFIG !== 'undefined') {
        // Update Download Links
        const downloadBtns = document.querySelectorAll('a[href="#download"]');
        downloadBtns.forEach(btn => {
            btn.href = APP_CONFIG.appDownloadLink;
            btn.target = "_blank"; // Open in new tab
            btn.rel = "noopener noreferrer";
        });

        // Update Video Links
        const videoBtns = document.querySelectorAll('a[href="#video"]');
        videoBtns.forEach(btn => {
            btn.href = APP_CONFIG.promoVideoLink;
            btn.target = "_blank";
            btn.rel = "noopener noreferrer";
        });

        // Update Contact Emails
        const contactLinks = document.querySelectorAll('a[href^="mailto:"]');
        contactLinks.forEach(link => {
            link.href = `mailto:${APP_CONFIG.developerEmail}`;
            link.textContent = APP_CONFIG.developerEmail;
        });

        // Inject Dynamic Images safely
        if (APP_CONFIG.images) {
            // --- KODE LOGO BARU MULAI DI SINI ---
            const fliqooLogo = document.getElementById('img-fliqoo-logo');
            if (fliqooLogo) fliqooLogo.src = APP_CONFIG.images.fliqooLogo;

            const himikoLogo = document.getElementById('img-himiko-logo');
            if (himikoLogo) himikoLogo.src = APP_CONFIG.images.himikoLogo;
            // --- KODE LOGO BARU SELESAI ---

            const heroMockup = document.getElementById('img-hero-mockup');
            if (heroMockup) heroMockup.src = APP_CONFIG.images.heroMockup;

            const securityAvatar = document.getElementById('img-security-avatar');
            if (securityAvatar) securityAvatar.src = APP_CONFIG.images.securityAvatar;

            if (APP_CONFIG.images.partnerLogos) {
                const partnerDrive = document.getElementById('img-partner-drive');
                if (partnerDrive) partnerDrive.src = APP_CONFIG.images.partnerLogos.googleDrive;

                const partnerFirebase = document.getElementById('img-partner-firebase');
                if (partnerFirebase) partnerFirebase.src = APP_CONFIG.images.partnerLogos.firebase;

                const partnerFrank = document.getElementById('img-partner-frank');
                if (partnerFrank) partnerFrank.src = APP_CONFIG.images.partnerLogos.frankfurter;

                const partnerGold = document.getElementById('img-partner-gold');
                if (partnerGold) partnerGold.src = APP_CONFIG.images.partnerLogos.goldApi;

                const partnerAndroid = document.getElementById('img-partner-android');
                if (partnerAndroid) partnerAndroid.src = APP_CONFIG.images.partnerLogos.android;
            }
        }
    }
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        navbar.style.padding = '12px 0';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '16px 0';
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navContainer = document.querySelector('.navbar');

mobileMenuBtn.addEventListener('click', () => {
    navContainer.classList.toggle('nav-active');
    if (navContainer.classList.contains('nav-active')) {
        mobileMenuBtn.innerHTML = '✕';
    } else {
        mobileMenuBtn.innerHTML = '☰';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Ensure it's a valid internal hash and not just '#'
        if (targetId.startsWith('#') && targetId.length > 1) {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                navContainer.classList.remove('nav-active');
                mobileMenuBtn.innerHTML = '☰';

                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
