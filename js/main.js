// Initialize AOS
AOS.init({
    duration: 1000,
    once: false, // Set to false so animations repeat on scroll
    offset: 100,
    mirror: true // Enable mirror to trigger animation when scrolling back up
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Mask Reveal Animation
document.querySelectorAll('.img-reveal-wrap').forEach(wrap => {
    const mask = wrap.querySelector('.img-reveal-mask');
    const img = wrap.querySelector('img');
    const isLeft = wrap.classList.contains('reveal-left');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: wrap,
            start: "top 80%",
            toggleActions: "play none none reverse" // Re-animate when scrolling back up
        }
    });

    tl.to(mask, {
        width: "0%",
        x: isLeft ? "100%" : "-100%",
        duration: 1.2,
        ease: "power4.inOut"
    })
    .from(img, {
        scale: 1.3,
        duration: 1.2,
        ease: "power4.inOut"
    }, "<");
});

// About Section Images Parallax/Overlap Animation
gsap.from(".about-images div", {
    y: 150,
    x: (i) => i === 0 ? -100 : 100,
    opacity: 0,
    duration: 1.8,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".about-images",
        start: "top 85%",
    }
});

// Continuous Floating Effect
gsap.to(".overlap-1", {
    y: "-=20",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".overlap-2", {
    y: "+=25",
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Scroll-based Parallax/Overlap movement
gsap.to(".overlap-1", {
    scrollTrigger: {
        trigger: ".about-images",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
    },
    y: -80,
    x: 20,
    ease: "none"
});

gsap.to(".overlap-2", {
    scrollTrigger: {
        trigger: ".about-images",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    },
    y: -150,
    x: -40,
    ease: "none"
});

// Counter Animation
document.querySelectorAll('.count').forEach(counter => {
    const target = +counter.innerText;
    counter.innerText = '0';
    
    ScrollTrigger.create({
        trigger: counter,
        start: "top 90%",
        onEnter: () => {
            let count = 0;
            const updateCount = () => {
                const speed = target / 50;
                if (count < target) {
                    count += speed;
                    counter.innerText = Math.ceil(count) + (target > 50 ? "+" : "");
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + (target > 50 ? "+" : "");
                }
            };
            updateCount();
        }
    });
});

// Accordion Logic
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const body = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        const isOpen = item.classList.contains('active');
        
        // Close all others
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.accordion-body').style.display = 'none';
            otherItem.querySelector('i').className = 'fas fa-plus';
        });

        if (!isOpen) {
            item.classList.add('active');
            body.style.display = 'block';
            icon.className = 'fas fa-minus';
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Close menu when clicking a link (unless it's the dropdown arrow)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!e.target.classList.contains('fa-chevron-down') && !e.target.classList.contains('fa-chevron-up')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        }
    });
});

// Custom Cursor Logic
const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

if (dot && outline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        // Outline with slight delay
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Cursor Hover Effects
    document.querySelectorAll('a, .btn, .accordion-header, .search-icon').forEach(link => {
        link.addEventListener('mouseenter', () => {
            outline.classList.add('hover');
        });
        link.addEventListener('mouseleave', () => {
            outline.classList.remove('hover');
        });
    });
}

// Mobile Dropdown Logic
document.querySelectorAll('.nav-links li a i').forEach(arrow => {
    arrow.addEventListener('click', (e) => {
        if (window.innerWidth <= 991) {
            e.preventDefault(); // Prevent link navigation
            e.stopPropagation(); // Stop event from bubbling up to the <a> tag!
            const dropdown = arrow.parentElement.nextElementSibling;
            if(dropdown && dropdown.classList.contains('dropdown')) {
                dropdown.classList.toggle('show-mobile-dropdown');
                arrow.classList.toggle('fa-chevron-up');
                arrow.classList.toggle('fa-chevron-down');
            }
        }
    });
});

// Sticky Header & Logo Animation
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const logo = document.querySelector('.logo-box');
    const nav = document.querySelector('nav');
    const backToTop = document.querySelector('.back-to-top');

    if (!header || !logo || !nav) return;

    if (window.scrollY > 100) {
        header.style.boxShadow = "var(--shadow)";
        nav.style.height = "75px";
        logo.classList.add('is-compact');
        if (backToTop) backToTop.classList.add('active');
    } else {
        header.style.boxShadow = "none";
        nav.style.height = "95px";
        logo.classList.remove('is-compact');
        if (backToTop) backToTop.classList.remove('active');
    }
});

// Back to Top Click
document.querySelector('.back-to-top')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// --- Document Download Logic ---
document.addEventListener('DOMContentLoaded', () => {
    // Find download links by their text content
    const links = document.querySelectorAll('.service-sidebar a');
    
    let pdfBtn = null;
    let docBtn = null;

    links.forEach(link => {
        if (link.textContent.includes('Download PDF')) pdfBtn = link;
        if (link.textContent.includes('Download DOC')) docBtn = link;
    });

    // 1. Download PDF Logic
    if (pdfBtn) {
        pdfBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Using window.print() as standard browser PDF generation
            document.body.classList.add('print-mode');
            window.print();
            
            // Remove class after a small delay to allow print dialog to capture it
            setTimeout(() => {
                document.body.classList.remove('print-mode');
            }, 1000);
        });
    }

    // 2. Download DOC Logic
    if (docBtn) {
        docBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const contentElement = document.querySelector('.service-main-content');
            if (!contentElement) return;

            // Extract content and clean it up for Word
            const contentHTML = contentElement.innerHTML;
            const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Document</title></head><body>";
            const footer = "</body></html>";
            const sourceHTML = header + contentHTML + footer;
            
            const blob = new Blob(['\ufeff', sourceHTML], { type: 'application/msword' });
            const url = URL.createObjectURL(blob);
            
            const pageTitle = document.title.split('-')[0].trim().replace(/\s+/g, '_').toLowerCase();
            const filename = pageTitle + '_details.doc';
            
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });
    }
});
