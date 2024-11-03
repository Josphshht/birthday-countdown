let countdownValue = 10; // Starting countdown value
const countdownElement = document.getElementById('countdown');
const messageElement = document.getElementById('message');
const fireworkSound = document.getElementById('fireworkSound');

// Countdown function
const countdown = setInterval(() => {
    if (countdownValue > 0) {
        countdownElement.textContent = countdownValue;
        countdownValue--;
    } else {
        clearInterval(countdown);
        countdownElement.style.display = 'none';
        messageElement.classList.remove('hidden');
        messageElement.style.display = 'block';

        // Play firework sound and create falling fireworks
        fireworkSound.play();
        createFireworks();
    }
}, 1000);

// Fireworks function
function createFireworks() {
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        document.body.appendChild(firework);

        const x = Math.random() * window.innerWidth;

        firework.style.left = `${x}px`;
        firework.style.top = `0px`; // Start from the top

        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        // Remove the firework after animation ends
        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
}
