let element = document.querySelectorAll('element');
elements.forEach(button => {
    element.addEventListener('click', function () {
        elements.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');        
    });
});