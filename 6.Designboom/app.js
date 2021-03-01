
/*Navbar-intersector*/
/*
const nav = document.querySelector(".navbar");
const sectionOne =  document.querySelector(".section1");


const sectionOneOptions = {
rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries,
    sectionOneObserver
    ) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      navElement.classList.add(".navbar-scrolled");
    }
    else {
      navElement.classList.remove(".navbar-scrolled");
    }
  });
},sectionOneOptions);

sectionOneObserver.observe(sectionOne);
*/

window.document.addEventListener("scroll", function () {

    const navElement = document.querySelector(".navbar");
    
        if (scrollY > 800) {
            navElement.classList.add("navbar-scrolled");
        } else {
            navElement.classList.remove("navbar-scrolled");
        }
        });



//Burger menu
const menu = document.querySelector('.menu');
const navbarScrolled = document.querySelector('.navbar-scrolled')
const dropdown = document.querySelector('.dropdown');
const navLinks = document.querySelectorAll('.nav-links');
const dropdown2 = document.querySelector('.dropdown-2')



menu.addEventListener('click', () => {
    dropdown.style.display = 'block';
    navLinks.style.display = 'flex';
    dropdown2.style.display = 'block';
    menu.innerHTML = 'X'
});
