const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});

let websiteName = "Lumora Rewards";

let owner = "Odekunle Emmanuel";

let users = 0;

let balance = 0;

console.log(websiteName);
console.log(owner);
console.log(users);
console.log(balance);

function welcomeUser() {
    alert("Welcome to Lumora Rewards!");
}
