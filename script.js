document.addEventListener('mousemove', function(e) {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(function(eye) {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientX - eyeX, e.clientY - eyeY);
        const distance = Math.min(rect.width / 4, Math.sqrt((e.clientX - eyeX) ** 2 + (e.clientY - eyeY) ** 2));
        eye.querySelector('::before').style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
});
