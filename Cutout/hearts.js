function rnd(m, n) {
    return Math.floor(Math.random() * (n - m + 1)) + m;
}

function initHearts() {
    const wrappers = document.querySelectorAll('.hearts-target');

    wrappers.forEach(wrapper => {
        // Clear existing hearts
        wrapper.innerHTML = '';

        // Density: roughly 1 heart per 20 pixels of width
        const heartcount = Math.round(wrapper.offsetWidth / 20);

        for (let i = 0; i <= heartcount; i++) {
            const size = (rnd(6, 12));
            const left = rnd(0, 100);
            const delay = (rnd(0, 50) / 10); // Random delay up to 5s
            const duration = (rnd(20, 40) / 10); // Random speed

            const span = document.createElement('span');
            span.className = 'particle';
            
            span.style.left = left + '%';
            span.style.width = size + 'px';
            span.style.height = size + 'px';
            span.style.animationDelay = delay + 's';
            span.style.animationDuration = duration + 's';
            
            const xOffset = rnd(-40, 40);
            span.style.setProperty('--x', `${xOffset}px`);

            wrapper.appendChild(span);
        }
    });
}

document.addEventListener('DOMContentLoaded', initHearts);

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initHearts, 200);
});