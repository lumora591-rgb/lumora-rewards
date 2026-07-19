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

let balance = 0;

function showBalance() {
    alert("Your Balance is ₦" + balance);
}

function earnMoney() {
    balance += 500;
    alert("Congratulations! You earned ₦500.");
}

function claimDailyReward() {

    balance += 100;

    alert("🎉 Daily Reward Claimed!\nYou received ₦100.");

}
