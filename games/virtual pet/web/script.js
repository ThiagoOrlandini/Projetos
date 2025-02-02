// script.js

const tamagotchi = {
    hunger: 100,
    happiness: 100,
    energy: 100,
    isAlive: true,
    message: ""
};

const hungerElement = document.getElementById('hunger');
const happinessElement = document.getElementById('happiness');
const energyElement = document.getElementById('energy');
const messageElement = document.getElementById('message');

function updateStatus() {
    hungerElement.textContent = tamagotchi.hunger;
    happinessElement.textContent = tamagotchi.happiness;
    energyElement.textContent = tamagotchi.energy;
    messageElement.textContent = tamagotchi.message;

    if (tamagotchi.hunger <= 0 || tamagotchi.happiness <= 0 || tamagotchi.energy <= 0) {
        tamagotchi.isAlive = false;
        messageElement.textContent = "Seu bichinho morreu :(";
        disableButtons();
    }
}

function disableButtons() {
    document.getElementById('feed').disabled = true;
    document.getElementById('play').disabled = true;
    document.getElementById('sleep').disabled = true;
}

function feed() {
    if (tamagotchi.isAlive) {
        tamagotchi.hunger = Math.min(tamagotchi.hunger + 10, 100);
        tamagotchi.energy = Math.max(tamagotchi.energy - 5, 0);
        tamagotchi.message = "Nom nom nom!";
        updateStatus();
    }
}

function play() {
    if (tamagotchi.isAlive) {
        tamagotchi.happiness = Math.min(tamagotchi.happiness + 10, 100);
        tamagotchi.energy = Math.max(tamagotchi.energy - 10, 0);
        tamagotchi.hunger = Math.max(tamagotchi.hunger - 5, 0);
        tamagotchi.message = "Isso foi divertido!";
        updateStatus();
    }
}

function sleep() {
    if (tamagotchi.isAlive) {
        tamagotchi.energy = Math.min(tamagotchi.energy + 20, 100);
        tamagotchi.hunger = Math.max(tamagotchi.hunger - 10, 0);
        tamagotchi.happiness = Math.max(tamagotchi.happiness - 5, 0);
        tamagotchi.message = "Zzzzz...";
        updateStatus();
    }
}

document.getElementById('feed').addEventListener('click', feed);
document.getElementById('play').addEventListener('click', play);
document.getElementById('sleep').addEventListener('click', sleep);

// Atualiza o status a cada segundo
setInterval(() => {
    if (tamagotchi.isAlive) {
        tamagotchi.hunger = Math.max(tamagotchi.hunger - 1, 0);
        tamagotchi.happiness = Math.max(tamagotchi.happiness - 1, 0);
        tamagotchi.energy = Math.max(tamagotchi.energy - 1, 0);
        updateStatus();
    }
}, 1000);
