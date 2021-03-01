/*
const burn = document.querySelector('#burn');

burn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});
*/


/*Background-Color change */

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const burn = document.querySelector('#burn');

  burn.addEventListener('click', function () {
     document.body.style.backgroundColor = makeRandomColor();
     document.body.style.color = makeRandomColor();
  });


//Nav-links change color to scroll
const btn = document.getElementById("btn")
const nav = document.getElementById("nav")


btn.addEventListener("click",() => {
   nav.classList.toggle("active");
   btn.classList.toggle("active");
});
