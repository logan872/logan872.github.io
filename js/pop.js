document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.classList.remove('active');
        });
        this.classList.add('active');
    });
});