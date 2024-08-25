let btn1 = document.querySelector("#btn11");
let btn2 = document.querySelector("#btn2");

let login = document.querySelector("#login");
let register = document.querySelector("#Register");

btn1.addEventListener("click", () => {
    register.style.display = "none";
    login.style.display = "";
    btn2.style.opacity = "0.5";
    btn1.style.opacity = "";
});

btn2.addEventListener("click", () => {
    register.style.display = "";
    login.style.display = "none";
    btn1.style.opacity = "0.5";
    btn2.style.opacity = "";
    register.style.display = ""
});


