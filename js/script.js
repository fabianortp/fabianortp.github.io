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

    
$(function() {
    $(".en").click(function() {
        //Navbar
        $(".navlinks li:nth-child(1) a").text("Home");
        $(".navlinks li:nth-child(2) a").text("About");
        $(".navlinks li:nth-child(3) a").text("Portfolio");
        $(".navlinks li:nth-child(4) a").text("Contact");
        $(".navlinks li:nth-child(5) a").text("Portuguese");
        $(".navlinks li:nth-child(6) a").text("English");
        //$(".navlinks").removeClass("br");
        //$(".navlinks").addClass("en");
        //Content
        $(".content h4").text("Hello, my name is");
        $(".content h1").text("Fabiano Pereira");
        $(".content h3").text("I'm a Developer. It's nice to Meet You");
        //$(".content").removeClass("br");
        //$(".content").addClass("en");
        //About
        $(".about .text h2").text("About Me");
        $(".about .text h2").css('color', 'rgb(203, 30, 3)');
        $("#aboutp1").text("I am an tech student wich aim to achieve the first job opportunity. In my projects i'm try to developer my web skils and at the same time make useful web applications");
        $("#aboutp2").text("To build this web portfolio i'm used jQuery, JavaScript, HTML, CSS and best practices like responsive design.  Check out the complete code at my Github account:");
        $("#aboutp3").text("If you have suggestions to improve my projects send my a message or a pull request, i will glad to receive.");
        //$(".about").removeClass("br");
        //$(".about").addClass("en");
        //Portfolio
        $(".portfolio h2").text("Portfolio");
        $(".portfolio .right .text h2").text("EneMaps");
        $("#portp1").text("RoadMap to help brazilian students to achieve a better score in the Brazilian High School National Exam(ENEM) to ingress in university;");
        $("#portp2").text("Tech stack used in this project: HTML, SCSS, JavaScript Vanilla;");
        $("#portp3").text("Check at this link:");
        //$(".portfolio").removeClass("br");
        //$(".portfolio").addClass("en");
        //Contact
        $(".contact h2").text("Contact");
        $(".contact .text p:nth-child(1)").text("I'd like to keep in touch");
        $(".contact .text p:nth-child(2)").text("Contact me at: ");
        $(".contact .text p:nth-child(4)").text("Location: Salvador, Bahia, Brazil");
        //$(".contact").removeClass("br");
        //$(".contact").addClass("en");
        //Footer
        $("#footp1").text("Checkout another social medias");
        $("#end").text("CopyRight By Fabiano Pereira");
        //$(".footer").removeClass("br");
        //$(".footer").addClass("en");
    });
});

$(function() {
    $(".br").click(function() {
        $(".navlinks li:nth-child(1) a").text("Home");
        $(".navlinks li:nth-child(2) a").text("Sobre");
        $(".navlinks li:nth-child(3) a").text("Portifólio");
        $(".navlinks li:nth-child(4) a").text("Contato");
        $(".navlinks li:nth-child(5) a").text("Português");
        $(".navlinks li:nth-child(6) a").text("Inglês");
        $(".navlinks").removeClass("en");
        $(".navlinks").addClass("br");
        //Content
        $(".content h4").text("Olá, meu nome é");
        $(".content h1").text("Fabiano Pereira");
        $(".content h3").text("Eu sou desenvolvedor. Prazer em conhecer você");
        $(".content").removeClass("en");
        $(".content").addClass("br");
        //About
        $(".about .text h2").text("Sobre mim");
        $("#aboutp1").text("Sou estudante de desenvolvimento de sistemas e procuro por oportunidades na área de tecnologia. Nos meus projetos busco sempre desenvolver aplicações úteis para o usuário e ao mesmo tempo aprimoro minhas habilidades em web development;");
        $("#aboutp2").text("No desenvolvimento desse portifólio usei tecnologias como jQuery, JavaScript, HTML, CSS boas práticas de design responsivo e também o sistema de controle de versão de código GIT. Confira o código completo no seguinte link:");
        $("#aboutp3").text("Caso tenha sugestões de melhoria me envie uma mensagem.");
        $(".about").removeClass("en");
        $(".about").addClass("br");
        //Portfolio
        $(".portfolio h2").text("Portífolio");
        $(".portfolio .right .text h2").text("EneMaps");
        $("#portp1").text("RoadMap para auxiliar estudantes que estão na preparação para o Enem;");
        $("#portp2").text("Tecnologias usadas nesse projeto: HTML, SCSS, JavaScript Vanilla;");
        $("#portp3").text("Confira no seguinte link: ");
        $(".portfolio").removeClass("en");
        $(".portfolio").addClass("br");
        //Contact
        $(".contact h2").text("Contato");
        $(".contact .text p:nth-child(1)").text("Gostaria de entrar em contato?");
        $(".contact .text p:nth-child(2)").text("Me envie um email:");
        $(".contact .text p:nth-child(4)").text("Localização: Salvador, Bahia, Brazil");
        $(".contact").removeClass("en");
        $(".contact").addClass("br");
        //Footer
        $("#footp1").text("Confira outras mídias sociais");
        $("#end").text("CopyRight By Fabiano Pereira");
        $(".footer").removeClass("en");
        $(".footer").addClass("br");
    });
});

    