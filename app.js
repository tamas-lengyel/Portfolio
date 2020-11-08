const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.left-side');
    const navLinks = document.querySelectorAll('.left-side div');
    
    burger.addEventListener('click',()=>{
        //toggle nav
        nav.classList.toggle('nav-link-wrapper-active');

        //animate links
        navLinks.forEach((link,index) =>{
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        })

        //burger animation
        burger.classList.toggle('toggle');
    });
    
    
}

const hoverObjects = ()=>{
    const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
        portfolioItems.forEach(portfolioItem => {
            portfolioItem.addEventListener('mouseover', () => {
                portfolioItem.childNodes[1].classList.add('img-darken');
            });

            portfolioItem.addEventListener('mouseout', () => {
                portfolioItem.childNodes[1].classList.remove('img-darken');
            });
        });
}

const app = ()=>{
    navSlide();
    hoverObjects();
}

app();
