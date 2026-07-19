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
function earnMoney(){

balance += 500;

localStorage.setItem("balance", balance);

updateBalance();

alert("Congratulations! You earned ₦500.");

}

updateBalance();

document.getElementById("username").innerHTML =
localStorage.getItem("username") || "Guest";

/* Dashboard */

.dashboard{
padding:120px 8% 60px;
}

.dashboard h1{
text-align:center;
margin-bottom:40px;
color:#FFD700;
}

.dashboard-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.dashboard-card{
background:#1d1d1d;
padding:30px;
border-radius:20px;
border:1px solid rgba(255,215,0,.2);
text-align:center;
transition:.3s;
}

.dashboard-card:hover{
transform:translateY(-8px);
box-shadow:0 0 20px rgba(255,215,0,.2);
}

.dashboard-card h3{
color:#FFD700;
margin-bottom:15px;
}

.dashboard-card h2{
margin-bottom:20px;
}

.dashboard-card button{
padding:12px 25px;
background:#FFD700;
color:#111;
border:none;
border-radius:10px;
cursor:pointer;
font-weight:bold;
}
