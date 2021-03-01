//Dropdown menu 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

const dropdown1 = document.querySelector('.dropdown1')
const link1 = document.querySelector('.drop-link1')
const myDropdown1 = document.querySelector('#myDropdown1')

const dropdown2 = document.querySelector('.dropdown2')
const link2 = document.querySelector('.drop-link2')
const myDropdown2 = document.querySelector('#myDropdown2')


//link1
link1.addEventListener('click', () => {
    myDropdown1.classList.toggle("show");
})

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.drop-link1')) {
      let dropdowns = document.getElementsByClassName("dropdown-content1");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
          openDropdown.classList.remove('show1');
        }
      }
    }
  }

//link2
link2.addEventListener('click', () => {
    myDropdown2.classList.toggle("show");
})

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.drop-link2')) {
      let dropdowns = document.getElementsByClassName("dropdown-content2");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

  //Menu-btn
  const openMenu = document.querySelector('.openMenu');
  const closeMenu = document.querySelector('.closeMenu');

  const navLinks = document.querySelector('.nav-links');

  openMenu.addEventListener('click',show);
  closeMenu.addEventListener('click',close);

  function show(){
    navLinks.style.display = 'flex';
    navLinks.style.top = '0';

  }
  function close(){
    navLinks.style.top = '-100%';

  }