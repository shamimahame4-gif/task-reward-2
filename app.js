const tg = window.Telegram.WebApp;

// Telegram Mini App initialize
tg.ready();
tg.expand();


// Telegram user information
const user = tg.initDataUnsafe?.user;

if (user) {

    const name =
        user.first_name ||
        "User";

    document.getElementById("welcome").textContent =
        `Welcome, ${name} 👋`;

    const avatar =
        document.getElementById("avatar");

    avatar.textContent =
        (user.first_name || "U")
        .charAt(0)
        .toUpperCase();
}


// Temporary balance
let balance = 0;


// Demo functions
function watchAd() {
    alert("Rewarded Ad integration will be added here.");
}

function dailyTask() {
    alert("Daily Task coming soon.");
}

function openRewards() {
    alert("Rewards page coming soon.");
}

function openReferral() {
    alert("Referral system coming soon.");
}

function openWithdraw() {
    alert("Withdraw system coming soon.");
}

function openProfile() {
    alert("Profile page coming soon.");
}
