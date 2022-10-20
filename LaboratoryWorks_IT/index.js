var lab1 = {
    name: "Лабораторная работа №1",
    name2: "Знакомство с основными инструментами и нотациями",
    link: "https://github.com/GhostLightnin/NETTech",
    code: "https://github.com/GhostLightnin/NETTech",
    about: "GITHUB - информационная система коллективной разработки программных средств. В рамках данной лабораторной работы необходимо зарегистрироваться на github.com, создать личный репозиторий, создать личную веб-страницу с описанием выполнения лабораторных работ, разместить код веб-страницы в репозитории, а также разместить ее на хостинге."
};

var lab2 = {
    name: "Лабораторная работа №2",
    name2: "IT Проект",
    link: "https://github.com/GhostLightnin/WebDBProject",
    code: "https://github.com/GhostLightnin/WebDBProject",
    about: "В рамках данной лабораторной работы необходимо в команде разработать проект и создать Landing page с описанием самого проекта."
};
 

var Index = 1;
showSlides(Index);
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slides");
    var buttons = document.getElementsByClassName("buttons");
    var person = document.getElementsByClassName("person");
    var code = document.getElementById("code");
    var web = document.getElementById("web");
    
    if (n > slides.length) {
        Index = 1
    }
    if (n < 1) {
        Index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "");
    }
    slides[Index - 1].style.display = "block";
    buttons[Index - 1].className += " active";
    
    switch(Index){
        case 1:
            for(i = 0; i < person.length; i++){
                person[0].textContent = lab1.name;
                person[1].textContent = lab1.name2;
                code.href = lab1.code;
                code.innerText = lab1.code;
                person[2].textContent = "Репозиторий";
                web.href = lab1.link;
                web.innerText = lab1.link;
                person[3].textContent = lab1.about;
            }
            break;
        case 2:
            for(i = 0; i < person.length; i++){
                person[0].textContent = lab2.name;
                person[1].textContent = lab2.name2;
                code.href = lab2.code;
                code.innerText = lab2.code;
                person[2].textContent = "Landing page";
                web.href = lab2.link;
                web.innerText = lab2.link;
                person[3].textContent = lab2.about;
            }
            break;
    }
}

function go(n) {
    showSlides(Index += n);
}

function show(n) {
    showSlides(Index = n);
}