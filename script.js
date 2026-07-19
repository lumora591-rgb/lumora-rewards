const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("active");
});

let websiteName = "Lumora Rewards";

let owner = "Odekunle Emmanuel";

let users = 0;

let balance = 0;
let dailyRewardClaimed =
localStorage.getItem("dailyReward") === "true";

function claimDailyReward() {

    if (dailyRewardClaimed === false) {

        balance += 100;

        dailyRewardClaimed = true;

        alert("🎉 Daily Reward Claimed!\nYou received ₦100.");

    } else {

        alert("❌ You have already claimed today's reward.");

    }

}

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

let balance = 0;
let dailyRewardClaimed = false;

function claimDailyReward() {

    if (dailyRewardClaimed === false) {

        balance += 100;

        dailyRewardClaimed = true;

        alert("🎉 Daily Reward Claimed!\nYou received ₦100.");

    } else {

        alert("❌ You have already claimed today's reward.");

    }

}
localStorage.setItem("balance", balance);
