// Define the target date (November 3rd)
const targetDate = new Date();
targetDate.setMonth(10); // November (month index 10 because months are zero-based)
targetDate.setDate(3);   // 3rd day
targetDate.setHours(0, 0, 0, 0); // Midnight (start of the day)

// Get today's date
const today = new Date();
today.setHours(0, 0, 0, 0); // Midnight for comparison

// Elements for displaying countdown and messages
const countdownElement = document.getElementById('countdown');
const messageElement = document.getElementById('message');

if (today.getTime() === targetDate.getTime()) {
    // If today is November 3rd, start the countdown
    let countdownValue = 10; // Starting countdown value

    const countdown = setInterval(() => {
        if (countdownValue > 0) {
            countdownElement.textContent = countdownValue;
            countdownValue--;
        } else {
            clearInterval(countdown);
            countdownElement.style.display = 'none';
            messageElement.classList.remove('hidden');
            messageElement.style.display = 'block';
            createFireworks();
        }
    }, 1000);
} else if (today < targetDate) {
    // If today is before November 3rd, show "It's Today!!!"
    countdownElement.textContent = "It's Today!!!";
} else {
    // If today is after November 3rd, show "It's not today"
    countdownElement.textContent = "It's not today";
}

// Fireworks function
function createFireworks() {
    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        document.body.appendChild(firework);
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        // Remove the firework after animation ends
        firework.addEventListener('animationend', () => {
            firework.remove();
        });
    }
}
