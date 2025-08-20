document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('open-invitation');
    const overlay = document.querySelector('.opening-overlay');
    const mainContent = document.getElementById('main-content');
    const bottomNav = document.getElementById('bottom-nav');
    const audio = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    const body = document.body;
    const countdownElement = document.querySelector('.simply-countdown');

    // Menonaktifkan scroll
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
        
        AOS.refresh(); // Refresh AOS untuk memulai animasi

        audio.play().catch(error => {
            console.log("Autoplay dicegah oleh browser.");
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

    // Countdown Timer
    const targetDate = new Date('2025-10-25T08:00:00'); 
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            countdownElement.innerHTML = "<h4>Acara Telah Berlangsung</h4>";
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div><span>${d}</span>Hari</div>
            <div><span>${h}</span>Jam</div>
            <div><span>${m}</span>Menit</div>
            <div><span>${s}</span>Detik</div>
        `;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
});            audio.play();
            musicToggle.classList.remove('paused');
        } else {
            audio.pause();
            musicToggle.classList.add('paused');
        }
    });
});
