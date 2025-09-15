// Counter functionality
let count = 0;
const counterBtn = document.getElementById('counterBtn');
const counterDisplay = document.getElementById('counter');

counterBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;

    // Add a fun animation
    counterDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 150);
});

// Current time functionality
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('sv-SE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    document.getElementById('currentTime').textContent = timeString;
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// Add some interactive effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.background = 'rgba(255, 255, 255, 0.95)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.background = 'white';
    });
});

// Console message for developers
console.log('🚀 Webapp laddad! Byggd för Vercel deployment.');
console.log('👨‍💻 Utvecklad av xedded');

// Simple greeting based on time
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = 'God morgon!';
} else if (hour < 18) {
    greeting = 'God dag!';
} else {
    greeting = 'God kväll!';
}

// Add greeting to the page after a short delay
setTimeout(() => {
    const header = document.querySelector('header p');
    header.textContent = `${greeting} ${header.textContent}`;
}, 500);