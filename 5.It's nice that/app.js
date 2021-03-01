
 /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

  const btn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content')
  
  btn.addEventListener('click', () => {
   if(dropdownContent.style.display === 'none') {
     dropdownContent.style.display = 'block';
     btn.innerHTML ="X"
   } else{
     dropdownContent.style.display = 'none';
     btn.innerHTML ="Categories"
   }
  })

  // Close the dropdown menu if the user clicks outside of it

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

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

//Burger content
const btn2 = document.querySelector('#menuBtn');
const dropContent = document.querySelector('#dropContent');
 
btn2.addEventListener('click', () => {
   dropContent.classList.toggle('show');
});
