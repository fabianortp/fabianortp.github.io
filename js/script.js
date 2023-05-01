let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navlinks");

hamburger.onclick = () => {
    navbar.classList.toggle("open");
}

hamburger.addEventListener ("click", () => {
    hamburger.classList.toggle("active");
})


document.querySelectorAll(".nav-lnk").forEach(n => n.
addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navbar.classList.remove("open");
}))




document.onclick = function(e){
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)){
        navbar.classList.remove("open");
        hamburger.classList.remove("active");
    }
}

