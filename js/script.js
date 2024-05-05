const liElements = document.querySelectorAll('li');
liElements.forEach(li => {
    li.addEventListener('click', function(e) {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    });
});