/*==================== Toggle Icon Navbar ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar   = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== Scroll Sections Active Link ==================== */
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top         =   window.scrollY;
        let offset      =   sec.offsetTop - 150;
        let height      =   sec.offsetHeight;
        let id          =   sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== Sticky Navbar ==================== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /*==================== Remove Toggle Icon & Navbar When Click Navbar Link(Scroll) ==================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== Scroll Reveal ==================== */
ScrollReveal({
    reset: true, 
    distance:'80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.beranda-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.beranda-img, .org-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.beranda-content h1, .ttg-img', { origin: 'left' });
ScrollReveal().reveal('.beranda-content p, .tentang-content', { origin: 'right' }); 

 /*==================== Typed Js ==================== */
const typed = new Typed('.multiple-text',{
    strings: ['Universitas', 'Buaya Grup'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n){
    showSlide(slideIndex += n);
}

function dotslide(n){
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("imgslide");
    var dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}