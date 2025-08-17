// Send button functionality
let sendBtns = document.querySelectorAll(".sendbtn");

sendBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Error while sending, Please DM on X");
    });
});

// Animation on view functionality
function animateOnView(selector, animationClass) {
    const elements = document.querySelectorAll(selector);

    function checkInView() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (
                rect.top < window.innerHeight - 100 && // 100px before fully in view
                rect.bottom > 0
            ) {
                el.classList.add(animationClass);
            }
        });
    }

    window.addEventListener('scroll', checkInView);
    window.addEventListener('resize', checkInView);
    checkInView();
}

// Example usage for your main animated elements:
animateOnView('.homeImage', 'animate-in-right');
animateOnView('.media', 'animate-in-left');
animateOnView('.homeText', 'animate-in-center');
animateOnView('.rightbox', 'animate-in-right');
animateOnView('.leftbox', 'animate-in-left');
animateOnView('.card', 'animate-in-left');
animateOnView('.contact-form', 'animate-in-right');
animateOnView('dFlex2', 'animate-in-center');
animateOnView('.personal-info h3', 'animate-in-right');
animateOnView('.skills-tags h2', 'animate-in-center');
animateOnView('.skill-category h3', 'animate-in-left');
animateOnView('.tags', 'animate-in-right');
animateOnView('.project-container h1', 'animate-in-center');
animateOnView('.image', 'animate-in-right');
animateOnView('.text', 'animate-in-left');
animateOnView('.repo', 'animate-in-center');
animateOnView('.top-buttons', 'animate-in-center');
animateOnView('.footer-links ul', 'animate-in-center');
animateOnView('.footer-contact ul', 'animate-in-center');
animateOnView('.footer-logo p', 'animate-in-left');
animateOnView('.footer-newsletter', 'animate-in-right');

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
            const yOffset = -60; // Adjust based on your header height
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    });
});

// Active navigation item highlighting
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".navList a");

window.addEventListener("scroll", () => {
    let currentId = "";

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = section.offsetHeight;

        // When scrollY is near 0, set home as current
        if (window.scrollY < 100) {
            currentId = "home";
        }

        // For other sections
        else if (sectionTop <= 150 && sectionTop + sectionHeight > 150) {
            currentId = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
        }
    });
});

// Trigger on page load
window.dispatchEvent(new Event('scroll'));

// Handle scroll animations
const handleScrollAnimations = function () {
    const elements = document.querySelectorAll('.animate-in-right, .animate-in-left, .animate-in-center');

    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.style.opacity = '1';
        }
    });
};

// Initial check
handleScrollAnimations();

// Check on scroll
window.addEventListener('scroll', handleScrollAnimations);

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}



let ham = document.querySelector(".toggle")
let navItem = document.querySelector(".navItem")

if (ham && navItem) {
    const hamImg = ham.querySelector("img");
    let isOpen = false;

    ham.addEventListener("click", () => {

 navItem.style.right = isOpen ? "-100%" : "0%";


           isOpen = !isOpen;
           if(hamImg){
            hamImg.src =isOpen? "./svg/cross.svg":"./svg/hamburger.svg";
           }
    })
}

const typingTarget = document.querySelector('.p1 .write');
if (typingTarget) {
    const textToType = 'Front End Developer';
    let i = 0;
    function typeWriter() {
        typingTarget.innerHTML = textToType.slice(0, i) + '<span class="typing-cursor">|</span>';
        if (i < textToType.length) {
            i++;
            setTimeout(typeWriter, 90);
        } else {
            setTimeout(() => {
                typingTarget.innerHTML = textToType;
            }, 600);
        }
    }
    typeWriter();
}