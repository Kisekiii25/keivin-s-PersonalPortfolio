let navButton = document.getElementsByClassName("yo")[0]
let navLinks = document.getElementsByClassName("linksContainer")[0]

navButton.addEventListener("click", () =>{
    navLinks.classList.toggle("active");
})
