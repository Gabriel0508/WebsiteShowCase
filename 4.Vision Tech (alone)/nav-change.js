window.document.addEventListener("scroll", function() {

    const navElement = document.querySelector("nav");
    
        if (scrollY > 500) {
            navElement.classList.add("navbarScrollEffect");
        } else {
            navElement.classList.remove("navbarScrollEffect");
        }
        });