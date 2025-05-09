document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('opmode-buy');
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            document.getElementById('discord-section').scrollIntoView({behavior: 'smooth'});
        });
    }
});