// script.js
'use strict';

// DOM Elements
const heartIcons = document.getElementsByClassName("fa-heart");
const heartCount = document.getElementById("heartCount");   // ❤️ counter
const coinCount = document.getElementById("coinCount");     // 💰 counter
const copyCount = document.getElementById("copyCount");     // 📋 counter
const callHistoryContainer = document.getElementById("callHistory"); // 📞 history box
const clearBtn = document.getElementById("clearHistory");   // 🗑️ clear button

// Convert text to number safely
function getInt(el) {
    return parseInt(el.innerText) || 0;
}

// ❤️ Increase Heart Count
for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function () {
        heartCount.innerText = getInt(heartCount) + 1;
    });
}

// Get all call buttons
const callButtons = document.getElementsByClassName("callBtn");

// Loop through all call buttons
for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function () {
        // Find the card (parent div of button)
        const card = this.closest(".card");

        // Service details
        const serviceName = card.querySelector(".service-name").innerText;
        const serviceNumber = card.querySelector(".service-number").innerText;

        // Current coins
        let coins = parseInt(coinCount.innerText) || 0;

        // Check if enough coins
        if (coins < 20) {
            alert("Not enough coins to make a call! (20 coins required)");
            return;
        }

        // Deduct coins
        coins -= 20;
        coinCount.innerText = coins;

        // Show alert
        alert(`Calling ${serviceName} at ${serviceNumber}`);

        // Add to Call History
        const historyItem = document.createElement("div");
        historyItem.className = "history-item";
        historyItem.innerText = `${serviceName} - ${serviceNumber}`;
        callHistoryContainer.appendChild(historyItem);
    });
}



// Get all copy buttons
const copyButtons = document.getElementsByClassName("copyBtn");

// Loop through all copy buttons
for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
        // Find the card (button’s parent)
        const card = this.closest(".card");

        // Get hotline number inside the card
        const hotlineNumber = card.querySelector(".service-number").innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(hotlineNumber)
            .then(() => {
                // Increase counter
                let count = parseInt(copyCount.innerText) || 0;
                copyCount.innerText = count + 1;

                // Show alert
                alert(`Hotline number ${hotlineNumber} copied to clipboard!`);
            })
            .catch(err => {
                alert("Failed to copy: " + err);
            });
    });
}

