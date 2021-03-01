//Navbar scroll change

      window.addEventListener('scroll', scrollNav);

      function scrollNav() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar-bottom").style.top = "0";
          } else {
            document.getElementById("navbar-bottom").style.top = "-300px";
            
          }
      }


/*
    const header = document.querySelector("header");
    const sectionOne =  document.querySelector(".home");

    const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
      entries.forEach(entry => {
        if(!entry.isIntersecting) {
          header.classList.add("navbar-scrolled");
        }
        else {
          header.classList.remove("navbar-scrolled");
        }
      });
    },sectionOneOptions);

    sectionOneObserver.observe(sectionOne);
*/


//Burger animation
const menuBtn = document.querySelector('.menu-btn');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

//Burger Content

const btn = document.querySelector('#btn');
const myDropdown = document.querySelector('#myDropdown');

btn.addEventListener('click', () => {
  myDropdown.classList.toggle("show")
})
  
