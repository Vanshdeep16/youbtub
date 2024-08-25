let btn1 = document.querySelector("#btn11");
let btn2 = document.querySelector("#btn2");

let wel = document.querySelector("#wel");
let h6 = document.querySelector("h6");
let button3 = document.querySelector(".button3");
let label = document.querySelector("label");
let pass = document.querySelector("#pass");

btn2.addEventListener("click",()=>
{
    wel.innerText = "Hello";
    h6.innerText = "Create an Account";
    button3.innerText = "Register with UAE PASS";
    label.style.display = "none";
    btn2.style.opacity = "";
    btn1.style.opacity = "0.5";
    let a = document.createElement("input");

})

btn1.addEventListener("click",() =>
{
    wel.innerText = "Welcome back";
    h6.innerText = "login to Continue";
    button3.innerText = "Login With UAE PASS";
    label.style.display = "";
    btn1.style.opacity = "";
    btn2.style.opacity = "0.5";
})