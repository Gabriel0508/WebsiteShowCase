//Navbar change
window.document.addEventListener("scroll", function() {

    const navElement = document.querySelector("nav");
    
        if (window.pageYOffset > 50) {
            navElement.classList.add("navbarScrollEffect");
        } else {
            navElement.classList.remove("navbarScrollEffect");
        }
        });
        
/*
       const header = document.querySelector("header");
       const sectionOne =  document.querySelector(".carousel slide");
   
       const sectionOneOptions = {
       rootMargin: "-300px 0px 0px 0px"
       };
   
       const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
         entries.forEach(entry => {
           if(!entry.isIntersecting) {
             header.classList.add("navbarScrollEffect");
           }
           else {
             header.classList.remove("navbarScrollEffect");
           }
         });
       },sectionOneOptions);
   
       sectionOneObserver.observe(sectionOne);
   */

   
   //To top botton
   const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



//first

const hero =document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"},{height: "80%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width: "100%"}, {width: "80%" , ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x:"-100%"}, {x: "0%" , ease: Power2.easeInOut}, "-=")
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0 },  "-=")
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0 }, "-=1" )
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0 },  "-=")
