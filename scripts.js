document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    document.querySelectorAll('.portfolio-item img').forEach(img => {
        img.style.transform = `rotateY(${(x - 0.5) * 30}deg) rotateX(${(y - 0.5) * 30}deg)`;
    });

    document.querySelectorAll('h2').forEach(title => {
        title.style.textShadow = `${(x - 0.5) * 20}px ${(y - 0.5) * 20}px 10px rgba(0, 255, 255, 0.7)`;
    });
});
