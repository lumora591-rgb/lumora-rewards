// ===============================
// Lumora Rewards Script - Part 1
// ===============================

// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Get current user
const currentUser = {
    fullname: localStorage.getItem("userName") || "Guest",
    email: localStorage.getItem("userEmail") || "",
    balance: Number(localStorage.getItem("userBalance")) || 0,
    referrals: Number(localStorage.getItem("userReferrals")) || 0
};

// Update Dashboard
function updateDashboard() {

    const username = document.getElementById("username");
    const balance = document.getElementById("balance");
    const referrals = document.getElementById("referrals");

    if (username) {
        username.textContent = currentUser.fullname;
    }

    if (balance) {
        balance.textContent = "₦" + currentUser.balance;
    }

    if (referrals) {
        referrals.textContent = currentUser.referrals;
    }
}

updateDashboard();

// Logout
function logout() {

    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userBalance");
    localStorage.removeItem("userReferrals");

    window.location.href = "login.html";

}

// ===============================
// Lumora Rewards Script - Part 2
// Signup & Login
// ===============================

// Signup
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const fullname = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {

            const response = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    password
                })
            });

            const data = await response.json();

            alert(data.message);

            if (response.ok) {
                window.location.href = "login.html";
            }

        } catch (err) {
            alert("Unable to connect to the server.");
        }

    });

}

// Login
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        try {

            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            localStorage.setItem("userName", data.fullname);
            localStorage.setItem("userEmail", data.email);
            localStorage.setItem("userBalance", data.balance);
            localStorage.setItem("userReferrals", data.referrals);

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        } catch (err) {
            alert("Unable to connect to the server.");
        }

    });

    }// ===============================
// Lumora Rewards Script - Part 3
// Dashboard Functions
// ===============================

// Claim Daily Reward
async function claimDailyReward() {

    if (!currentUser.email) {
        alert("Please login first.");
        return;
    }

    try {

        const response = await fetch("/daily-reward", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: currentUser.email
            })
        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            currentUser.balance = data.balance;

            localStorage.setItem("userBalance", data.balance);

            updateDashboard();

        }

    } catch (err) {

        alert("Unable to connect to the server.");

    }

}

// Withdraw
const withdrawForm = document.getElementById("withdrawForm");

if (withdrawForm) {

    withdrawForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const amount = Number(document.getElementById("amount").value);

        try {

            const response = await fetch("/withdraw", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: currentUser.email,
                    amount
                })
            });

            const data = await response.json();

            alert(data.message);

            if (response.ok) {

                currentUser.balance = data.balance;

                localStorage.setItem("userBalance", data.balance);

                updateDashboard();

            }

        } catch (err) {

            alert("Unable to connect to the server.");

        }

    });

}

// Referral Bonus
async function addReferralBonus() {

    try {

        const response = await fetch("/referral", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: currentUser.email
            })
        });

        const data = await response.json();

        if (response.ok) {

            currentUser.balance = data.balance;
            currentUser.referrals = data.referrals;

            localStorage.setItem("userBalance", data.balance);
            localStorage.setItem("userReferrals", data.referrals);

            updateDashboard();

        }

    } catch (err) {

        console.log(err);

    }

    }
