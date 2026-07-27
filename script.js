document.addEventListener("DOMContentLoaded", function() {
    const startDate = new Date('2023-07-28');
    function updateCountdown() {
        const now = new Date();
        const diff = now - startDate;
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        document.getElementById('countdown').innerText =
            `${years} Years ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
});

function showSurprise() {
    document.getElementById('surprise-
message').style.display
document.getElementById('surprise-message').style.display = 'block';
}