document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('open-invitation');
    const overlay = document.querySelector('.opening-overlay');
    const mainContent = document.getElementById('main-content');
    const bottomNav = document.getElementById('bottom-nav');
    const audio = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    const body = document.body;

    // Menonaktifkan scroll saat overlay terbuka
    body.classList.add('no-scroll');

    // Mengisi nama tamu dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to') || 'Tamu Undangan';
    document.querySelector('.guest-name').textContent = guestName;
    document.querySelector('.hero h4').textContent = `Kepada Bapak/Ibu/Saudara/i, ${guestName}`;

    // Tombol Buka Undangan
    openButton.addEventListener('click', function() {
        overlay.classList.add('hidden');
        mainContent.style.display = 'block';
        bottomNav.style.display = 'flex';
        body.classList.remove('no-scroll');
        
        // Memulai musik
        audio.play().catch(error => {
            console.log("Autoplay was prevented. User needs to interact with the page first.");
        });
        
        musicToggle.classList.remove('paused');
    });

    // Tombol Kontrol Musik
    musicToggle.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            musicToggle.classList.remove('paused');
        } else {
            audio.pause();
            musicToggle.classList.add('paused');
        }
    });
});
